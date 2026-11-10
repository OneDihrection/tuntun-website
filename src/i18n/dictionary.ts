export type Locale = "id" | "en";

export const locales: Locale[] = ["id", "en"];

const id = {
  nav: {
    exercises: "Latihan",
    how: "Cara kerja",
    features: "Fitur",
    privacy: "Privasi",
    faq: "FAQ",
    contact: "Hubungi kami",
    menu: "Buka menu",
    close: "Tutup menu",
    language: "Ganti bahasa",
  },
  hero: {
    eyebrow: "Terapi Mandiri untuk tangan",
    title: "Latihan tangan di rumah, ditemani",
    sub: "TeMan memandu latihan jari setelah stroke langsung dari iPad, dengan kamera, contoh gerakan 3D, dan aba-aba suara. Bersama keluarga, setiap hari.",
    cta: "Hubungi kami",
    soon: "Segera hadir di",
    store: "App Store",
    note: "Untuk iPad · Bahasa Indonesia & English",
    bubble: "Bagus! 8 dari 10 repetisi",
  },
  exercises: {
    eyebrow: "Latihan",
    title: "Lima gerakan jari, dipandu satu per satu",
    sub: "Setiap gerakan punya contoh 3D, kalibrasi rentang yang nyaman, dan hitungan repetisi otomatis.",
    items: [
      { key: "fullFist", name: "Kepal penuh", desc: "Genggam perlahan, lalu buka kembali." },
      { key: "hookFist", name: "Kepal kait", desc: "Tekuk ujung jari sementara buku jari tetap lurus." },
      { key: "opposition", name: "Ibu jari ke jari", desc: "Arahkan ibu jari ke setiap ujung jari." },
      { key: "spreading", name: "Regangkan jari", desc: "Buka jari selebar yang nyaman, lalu rapatkan." },
      { key: "extensionSequence", name: "Luruskan berurutan", desc: "Luruskan jari satu per satu secara berurutan." },
    ],
    armTitle: "Plus latihan lengan dan jangkauan",
    armSub: "Angkat lengan, tekuk siku, dan jangkau ke berbagai arah, dengan pelacakan tubuh yang sama.",
  },
  how: {
    eyebrow: "Cara kerja",
    title: "Empat langkah sederhana",
    steps: [
      { title: "Atur latihan", desc: "Pendamping memilih tangan yang dilatih, jumlah set, repetisi, dan waktu istirahat." },
      { title: "Kalibrasi rentang nyaman", desc: "TeMan mempelajari posisi awal dan target yang nyaman untuk setiap gerakan." },
      { title: "Ikuti contoh dan suara", desc: "Contoh 3D dan aba-aba suara memandu setiap repetisi, lengkap dengan jeda otomatis." },
      { title: "Lihat kemajuan", desc: "Laporan mingguan, hari beruntun, dan lencana merayakan setiap latihan." },
    ],
  },
  features: {
    eyebrow: "Fitur",
    items: [
      {
        title: "Kamera yang memahami gerakan tangan",
        desc: "TeMan mengenali posisi jari melalui kamera iPad dan hanya menghitung repetisi saat gerakan benar-benar terlihat.",
      },
      {
        title: "Kendali suara, tanpa menyentuh layar",
        desc: "Ucapkan perintah sederhana kapan saja. Tombol besar tetap tersedia untuk pendamping.",
        chips: ["“jeda”", "“lanjut”", "“ulangi”", "“akhiri”"],
      },
      {
        title: "Kemajuan yang terasa",
        desc: "Grafik repetisi mingguan, menit aktif, catatan hari beruntun, dan 50 lencana pencapaian untuk menjaga semangat.",
        streak: "hari beruntun",
        days: ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"],
      },
      {
        title: "Dirancang untuk pasien dan pendamping",
        desc: "Tombol besar, huruf mudah dibaca, mode gelap, dukungan Kurangi Gerakan, serta Bahasa Indonesia dan English.",
        chips: ["Tombol besar", "Mode gelap", "Kurangi Gerakan", "ID / EN"],
      },
    ],
  },
  privacy: {
    eyebrow: "Privasi",
    title: "Privasimu tetap di perangkatmu",
    points: [
      { title: "Tanpa rekaman video", desc: "Kamera hanya dipakai saat latihan. Video, suara, dan titik tangan tidak disimpan." },
      { title: "Tanpa cloud TeMan", desc: "Ringkasan latihan tersimpan di iPad. Tidak ada sinkronisasi ke server kami." },
      { title: "Suara diproses di iPad", desc: "Perintah suara dikenali di perangkat dan tidak dikirim ke server." },
    ],
    disclaimer:
      "TeMan adalah alat bantu latihan, bukan pengganti terapis. Ikuti jenis dan jumlah latihan sesuai arahan terapismu.",
    readMore: "Baca kebijakan privasi lengkap",
  },
  partners: {
    eyebrow: "Kolaborasi",
    title: "Mari tumbuh bersama",
    sub: "Kami membuka kolaborasi dengan rumah sakit, klinik rehabilitasi, terapis, dan investor untuk membawa TeMan ke lebih banyak keluarga.",
    groups: ["Rumah sakit & klinik", "Terapis okupasi & fisioterapis", "Investor & mitra"],
    cta: "Ajak kami berdiskusi",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Pertanyaan yang sering diajukan",
    items: [
      {
        q: "Apa itu TeMan?",
        a: "TeMan: Terapi Mandiri adalah aplikasi iPad yang memandu latihan tangan dan jari di rumah dengan kamera, contoh gerakan 3D, dan aba-aba suara.",
      },
      {
        q: "Kapan TeMan bisa diunduh?",
        a: "TeMan sedang dalam tahap uji coba. Hubungi kami jika ingin mencoba lebih awal atau berkolaborasi.",
      },
      {
        q: "Perangkat apa yang dibutuhkan?",
        a: "iPad dengan iPadOS 17 atau lebih baru, digunakan dalam posisi lanskap.",
      },
      {
        q: "Apakah TeMan menggantikan terapis?",
        a: "Tidak. TeMan membantu latihan mandiri di rumah. Jenis dan jumlah latihan sebaiknya mengikuti arahan terapismu.",
      },
      {
        q: "Apakah data saya aman?",
        a: "Video dan suara tidak disimpan. Ringkasan latihan tersimpan di iPad tanpa sinkronisasi ke server TeMan.",
      },
    ],
  },
  footer: {
    tagline: "Terapi Mandiri, ditemani setiap hari.",
    rights: "Hak cipta dilindungi.",
    credit: "Huruf Plus Jakarta Sans oleh Tokotype (SIL OFL).",
    privacy: "Kebijakan Privasi",
    terms: "Syarat dan Ketentuan",
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
    contact: "Contact us",
    menu: "Open menu",
    close: "Close menu",
    language: "Change language",
  },
  hero: {
    eyebrow: "Self-guided hand therapy",
    title: "Hand exercises at home, guided by",
    sub: "TeMan guides finger exercises after stroke right from an iPad, with the camera, 3D movement demos, and spoken cues. Together with family, every day.",
    cta: "Contact us",
    soon: "Coming soon on the",
    store: "App Store",
    note: "For iPad · Bahasa Indonesia & English",
    bubble: "Nice! 8 of 10 reps",
  },
  exercises: {
    eyebrow: "Exercises",
    title: "Five finger movements, guided one by one",
    sub: "Every movement comes with a 3D demo, comfortable-range calibration, and automatic rep counting.",
    items: [
      { key: "fullFist", name: "Full fist", desc: "Close the hand gently, then open it again." },
      { key: "hookFist", name: "Hook fist", desc: "Curl the fingertips while the knuckles stay straight." },
      { key: "opposition", name: "Thumb to finger", desc: "Bring the thumb toward each fingertip." },
      { key: "spreading", name: "Finger spreading", desc: "Spread the fingers as wide as is comfortable, then close." },
      { key: "extensionSequence", name: "Sequential extension", desc: "Straighten the fingers one at a time, in order." },
    ],
    armTitle: "Plus arm and reaching exercises",
    armSub: "Raise the arm, bend the elbow, and reach in different directions, with the same body tracking.",
  },
  how: {
    eyebrow: "How it works",
    title: "Four simple steps",
    steps: [
      { title: "Set up the plan", desc: "A caregiver picks the hand to train, the sets, repetitions, and rest time." },
      { title: "Calibrate a comfortable range", desc: "TeMan learns a comfortable start and target position for each movement." },
      { title: "Follow the demo and voice", desc: "3D demos and spoken cues guide every repetition, with automatic rests." },
      { title: "See your progress", desc: "Weekly reports, streaks, and badges celebrate every session." },
    ],
  },
  features: {
    eyebrow: "Features",
    items: [
      {
        title: "A camera that understands hand movement",
        desc: "TeMan recognizes finger positions through the iPad camera and only counts a repetition when the movement is clearly seen.",
      },
      {
        title: "Voice control, hands-free",
        desc: "Say a simple command at any time. Large buttons remain available for caregivers.",
        chips: ["“pause”", "“continue”", "“repeat”", "“stop”"],
      },
      {
        title: "Progress you can feel",
        desc: "Weekly repetition charts, active minutes, daily streaks, and 50 achievement badges to keep motivation up.",
        streak: "day streak",
        days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      {
        title: "Designed for patients and caregivers",
        desc: "Large buttons, readable type, dark mode, Reduce Motion support, and both Bahasa Indonesia and English.",
        chips: ["Large buttons", "Dark mode", "Reduce Motion", "ID / EN"],
      },
    ],
  },
  privacy: {
    eyebrow: "Privacy",
    title: "Your privacy stays on your device",
    points: [
      { title: "No video recording", desc: "The camera is only used during practice. Video, audio, and hand points are never saved." },
      { title: "No TeMan cloud", desc: "Session summaries stay on the iPad. Nothing syncs to our servers." },
      { title: "On-device voice", desc: "Voice commands are recognized on the iPad and never sent to a server." },
    ],
    disclaimer:
      "TeMan is a practice aid, not a replacement for a therapist. Follow your therapist's directions on which exercises to do and how much.",
    readMore: "Read the full privacy policy",
  },
  partners: {
    eyebrow: "Partnerships",
    title: "Let's grow together",
    sub: "We're open to working with hospitals, rehabilitation clinics, therapists, and investors to bring TeMan to more families.",
    groups: ["Hospitals & clinics", "Occupational & physical therapists", "Investors & partners"],
    cta: "Start a conversation",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Frequently asked questions",
    items: [
      {
        q: "What is TeMan?",
        a: "TeMan: Terapi Mandiri (Self-guided Therapy) is an iPad app that guides hand and finger exercises at home with the camera, 3D movement demos, and spoken cues.",
      },
      {
        q: "When can I download TeMan?",
        a: "TeMan is currently in testing. Contact us if you'd like early access or want to collaborate.",
      },
      {
        q: "What device do I need?",
        a: "An iPad running iPadOS 17 or later, used in landscape orientation.",
      },
      {
        q: "Does TeMan replace a therapist?",
        a: "No. TeMan supports independent practice at home. The type and amount of exercise should follow your therapist's directions.",
      },
      {
        q: "Is my data safe?",
        a: "Video and audio are never saved. Session summaries stay on the iPad with no sync to TeMan servers.",
      },
    ],
  },
  footer: {
    tagline: "Self-guided therapy, with you every day.",
    rights: "All rights reserved.",
    credit: "Plus Jakarta Sans typeface by Tokotype (SIL OFL).",
    privacy: "Privacy Policy",
    terms: "Terms and Conditions",
  },
};

export const dictionaries: Record<Locale, Dictionary> = { id, en };
