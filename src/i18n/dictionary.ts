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
    team: "Tim",
    feedback: "Masukan",
    cta: "Daftar akses awal",
    menu: "Buka menu",
    close: "Tutup menu",
    language: "Ganti bahasa",
  },
  hero: {
    eyebrow: "Latihan rehabilitasi pascastroke",
    title: "Latihan pascastroke yang terarah, langsung dari rumah.",
    sub: "Panduan visual, arahan suara, dan penghitungan otomatis untuk latihan tubuh bagian atas.",
    cta: "Daftar akses awal",
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
    text: "Konsisten berlatih, dengan panduan yang jelas.",
  },
  pillars: [
    { title: "Demonstrasi yang jelas" },
    { title: "Arahan suara yang tenang" },
    { title: "Penghitungan repetisi otomatis" },
  ],
  exercises: {
    eyebrow: "Latihan",
    title: "Lima belas latihan, dari jari hingga bahu.",
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
    title: "Setiap sesi mengikuti empat langkah.",
    steps: [
      { title: "Susun rencana", desc: "Tentukan latihan dan jumlah repetisi." },
      { title: "Kalibrasi", desc: "Ukur rentang gerak yang nyaman." },
      { title: "Ikuti panduan", desc: "Contoh visual dan arahan suara di setiap gerakan." },
      { title: "Tinjau hasil", desc: "Pantau kemajuan dari sesi ke sesi." },
    ],
  },
  features: {
    eyebrow: "Fitur",
    title: "Dirancang bersama kebutuhan pasien dan pendamping.",
    camera: {
      title: "Kamera membaca gerakan",
      desc: "Setiap repetisi dihitung secara otomatis.",
      start: "Awal",
      target: "Target",
    },
    voice: {
      title: "Kendali dengan suara",
      desc: "Jeda dan lanjutkan tanpa menyentuh layar.",
      chips: [
        { word: "“stop”", label: "jeda" },
        { word: "“go”", label: "lanjut" },
      ],
    },
    progress: {
      title: "Kemajuan yang terukur",
      desc: "Riwayat latihan dari minggu ke minggu.",
      label: "Repetisi minggu ini",
      days: ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"],
    },
  },
  privacy: {
    eyebrow: "Privasi",
    title: "Diproses di perangkat. Tanpa akun. Tanpa cloud.",
    points: [
      { title: "Kamera diproses di iPad" },
      { title: "Suara tidak direkam" },
      { title: "Data latihan tidak dikirim ke server kami" },
    ],
    disclaimer: "Tuntun adalah alat bantu latihan, bukan pengganti terapis.",
    readMore: "Baca kebijakan privasi",
  },
  partners: {
    eyebrow: "Kolaborasi",
    title: "Membawa latihan terarah ke lebih banyak keluarga.",
    groups: [
      { title: "Rumah sakit & klinik" },
      { title: "Terapis okupasi & fisioterapis" },
      { title: "Investor & mitra" },
    ],
    cta: "Hubungi kami",
  },
  team: {
    eyebrow: "Tim",
    title: "Orang-orang di balik Tuntun.",
    roles: { developer: "Pengembang", designer: "Desainer" },
    cta: "LinkedIn",
    ctaLabel: "Profil LinkedIn {name}",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Pertanyaan umum.",
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
  feedback: {
    eyebrow: "Masukan",
    title: "Bantu kami membuat Tuntun lebih baik.",
    sub: "Ceritakan pengalaman Anda, laporkan kendala, atau ajukan pertanyaan. Setiap masukan kami baca langsung.",
    direct: "Lebih suka email langsung?",
    note: "Mohon tidak menyertakan video pasien atau informasi kesehatan.",
    noteLink: "Kebijakan Privasi",
    frameTitle: "Formulir masukan Tuntun",
    loading: "Memuat formulir…",
    open: "Buka formulir di tab baru",
  },
  closing: {
    title: "Lanjutkan pemulihan dengan langkah yang terukur.",
    cta: "Daftar akses awal",
    secondary: "Hubungi kami",
    play: "Seret dan lempar bentuknya",
  },
  footer: {
    tagline: "Latihan rehabilitasi pascastroke yang terarah, di rumah.",
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
    team: "Team",
    feedback: "Feedback",
    cta: "Request early access",
    menu: "Open menu",
    close: "Close menu",
    language: "Change language",
  },
  hero: {
    eyebrow: "Post-stroke rehabilitation practice",
    title: "Structured stroke rehab practice, right at home.",
    sub: "Visual demos, spoken cues and automatic counting for upper-body exercises.",
    cta: "Request early access",
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
    text: "Consistent practice, clearly guided.",
  },
  pillars: [
    { title: "Clear demonstrations" },
    { title: "Calm spoken cues" },
    { title: "Automatic repetition counting" },
  ],
  exercises: {
    eyebrow: "Exercises",
    title: "Fifteen exercises, from fingers to shoulders.",
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
    title: "Every session follows four steps.",
    steps: [
      { title: "Set the plan", desc: "Choose exercises and repetitions." },
      { title: "Calibrate", desc: "Measure a comfortable range of motion." },
      { title: "Follow the guide", desc: "Visual demos and spoken cues for each movement." },
      { title: "Review", desc: "Track progress from session to session." },
    ],
  },
  features: {
    eyebrow: "Features",
    title: "Designed around patients and caregivers.",
    camera: {
      title: "Camera-based tracking",
      desc: "Every repetition counted automatically.",
      start: "Start",
      target: "Target",
    },
    voice: {
      title: "Voice control",
      desc: "Pause and resume without touching the screen.",
      chips: [
        { word: "“stop”", label: "pause" },
        { word: "“go”", label: "resume" },
      ],
    },
    progress: {
      title: "Measurable progress",
      desc: "A week-by-week record of practice.",
      label: "Repetitions this week",
      days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
  },
  privacy: {
    eyebrow: "Privacy",
    title: "Processed on device. No account. No cloud.",
    points: [
      { title: "Camera processed on the iPad" },
      { title: "Voice is never recorded" },
      { title: "Practice data never sent to our servers" },
    ],
    disclaimer: "Tuntun is a practice aid, not a replacement for a therapist.",
    readMore: "Read the privacy policy",
  },
  partners: {
    eyebrow: "Partnerships",
    title: "Bringing guided practice to more families.",
    groups: [
      { title: "Hospitals & clinics" },
      { title: "Occupational & physical therapists" },
      { title: "Investors & partners" },
    ],
    cta: "Contact us",
  },
  team: {
    eyebrow: "Team",
    title: "The people behind Tuntun.",
    roles: { developer: "Developer", designer: "Designer" },
    cta: "LinkedIn",
    ctaLabel: "{name} on LinkedIn",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Common questions.",
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
  feedback: {
    eyebrow: "Feedback",
    title: "Help us make Tuntun better.",
    sub: "Share your experience, report a problem, or ask a question. Our team reads every response.",
    direct: "Prefer to email directly?",
    note: "Please don't include patient videos or health information.",
    noteLink: "Privacy Policy",
    frameTitle: "Tuntun feedback form",
    loading: "Loading form…",
    open: "Open the form in a new tab",
  },
  closing: {
    title: "Continue recovery, one measured step at a time.",
    cta: "Request early access",
    secondary: "Contact us",
    play: "Drag and throw the shapes",
  },
  footer: {
    tagline: "Structured post-stroke rehab practice at home.",
    rights: "All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms and Conditions",
    contact: "Contact",
  },
};

export const dictionaries: Record<Locale, Dictionary> = { id, en };
