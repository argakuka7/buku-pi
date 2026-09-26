// Dipakai bersama oleh proses build, konfigurasi browser, dan uji regresi pencarian.
// Tokenizer netral bahasa: cocok untuk teks Indonesia maupun English.
const tokenize = (text) => String(text).toLowerCase().match(/[\p{L}\p{N}]+/gu) ?? []

// Padanan istilah Indonesia ↔ English plus sinonim harian.
//
// Dua hal penting:
// 1. miniSearch menggabungkan istilah hasil ekspansi dengan operator AND (searchOptions.combineWith),
//    jadi setiap grup harus SIMETRIS: setiap anggota memetakan ke seluruh anggota lain.
// 2. VitePress menyerialkan fungsi config ini ke peramban dengan mengevaluasi ulang sumbernya,
//    sehingga fungsi di bawah WAJIB mandiri (tanpa variabel dari luar) atau pencarian di klien
//    akan gagal dengan "SYNONYMS is not defined". Karena itu peta ditulis inline di dalam fungsi.
const expandTerm = (term) => {
  const key = String(term).toLowerCase()
  const map = {
    account: ['akun'],
    agen: ['agent'],
    agent: ['agen'],
    akun: ['account'],
    alur: ['jalur'],
    beginner: ['pemula'],
    berkas: ['file'],
    biaya: ['harga', 'tarif', 'cost'],
    cache: ['singgahan'],
    cek: ['verifikasi', 'memeriksa'],
    command: ['perintah', 'terminal'],
    compaction: ['pemadatan'],
    context: ['konteks'],
    cost: ['biaya', 'harga', 'tarif'],
    deadline: ['jadwal', 'tenggat'],
    direktori: ['folder'],
    dokumentasi: ['panduan', 'guide'],
    ekstensi: ['extension', 'plugin'],
    error: ['kesalahan', 'galat'],
    extension: ['ekstensi', 'plugin'],
    file: ['berkas'],
    folder: ['direktori'],
    galat: ['kesalahan', 'error'],
    guide: ['panduan', 'dokumentasi'],
    hapus: ['uninstall', 'menghapus'],
    harga: ['biaya', 'tarif', 'cost'],
    instalasi: ['pemasangan', 'install'],
    install: ['instalasi', 'pemasangan'],
    izin: ['permission'],
    jadwal: ['tenggat', 'deadline'],
    jalur: ['alur'],
    keahlian: ['skill', 'keterampilan'],
    keamanan: ['security', 'safety'],
    kendala: ['masalah'],
    kesalahan: ['error', 'galat'],
    keterampilan: ['skill', 'keahlian'],
    konfigurasi: ['pengaturan', 'setting'],
    konteks: ['context'],
    latihan: ['praktik', 'practice'],
    map: ['peta'],
    masalah: ['kendala'],
    memeriksa: ['verifikasi', 'cek'],
    menghapus: ['hapus', 'uninstall'],
    panduan: ['guide', 'dokumentasi'],
    pekerjaan: ['tugas', 'task'],
    pemadatan: ['compaction'],
    pemasangan: ['instalasi', 'install'],
    pembaharuan: ['pembaruan', 'update'],
    pembaruan: ['update', 'pembaharuan'],
    pemula: ['beginner'],
    pemulihan: ['recovery', 'restore'],
    pengaturan: ['konfigurasi', 'setting'],
    perintah: ['command', 'terminal'],
    permission: ['izin'],
    peta: ['map'],
    plugin: ['ekstensi', 'extension'],
    practice: ['latihan', 'praktik'],
    praktik: ['latihan', 'practice'],
    recovery: ['pemulihan', 'restore'],
    release: ['versi', 'rilis'],
    restore: ['pemulihan', 'recovery'],
    rilis: ['versi', 'release'],
    safety: ['keamanan', 'security'],
    security: ['keamanan', 'safety'],
    sesi: ['session'],
    session: ['sesi'],
    setting: ['konfigurasi', 'pengaturan'],
    singgahan: ['cache'],
    skill: ['keterampilan', 'keahlian'],
    subagen: ['subagent'],
    subagent: ['subagen'],
    tarif: ['biaya', 'harga', 'cost'],
    task: ['tugas', 'pekerjaan'],
    tenggat: ['jadwal', 'deadline'],
    terminal: ['perintah', 'command'],
    tugas: ['task', 'pekerjaan'],
    uninstall: ['hapus', 'menghapus'],
    update: ['pembaruan', 'pembaharuan'],
    verifikasi: ['cek', 'memeriksa'],
    versi: ['rilis', 'release'],
  }
  const extra = map[key]
  return extra ? [key, ...extra] : key
}

export const miniSearch = {
  options: { tokenize, processTerm: expandTerm },
  searchOptions: {
    combineWith: 'AND',
    prefix: true,
    fuzzy: 0.2,
    boostDocument: (id) => /\/(guide|reference)\//.test(id) ? 2 : /\/tweets\//.test(id) ? 0.5 : 1
  }
}
