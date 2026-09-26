---
title: Sesi yang tidak bisa Anda bawa
description: Terjemahan bahasa Indonesia lengkap dari artikel resmi Earendil Engineering “The Session You Cannot Take With You”.
prev:
  text: Terjemahan Berlisensi Resmi Earendil
  link: /translations/
next:
  text: Mekanisme pemadatan konteks di Pi
  link: /translations/compaction-in-pi
---

<span class="library-status">Terjemahan berlisensi resmi Earendil · 01</span>

# Sesi yang tidak bisa Anda bawa

> - **Judul asli** *The Session You Cannot Take With You*
> - **Penulis** Earendil Engineering `<rfc@earendil.com>`
> - **Tanggal terbit** 2026-07-30
> - **Alamat asli** [earendil.com/posts/session-portability](https://earendil.com/posts/session-portability/)
> - **Catatan lisensi** Diadaptasi dan diterjemahkan dengan izin dari Earendil (*Adapted and translated with permission from Earendil.*)
> - **Lisensi terjemahan** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh-hans)

Janji awal API inferensi sederhana dan menyenangkan: kirimkan sejumlah input, terima sejumlah output. Jika Anda menyimpan keduanya, Anda telah menyimpan percakapan itu. Anda dapat memeriksanya, mengarsipkannya, atau memutarnya ulang, dan juga dapat menyerahkannya kepada model lain.

Abstraksi ini tidak pernah sepenuhnya berlaku. Misalnya, [prompt cache](/translations/prompt-caching) berada di GPU orang lain; cara tokenisasi setiap model berbeda; dan sampling tidak dapat direproduksi—dan memang sengaja demikian. Namun, **catatan semantik** sesi yang berbentuk transkrip tetap dapat menjadi milik pengguna. Sebuah transkrip seharusnya mencakup instruksi, pesan, pemanggilan tool, dan hasil tool. Model lain yang cukup mumpuni mungkin tidak dapat melanjutkannya dengan cara yang persis sama, tetapi ia dapat memahami apa yang telah terjadi dan mengambil alih pekerjaan berikutnya.

Yang menjengkelkan, API inferensi perlahan menyimpang dari sifat ini—setidaknya sampai batas tertentu. API semakin sering mengembalikan campuran teks dan status yang terikat pada provider, dan status itu sengaja dirancang agar tidak portabel.

- Token inferensi yang ditagihkan kepada pengguna, tetapi paling banyak hanya mengembalikan ringkasan yang tidak berguna; isi sebenarnya hanyalah blok data terenkripsi yang tidak dapat dibaca.
- Pencarian web yang dapat dilihat model tetapi tidak dapat dilihat klien.
- Konteks terkompresi yang hanya dapat didekripsi oleh provider asal.
- Instruksi dan pesan Subagent yang disembunyikan dalam bentuk payload terenkripsi sehingga tidak terlihat oleh aplikasi yang menjalankan Agent.
- Referensi file, vector store, container, dan cache yang tidak dapat diuraikan di tempat lain.
- Status respons dan percakapan yang sepenuhnya bergantung pada ID, yang data tujuan ID-ID tersebut seluruhnya tersimpan di server provider.

Provider dengan mudah memberikan alasan mendasar untuk setiap fitur, dan dapat mengajukan argumen baik mengapa desain ini menguntungkan pengguna. Namun jika digabungkan, semuanya mengubah kepemilikan sesi AI dalam praktik: transkrip di komputer Anda tidak lagi setara dengan sesi Anda, melainkan hanya tampilan sebagian dari suatu sesi; status berjalannya sesi itu milik provider inferensi, bukan milik Anda.

Kami tidak menyukai arah ini. Berikut ini kami ingin membahas apa artinya bagi Anda sebagai pengguna, dan juga apa artinya bagi kami yang mengembangkan tool terkait.

## Metode praktis untuk menguji kepemilikan sesi

Yang kami maksud dengan sesi portabel bukanlah bahwa setelah berpindah dari satu model ke model lain, token berikutnya harus dihasilkan persis sama. Itu jelas mustahil, karena kemampuan, karakter yang terbentuk dari pelatihan, jendela konteks, dan cara penggunaan tool setiap model berbeda, belum lagi keseluruhan prosesnya memang sangat non-deterministik.

Portabilitas merujuk pada hal yang lebih sederhana:

```js
const transcript = session.export();
revokeCredentials(oldProvider);
session = newProvider.continueFrom(transcript);
```

