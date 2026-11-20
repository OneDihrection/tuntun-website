"use client";

import Matter from "matter-js";
import { useReducedMotion } from "motion/react";
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { TEE_VIEWBOX, type ShapeKind } from "../Shapes";

export type PlaygroundItem = {
  id: string;
  kind: ShapeKind;
  /** Box size and centre in container pixels. For dropping playgrounds `y` may be above the top edge. */
  w: number;
  h: number;
  x: number;
  y: number;
  angle?: number;
  content: React.ReactNode;
  /** Makes the item a focusable button. A tap (under 10px of travel) or Enter selects it. */
  onSelect?: () => void;
  label?: string;
  pressed?: boolean;
  className?: string;
};

type Props = {
  /** Built from the container's measured width, so sizes stay proportional. */
  items: (width: number, height: number) => PlaygroundItem[];
  gravity?: number;
  /** How far past the container edges the walls sit, as a fraction of its width. Lets hero shapes crop off-screen. */
  bleed?: number;
  /** Side and floor walls only, so items can fall in from above. */
  openTop?: boolean;
  /** Milliseconds between pieces joining the scene, so they tumble in one after another inside the box. */
  stagger?: number;
  airFriction?: number;
  /** Reduced-motion layout: "absolute" keeps each item where it starts, "flow" lays them out in a wrapped row. */
  fallback?: "absolute" | "flow";
  className?: string;
  /** Rebuilds the bodies when this changes, e.g. on language switch. */
  layoutKey?: string;
};

type Entry = { body: Matter.Body; offset: Matter.Vector; item: PlaygroundItem; added: boolean };

const TAP_SLOP = 10;
const noopSubscribe = () => () => {};
const MAX_SPEED = 45;

/** Chamfered rectangles and circles that match each shape's silhouette closely enough to stack believably. */
function makeBody(item: PlaygroundItem): { body: Matter.Body; offset: Matter.Vector } {
  const { kind, w, h, x, y } = item;
  const common = { restitution: 0.15, friction: 0.4, frictionAir: 0, density: 0.0015 };

  if (kind === "circle") return { body: Matter.Bodies.circle(x, y, w / 2, common), offset: { x: 0, y: 0 } };

  if (kind === "tee") {
    const s = w / TEE_VIEWBOX.w;
    const sy = h / TEE_VIEWBOX.h;
    const left = x - w / 2;
    const top = y - h / 2;
    const bar = Matter.Bodies.rectangle(left + 452 * s, top + 168.5 * sy, 904 * s, 337 * sy, { chamfer: { radius: 168 * Math.min(s, sy) - 0.5 } });
    const leg = Matter.Bodies.rectangle(left + 452 * s, top + 479.5 * sy, 340 * s, 285 * sy, {
      chamfer: { radius: [0, 0, 140 * Math.min(s, sy), 140 * Math.min(s, sy)] },
    });
    const body = Matter.Body.create({ ...common, parts: [bar, leg] });
    // The compound's position is its centre of mass, not the box centre; remember the difference for rendering.
    return { body, offset: { x: body.position.x - x, y: body.position.y - y } };
  }

  const radius = kind === "squircle" ? Math.min(w, h) * 0.28 : Math.min(w, h) / 2 - 0.5;
  return { body: Matter.Bodies.rectangle(x, y, w, h, { ...common, chamfer: { radius } }), offset: { x: 0, y: 0 } };
}

