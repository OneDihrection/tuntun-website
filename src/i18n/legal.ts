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
    date: "20 November 2026",
    contents: "Daftar isi",
    back: "Kembali ke beranda",
  },
  privacy: {
    eyebrow: "Legal",
    title: "Kebijakan Privasi",
    intro:
      "Kebijakan ini menjelaskan bagaimana aplikasi iPad Tuntun: Teman Terapi (“Tuntun”) dan situs web ini menangani informasi Anda. Tuntun memakai kamera iPad untuk memandu pasien dan pendamping berlatih gerak, dan data latihan tetap berada di iPad.",
    summary: {
      title: "Ringkasnya",
      points: [
        "Anda tidak perlu membuat akun, dan data latihan tidak dikirim ke server kami.",
        "Tayangan kamera langsung dan perintah suara diproses di iPad. Tuntun tidak menyimpan rekaman suara atau transkrip.",
        "Secara bawaan, cuplikan singkat dari pengulangan pilihan disimpan di iPad dengan wajah dan latar disamarkan. Anda dapat memilih Kerangka saja atau Tanpa rekaman.",
        "Tidak ada iklan atau analitik pihak ketiga.",
      ],
    },
    sections: [
      {
        heading: "Siapa kami",
        body: [
          "Tuntun dikembangkan dan dikelola oleh Tim Tuntun (“kami”). Untuk pertanyaan apa pun terkait privasi, hubungi kami melalui alamat email di bagian Kontak.",
        ],
      },
      {
        heading: "Data yang diproses dan disimpan aplikasi",
        body: ["Aplikasi memproses informasi berikut di iPad Anda untuk memandu dan mencatat latihan:"],
        list: [
          "Kamera: aplikasi memproses gambar untuk mengikuti gerakan tangan, lengan, dan badan serta menghitung pengulangan. Tayangan kamera langsung tidak diunggah ke layanan milik kami.",
          "Mikrofon dan pengenalan ucapan: perintah suara dikenali di perangkat. Rekaman suara dan transkrip tidak disimpan dan tidak dikirim ke layanan milik kami.",
          "Rencana dan hasil latihan: pengaturan latihan, sisi tubuh, tanggal sesi, jumlah pengulangan atau waktu latihan yang teramati, jawaban tentang rasa latihan, laporan, riwayat kegiatan, dan lencana pencapaian.",
          "Nama pasien (opsional): disimpan di perangkat untuk sapaan.",
          "Tayangan ulang: mode bawaan adalah Video dengan upaya menyamarkan wajah dan latar. Pendamping dapat memilih Kerangka saja, Tanpa rekaman, penyamaran wajah atau latar saja, maupun video tanpa samaran.",
        ],
        after: [
          "Cuplikan video dapat memperlihatkan pasien, orang lain, pakaian, atau ruangan. Penyamaran otomatis tidak menjamin identitas tersembunyi; pada latihan tangan, wajah yang tidak terdeteksi dapat tetap terlihat. Mintalah persetujuan pasien dan perhatikan orang lain di area kamera sebelum memilih perekaman.",
          "Hasil latihan dapat menunjukkan kondisi kesehatan, sehingga hanya disimpan di iPad Anda dan tidak dikirim kepada kami.",
        ],
      },
      {
        heading: "Data yang tidak kami kumpulkan",
        body: ["Aplikasi Tuntun tidak:"],
        list: [
          "mengirim data latihan, gambar, video, atau suara ke server kami atau pihak ketiga;",
          "menggunakan iklan, analitik, pelacakan lintas aplikasi, atau SDK pihak ketiga untuk pengumpulan data;",
          "meminta lokasi, kontak, foto, atau data Apple Health;",
          "menjual atau membagikan data pribadi Anda.",
        ],
        after: [
          "Jika Anda memperlihatkan iPad atau laporannya kepada orang lain, misalnya dokter saat kontrol, orang tersebut dapat melihat data yang ditampilkan.",
        ],
      },
      {
        heading: "Izin perangkat",
        body: [
          "Tuntun memerlukan izin kamera untuk mengikuti gerakan, serta izin mikrofon dan pengenalan ucapan untuk kendali suara. Ketiganya diperlukan untuk memulai latihan. Anda dapat mengubah izin kapan saja melalui Pengaturan iPad. Pilihan perekaman dan penyamaran tersedia di pengaturan Tuntun dan berlaku untuk sesi berikutnya.",
        ],
      },
      {
        heading: "Penyimpanan, cadangan, dan penghapusan",
        body: [
          "Data aplikasi disimpan pada iPad sampai dihapus melalui fitur yang tersedia atau aplikasi dihapus. Anda dapat menghapus laporan beserta tayangan ulangnya dari riwayat; menghapus laporan tidak otomatis menghapus lencana yang sudah diperoleh. Nama pasien dapat dihapus di Pengaturan. Menghapus aplikasi akan menghapus seluruh data Tuntun di perangkat tersebut.",
          "Tuntun tidak memiliki sinkronisasi cloud sendiri. Namun, data di iPad dapat ikut tercadang melalui fitur cadangan perangkat (iCloud atau komputer) sesuai pengaturan Anda dan kebijakan Apple. Menghapus data di aplikasi tidak selalu menghapus salinan di cadangan yang sudah ada.",
        ],
      },
      {
        heading: "Situs web ini",
        body: [
          "Situs web Tuntun tidak menggunakan cookie, analitik, atau pelacak sendiri. Pilihan bahasa Anda disimpan di penyimpanan lokal peramban agar diingat saat Anda berkunjung lagi.",
          "Situs ini dihosting oleh Vercel, yang dapat memproses log server standar (seperti alamat IP, jenis peramban, dan waktu akses) untuk keamanan dan pengoperasian layanan. Jika Anda mengirim email kepada kami, kami menggunakan alamat dan isi email tersebut hanya untuk membalas pesan Anda. Hindari mengirim video pasien atau informasi kesehatan lewat email, kecuali Anda memang ingin membagikannya kepada kami.",
          "Formulir masukan di situs ini memakai Airtable. Kami menyimpan data yang Anda kirim di ruang kerja Airtable kami dan hanya menggunakannya untuk meningkatkan Tuntun; pemrosesan oleh Airtable tunduk pada kebijakan privasi Airtable.",
        ],
      },
      {
        heading: "TestFlight dan Apple",
        body: [
          "Selama masa uji coba, Tuntun didistribusikan melalui TestFlight. Jika Anda mengirim laporan crash atau masukan, Apple dapat membagikannya kepada kami, beserta informasi perangkat dan alamat email penerima undangan penguji. Pemrosesan oleh Apple tunduk pada kebijakan privasi Apple.",
        ],
      },
      {
        heading: "Pengguna dan pendamping",
        body: [
          "Tuntun ditujukan untuk orang dewasa yang sedang pulih dari stroke, bersama pendamping yang membantu menyiapkan iPad dan rencana latihan. Aplikasi tidak ditujukan untuk anak-anak tanpa pengawasan orang tua atau wali.",
        ],
      },
      {
        heading: "Hak Anda",
        body: [
          "Sesuai Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi, Anda berhak untuk mengakses, memperbaiki, menghapus, dan menarik persetujuan atas pemrosesan data pribadi Anda.",
          "Karena data aplikasi berada di perangkat Anda, sebagian besar hak ini dapat Anda jalankan langsung: melihat laporan di aplikasi, menghapus laporan dan tayangan ulang, mengubah mode perekaman, mencabut izin di Pengaturan, atau menghapus aplikasi. Untuk data yang kami terima melalui email atau TestFlight, hubungi kami dan kami akan menindaklanjuti dalam waktu yang wajar.",
        ],
      },
      {
        heading: "Perubahan kebijakan",
        body: [
          "Kami dapat memperbarui kebijakan ini jika cara aplikasi menangani data berubah. Tanggal “Terakhir diperbarui” akan diubah, dan kami akan mengumumkan perubahan penting melalui situs ini atau aplikasi.",
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
      "Syarat dan Ketentuan ini mengatur penggunaan aplikasi iPad Tuntun: Teman Terapi (“Tuntun”) dan situs web ini. Harap baca dengan saksama sebelum menggunakan Tuntun.",
    sections: [
      {
        heading: "Penerimaan ketentuan",
        body: [
          "Dengan mengunduh, memasang, atau menggunakan Tuntun, Anda menyetujui Syarat dan Ketentuan ini serta Kebijakan Privasi kami. Jika tidak setuju, mohon tidak menggunakan Tuntun.",
        ],
      },
      {
        heading: "Tentang Tuntun",
        body: [
          "Tuntun membantu Anda berlatih gerak tubuh bagian atas secara mandiri di rumah, termasuk tangan dan jari, lengan, bahu, berdiri dari posisi duduk, dan aktivitas sederhana. Aplikasi menampilkan contoh gerakan, memberi petunjuk suara dan teks, mengamati gerakan lewat kamera, dan menyediakan laporan serta tayangan ulang opsional.",
        ],
      },
      {
        heading: "Bukan layanan medis",
        body: ["Tuntun adalah alat bantu latihan, bukan perangkat medis, dan tidak memberikan diagnosis, pengobatan, atau resep terapi."],
        list: [
          "Konsultasikan dengan dokter atau terapis sebelum memulai latihan. Jenis, jumlah, dan batas gerak latihan sebaiknya mengikuti arahan mereka.",
          "Pengaturan bawaan di aplikasi hanyalah contoh, bukan dosis rehabilitasi yang dianjurkan.",
          "Hentikan latihan jika Anda merasakan nyeri, pusing, sesak napas, kehilangan keseimbangan, atau ketidaknyamanan lain, lalu hubungi tenaga kesehatan.",
          "Dalam keadaan darurat, segera hubungi 112 atau 119.",
        ],
      },
      {
        heading: "Pengguna dan pendamping",
        body: [
          "Tuntun ditujukan untuk orang dewasa. Sebaiknya pendamping mengawasi latihan, terutama pada awal pemakaian dan pada latihan berdiri. Pendamping bertanggung jawab memastikan posisi, lingkungan, dan intensitas latihan aman bagi pengguna, serta meminta persetujuan pasien sebelum menyimpan tayangan ulang.",
        ],
      },
      {
        heading: "Penggunaan yang wajar",
        body: ["Anda setuju untuk tidak:"],
        list: [
          "menyalin, memodifikasi, membongkar, atau merekayasa balik aplikasi kecuali diizinkan oleh hukum;",
          "menggunakan Tuntun untuk tujuan yang melanggar hukum, termasuk merekam orang lain tanpa persetujuan;",
          "mendistribusikan ulang aplikasi, video, gambar, atau materi Tuntun tanpa izin tertulis.",
        ],
      },
      {
        heading: "Akurasi pelacakan",
        body: [
          "Hitungan repetisi, waktu latihan, dan rentang gerak adalah perkiraan dari kamera yang dapat dipengaruhi posisi, cahaya, jarak, sudut, dan bagian tubuh yang tertutup. Angka tersebut bukan pengukuran klinis atau bukti pemulihan, dan tidak boleh dijadikan satu-satunya dasar keputusan medis.",
        ],
      },
      {
        heading: "Versi uji coba",
        body: [
          "Selama masa uji coba (termasuk melalui TestFlight), Tuntun dapat berisi kekurangan, berubah, atau dihentikan sewaktu-waktu. Aplikasi disediakan “sebagaimana adanya” tanpa jaminan apa pun bahwa aplikasi akan selalu tersedia, bebas kesalahan, atau sesuai untuk kebutuhan tertentu.",
        ],
      },
      {
        heading: "Kekayaan intelektual",
        body: [
          "Nama Tuntun, logo, desain, ilustrasi, animasi, narasi, dan perangkat lunak adalah milik Tim Tuntun atau pemberi lisensinya. Tuntun memakai huruf Plus Jakarta Sans di bawah SIL Open Font License. Kami memberi Anda hak terbatas, tidak eksklusif, dan tidak dapat dialihkan untuk memakai Tuntun bagi keperluan pribadi.",
        ],
      },
      {
        heading: "Batasan tanggung jawab",
        body: [
          "Sejauh diizinkan oleh hukum, Tim Tuntun tidak bertanggung jawab atas cedera, kerugian, atau kerusakan yang timbul dari penggunaan atau ketidakmampuan menggunakan Tuntun, termasuk latihan yang dilakukan tanpa arahan tenaga kesehatan. Ketentuan ini tidak membatasi hak Anda yang tidak dapat dikecualikan menurut hukum yang berlaku.",
        ],
      },
      {
        heading: "Perubahan ketentuan",
        body: [
          "Kami dapat memperbarui Syarat dan Ketentuan ini. Tanggal “Terakhir diperbarui” akan diubah, dan penggunaan Tuntun setelah perubahan berarti Anda menerima ketentuan yang baru.",
        ],
      },
      {
        heading: "Hukum yang berlaku",
        body: [
          "Syarat dan Ketentuan ini diatur oleh hukum Republik Indonesia. Jika terjadi perselisihan, para pihak akan lebih dulu berusaha menyelesaikannya secara musyawarah sebelum menempuh jalur hukum yang berlaku.",
        ],
      },
      {
        heading: "Kontak",
        body: [`Kirim pertanyaan tentang Syarat dan Ketentuan ini ke ${CONTACT_EMAIL}.`],
      },
    ],
  },
};

const en: LegalContent = {
  ui: {
    updated: "Last updated",
    date: "20 November 2026",
    contents: "Contents",
    back: "Back to home",
  },
  privacy: {
    eyebrow: "Legal",
    title: "Privacy Policy",
    intro:
      "This policy explains how the Tuntun: Teman Terapi iPad app (“Tuntun”) and this website handle your information. Tuntun uses the iPad camera to guide a patient and caregiver through movement practice, and practice data stays on the iPad.",
    summary: {
      title: "In short",
      points: [
        "You don't need an account, and practice data is never sent to our servers.",
        "The live camera feed and voice commands are processed on the iPad. Tuntun saves no audio or transcripts.",
        "By default, short clips of selected repetitions are saved on the iPad with face and background obscured. You can choose Skeleton only or Off.",
        "No third-party advertising or analytics.",
      ],
    },
    sections: [
      {
        heading: "Who we are",
        body: [
          "Tuntun is developed and operated by the Tuntun team (“we”). For any privacy question, contact us at the email address in the Contact section.",
        ],
      },
      {
        heading: "Information the app uses and stores",
        body: ["The app processes this information on your iPad to guide and record practice:"],
        list: [
          "Camera: the app processes images to follow hand, arm, and body movement and count repetitions. The live camera feed is not uploaded to a service we operate.",
          "Microphone and speech recognition: voice commands are recognized on the device. Audio recordings and transcripts are not saved or sent to a service we operate.",
          "Plans and practice results: practice settings, the side being trained, session dates, observed repetitions or practice time, responses about how practice felt, reports, activity history, and achievement badges.",
          "Patient name (optional): stored on the device for greetings.",
          "Replays: the default is Video with automated face and background obscuring. A caregiver can choose Skeleton only, Off, face or background obscuring alone, or unblurred video.",
        ],
        after: [
          "Clips may show the patient, other people, clothing, or the room. Automated obscuring cannot guarantee anonymity; in hand exercises, a face that is not detected may remain visible. Obtain the patient's consent and consider anyone else in camera view before recording.",
          "Practice results can reveal health conditions, so they stay on your iPad and are never sent to us.",
        ],
      },
      {
        heading: "Information we do not collect",
        body: ["The Tuntun app does not:"],
        list: [
          "send practice data, images, video, or audio to our servers or any third party;",
          "use advertising, analytics, cross-app tracking, or third-party data-collection SDKs;",
          "request location, contacts, photos, or Apple Health data;",
          "sell or share your personal data.",
        ],
        after: [
          "If you show the iPad or its reports to someone else, such as a doctor at a follow-up visit, they can see the information displayed.",
        ],
      },
      {
        heading: "Device permissions",
        body: [
          "Tuntun needs camera access to follow movement, and microphone and speech-recognition access for voice control. All three are required to start practice. You can change permissions at any time in iPad Settings. Recording and obscuring choices are in Tuntun's settings and apply to later sessions.",
        ],
      },
      {
        heading: "Storage, backup, and deletion",
        body: [
          "App information stays on the iPad until you delete it using the available controls or remove the app. You can delete reports and their replays from history; deleting a report does not erase badges already earned. You can clear the patient name in Settings. Removing the app deletes all Tuntun data on that device.",
          "Tuntun has no cloud sync of its own. However, information on the iPad may be included in device backups (iCloud or a computer) depending on your settings and Apple's policies. Deleting information in the app may not erase copies already held in backups.",
        ],
      },
      {
        heading: "This website",
        body: [
          "The Tuntun website uses no cookies, analytics, or trackers of its own. Your language choice is saved in your browser's local storage so the site remembers it on your next visit.",
          "The site is hosted by Vercel, which may process standard server logs (such as IP address, browser type, and access time) for security and operation. If you email us, we use your address and message only to reply to you. Avoid emailing patient videos or health information unless you mean to share them with us.",
          "The feedback form on this site runs on Airtable. We store what you submit in our Airtable workspace and use it only to improve Tuntun; Airtable's processing is governed by Airtable's privacy policy.",
        ],
      },
      {
        heading: "TestFlight and Apple",
        body: [
          "During testing, Tuntun is distributed through TestFlight. If you send crash reports or feedback, Apple may share them with us, along with device information and the email address your tester invitation went to. Apple's processing is governed by Apple's privacy policy.",
        ],
      },
      {
        heading: "Users and caregivers",
        body: [
          "Tuntun is intended for adults recovering from stroke, with a caregiver helping set up the iPad and the practice plan. The app is not intended for children without the supervision of a parent or guardian.",
        ],
      },
      {
        heading: "Your rights",
        body: [
          "Under Indonesia's Law No. 27 of 2022 on Personal Data Protection, you have the right to access, correct, and delete your personal data, and to withdraw consent to its processing.",
          "Because app data lives on your device, you can exercise most of these rights directly: view reports in the app, delete reports and replays, change the recording mode, revoke permissions in Settings, or delete the app. For data we receive by email or through TestFlight, contact us and we will respond within a reasonable time.",
        ],
      },
      {
        heading: "Changes to this policy",
        body: [
          "We may update this policy if the app changes how it handles information. The “Last updated” date will change, and we will announce significant changes on this site or in the app.",
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
      "These Terms and Conditions govern your use of the Tuntun: Teman Terapi iPad app (“Tuntun”) and this website. Please read them carefully before using Tuntun.",
    sections: [
      {
        heading: "Acceptance of terms",
        body: [
          "By downloading, installing, or using Tuntun, you agree to these Terms and Conditions and our Privacy Policy. If you do not agree, please do not use Tuntun.",
        ],
      },
      {
        heading: "About Tuntun",
        body: [
          "Tuntun helps you practice upper-body movement independently at home, including hand and finger, arm, and shoulder exercises, sit to stand, and simple tasks. It shows movement examples, gives spoken and written cues, observes movement through the camera, and provides reports and optional replays.",
        ],
      },
      {
        heading: "Not a medical service",
        body: ["Tuntun is a practice aid, not a medical device, and does not provide diagnosis, treatment, or therapy prescriptions."],
        list: [
          "Consult a doctor or therapist before starting. The type, amount, and range of exercise should follow their directions.",
          "Default settings in the app are examples only, not a recommended rehabilitation dose.",
          "Stop exercising if you feel pain, dizziness, shortness of breath, loss of balance, or other discomfort, and contact a health professional.",
          "In an emergency, call 112 or 119 immediately.",
        ],
      },
      {
        heading: "Users and caregivers",
        body: [
          "Tuntun is intended for adults. A caregiver should supervise practice, especially when first using the app and during standing exercises. Caregivers are responsible for making sure the position, environment, and intensity of practice are safe, and for obtaining the patient's consent before saving replays.",
        ],
      },
      {
        heading: "Acceptable use",
        body: ["You agree not to:"],
        list: [
          "copy, modify, decompile, or reverse engineer the app except as permitted by law;",
          "use Tuntun for any unlawful purpose, including recording others without consent;",
          "redistribute the app, videos, images, or other Tuntun materials without written permission.",
        ],
      },
      {
        heading: "Tracking accuracy",
        body: [
          "Repetition counts, practice time, and range of movement are camera-based estimates that can be affected by positioning, lighting, distance, angle, and hidden parts of the body. They are not clinical measurements or proof of recovery, and must not be the sole basis for medical decisions.",
        ],
      },
      {
        heading: "Pre-release versions",
        body: [
          "During testing (including via TestFlight), Tuntun may contain defects, change, or be discontinued at any time. The app is provided “as is” without any warranty that it will always be available, error-free, or fit for a particular purpose.",
        ],
      },
      {
        heading: "Intellectual property",
        body: [
          "The Tuntun name, logo, design, illustrations, animations, narration, and software belong to the Tuntun team or its licensors. Tuntun uses the Plus Jakarta Sans typeface under the SIL Open Font License. We grant you a limited, non-exclusive, non-transferable right to use Tuntun for personal purposes.",
        ],
      },
      {
        heading: "Limitation of liability",
        body: [
          "To the extent permitted by law, the Tuntun team is not liable for injury, loss, or damage arising from the use of or inability to use Tuntun, including exercise done without a health professional's guidance. Nothing in these terms limits rights you have that cannot be excluded under applicable law.",
        ],
      },
      {
        heading: "Changes to these terms",
        body: [
          "We may update these Terms and Conditions. The “Last updated” date will change, and continuing to use Tuntun after a change means you accept the new terms.",
        ],
      },
      {
        heading: "Governing law",
        body: [
          "These Terms and Conditions are governed by the laws of the Republic of Indonesia. If a dispute arises, the parties will first try to settle it through good-faith discussion before pursuing applicable legal channels.",
        ],
      },
      {
        heading: "Contact",
        body: [`Send questions about these Terms and Conditions to ${CONTACT_EMAIL}.`],
      },
    ],
  },
};

export const legal: Record<Locale, LegalContent> = { id, en };