Arsip ini harus berisi informasi yang cukup banyak dan dapat dipahami agar model lain dapat mengambil alih pekerjaan. Arsip ini tidak boleh menuntut provider lama untuk menguraikan suatu ID, mendekripsi sepotong data, mengingat hasil pencarian tertentu, atau menyusun ulang suatu ringkasan.

Dari sini diperoleh lima kriteria pengujian yang berguna:

1. **Periksa:** Dapatkah pengguna melihat apa yang dilihat model, pemanggilan tool mana yang dijalankan, dan apa yang dikatakan antar-Agent?
2. **Ekspor:** Selain artefak biasa yang juga dapat diunduh, apakah sesi itu sendiri mandiri?
3. **Putar ulang:** Dapatkah implementasi lain merekonstruksi konteks yang setara secara semantik?
4. **Audit:** Setelah kejadian, dapatkah manusia menjelaskan mengapa sistem menjalankan suatu operasi?
5. **Hapus:** Dapatkah pengguna menemukan dan menghapus setiap salinan sisi server yang menjadi tempat bergantungnya sesi?

ID respons bukanlah transkrip, karena datanya tersimpan di server; ciphertext bukanlah status yang dikendalikan pengguna, karena pengguna tidak dapat mendekripsinya; dan daftar referensi bukanlah bukti hasil pencarian yang dimasukkan ke dalam konteks model, karena biasanya Anda tidak dapat memperoleh data yang sama seperti yang dilihat model saat itu.

## Enkripsi untuk siapa?

Nama dan cara promosi fitur-fitur ini dapat menyesatkan pengguna. `encrypted_content` terdengar seperti fitur privasi yang dikendalikan pengguna. Kenyataannya, ia biasanya merupakan selubung yang tidak dapat dibaca klien dan hanya dapat dibuka oleh provider. Provider memilih kunci, mendekripsi isinya untuk modelnya sendiri, dan menetapkan di mana data itu boleh diputar ulang.

Nama yang lebih tepat adalah **status tersegel provider (provider-sealed state)**.

Penyegelan oleh provider memang dapat menghasilkan manfaat privasi. Misalnya, OpenAI dapat mengembalikan konten penalaran terenkripsi saat klien menetapkan `store: false`, lalu pada permintaan berikutnya hanya mendekripsinya ke dalam memori, tanpa menyimpan status perantara secara persisten. Bagi pelanggan Zero Data Retention, ini lebih baik daripada mewajibkan penyimpanan percakapan di sisi server. Namun jangan lupa: sebenarnya sejak awal tidak ada hal yang wajib dienkripsi!

Enkripsi ini tidak menyembunyikan data dari provider inferensi; yang disembunyikannya adalah data Anda sendiri.

## Percakapan berbasis penyimpanan mengubah transkrip menjadi pointer

Responses API dari OpenAI secara default menyimpan respons. Dokumentasinya menyatakan bahwa secara default objek respons disimpan setidaknya selama 30 hari. Anda dapat menggunakan `store: false`, dan sebaiknya memang demikian, karena hal itu membuat cara kerja antarmuka lebih mirip Completions: data tidak disimpan di server OpenAI.

API Gemini Interactions yang baru membuat pilihan serupa. Secara default ia menetapkan `store: true`. Interaction pada tingkat berbayar disimpan selama 55 hari, sedangkan tingkat gratis disimpan selama satu hari.

Jelas, gagasan menyimpan status di server sangat menarik:

```js
const first = responses.create({
  model: "frontier-model",
  input: "Investigate this production failure",
  store: true,
});

const second = responses.create({
  model: "frontier-model",
  previousResponseId: first.id,
  input: "Now implement the fix",
  store: true,
});
```

Aplikasi perlu mengirim lebih sedikit data; provider dapat menyimpan penalaran dan status tool yang tersembunyi; perutean cache juga menjadi lebih mudah. Namun, jika aplikasi lokal hanya mencatat pesan pengguna dan teks akhir, maka `first.id` menjadi foreign key yang menunjuk ke basis data di luar kendali aplikasi lokal.

## Proses penalaran yang tidak diperlihatkan kepada Anda

Semua laboratorium utama mengklaim memiliki alasan sah untuk tidak mempublikasikan rantai pemikiran mentah. Karena itu, pada model non-open-weight kita biasanya tidak dapat melihat token-token ini.

