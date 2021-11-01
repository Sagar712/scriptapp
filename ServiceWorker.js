self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("Script Text").then(cache => {
            return cache.addAll(["./index.html", "./Mask.png", "./manifest.json"
            ]);
        })
    );
});

self.addEventListener("fetch", e => {

    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );

});

/*

            "./static/js/2.f3047e62.chunk.js", "./static/js/2.f3047e62.chunk.js.LICENSE.txt", "./static/js/2.f3047e62.chunk.js.map",
            "./static/js/3.3c1174d1.chunk.js", "./static/js/3.3c1174d1.chunk.js.map", "./static/js/main.78ecd72f.chunk.js",
            "./static/js/main.78ecd72f.chunk.js.map", "./static/js/runtime-main.72deafce.js", "./static/js/runtime-main.72deafce.js.map",

*/