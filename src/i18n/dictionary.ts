export type Locale = "id" | "en";

export const locales: Locale[] = ["id", "en"];

/** Exercise keys match the Tuntun app's catalog and the artwork in /public/hands and /public/plans. */
export const exerciseGroups = [
  { key: "hand", art: "hands", items: ["fullFist", "hookFist", "opposition", "spreading", "extensionSequence", "forearmRotation"] },
  { key: "arm", art: "plans", items: ["armRaise", "elbowBend", "directionalReach"] },
  { key: "shoulder", art: "plans", items: ["crossMidline", "shoulderFlexion", "externalRotation", "internalRotation"] },
  { key: "body", art: "plans", items: ["sitToStand", "foldTowel"] },
] as const;

export type ExerciseKey = (typeof exerciseGroups)[number]["items"][number];

const id = {
  nav: {
    exercises: "Latihan",
    how: "Cara kerja",
    features: "Fitur",
    privacy: "Privasi",
    faq: "FAQ",
    cta: "Coba lebih awal",
    menu: "Buka menu",
    close: "Tutup menu",
    language: "Ganti bahasa",
  },
  hero: {
    eyebrow: "Latihan gerak setelah stroke",
    title: "Teman yang menuntun latihanmu di rumah.",
    sub: "Latihan tangan, lengan, dan bahu di rumah, dipandu iPad.",
    cta: "Coba lebih awal",
    secondary: "Lihat latihan",
    soon: "Segera di",
    store: "App Store",
    mock: {
      exercise: "Kepal dan Buka Tangan",
      set: "Set 1 dari 2",
      cue: "Genggam perlahan, lalu buka kembali.",
      reps: "Repetisi",
      done: "Bagus! Satu repetisi selesai.",
    },
  },
  statement: {
    eyebrow: "Tentang Tuntun",
    text: "Setiap gerakan, ada yang menemani.",
  },
  pillars: [
    { title: "Contoh yang jelas" },
    { title: "Arahan suara yang tenang" },
    { title: "Kamera menghitung untukmu" },
  ],
  exercises: {
    eyebrow: "Latihan",
    title: "Dari ujung jari sampai bahu.",
    prev: "Sebelumnya",
    next: "Berikutnya",
    items: {
      fullFist: { name: "Kepal dan buka tangan" },
      hookFist: { name: "Tekuk jari mengait" },
      opposition: { name: "Sentuh jempol ke jari" },
      spreading: { name: "Renggangkan jari" },
      extensionSequence: { name: "Luruskan jari satu per satu" },
      forearmRotation: { name: "Rotasi lengan bawah" },
      armRaise: { name: "Angkat lengan" },
      elbowBend: { name: "Tekuk siku" },
      directionalReach: { name: "Jangkauan terarah" },
      crossMidline: { name: "Sentuh bahu menyilang" },
      shoulderFlexion: { name: "Fleksi bahu dengan rotasi" },
      externalRotation: { name: "Putar bahu ke luar" },
      internalRotation: { name: "Putar bahu ke dalam" },
      sitToStand: { name: "Berdiri dari posisi duduk" },
      foldTowel: { name: "Melipat handuk" },
    },
  },
  how: {
    eyebrow: "Cara kerja",
    title: "Satu sesi, empat langkah.",
    steps: [
      { title: "Atur rencana", desc: "Pilih latihan dan repetisi." },
      { title: "Kalibrasi gerak", desc: "Temukan rentang yang nyaman." },
      { title: "Ikuti panduan", desc: "Ikuti contoh dan suara." },
      { title: "Tinjau hasilnya", desc: "Lihat kemajuanmu." },
    ],
  },
  features: {
    eyebrow: "Fitur",
    title: "Dibuat untuk pasien dan pendamping.",
    camera: {
      title: "Kamera mengikuti gerakan",
      desc: "Setiap repetisi dihitung otomatis.",
      start: "Awal",
      target: "Target",
    },
    voice: {
      title: "Kendali dengan suara",
      desc: "Jeda dan lanjut tanpa menyentuh layar.",
      chips: [
        { word: "“stop”", label: "jeda" },
        { word: "“go”", label: "lanjut" },
      ],
    },
    progress: {
      title: "Kemajuan yang terlihat",
      desc: "Lihat latihanmu dari minggu ke minggu.",
      label: "Repetisi minggu ini",
      days: ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"],
    },
  },
  privacy: {
    eyebrow: "Privasi",
    title: "Data latihan tetap di iPad.",
    points: [
      { title: "Kamera diproses di perangkat" },
      { title: "Suara tidak direkam" },
      { title: "Tanpa akun, tanpa cloud" },
    ],
    disclaimer: "Alat bantu latihan, bukan pengganti terapis.",
    readMore: "Baca kebijakan privasi",
  },
  partners: {
    eyebrow: "Kolaborasi",
    title: "Bawa Tuntun ke lebih banyak keluarga.",
    groups: [
      { title: "Rumah sakit & klinik" },
      { title: "Terapis okupasi & fisioterapis" },
      { title: "Investor & mitra" },
    ],
    cta: "Ajak kami berdiskusi",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Yang sering ditanyakan.",
    items: [
      {
        q: "Apa itu Tuntun?",
        a: "Tuntun: Teman Terapi adalah aplikasi iPad yang memandu latihan gerak tubuh bagian atas di rumah, untuk orang yang sedang pulih dari stroke bersama pendampingnya.",
      },
      {
        q: "Perangkat apa yang dibutuhkan?",
        a: "iPad dengan iPadOS 17 atau lebih baru, diletakkan mendatar. Izin kamera, mikrofon, dan pengenalan ucapan diperlukan untuk memulai latihan.",
      },
      {
        q: "Apakah Tuntun menggantikan terapis?",
        a: "Tidak. Tuntun membantu latihan mandiri di rumah. Jenis dan jumlah latihan sebaiknya mengikuti arahan tenaga kesehatan yang menangani pasien.",
      },
      {
        q: "Apakah ada video yang disimpan?",
        a: "Secara bawaan, Tuntun menyimpan cuplikan singkat dari pengulangan pilihan, hanya di iPad, dengan wajah dan latar disamarkan. Penyamaran otomatis bisa tidak sempurna, jadi mintalah persetujuan pasien. Pilih Kerangka saja atau Tanpa rekaman di Pengaturan jika tidak ingin menyimpan video.",
      },
    ],
  },
  closing: {
    title: "Mulai bergerak lagi, bersama Tuntun.",
    cta: "Coba lebih awal",
    secondary: "Ajak kami berdiskusi",
    play: "Seret dan lempar bentuknya",
  },
  footer: {
    tagline: "Teman terapi yang menuntun latihan gerak di rumah.",
    rights: "Hak cipta dilindungi.",
    privacy: "Kebijakan Privasi",
    terms: "Syarat dan Ketentuan",
    contact: "Kontak",
  },
};

