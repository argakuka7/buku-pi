// Dipakai bersama oleh proses build, konfigurasi browser, dan uji regresi pencarian.
// Tokenizer netral bahasa: cocok untuk teks Indonesia maupun English.
const tokenize = (text) => String(text).toLowerCase().match(/[\p{L}\p{N}]+/gu) ?? []

// Grup padanan istilah: Indonesia ↔ English, plus sinonim harian.
//
// Catatan penting: miniSearch menggabungkan seluruh istilah hasil ekspansi dengan operator
// AND (searchOptions.combineWith). Karena itu setiap grup harus SIMETRIS — setiap anggota
// memetakan ke seluruh anggota lain — dan ekspansi dipasang di options.processTerm (dipakai
// saat indeks dibuat DAN saat kueri), sehingga istilah grup selalu muncul bersama di indeks.
// Tanpa itu, kueri seperti "Skill" akan menuntut semua sinonim sekaligus dan tidak menemukan apa pun.
const SYNONYM_GROUPS = [
  ['instalasi', 'pemasangan', 'install'],
  ['konfigurasi', 'pengaturan', 'setting'],
  ['akun', 'account'],
  ['biaya', 'harga', 'tarif', 'cost'],
  ['sesi', 'session'],
  ['konteks', 'context'],
  ['pemadatan', 'compaction'],
  ['kesalahan', 'error', 'galat'],
  ['masalah', 'kendala'],
  ['izin', 'permission'],
  ['keamanan', 'security', 'safety'],
  ['subagent', 'subagen'],
  ['ekstensi', 'extension', 'plugin'],
  ['skill', 'keterampilan', 'keahlian'],
  ['berkas', 'file'],
  ['direktori', 'folder'],
  ['perintah', 'command', 'terminal'],
  ['versi', 'rilis', 'release'],
  ['pembaruan', 'update', 'pembaharuan'],
  ['hapus', 'uninstall', 'menghapus'],
  ['panduan', 'guide', 'dokumentasi'],
  ['latihan', 'praktik', 'practice'],
  ['tugas', 'task', 'pekerjaan'],
  ['verifikasi', 'cek', 'memeriksa'],
  ['jalur', 'alur'],
  ['cache', 'singgahan'],
  ['pemulihan', 'recovery', 'restore'],
  ['jadwal', 'tenggat', 'deadline'],
  ['agen', 'agent'],
  ['pemula', 'beginner'],
  ['peta', 'map'],
]

const SYNONYMS = {}
for (const group of SYNONYM_GROUPS) {
  for (const term of group) {
    SYNONYMS[term] = group.filter((other) => other !== term)
  }
}

const expandTerm = (term) => {
  const key = String(term).toLowerCase()
  const extra = SYNONYMS[key]
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