Melalui API, penalaran mentah tidak dapat dilihat. Saat menggunakan respons yang tersimpan, penalaran sebelumnya dapat dipulihkan melalui `previous_response_id`. Saat menggunakan `store: false`, API mengembalikan `encrypted_content`, dan klien harus menyimpannya lalu memutarnya ulang pada permintaan berikutnya. Bahkan ketika `reasoning.context: "all_turns"` mengizinkan sampling berikutnya menggunakan penalaran yang telah disimpan, ia tetap tidak transparan.

Anthropic mengembalikan thinking lengkap yang terenkripsi di bidang `signature`. Saat teks thinking yang dapat dibaca diaktifkan, yang dilihat pengguna adalah ringkasan yang dihasilkan model lain, bukan rantai pemikiran mentah. Pada giliran yang menggunakan tool, blok thinking harus dikirim kembali apa adanya. Dokumentasi Anthropic juga menyatakan bahwa blok thinking ini terikat pada model yang menghasilkannya dan harus dihapus saat berpindah model. Karena itu, jejak penalaran ini bahkan di dalam Anthropic sendiri tidak berusaha untuk portabel.

Situasi yang sama berulang pada semua model berbobot tertutup.

Mekanisme enkripsi ini memungkinkan sesi berlanjut **di dalam** satu ekosistem, tetapi tidak menghasilkan transkrip portabel yang dapat diserahkan kepada model provider lain. Arsip sesi boleh berisi blok data terenkripsi, tetapi model lain tidak dapat memanfaatkan makna di dalamnya:

```json
{"type": "reasoning", "encrypted_content": "gAAAAAB..."}
{"type": "thinking", "thinking": "", "signature": "EqQBCg..."}
{"type": "thought", "summary": [], "signature": "EpoGCp..."}
```

## Proses pencarian yang tersembunyi

Ambil contoh pencarian web. Pencarian web sisi server adalah salah satu kasus paling jelas munculnya “lubang tersembunyi” dalam transkrip. Tool pencarian sisi klien berperilaku sama seperti tool biasa:

```js
const result = search(query);
record({
  query,
  retrievedAt: now(),
  results: result.map((item) => ({
    url: item.url,
    title: item.title,
    passages: item.passages,
  })),
});
model.send({ toolResult: result });
```

Pengguna dapat memeriksa urutan hasil dan potongan teks, mengambil ulang halaman, menyimpan salinannya, atau menyerahkan bukti yang sama kepada model lain.

Saat menggunakan pencarian terkelola, provider menjalankan loop tool privat. OpenAI, Google, dan Anthropic akan mengungkapkan tindakan pencarian, kutipan, dan kadang daftar URL sumber, tetapi tidak mengungkapkan konteks teks lengkap yang digunakan saat menghasilkan jawaban. URL tidak dapat menghasilkan pemutaran ulang yang stabil, karena konten halaman dapat berubah, dan bisa jadi pada saat itu kontennya sudah diringkas menjadi potongan yang jauh lebih pendek seperti yang dilihat model.

Jawaban akhirnya mungkin sepenuhnya benar. Masalahnya akan muncul pada giliran berikutnya:

> Bandingkan sumber ketiga dengan sumber pertama, periksa ulang angka yang diperdebatkan, lalu gunakan model lain untuk melanjutkan penelitian ini.

Model baru akan menerima jawaban dan beberapa URL, tetapi tidak menerima urutan hasil, paragraf yang dipetik, materi yang tersaring, maupun bukti persis yang digunakan model pertama. Bahkan jika permintaan berikutnya dikirim ke tempat lain, provider lama tetap menjadi bagian dari sesi ini. Bahkan jika Anda menyimpan kutipan dan mengambil ulang halaman web, Anda tetap tidak dapat mereproduksi data yang persis pada saat itu.

Pencarian terkelola seharusnya menyediakan mode ekspor dengan kesetiaan penuh, yang mencakup kueri, metadata hasil, paragraf yang diambil, stempel waktu, dan konten yang disimpan. Antarmuka pengguna tetap dapat menampilkan hanya kutipan ringkas, tetapi itu tidak boleh menjadi satu-satunya catatan.

## Pemadatan yang tidak transparan

Sesi Agent yang sangat panjang pada akhirnya memerlukan pemadatan. Ringkasan yang terlihat dan dikendalikan klien memang bersifat lossy, tetapi setidaknya dapat diperiksa dan dipindahkan. Pengguna dapat meninjau, menyuntingnya, dan juga meminta model lain menghasilkan versi lain.

