/* 尼山大學堂 3D 導覽 — Service Worker
   更新時只要改 CACHE 版本號，使用者會看到「有新版本」提示 */
var CACHE = 'conlns-v13';
var CORE = ['./', './index.html', './icon.svg', './icon-192.png', './icon-512.png', './apple-touch-icon.png'];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(CORE); }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (ks) {
      return Promise.all(ks.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('message', function (e) {
  if (e.data === 'skipWaiting') self.skipWaiting();
});

self.addEventListener('fetch', function (e) {
  var r = e.request;
  if (r.method !== 'GET') return;
  var u = new URL(r.url);
  if (u.origin !== location.origin) return;
  var isPage = r.mode === 'navigate' || /\/$|\.html$/.test(u.pathname);
  if (isPage) {
    /* 頁面：網路優先（有網路就拿最新版），離線時用快取 */
    e.respondWith(
      fetch(r.url, { cache: 'no-cache' }).then(function (res) {
        if (res && res.ok) { var cp = res.clone(); caches.open(CACHE).then(function (c) { c.put('./index.html', cp); }); }
        return res;
      }).catch(function () {
        return caches.match('./index.html').then(function (m) { return m || caches.match('./'); });
      })
    );
    return;
  }
  /* 圖示等靜態檔：快取優先 */
  e.respondWith(
    caches.match(r).then(function (m) {
      return m || fetch(r).then(function (res) {
        if (res && res.ok) { var cp = res.clone(); caches.open(CACHE).then(function (c) { c.put(r, cp); }); }
        return res;
      });
    })
  );
});