export function Playground({ items, gravity = 1, bleed = 0, openTop = false, stagger = 0, airFriction = 0.01, fallback = "absolute", className = "", layoutKey }: Props) {
  // The server can't know the motion preference, so the reduced layout only takes over after hydration.
  const hydrated = useSyncExternalStore(noopSubscribe, () => true, () => false);
  const prefersReduced = useReducedMotion();
  const reduce = hydrated && prefersReduced;
  const container = useRef<HTMLDivElement>(null);
  const nodes = useRef(new Map<string, HTMLElement>());
  const engine = useRef<Matter.Engine | null>(null);
  const entries = useRef<Entry[]>([]);
  const frame = useRef(0);
  const running = useRef(false);
  const drag = useRef<{ id: string; constraint: Matter.Constraint; start: { x: number; y: number }; moved: boolean; pointer: number } | null>(null);
  const suppressClick = useRef(false);
  const [size, setSize] = useState<{ w: number; h: number } | null>(null);
  const [visible, setVisible] = useState(false);
  const itemsRef = useRef(items);
  useEffect(() => {
    itemsRef.current = items;
  });

  const list = size ? items(size.w, size.h) : [];

  const render = useCallback(() => {
    for (const { body, offset, item, added } of entries.current) {
      const node = nodes.current.get(item.id);
      if (!node) continue;
      // Pieces still waiting to join stay invisible and untouchable.
      node.style.opacity = added ? "" : "0";
      node.style.pointerEvents = added ? "" : "none";
      const c = Math.cos(body.angle);
      const s = Math.sin(body.angle);
      const cx = body.position.x - (offset.x * c - offset.y * s);
      const cy = body.position.y - (offset.x * s + offset.y * c);
      node.style.transform = `translate3d(${cx - item.w / 2}px, ${cy - item.h / 2}px, 0) rotate(${body.angle}rad)`;
    }
  }, []);

  // Display-synced loop that stops once every body sleeps, so a settled pile costs nothing.
  const wake = useCallback(() => {
    if (running.current || !engine.current) return;
    running.current = true;
    const tick = () => {
      const e = engine.current;
      if (!e) return;
      Matter.Engine.update(e, 1000 / 60);
      for (const { body, added } of entries.current) {
        if (!added) continue;
        const v = body.velocity;
        const speed = Math.hypot(v.x, v.y);
        if (speed > MAX_SPEED) Matter.Body.setVelocity(body, { x: (v.x / speed) * MAX_SPEED, y: (v.y / speed) * MAX_SPEED });
      }
      render();
      if (!drag.current && entries.current.every(({ body, added }) => added && body.isSleeping)) {
        running.current = false;
        return;
      }
      frame.current = requestAnimationFrame(tick);
    };
    frame.current = requestAnimationFrame(tick);
  }, [render]);

  // Measure, and rebuild on resize.
  useEffect(() => {
    const el = container.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize((prev) => (prev && Math.abs(prev.w - width) < 2 && Math.abs(prev.h - height) < 2 ? prev : { w: width, h: height }));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Start only once the playground is on screen, so drops are seen.
  useEffect(() => {
    const el = container.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => entry.isIntersecting && setVisible(true), { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (reduce || !size || !visible) return;
    const e = Matter.Engine.create({ enableSleeping: true, gravity: { x: 0, y: gravity, scale: 0.001 } });
    engine.current = e;

    const pad = size.w * bleed;
    const t = 400;
    const tall = size.h * 4;
    const walls = [
      Matter.Bodies.rectangle(size.w / 2, size.h + pad + t / 2, size.w + pad * 2 + t * 2, t, { isStatic: true }),
      Matter.Bodies.rectangle(-pad - t / 2, size.h - tall / 2, t, tall + t, { isStatic: true }),
      Matter.Bodies.rectangle(size.w + pad + t / 2, size.h - tall / 2, t, tall + t, { isStatic: true }),
    ];
    if (!openTop) walls.push(Matter.Bodies.rectangle(size.w / 2, -pad - t / 2, size.w + pad * 2 + t * 2, t, { isStatic: true }));
    Matter.Composite.add(e.world, walls);

    entries.current = itemsRef.current(size.w, size.h).map((item) => {
      const { body, offset } = makeBody(item);
      body.frictionAir = airFriction;
      if (item.angle) Matter.Body.setAngle(body, item.angle);
      return { body, offset, item, added: false };
    });

    const add = (entry: Entry) => {
      entry.added = true;
      Matter.Composite.add(e.world, entry.body);
      render();
      wake();
    };

    const timers: number[] = [];
    if (stagger) {
      // One piece at a time; if its spawn spot is still occupied, wait a tick so nothing is pushed out of the box.
      const queue = [...entries.current];
      const next = () => {
        const entry = queue[0];
        if (!entry) return;
        const occupied = Matter.Query.region(
          entries.current.filter((x) => x.added).map((x) => x.body),
          entry.body.bounds,
        ).length > 0;
        if (!occupied) {
          queue.shift();
          add(entry);
        }
        timers.push(window.setTimeout(next, stagger));
      };
      render();
      next();
    } else {
      entries.current.forEach(add);
    }

    return () => {
      timers.forEach(clearTimeout);
      cancelAnimationFrame(frame.current);
      running.current = false;
      drag.current = null;
      Matter.Engine.clear(e);
      engine.current = null;
      entries.current = [];
    };
  }, [reduce, size, visible, gravity, bleed, openTop, stagger, airFriction, render, wake, layoutKey]);

  // Clamped to the box, so dragging past an edge presses the piece against the wall instead of through it.
  const toLocal = (e: React.PointerEvent) => {
    const r = container.current!.getBoundingClientRect();
    return { x: Math.min(Math.max(e.clientX - r.left, 0), r.width), y: Math.min(Math.max(e.clientY - r.top, 0), r.height) };
  };

  const onPointerDown = (id: string) => (e: React.PointerEvent<HTMLElement>) => {
    const entry = entries.current.find((x) => x.item.id === id);
    if (!entry || !engine.current || e.button !== 0) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    const p = toLocal(e);
    const { body } = entry;
    // Hold the body at the exact point that was grabbed, so it swings naturally around the finger.
    const local = Matter.Vector.rotate(Matter.Vector.sub(p, body.position), -body.angle);
    const constraint = Matter.Constraint.create({ pointA: p, bodyB: body, pointB: local, stiffness: 0.7, damping: 0.15, length: 0 });
    Matter.Composite.add(engine.current.world, constraint);
    Matter.Sleeping.set(body, false);
    drag.current = { id, constraint, start: p, moved: false, pointer: e.pointerId };
    suppressClick.current = false;
    wake();
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const d = drag.current;
    if (!d || d.pointer !== e.pointerId) return;
    const p = toLocal(e);
    d.constraint.pointA = p;
    if (!d.moved && Math.hypot(p.x - d.start.x, p.y - d.start.y) > TAP_SLOP) d.moved = true;
  };

  // Releasing removes the constraint; the body keeps the velocity the pointer gave it.
  const onPointerUp = (e: React.PointerEvent) => {
    const d = drag.current;
    if (!d || d.pointer !== e.pointerId || !engine.current) return;
    Matter.Composite.remove(engine.current.world, d.constraint);
    suppressClick.current = d.moved;
    drag.current = null;
    wake();
  };

  if (reduce) {
    return (
      <div ref={container} className={`relative ${className}`}>
        {fallback === "flow" ? (
          <div className="flex size-full flex-wrap items-end justify-center gap-3 pb-2">
            {list.map((item, i) => (
              <ItemShell key={item.id} item={item} style={{ width: item.w, height: item.h, transform: `rotate(${i % 2 ? 3 : -3}deg)` }} />
            ))}
          </div>
        ) : (
          list.map((item) => (
            <ItemShell
              key={item.id}
              item={item}
              className="absolute left-0 top-0"
              style={{ width: item.w, height: item.h, transform: `translate(${item.x - item.w / 2}px, ${item.y - item.h / 2}px) rotate(${item.angle ?? 0}rad)` }}
            />
          ))
        )}
      </div>
    );
  }

  return (
    // Items stay in the accessibility tree before they drop; focusing one starts the drop so it never stays unseen.
    <div ref={container} className={`relative touch-pan-y ${className}`} onFocus={() => setVisible(true)}>
      {list.map((item) => (
        <ItemShell
          key={item.id}
          item={item}
          ref={(node) => {
            if (node) nodes.current.set(item.id, node);
            else nodes.current.delete(item.id);
          }}
          className={`absolute left-0 top-0 cursor-grab touch-none select-none will-change-transform active:cursor-grabbing`}
          // Hidden until the scene adds the piece; the render loop takes over opacity from there.
          style={{ width: item.w, height: item.h, opacity: 0, transform: `translate3d(${item.x - item.w / 2}px, ${item.y - item.h / 2}px, 0) rotate(${item.angle ?? 0}rad)` }}
          onPointerDown={onPointerDown(item.id)}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onClick={(e) => {
            // A drag that ends over the button is not a selection.
            if (suppressClick.current) {
              e.preventDefault();
              suppressClick.current = false;
              return;
            }
            item.onSelect?.();
          }}
        />
      ))}
    </div>
  );
}

type ShellProps = {
  item: PlaygroundItem;
  className?: string;
  style?: React.CSSProperties;
  ref?: React.Ref<HTMLElement>;
} & Omit<React.HTMLAttributes<HTMLElement>, "style" | "className">;

function ItemShell({ item, className = "", style, ref, onClick, ...handlers }: ShellProps) {
  if (item.onSelect) {
    return (
      <button
        type="button"
        ref={ref as React.Ref<HTMLButtonElement>}
        aria-pressed={item.pressed}
        aria-label={item.label}
        className={`${className} ${item.className ?? ""}`}
        style={style}
        onClick={onClick ?? item.onSelect}
        {...handlers}
      >
        {item.content}
      </button>
    );
  }
  return (
    <div ref={ref as React.Ref<HTMLDivElement>} aria-hidden className={`${className} ${item.className ?? ""}`} style={style} {...handlers}>
      {item.content}
    </div>
  );
}
