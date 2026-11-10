import { CONTACT_EMAIL } from "@/config";
import type { Locale } from "./dictionary";

export type LegalSection = {
  heading: string;
  body: string[];
  list?: string[];
  after?: string[];
};

export type LegalDoc = {
  eyebrow: string;
  title: string;
  intro: string;
  summary?: { title: string; points: string[] };
  sections: LegalSection[];
};

export type LegalKind = "privacy" | "terms";

type LegalContent = Record<LegalKind, LegalDoc> & {
  ui: { updated: string; date: string; contents: string; back: string };
};

const id: LegalContent = {
  ui: {
    updated: "Terakhir diperbarui",
    date: "10 November 2026",
    contents: "Daftar isi",
    back: "Kembali ke beranda",
  },
  privacy: {
    eyebrow: "Legal",
    title: "Kebijakan Privasi",
    intro:
      "Kebijakan ini menjelaskan bagaimana aplikasi iPad TeMan: Terapi Mandiri (“TeMan”) dan situs web ini menangani informasi Anda. Kami merancang TeMan agar data latihan tetap berada di perangkat Anda.",
    summary: {
      title: "Ringkasnya",
      points: [
        "Tidak perlu akun. Kami tidak meminta nama, email, atau nomor telepon di aplikasi.",
        "Video kamera dan suara diproses langsung di iPad dan tidak pernah disimpan.",
        "Ringkasan latihan tersimpan di iPad Anda. Tidak ada server atau cloud TeMan.",
        "Kami tidak memakai iklan, analitik, atau pelacak pihak ketiga.",
      ],
    },
    sections: [
      {
        heading: "Siapa kami",
        body: [
          "TeMan dikembangkan dan dikelola oleh Tim TeMan (“kami”). Untuk pertanyaan apa pun terkait privasi, hubungi kami melalui alamat email di bagian Kontak.",
        ],
      },
      {
        heading: "Data yang diproses aplikasi",
        body: ["Agar latihan dapat dipandu dan dicatat, aplikasi memproses informasi berikut di perangkat Anda:"],
        list: [
          "Gambar kamera: dianalisis secara waktu nyata untuk mengenali posisi tangan, jari, dan tubuh. Gambar, video, dan titik-titik tangan dibuang setelah dianalisis dan tidak disimpan.",
          "Perintah suara (opsional): dikenali oleh fitur pengenalan suara di perangkat Apple dengan mode khusus perangkat. Rekaman suara dan transkrip tidak disimpan.",
          "Rencana latihan: tangan yang dilatih, jumlah set, repetisi, dan waktu istirahat yang diatur pendamping.",
          "Ringkasan sesi: tanggal, gerakan, repetisi dan set yang tercapai, durasi, status dilewati atau belum selesai, perubahan rentang gerak relatif, dan penilaian tingkat kesulitan yang Anda pilih.",
          "Pencapaian: catatan hari beruntun dan lencana yang diperoleh.",
        ],
        after: [
          "Ringkasan sesi dapat mencerminkan kondisi kesehatan. Karena itu informasi ini hanya disimpan di iPad Anda dan tidak dikirim kepada kami.",
        ],
      },
      {
        heading: "Data yang tidak kami kumpulkan",
        body: ["Aplikasi TeMan tidak:"],
        list: [
          "mengirim data latihan, gambar, atau suara ke server kami atau pihak ketiga;",
          "menggunakan iklan, analitik, pelacakan lintas aplikasi, atau SDK pihak ketiga untuk pengumpulan data;",
          "meminta lokasi, kontak, foto, atau data Apple Health;",
          "menjual atau membagikan data pribadi Anda.",
        ],
      },
      {
        heading: "Izin perangkat",
        body: [
          "TeMan meminta izin kamera untuk pelacakan latihan, serta izin mikrofon dan pengenalan suara untuk kendali suara. Kendali suara bersifat opsional. Anda dapat mencabut izin kapan saja melalui Pengaturan iPad; tanpa izin kamera, pelacakan latihan tidak dapat berjalan.",
        ],
      },
      {
        heading: "Penyimpanan, cadangan, dan penghapusan",
        body: [
          "Data aplikasi disimpan di penyimpanan lokal aplikasi pada iPad. TeMan tidak memiliki sinkronisasi cloud sendiri. Namun, data ini dapat ikut tercadang melalui fitur cadangan iPad (iCloud atau komputer) sesuai pengaturan perangkat Anda, yang diatur oleh kebijakan Apple.",
          "Anda dapat menghapus laporan sesi tertentu di dalam aplikasi. Menghapus aplikasi dari iPad akan menghapus seluruh data TeMan di perangkat tersebut.",
        ],
      },
      {
        heading: "Situs web ini",
        body: [
          "Situs web TeMan tidak menggunakan cookie, analitik, atau pelacak. Pilihan bahasa Anda disimpan di penyimpanan lokal peramban agar tetap diingat.",
          "Situs ini dihosting oleh Vercel, yang dapat memproses log server standar (seperti alamat IP, jenis peramban, dan waktu akses) untuk keamanan dan pengoperasian layanan. Jika Anda mengirim email kepada kami, kami menggunakan alamat dan isi email tersebut hanya untuk membalas pesan Anda.",
        ],
      },
      {
        heading: "TestFlight dan Apple",
        body: [
          "Selama masa uji coba, TeMan didistribusikan melalui TestFlight. Apple dapat membagikan kepada kami laporan crash dan masukan yang Anda pilih untuk dikirim, beserta informasi perangkat dan alamat email undangan penguji. Pemrosesan oleh Apple tunduk pada kebijakan privasi Apple.",
        ],
      },
      {
        heading: "Pengguna dan pendamping",
        body: [
          "TeMan ditujukan untuk orang dewasa yang menjalani latihan tangan, idealnya bersama pendamping atau keluarga. Aplikasi tidak ditujukan untuk anak-anak tanpa pengawasan orang tua atau wali.",
        ],
      },
      {
        heading: "Hak Anda",
        body: [
          "Sesuai Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi, Anda berhak untuk mengakses, memperbaiki, menghapus, dan menarik persetujuan atas pemrosesan data pribadi Anda.",
          "Karena data aplikasi berada di perangkat Anda, sebagian besar hak ini dapat Anda jalankan langsung: melihat laporan di aplikasi, menghapus laporan, mencabut izin di Pengaturan, atau menghapus aplikasi. Untuk data yang kami terima melalui email atau TestFlight, hubungi kami dan kami akan menindaklanjuti dalam waktu yang wajar.",
        ],
      },
      {
        heading: "Perubahan kebijakan",
        body: [
          "Kami dapat memperbarui kebijakan ini, misalnya saat menambahkan fitur baru. Tanggal “Terakhir diperbarui” akan diubah, dan perubahan penting akan diberitahukan melalui situs ini atau aplikasi.",
        ],
      },
      {
        heading: "Kontak",
        body: [`Pertanyaan atau permintaan terkait privasi dapat dikirim ke ${CONTACT_EMAIL}.`],
      },
    ],
  },
  terms: {
    eyebrow: "Legal",
    title: "Syarat dan Ketentuan",
    intro:
      "Syarat dan Ketentuan ini mengatur penggunaan aplikasi iPad TeMan: Terapi Mandiri (“TeMan”) dan situs web ini. Harap baca dengan saksama sebelum menggunakan TeMan.",
    sections: [
      {
        heading: "Penerimaan ketentuan",
        body: [
          "Dengan mengunduh, memasang, atau menggunakan TeMan, Anda menyetujui Syarat dan Ketentuan ini serta Kebijakan Privasi kami. Jika tidak setuju, mohon tidak menggunakan TeMan.",
        ],
      },
      {
        heading: "Tentang TeMan",
        body: [
          "TeMan adalah aplikasi untuk membantu latihan tangan, jari, dan lengan secara mandiri di rumah, dengan contoh gerakan 3D, aba-aba suara, pelacakan melalui kamera, dan laporan kemajuan.",
        ],
      },
      {
        heading: "Bukan layanan medis",
        body: ["TeMan adalah alat bantu latihan dan bukan perangkat medis. TeMan tidak memberikan diagnosis, pengobatan, atau resep terapi."],
        list: [
          "Konsultasikan dengan dokter atau terapis sebelum memulai latihan. Jenis dan jumlah latihan sebaiknya mengikuti arahan mereka.",
          "Pengaturan bawaan di aplikasi hanyalah contoh, bukan dosis rehabilitasi yang dianjurkan.",
          "Hentikan latihan jika Anda merasakan nyeri, pusing, sesak napas, atau ketidaknyamanan lain, lalu hubungi tenaga kesehatan.",
          "Dalam keadaan darurat, segera hubungi 112 atau 119.",
        ],
      },
      {
        heading: "Pengguna dan pendamping",
        body: [
          "TeMan ditujukan untuk orang dewasa. Kami menganjurkan latihan dilakukan dengan pengawasan pendamping, terutama pada awal pemakaian. Pendamping bertanggung jawab memastikan posisi, lingkungan, dan intensitas latihan aman bagi pengguna.",
        ],
      },
      {
        heading: "Penggunaan yang wajar",
        body: ["Anda setuju untuk tidak:"],
        list: [
          "menyalin, memodifikasi, membongkar, atau merekayasa balik aplikasi kecuali diizinkan oleh hukum;",
          "menggunakan TeMan untuk tujuan yang melanggar hukum;",
          "mendistribusikan ulang aplikasi, video, gambar, atau materi TeMan tanpa izin tertulis.",
        ],
      },
      {
        heading: "Akurasi pelacakan",
        body: [
          "Hitungan repetisi dan perubahan rentang gerak adalah perkiraan dari kamera yang dapat dipengaruhi cahaya, jarak, sudut, dan bagian tangan yang tertutup. Angka tersebut bukan pengukuran klinis, kekuatan genggaman, sudut sendi, atau bukti pemulihan, dan tidak boleh dijadikan satu-satunya dasar keputusan medis.",
        ],
      },
      {
        heading: "Versi uji coba",
        body: [
          "Selama masa uji coba (termasuk melalui TestFlight), TeMan dapat berisi kekurangan, berubah, atau dihentikan sewaktu-waktu. Aplikasi disediakan “sebagaimana adanya” tanpa jaminan apa pun bahwa aplikasi akan selalu tersedia, bebas kesalahan, atau sesuai untuk kebutuhan tertentu.",
        ],
      },
      {
        heading: "Kekayaan intelektual",
        body: [
          "Nama TeMan, logo, desain, ilustrasi, animasi, dan perangkat lunak adalah milik Tim TeMan atau pemberi lisensinya. Huruf Plus Jakarta Sans digunakan di bawah SIL Open Font License. Anda diberikan hak terbatas, tidak eksklusif, dan tidak dapat dialihkan untuk menggunakan TeMan untuk keperluan pribadi.",
        ],
      },
      {
        heading: "Batasan tanggung jawab",
        body: [
          "Sejauh diizinkan oleh hukum, Tim TeMan tidak bertanggung jawab atas cedera, kerugian, atau kerusakan yang timbul dari penggunaan atau ketidakmampuan menggunakan TeMan, termasuk latihan yang dilakukan tanpa arahan tenaga kesehatan. Ketentuan ini tidak membatasi hak Anda yang tidak dapat dikecualikan menurut hukum yang berlaku.",
        ],
      },
      {
        heading: "Perubahan ketentuan",
        body: [
          "Kami dapat memperbarui Syarat dan Ketentuan ini. Tanggal “Terakhir diperbarui” akan diubah, dan penggunaan TeMan setelah perubahan berarti Anda menerima ketentuan yang baru.",
        ],
      },
      {
        heading: "Hukum yang berlaku",
        body: [
          "Syarat dan Ketentuan ini diatur oleh hukum Republik Indonesia. Setiap perselisihan akan diupayakan diselesaikan secara musyawarah terlebih dahulu sebelum menempuh jalur hukum yang berlaku.",
        ],
      },
      {
        heading: "Kontak",
        body: [`Pertanyaan tentang Syarat dan Ketentuan ini dapat dikirim ke ${CONTACT_EMAIL}.`],
      },
    ],
  },
};