Sebaliknya, pemadatan sisi server OpenAI menghasilkan item pemadatan yang terenkripsi. Dokumentasinya menyebutnya “tidak transparan dan tidak dimaksudkan untuk dipahami manusia”. Endpoint `/responses/compact` yang terpisah mengembalikan “jendela konteks berikutnya yang kanonik” dan menginstruksikan klien untuk mengirimkannya kembali apa adanya.

Secara konseptual, transformasi ini adalah sebagai berikut:

```js
// Sebelum: biaya tinggi, tetapi portabel
let history = [
  userMessage,
  assistantMessage,
  toolCall,
  fullToolResult,
  // ...200.000 token riwayat lain yang dapat dipahami
];

// Sesudah: hanya provider asal yang dapat melanjutkan dengan biaya rendah
history = [
  {
    type: "compaction",
    encryptedContent: "enc_provider_only_state...",
  },
  ...recentItems,
];
```

OpenAI dapat melanjutkan dari makna yang telah dipadatkan, tetapi provider lain hanya dapat melihat sepotong string yang tidak dapat dibaca dan ekor pendek terbaru—lebih tepatnya, ia sebenarnya dapat melihat semua itu, hanya saja Pi tidak pernah meneruskan informasi semacam ini kepada provider lain.

Ini bukan keniscayaan teknis. Pemadatan sisi server Anthropic mengembalikan blok `compaction` dengan bidang `content` yang dapat dibaca. Ia memungkinkan klien menyediakan instruksi ringkasan kustom, dan ringkasan yang dihasilkan dapat diperiksa serta diserahkan kepada model lain. Dengan provider mana pun, pemadatan juga dapat dijalankan di sisi klien.

Artefak tersegel OpenAI mungkin menyimpan lebih banyak status yang terkait model daripada ringkasan teks biasa, dan berkinerja lebih baik pada model aslinya. Menjadikannya sebagai optimasi opsional adalah hal yang wajar, tetapi pada saat yang sama harus disediakan ringkasan serah terima yang dapat dibaca, bukan menggantikan ringkasan dengannya. Namun sekali lagi, semua ini juga membawa “keuntungan” berupa mengunci Anda semakin dalam ke dalam satu ekosistem.

## Subagent datang membawa instruksi tersembunyi

Sistem multi-Agent membuat masalah lebih rumit, karena kini yang ada bukan lagi satu transkrip, melainkan pohon sesi dan rangkaian pesan antar-Agent. Pesan-pesan ini biasanya adalah prompt seperti yang ditulis manusia, hanya saja kini ditulis oleh satu mesin untuk mesin lain.

Beta Responses Multi-agent yang dikelola OpenAI mengembalikan tiga jenis item baru: `multi_agent_call`, `multi_agent_call_output`, dan `agent_message`. Pada contoh `spawn_agent`, parameter `message` dienkripsi; pesan antar-Agent juga hanya berisi `encrypted_content`. Begitu Multi-agent diaktifkan, setiap Agent secara implisit mengaktifkan pemadatan sisi server otomatis, bahkan jika klien tidak memintanya. Ia tidak mendukung ringkasan penalaran, dan API juga menyuntikkan instruksi root serta subagent yang tidak dapat diedit atau dihapus oleh pengembang.

Ini adalah keseluruhan status yang tidak dapat dipindahkan: delegasi tugas yang tersegel, pesan Agent yang tersegel, konteks yang masing-masing dipadatkan secara otomatis, penalaran tersembunyi, dan proses orkestrasi yang dikelola provider.

