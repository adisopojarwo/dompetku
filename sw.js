// Dompetku service worker — simpan file aplikasi agar bisa dibuka offline.
const CACHE = "dompetku-v1";
const ASSETS = ["./", "./index.html", "./manifest.json", "./lib/chart.umd.min.js", "./lib/xlsx.full.min.js",
  "./icons/icon-192.png", "./icons/icon-512.png", "./icons/apple-touch-icon.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS))); self.skipWaiting(); });
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  // network-first untuk halaman (supaya update cepat), cache-first untuk aset
  if (e.request.mode === "navigate") {
    e.respondWith(fetch(e.request).then(r => { caches.open(CACHE).then(c => c.put("./index.html", r.clone())); return r; })
      .catch(() => caches.match("./index.html")));
    return;
  }
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
