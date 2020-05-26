const cacheKey = "static";
const cssStyle =
  "font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)";

const cacheList = [
  "/",
  "./index.html",
  "./src/style.css",
  "./src/img/banner-tt.jpg",
  "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;600&display=swap",
];

self.addEventListener("install", (event) => {
  console.log("%c SW installed!", cssStyle);
  event.waitUntil(
    caches.open(cacheKey).then((cache) => {
      cache.addAll(cacheList);
    })
  );
});

self.addEventListener("activate", () => {
  console.log("%c SW activated!", cssStyle);
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
