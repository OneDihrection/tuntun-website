export type Locale = "id" | "en";

export const locales: Locale[] = ["id", "en"];

/** Exercise keys match the Tuntun app's catalog and the artwork in /public/hands and /public/plans. */
export const exerciseGroups = [
  { key: "hand", art: "hands", items: ["fullFist", "hookFist", "opposition", "spreading", "extensionSequence", "forearmRotation"] },
  { key: "arm", art: "plans", items: ["armRaise", "elbowBend", "directionalReach"] },
  { key: "shoulder", art: "plans", items: ["crossMidline", "shoulderFlexion", "externalRotation", "internalRotation"] },
  { key: "body", art: "plans", items: ["sitToStand", "foldTowel"] },
] as const;

export type ExerciseGroupKey = (typeof exerciseGroups)[number]["key"];
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
    sub: "Tuntun memandu latihan tangan, lengan, bahu, dan badan di iPad. Ikuti contoh gerakan, dengarkan arahan suara, dan biarkan kamera menghitung setiap repetisi.",
    cta: "Coba lebih awal",
    secondary: "Lihat latihan",
    soon: "Segera di",
    store: "App Store",
    note: "Untuk iPad · Bahasa Indonesia & English",
    mock: {
      exercise: "Kepal dan Buka Tangan",
      set: "Set 1 dari 2",
      cue: "Genggam perlahan, lalu buka kembali.",
      reps: "Repetisi",
      done: "Bagus! Satu repetisi selesai.",
    },
  },
  pillars: [
    { title: "Contoh yang jelas", desc: "Animasi gerakan ditampilkan sebelum mulai, jadi kamu tahu persis apa yang dilakukan." },
    { title: "Arahan suara yang tenang", desc: "Suara pelan dan jelas memandu setiap repetisi, juga napas saat istirahat." },
    { title: "Kamera menghitung untukmu", desc: "Kamera iPad mengikuti gerakan dan mencatat repetisi yang sampai ke target." },
  ],
  exercises: {
    eyebrow: "Latihan",
    title: "Dari ujung jari sampai bahu.",
    sub: "Latihan tubuh bagian atas dalam empat kelompok. Pendamping mengatur sisi tubuh, repetisi, dan waktu istirahat sesuai arahan tenaga kesehatan.",
    prev: "Sebelumnya",
    next: "Berikutnya",
    groups: {
      hand: { name: "Tangan & jari", desc: "Menggenggam, menekuk, dan meregangkan jari." },
      arm: { name: "Lengan", desc: "Mengangkat, menekuk siku, dan menjangkau ke berbagai arah." },
      shoulder: { name: "Bahu", desc: "Menyilang garis tengah tubuh dan memutar bahu." },
      body: { name: "Badan & aktivitas", desc: "Kontrol badan dan gerakan sehari-hari." },
    },
    items: {
      fullFist: { name: "Kepal dan buka tangan", desc: "Genggam perlahan, lalu buka kembali." },
      hookFist: { name: "Tekuk jari mengait", desc: "Buku jari utama tetap lurus, tekuk sendi tengah dan ujung." },
      opposition: { name: "Sentuh jempol ke jari", desc: "Sentuhkan ibu jari ke telunjuk, tengah, manis, lalu kelingking." },
      spreading: { name: "Renggangkan jari", desc: "Renggangkan jari, lalu rapatkan kembali." },
      extensionSequence: { name: "Luruskan jari satu per satu", desc: "Luruskan jari yang disebut, lalu rilekskan." },
      forearmRotation: { name: "Rotasi lengan bawah", desc: "Putar telapak tangan ke atas dan ke bawah." },
      armRaise: { name: "Angkat lengan", desc: "Angkat lengan ke samping setinggi yang nyaman." },
      elbowBend: { name: "Tekuk siku", desc: "Tekuk siku sejauh yang nyaman, lalu luruskan." },
      directionalReach: { name: "Jangkauan terarah", desc: "Raih ke depan, menyilang badan, dan ke atas." },
      crossMidline: { name: "Sentuh bahu menyilang", desc: "Sentuh bahu seberang, lalu kembali ke lingkaran awal." },
      shoulderFlexion: { name: "Fleksi bahu dengan rotasi", desc: "Angkat lengan ke depan dengan telapak menghadap atas." },
      externalRotation: { name: "Putar bahu ke luar", desc: "Siku di sisi badan, putar lengan bawah menjauhi perut." },
      internalRotation: { name: "Putar bahu ke dalam", desc: "Siku di sisi badan, putar lengan bawah ke arah perut." },
      sitToStand: { name: "Berdiri dari posisi duduk", desc: "Condong sedikit ke depan, berdiri, lalu duduk perlahan." },
      foldTowel: { name: "Melipat handuk", desc: "Tangan dan lengan bekerja sama, seperti saat melipat pakaian." },
    },
  },
  how: {
    eyebrow: "Cara kerja",
    title: "Satu sesi, empat langkah.",
    steps: [
      { title: "Atur rencana", desc: "Pilih latihan, sisi tubuh, repetisi, dan waktu istirahat bersama pendamping." },
      { title: "Kalibrasi gerak", desc: "Tuntun mencatat posisi awal dan rentang gerak yang terasa nyaman." },
      { title: "Ikuti panduan", desc: "Lihat contoh, dengarkan arahan, dan bergerak sesuai kemampuan. Istirahat diisi napas perlahan." },
      { title: "Tinjau hasilnya", desc: "Lihat ringkasan sesi, riwayat latihan, dan tayangan ulang pengulangan pilihan." },
    ],
  },
  features: {
    eyebrow: "Fitur",
    title: "Dibuat untuk pasien dan pendamping.",
    camera: {
      title: "Kamera mengikuti gerakan",
      desc: "Lingkaran biru menandai posisi awal dan target. Repetisi dihitung saat gerakan sampai ke target lalu kembali.",
      start: "Awal",
      target: "Target",
    },
    voice: {
      title: "Kendali dengan suara",
      desc: "Ucapkan perintah untuk jeda dan lanjut tanpa menyentuh layar. Tombol besar tetap tersedia.",
      chips: [
        { word: "“stop”", label: "jeda" },
        { word: "“go”", label: "lanjut" },
      ],
    },
    progress: {
      title: "Kemajuan yang terlihat",
      desc: "Ringkasan setiap sesi, riwayat latihan, dan aktivitas dari waktu ke waktu.",
      label: "Repetisi minggu ini",
      days: ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"],
    },
    replay: {
      title: "Tayangan ulang pilihan",
      desc: "Simpan cuplikan singkat dengan wajah dan latar disamarkan, kerangka gerak saja, atau tidak sama sekali.",
      modes: ["Video disamarkan", "Kerangka saja", "Tanpa rekaman"],
    },
    rest: {
      title: "Istirahat dengan napas",
      desc: "Di antara set, Tuntun memandu napas perlahan sebelum lanjut.",
      cue: "Tarik napas…",
    },
    access: {
      title: "Nyaman dipakai bersama",
      desc: "Tombol dan huruf besar memudahkan pasien dan pendamping.",
      chips: ["Huruf besar", "Mode gelap", "Kurangi Gerakan", "ID / EN"],
    },
  },
  privacy: {
    eyebrow: "Privasi",
    title: "Data latihan tetap di iPad.",
    sub: "Tuntun tidak memerlukan akun dan tidak mengirim data latihan ke server kami.",
    points: [
      { title: "Kamera diproses di perangkat", desc: "Tayangan kamera tidak diunggah. Cuplikan tayangan ulang hanya disimpan di iPad, dan bisa dimatikan." },
      { title: "Suara tidak direkam", desc: "Perintah suara dikenali di iPad. Rekaman suara dan transkrip tidak disimpan." },
      { title: "Tanpa akun, tanpa cloud", desc: "Rencana dan laporan tersimpan di iPad. Tanpa iklan atau analitik pihak ketiga." },
    ],
    disclaimer:
      "Tuntun adalah alat bantu latihan, bukan alat diagnosis atau pengukuran klinis. Ikuti program dan batas gerak dari tenaga kesehatan, dan hentikan latihan jika terasa nyeri atau tidak aman.",
    readMore: "Baca kebijakan privasi",
  },
  partners: {
    eyebrow: "Kolaborasi",
    title: "Bawa Tuntun ke lebih banyak keluarga.",
    sub: "Kami terbuka untuk bekerja sama dengan rumah sakit, klinik, terapis, dan mitra lainnya.",
    groups: [
      { title: "Rumah sakit & klinik", desc: "Dukung pasien melanjutkan latihan setelah pulang." },
      { title: "Terapis okupasi & fisioterapis", desc: "Bantu kami menyempurnakan latihan dan batas gerak." },
      { title: "Investor & mitra", desc: "Bantu Tuntun menjangkau lebih banyak orang." },
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
        q: "Latihan apa saja yang tersedia?",
        a: "Latihan tangan dan jari, lengan, bahu, berdiri dari posisi duduk, serta aktivitas sederhana seperti melipat handuk.",
      },
      {
        q: "Kapan Tuntun bisa diunduh?",
        a: "Tuntun sedang dalam tahap uji coba. Hubungi kami jika ingin mencoba lebih awal atau berkolaborasi.",
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
    sub: "Kami membuka uji coba terbatas. Ceritakan kebutuhanmu dan kami akan menghubungimu.",
    cta: "Coba lebih awal",
  },
  footer: {
    tagline: "Teman terapi yang menuntun latihan gerak di rumah.",
    rights: "Hak cipta dilindungi.",
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
    cta: "Get early access",
    menu: "Open menu",
    close: "Close menu",
    language: "Change language",
  },
  hero: {
    eyebrow: "Movement practice after stroke",
    title: "A therapy companion that guides you at home.",
    sub: "Tuntun guides hand, arm, shoulder, and trunk exercises on iPad. Follow the movement demo, listen to calm spoken cues, and let the camera count every repetition.",
    cta: "Get early access",
    secondary: "See the exercises",
    soon: "Coming soon on the",
    store: "App Store",
    note: "For iPad · Bahasa Indonesia & English",
    mock: {
      exercise: "Close and Open",
      set: "Set 1 of 2",
      cue: "Close gently, then open again.",
      reps: "Repetitions",
      done: "Well done! One repetition complete.",
    },
  },
  pillars: [
    { title: "Clear demonstrations", desc: "An animated example plays before you start, so you know exactly what to do." },
    { title: "Calm spoken cues", desc: "A slow, clear voice guides every repetition, and your breathing during rests." },
    { title: "The camera counts for you", desc: "The iPad camera follows your movement and records repetitions that reach the target." },
  ],
  exercises: {
    eyebrow: "Exercises",
    title: "From fingertips to shoulders.",
    sub: "Upper-body practice in four groups. Caregivers set the side, repetitions, and rest time to match guidance from the patient's healthcare professional.",
    prev: "Previous",
    next: "Next",
    groups: {
      hand: { name: "Hand & fingers", desc: "Gripping, curling, and spreading the fingers." },
      arm: { name: "Arm", desc: "Raising, bending the elbow, and reaching in different directions." },
      shoulder: { name: "Shoulder", desc: "Crossing the body's midline and rotating the shoulder." },
      body: { name: "Trunk & tasks", desc: "Trunk control and everyday movements." },
    },
    items: {
      fullFist: { name: "Close and open", desc: "Close gently, then open again." },
      hookFist: { name: "Hook fingers", desc: "Keep the main knuckles straight; bend the middle and end joints." },
      opposition: { name: "Thumb to fingertips", desc: "Touch thumb to index, middle, ring, then little finger." },
      spreading: { name: "Spread fingers", desc: "Spread your fingers, then bring them together." },
      extensionSequence: { name: "Straighten in turn", desc: "Straighten each named finger, then relax." },
      forearmRotation: { name: "Forearm rotation", desc: "Turn your palm up, then down." },
      armRaise: { name: "Arm raise", desc: "Raise your arm sideways as high as is comfortable." },
      elbowBend: { name: "Elbow bend", desc: "Bend your elbow as far as is comfortable, then straighten." },
      directionalReach: { name: "Directional reaching", desc: "Reach forward, across your body, and up." },
      crossMidline: { name: "Cross-body shoulder touch", desc: "Touch the opposite shoulder, then return to the start circle." },
      shoulderFlexion: { name: "Shoulder flexion with rotation", desc: "Raise your arm forward, palm up." },
      externalRotation: { name: "Shoulder external rotation", desc: "Elbow at your side, turn your forearm away from your belly." },
      internalRotation: { name: "Shoulder internal rotation", desc: "Elbow at your side, turn your forearm toward your belly." },
      sitToStand: { name: "Sit to stand", desc: "Lean slightly forward, stand, then sit down slowly." },
      foldTowel: { name: "Fold a towel", desc: "Hand and arm work together, as when folding clothes." },
    },
  },
  how: {
    eyebrow: "How it works",
    title: "One session, four steps.",
    steps: [
      { title: "Set the plan", desc: "Choose exercises, side, repetitions, and rest time together with a caregiver." },
      { title: "Calibrate", desc: "Tuntun notes your starting position and the range that feels comfortable." },
      { title: "Follow along", desc: "Watch the demo, listen to the cues, and move within your ability. Rests are guided breathing." },
      { title: "Review", desc: "See the session summary, practice history, and replays of selected repetitions." },
    ],
  },
  features: {
    eyebrow: "Features",
    title: "Made for patients and caregivers.",
    camera: {
      title: "The camera follows along",
      desc: "Blue circles mark the start and the target. A repetition counts when the movement reaches the target and returns.",
      start: "Start",
      target: "Target",
    },
    voice: {
      title: "Hands-free control",
      desc: "Say a command to pause and resume without touching the screen. Large buttons are always there too.",
      chips: [
        { word: "“stop”", label: "pause" },
        { word: "“go”", label: "resume" },
      ],
    },
    progress: {
      title: "Progress you can see",
      desc: "A summary of every session, practice history, and activity over time.",
      label: "Repetitions this week",
      days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    replay: {
      title: "Replays, your choice",
      desc: "Keep short clips with face and background obscured, a movement skeleton only, or nothing at all.",
      modes: ["Obscured video", "Skeleton only", "Off"],
    },
    rest: {
      title: "Rest with your breath",
      desc: "Between sets, Tuntun guides a few slow breaths before you continue.",
      cue: "Breathe in…",
    },
    access: {
      title: "Comfortable to use together",
      desc: "Large buttons and type help patients and caregivers alike.",
      chips: ["Large type", "Dark mode", "Reduce Motion", "ID / EN"],
    },
  },
  privacy: {
    eyebrow: "Privacy",
    title: "Practice data stays on the iPad.",
    sub: "Tuntun needs no account and does not send practice data to our servers.",
    points: [
      { title: "Camera processed on device", desc: "The camera feed is never uploaded. Replay clips are saved only on the iPad, and you can turn them off." },
      { title: "Voice is not recorded", desc: "Voice commands are recognized on the iPad. No audio or transcripts are saved." },
      { title: "No account, no cloud", desc: "Plans and reports stay on the iPad. No third-party ads or analytics." },
    ],
    disclaimer:
      "Tuntun is a practice aid, not a diagnostic tool or a clinical measurement. Follow the plan and range from a healthcare professional, and stop if movement is painful or unsafe.",
    readMore: "Read the privacy policy",
  },
  partners: {
    eyebrow: "Partnerships",
    title: "Bring Tuntun to more families.",
    sub: "We're open to working with hospitals, clinics, therapists, and other partners.",
    groups: [
      { title: "Hospitals & clinics", desc: "Help patients keep practicing after they go home." },
      { title: "Occupational & physical therapists", desc: "Help us refine the exercises and their ranges." },
      { title: "Investors & partners", desc: "Help Tuntun reach more people." },
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
        q: "Which exercises are included?",
        a: "Hand and finger, arm, and shoulder exercises, sit to stand, and simple tasks such as folding a towel.",
      },
      {
        q: "When can I download Tuntun?",
        a: "Tuntun is currently in testing. Contact us if you'd like early access or want to collaborate.",
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
    sub: "We're opening a limited trial. Tell us what you need and we'll get in touch.",
    cta: "Get early access",
  },
  footer: {
    tagline: "A therapy companion that guides movement practice at home.",
    rights: "All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms and Conditions",
  },
};

export const dictionaries: Record<Locale, Dictionary> = { id, en };
