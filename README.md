# Dompetku — Pencatatan Keuangan Bulanan (v1)

Aplikasi PWA untuk mencatat pemasukan/pengeluaran, memantau **dana bulanan** dan jatah harian, melihat grafik, dan export ke Excel. Gratis, offline, bisa di-install di Android, iOS, dan Windows.

## Isi folder
- `index.html` — seluruh aplikasi (tampilan + logika)
- `manifest.json`, `sw.js`, `icons/` — supaya bisa di-install & dipakai offline
- `lib/` — Chart.js (grafik) dan SheetJS (export Excel)

## Cara online-kan gratis di GitHub Pages
1. Buat akun di github.com (gratis), lalu **New repository**, misalnya `dompetku` (Public).
2. Klik **Add file → Upload files**, lalu upload **semua isi** folder ini (termasuk folder `lib` dan `icons`). Klik **Commit changes**.
3. Buka **Settings → Pages**. Pada *Source*, pilih **Deploy from a branch**, lalu branch `main`, folder `/ (root)`, dan klik **Save**.
4. Tunggu 1–2 menit. Aplikasi bisa dibuka di `https://<username>.github.io/dompetku/`.

## Cara install
- **Android (Chrome):** buka link, lalu menu ⋮ → *Tambahkan ke layar utama* / *Instal aplikasi*.
- **iPhone (Safari):** buka link, lalu tombol Bagikan → *Add to Home Screen*.
- **Windows (Chrome/Edge):** buka link, lalu ikon install di address bar.

## Catatan penting
- Data tersimpan di browser perangkat masing-masing (localStorage). Data di HP dan laptop **tidak** otomatis sama, jadi gunakan **Pengaturan → Backup/Restore** untuk memindahkan data.
- Lakukan backup rutin. Menghapus data browser atau uninstall aplikasi bisa ikut menghapus catatan.
- Kalau ada pembaruan aplikasi, ubah `CACHE = "dompetku-v1"` di `sw.js` menjadi `v2` dan seterusnya, supaya perangkat mengambil versi baru.