Pada Juni 2026, klien Codex sumber terbuka juga menggabungkan perubahan terkait. Commit ini berjudul [“Encrypt multi-agent v2 message payloads”](https://github.com/openai/codex/commit/5f4d06ef186b896d316620556e561d59206c3ebf), dan di dalamnya proses ini dijelaskan secara langsung:

```json
// Pemanggilan tool yang dikeluarkan model induk, Codex menyimpannya seperti ini
{
  "name": "spawn_agent",
  "arguments": {
    "task_name": "worker",
    "message": "<ciphertext>"
  }
}

// Input yang diterima model anak
{
  "type": "agent_message",
  "author": "/root",
  "recipient": "/root/worker",
  "content": [{
    "type": "encrypted_content",
    "encrypted_content": "<ciphertext>"
  }]
}
```

Responses API akan mengenkripsi parameter tool yang dikeluarkan Agent induk, Codex bertugas meneruskannya, dan API mendekripsinya secara internal untuk Subagent. `InterAgentCommunication.content` milik Codex sendiri kosong. Tugas sebenarnya tidak akan muncul dalam rollout dan riwayat yang dapat dibacanya.

Ini mungkin bukan sekadar masalah abstrak tentang berpindah model. Bayangkan jika Subagent mengubah file yang salah, membocorkan rahasia, mengulangi pekerjaan Agent lain, atau mengikuti asumsi yang keliru; pengguna bahkan tidak dapat menjawab pertanyaan sederhana: **sebenarnya apa yang diminta dari Agent itu saat itu?**

Sebuah [issue Codex](https://github.com/openai/codex/issues/28058) yang belum ditutup meminta agar transmisi terenkripsi tetap menyimpan salinan audit yang dapat dibaca secara terpisah. Ini adalah desain minimal yang dapat diterima. Cara yang lebih baik adalah membiarkan pesan antar-Agent dalam bentuk teks biasa tetap menjadi norma.

## “Sebagian besar orang tidak berpindah model di tengah sesi”

Mungkin memang begitu. Sebagian besar orang juga tidak mengganti sistem operasi atau operator seluler setiap minggu. Tetapi meskipun Anda tidak menggunakan kebebasan itu, kebebasan itu tetap penting, karena ia mengubah hubungan Anda dengan provider, dan juga mengubah cara provider memperlakukan Anda.

Sebagai pengguna, Anda juga mungkin terpaksa memigrasikan sesi karena model dipensiunkan, layanan mati, harga berubah, kebijakan menghalangi permintaan berikutnya (halo, Fable), suatu tahap rahasia harus dijalankan secara lokal, atau auditor perlu merekonstruksi jalannya peristiwa. Agent juga membuat sesi semakin panjang: satu sesi pemrograman atau penelitian dapat mengakumulasi keputusan dan bukti selama beberapa hari; asisten pribadi bahkan dapat mengakumulasi catatan sesi yang membentang bertahun-tahun—kira-kira begitulah, karena bagaimanapun kami belum benar-benar menggunakannya selama bertahun-tahun.

Pilihan untuk pergi itu sendiri juga membentuk batasan. Jika provider tahu pengguna dapat melanjutkan di tempat lain, ia harus bersaing dalam hal kualitas model, harga, keandalan, dan kepercayaan. Jika konteks yang diakumulasi pengguna hanya dapat dijelaskan oleh satu provider, insentif yang muncul akan sangat buruk.

## Apa yang seharusnya dijanjikan oleh API inferensi yang portabel

Kami berharap provider inferensi dan pengembang Agent mengadopsi sekumpulan kecil aturan.

1. **Log peristiwa lokal adalah catatan kanonik.** Penyimpanan server boleh mencerminkannya atau mempercepatnya, tetapi klien harus dapat merekonstruksi sesi tanpa menguraikan ID server.
2. **Penyimpanan harus eksplisit.** `store: false` seharusnya mudah digunakan, terdokumentasi dengan jelas, dan sebaiknya menjadi pengaturan default. Fitur yang memerlukan penyimpanan data harus dijelaskan secara eksplisit saat digunakan.
3. **Item tidak transparan apa pun tidak boleh menjadi satu-satunya pembawa makna.** Untuk memperoleh hasil yang lebih baik di dalam provider yang sama, penalaran terenkripsi, pemadatan, dan tanda tangan tool boleh disertakan, tetapi setiap item harus memiliki representasi serah terima yang dapat dibaca dan tidak bergantung pada provider.
4. **Tool terkelola harus menyimpan log dengan kesetiaan penuh.** Catat input, output, bukti, penyaringan, sumber, stempel waktu, dan hash konten yang persis, bukan hanya jawaban yang telah dipoles dan kutipan.
5. **Komunikasi Subagent harus dapat diaudit.** Simpan tugas, pesan, hasil, hubungan pewarisan, model, dan izin tool yang persis dan dapat dibaca untuk setiap Agent.
6. **Pemadatan harus dapat diperiksa.** Kembalikan ringkasan yang dapat dibaca, instruksi yang digunakan saat membuat ringkasan, dan informasi sumber yang cukup untuk memahami konten mana yang dibuang.
7. **Artefak harus dapat diekspor.** File, keluaran container, snapshot pencarian, dan media yang dihasilkan semuanya harus dapat diunduh ke arsip lokal yang dialamatkan berdasarkan konten.

## Distilasi sebenarnya bagus

Pada tingkat model, ada juga jenis penguncian terkait.

Beberapa laboratorium berbobot tertutup terbesar di Amerika Serikat semakin memusuhi distilasi eksternal. Di [sebuah artikel Februari 2026](https://www.anthropic.com/news/detecting-and-preventing-distillation-attacks), Anthropic menuduh DeepSeek, Moonshot, dan MiniMax melakukan tindakan terkait, dan menyebutnya “serangan distilasi”. Ketentuan komersial Anthropic menetapkan bahwa pelanggan memiliki output, tetapi melarang penggunaan layanannya untuk melatih model AI pesaing. Pada saat yang sama, artikel Anthropic sendiri juga mengakui bahwa ketika laboratorium terdepan menggunakan distilasi pada modelnya sendiri, “distilasi adalah metode pelatihan yang digunakan secara luas dan wajar”.

Anthropic menggunakan robot untuk mengumpulkan data dari web publik bagi pengembangan model, dan juga dikenal pernah memotong buku cetak lalu memindainya. OpenAI juga menyatakan akan menggunakan konten internet publik untuk melatih model, dan berargumen bahwa melatih model dengan materi internet yang dapat diakses publik termasuk penggunaan wajar. Kedua perusahaan menggambarkan distilasi internal untuk memproduksi model yang lebih kecil sebagai metode yang normal. OpenAI juga pernah menawarkan [alur kerja distilasi API pihak pertama](https://openai.com/index/api-model-distillation/) yang eksplisit, yang mengizinkan penyetelan halus model OpenAI yang lebih kecil menggunakan output model OpenAI yang lebih kuat.

Asimetri moralnya terlihat jelas. Laboratorium-laboratorium ini menuntut masyarakat menerima bahwa mesin dapat mempelajari karya manusia dalam jumlah besar yang diletakkan di internet—sering kali tanpa izin pribadi sebelumnya—tetapi bersikeras bahwa mesin lain tidak boleh mempelajari output yang dihasilkan laboratorium ini. Versi paling luas dari prinsip ini justru mengizinkan pengetahuan mengalir ke model tertutup, tetapi tidak mengizinkannya mengalir keluar lagi.

Kami berpendapat, sikap default terhadap distilasi seharusnya berubah dari bermusuhan menjadi mendukung. Distilasi dapat mengubah kemampuan terdepan yang mahal menjadi model yang lebih kecil, lebih murah, dan lebih cepat, sehingga dapat dijalankan secara lokal, offline, pada perangkat keras terbatas, atau di bawah kendali pengguna sendiri. Ia dapat meningkatkan persaingan, mempertahankan kemampuan setelah API hilang, dan mengurangi kebutuhan komputasi serta energi untuk tugas-tugas umum.

## Kebebasan yang paling minimal

Pengguna seharusnya dapat menutup satu akun, menyimpan satu sesi, lalu menyerahkannya kepada model lain. Model baru mungkin tidak setuju dengan kesimpulan sebelumnya, mungkin mengajukan pertanyaan lanjutan, atau mungkin tampil lebih buruk, tetapi ia tidak seharusnya hanya melihat sepotong ciphertext di tempat di mana model lama dapat melihat riwayat, bukti, rencana, dan pekerjaan yang didelegasikan pengguna.

Kami tidak menentang provider yang membangun API stateful yang lebih baik. Yang kami tentang adalah mengikat kinerja yang lebih baik dengan kendali pengguna yang lebih sedikit. Penyimpanan status seharusnya opsional, tool terkelola seharusnya dapat diamati, pemadatan seharusnya dapat dibaca, komunikasi Agent seharusnya dapat diaudit; idealnya, penalaran yang tidak transparan seharusnya tidak lagi tidak transparan, atau setidaknya memiliki representasi serah terima yang portabel. Distilasi seharusnya menjadi jalur yang membuat kemampuan lebih merata, bukan tabu yang digunakan untuk membangun tembok yang lebih tinggi.

::: info Catatan penerjemah
Artikel ini adalah terjemahan bahasa Indonesia lengkap dari teks asli Earendil Engineering. Terjemahan bahasa Indonesia beserta bagian adaptasinya diterbitkan di bawah [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh-hans) berdasarkan lisensi; hak cipta teks asli bahasa Inggris dimiliki oleh Earendil. Jika ada ambiguitas, [teks asli bahasa Inggris](https://earendil.com/posts/session-portability/) yang menjadi acuan.
:::

## Baca selanjutnya

- [Teks asli bahasa Inggris: The Session You Cannot Take With You](https://earendil.com/posts/session-portability/)
- [Berikutnya: Mekanisme pemadatan konteks di Pi](/translations/compaction-in-pi)