export type Dictionary = typeof id;

const en: Dictionary = {
  nav: {
    exercises: "Exercises",
    how: "How it works",
    features: "Features",
    privacy: "Privacy",
    faq: "FAQ",
    cta: "Get early access",
    menu: "Open menu",
    close: "Close menu",
    language: "Change language",
  },
  hero: {
    eyebrow: "Movement practice after stroke",
    title: "A therapy companion that guides you at home.",
    sub: "Hand, arm and shoulder practice at home, guided by iPad.",
    cta: "Get early access",
    secondary: "See the exercises",
    soon: "Coming soon on the",
    store: "App Store",
    mock: {
      exercise: "Close and Open",
      set: "Set 1 of 2",
      cue: "Close gently, then open again.",
      reps: "Repetitions",
      done: "Well done! One repetition complete.",
    },
  },
  statement: {
    eyebrow: "About Tuntun",
    text: "Every movement, someone by your side.",
  },
  pillars: [
    { title: "Clear demonstrations" },
    { title: "Calm spoken cues" },
    { title: "The camera counts for you" },
  ],
  exercises: {
    eyebrow: "Exercises",
    title: "From fingertips to shoulders.",
    prev: "Previous",
    next: "Next",
    items: {
      fullFist: { name: "Close and open" },
      hookFist: { name: "Hook fingers" },
      opposition: { name: "Thumb to fingertips" },
      spreading: { name: "Spread fingers" },
      extensionSequence: { name: "Straighten in turn" },
      forearmRotation: { name: "Forearm rotation" },
      armRaise: { name: "Arm raise" },
      elbowBend: { name: "Elbow bend" },
      directionalReach: { name: "Directional reaching" },
      crossMidline: { name: "Cross-body shoulder touch" },
      shoulderFlexion: { name: "Shoulder flexion with rotation" },
      externalRotation: { name: "Shoulder external rotation" },
      internalRotation: { name: "Shoulder internal rotation" },
      sitToStand: { name: "Sit to stand" },
      foldTowel: { name: "Fold a towel" },
    },
  },
  how: {
    eyebrow: "How it works",
    title: "One session, four steps.",
    steps: [
      { title: "Set the plan", desc: "Choose exercises and reps." },
      { title: "Calibrate", desc: "Find a comfortable range." },
      { title: "Follow along", desc: "Follow the demo and voice." },
      { title: "Review", desc: "See your progress." },
    ],
  },
  features: {
    eyebrow: "Features",
    title: "Made for patients and caregivers.",
    camera: {
      title: "The camera follows along",
      desc: "Every repetition, counted for you.",
      start: "Start",
      target: "Target",
    },
    voice: {
      title: "Hands-free control",
      desc: "Pause and resume without touching the screen.",
      chips: [
        { word: "“stop”", label: "pause" },
        { word: "“go”", label: "resume" },
      ],
    },
    progress: {
      title: "Progress you can see",
      desc: "See your practice week by week.",
      label: "Repetitions this week",
      days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
  },
  privacy: {
    eyebrow: "Privacy",
    title: "Practice data stays on the iPad.",
    points: [
      { title: "Camera processed on device" },
      { title: "Voice is not recorded" },
      { title: "No account, no cloud" },
    ],
    disclaimer: "A practice aid, not a replacement for a therapist.",
    readMore: "Read the privacy policy",
  },
  partners: {
    eyebrow: "Partnerships",
    title: "Bring Tuntun to more families.",
    groups: [
      { title: "Hospitals & clinics" },
      { title: "Occupational & physical therapists" },
      { title: "Investors & partners" },
    ],
    cta: "Start a conversation",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Good to know.",
    items: [
      {
        q: "What is Tuntun?",
        a: "Tuntun: Teman Terapi (“therapy companion”) is an iPad app that guides upper-body movement practice at home for people recovering from stroke, together with a caregiver.",
      },
      {
        q: "What device do I need?",
        a: "An iPad running iPadOS 17 or later, placed in landscape. Camera, microphone, and speech-recognition permissions are needed to start practice.",
      },
      {
        q: "Does Tuntun replace a therapist?",
        a: "No. Tuntun supports independent practice at home. The type and amount of exercise should follow the patient's healthcare professional.",
      },
      {
        q: "Is any video saved?",
        a: "By default, Tuntun saves short clips of selected repetitions, only on the iPad, with face and background obscured. Automatic obscuring can miss details, so ask for the patient's consent. Choose Skeleton only or Off in Settings to save no video.",
      },
    ],
  },
  closing: {
    title: "Start moving again, with Tuntun.",
    cta: "Get early access",
    secondary: "Start a conversation",
    play: "Drag and throw the shapes",
  },
  footer: {
    tagline: "A therapy companion that guides movement practice at home.",
    rights: "All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms and Conditions",
    contact: "Contact",
  },
};

export const dictionaries: Record<Locale, Dictionary> = { id, en };