const en: LegalContent = {
  ui: {
    updated: "Last updated",
    date: "10 November 2026",
    contents: "Contents",
    back: "Back to home",
  },
  privacy: {
    eyebrow: "Legal",
    title: "Privacy Policy",
    intro:
      "This policy explains how the TeMan: Terapi Mandiri iPad app (“TeMan”) and this website handle your information. We designed TeMan so that your practice data stays on your device.",
    summary: {
      title: "In short",
      points: [
        "No account needed. The app never asks for your name, email, or phone number.",
        "Camera video and voice are processed on the iPad and never saved.",
        "Session summaries are stored on your iPad. There is no TeMan server or cloud.",
        "We use no ads, analytics, or third-party trackers.",
      ],
    },
    sections: [
      {
        heading: "Who we are",
        body: [
          "TeMan is developed and operated by the TeMan team (“we”). For any privacy question, contact us at the email address in the Contact section.",
        ],
      },
      {
        heading: "Data the app processes",
        body: ["To guide and record practice, the app processes the following on your device:"],
        list: [
          "Camera images: analyzed in real time to recognize hand, finger, and body positions. Images, video, and hand points are discarded after analysis and never saved.",
          "Voice commands (optional): recognized by Apple's on-device speech recognition. Audio recordings and transcripts are not saved.",
          "Exercise plan: the hand being trained, sets, repetitions, and rest time chosen by the caregiver.",
          "Session summaries: date, movements, repetitions and sets completed, duration, skipped or incomplete status, relative range-of-motion change, and the difficulty rating you choose.",
          "Achievements: streak records and earned badges.",
        ],
        after: [
          "Session summaries may reflect health conditions. That is why this information is kept only on your iPad and is never sent to us.",
        ],
      },
      {
        heading: "Data we do not collect",
        body: ["The TeMan app does not:"],
        list: [
          "send practice data, images, or audio to our servers or any third party;",
          "use advertising, analytics, cross-app tracking, or third-party data-collection SDKs;",
          "request location, contacts, photos, or Apple Health data;",
          "sell or share your personal data.",
        ],
      },
      {
        heading: "Device permissions",
        body: [
          "TeMan asks for camera access for exercise tracking, and microphone and speech recognition access for voice control. Voice control is optional. You can revoke permissions at any time in iPad Settings; without camera access, exercise tracking cannot run.",
        ],
      },
      {
        heading: "Storage, backup, and deletion",
        body: [
          "App data is stored in the app's local storage on the iPad. TeMan has no cloud sync of its own. However, this data may be included in iPad backups (iCloud or a computer) depending on your device settings, which are governed by Apple's policies.",
          "You can delete individual session reports inside the app. Deleting the app from the iPad removes all TeMan data on that device.",
        ],
      },
      {
        heading: "This website",
        body: [
          "The TeMan website uses no cookies, analytics, or trackers. Your language choice is saved in your browser's local storage so it is remembered.",
          "The site is hosted by Vercel, which may process standard server logs (such as IP address, browser type, and access time) for security and operation. If you email us, we use your address and message only to reply to you.",
        ],
      },
      {
        heading: "TestFlight and Apple",
        body: [
          "During testing, TeMan is distributed through TestFlight. Apple may share with us crash reports and feedback you choose to send, along with device information and the tester invitation email address. Apple's processing is governed by Apple's privacy policy.",
        ],
      },
      {
        heading: "Users and caregivers",
        body: [
          "TeMan is intended for adults doing hand exercises, ideally together with a caregiver or family member. The app is not intended for children without the supervision of a parent or guardian.",
        ],
      },
      {
        heading: "Your rights",
        body: [
          "Under Indonesia's Law No. 27 of 2022 on Personal Data Protection, you have the right to access, correct, and delete your personal data, and to withdraw consent to its processing.",
          "Because app data lives on your device, you can exercise most of these rights directly: view reports in the app, delete reports, revoke permissions in Settings, or delete the app. For data we receive by email or through TestFlight, contact us and we will respond within a reasonable time.",
        ],
      },
      {
        heading: "Changes to this policy",
        body: [
          "We may update this policy, for example when adding new features. The “Last updated” date will change, and significant changes will be announced on this site or in the app.",
        ],
      },
      {
        heading: "Contact",
        body: [`Privacy questions or requests can be sent to ${CONTACT_EMAIL}.`],
      },
    ],
  },
  terms: {
    eyebrow: "Legal",
    title: "Terms and Conditions",
    intro:
      "These Terms and Conditions govern your use of the TeMan: Terapi Mandiri iPad app (“TeMan”) and this website. Please read them carefully before using TeMan.",
    sections: [
      {
        heading: "Acceptance of terms",
        body: [
          "By downloading, installing, or using TeMan, you agree to these Terms and Conditions and our Privacy Policy. If you do not agree, please do not use TeMan.",
        ],
      },
      {
        heading: "About TeMan",
        body: [
          "TeMan is an app that supports independent hand, finger, and arm exercises at home, with 3D movement demos, spoken cues, camera-based tracking, and progress reports.",
        ],
      },
      {
        heading: "Not a medical service",
        body: ["TeMan is a practice aid and not a medical device. TeMan does not provide diagnosis, treatment, or therapy prescriptions."],
        list: [
          "Consult a doctor or therapist before starting. The type and amount of exercise should follow their directions.",
          "Default settings in the app are examples only, not a recommended rehabilitation dose.",
          "Stop exercising if you feel pain, dizziness, shortness of breath, or other discomfort, and contact a health professional.",
          "In an emergency, call 112 or 119 immediately.",
        ],
      },
      {
        heading: "Users and caregivers",
        body: [
          "TeMan is intended for adults. We recommend practicing under a caregiver's supervision, especially when first using the app. Caregivers are responsible for making sure the position, environment, and intensity of practice are safe for the user.",
        ],
      },
      {
        heading: "Acceptable use",
        body: ["You agree not to:"],
        list: [
          "copy, modify, decompile, or reverse engineer the app except as permitted by law;",
          "use TeMan for any unlawful purpose;",
          "redistribute the app, videos, images, or other TeMan materials without written permission.",
        ],
      },
      {
        heading: "Tracking accuracy",
        body: [
          "Repetition counts and range-of-motion changes are camera-based estimates that can be affected by lighting, distance, angle, and hidden parts of the hand. They are not clinical measurements, grip strength, joint angles, or proof of recovery, and must not be the sole basis for medical decisions.",
        ],
      },
      {
        heading: "Pre-release versions",
        body: [
          "During testing (including via TestFlight), TeMan may contain defects, change, or be discontinued at any time. The app is provided “as is” without any warranty that it will always be available, error-free, or fit for a particular purpose.",
        ],
      },
      {
        heading: "Intellectual property",
        body: [
          "The TeMan name, logo, design, illustrations, animations, and software belong to the TeMan team or its licensors. The Plus Jakarta Sans typeface is used under the SIL Open Font License. You are granted a limited, non-exclusive, non-transferable right to use TeMan for personal purposes.",
        ],
      },
      {
        heading: "Limitation of liability",
        body: [
          "To the extent permitted by law, the TeMan team is not liable for injury, loss, or damage arising from the use of or inability to use TeMan, including exercise done without a health professional's guidance. Nothing in these terms limits rights you have that cannot be excluded under applicable law.",
        ],
      },
      {
        heading: "Changes to these terms",
        body: [
          "We may update these Terms and Conditions. The “Last updated” date will change, and continuing to use TeMan after a change means you accept the new terms.",
        ],
      },
      {
        heading: "Governing law",
        body: [
          "These Terms and Conditions are governed by the laws of the Republic of Indonesia. Any dispute will first be resolved through good-faith discussion before pursuing applicable legal channels.",
        ],
      },
      {
        heading: "Contact",
        body: [`Questions about these Terms and Conditions can be sent to ${CONTACT_EMAIL}.`],
      },
    ],
  },
};

export const legal: Record<Locale, LegalContent> = { id, en };
