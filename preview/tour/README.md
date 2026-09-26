# Tur situs (WebP)

Dua animasi di folder ini dipakai sebagai pratinjau di `README.md`:

| Berkas | Isi |
| --- | --- |
| `pi-bluebook-tour-id.webp` | 10 frame, edisi Bahasa Indonesia (akar `/`) |
| `pi-bluebook-tour-en.webp` | 7 frame, edisi English (`/en/`) |

Keduanya menggantikan rekaman lama `pi-bluebook-tour.gif` (5,19 MB, UI Bahasa Mandarin).
Animasi WebP: 900x506, `loop=0`, 1,4–1,6 detik per frame, total sekitar 0,46 MB.

## Cara membuat ulang

1. Bangun situs dan jalankan pratinjau statis, lalu buka `http://localhost:4173`:

   ```bash
   npm run docs:build
   npm run serve:dist
   ```

2. Ambil frame dengan browser headless (viewport 1280x720, tanpa scrollbar):

   ```bash
   export PATH=/opt/homebrew/bin:$PATH
   agent-browser set viewport 1280 720
   agent-browser open http://localhost:4173/ && agent-browser wait --load networkidle
   agent-browser screenshot /tmp/tour/id-01-home.png
   ```

   Lakukan untuk setiap halaman/posisi scroll yang diinginkan, dengan nama urut
   `id-01-*`, `id-02-*`, `en-01-*`, dan seterusnya. Nama berkas menentukan urutan frame.

3. Gabungkan frame menjadi animasi WebP (Pillow, tanpa dependensi lain):

   ```bash
   python3 - <<'PY'
   from PIL import Image
   import glob

   def build(pattern, out, width=900, duration=1400, quality=72):
       frames = []
       for f in sorted(glob.glob(pattern)):
           im = Image.open(f).convert("RGB")
           frames.append(im.resize((width, round(im.height * width / im.width)), Image.LANCZOS))
       frames[0].save(out, format="WEBP", save_all=True, append_images=frames[1:],
                      duration=duration, loop=0, quality=quality, method=6)

   build("/tmp/tour/id-*.png", "preview/tour/pi-bluebook-tour-id.webp")
   build("/tmp/tour/en-*.png", "preview/tour/pi-bluebook-tour-en.webp")
   PY
   ```

## Catatan

- Rekam pada lebar >= 1280 px: di bawah itu navbar versi Indonesia beralih ke tombol menu,
  sehingga hasil tangkapan layar terlihat berbeda.
- Jangan simpan PNG mentah di repo ini; hanya animasi WebP yang diperlukan.
- Aset ini hanya untuk `README.md` dan sengaja diletakkan di luar `docs/public/`, jadi tidak
  ikut ter-deploy ke situs.
