'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a317566b4c9e650a50723ada2c17849b",
"assets/AssetManifest.bin.json": "9751aa1be1f18ab2a6d7a1265fc328a4",
"assets/AssetManifest.json": "3aa787e4377c4fc83edadbafea612acb",
"assets/FontManifest.json": "209e66e2f71c646cc7eb744ea1cea0dc",
"assets/fonts/MaterialIcons-Regular.otf": "049e87b289e822280a7deef99fd6d6d9",
"assets/lib/icons/back.png": "a45e14c8775862ace3cf61de0e82d73b",
"assets/lib/icons/delivery.png": "0381b07124ef173dfbef13410dc0df64",
"assets/lib/icons/grocery.png": "d9e01eb0fe936451f7d788aa74829c5f",
"assets/lib/icons/shop.png": "ab3bb6d7195ed9922bc0ba0f79a4c7b9",
"assets/lib/images/112468-online-shopping.json": "2f3dabe6008527dd2412434cdb4616d8",
"assets/lib/images/30826-online-shopping.json": "5f4f9e2eaf52143364966e8c7eab112c",
"assets/lib/images/37141-shopping-checlist-app.json": "4ffba1d0287b940c1df3e37a8f4a9e46",
"assets/lib/images/54350-online-shopping-delivery.json": "b805b15430aef859beab671b50ca6148",
"assets/lib/images/58915-online-shop.json": "eefe83c90ed6132ad634d42f08422b30",
"assets/lib/images/83548-online-shopping-black-friday.json": "7d9db972ffe2b369ac15ebf13a4e4876",
"assets/lib/images/90690-shopping.json": "402ec3380515631c80034167d991f6b9",
"assets/lib/images/accentchairs.png": "2d2dcd0fc0d892e5bc7dfd9fdaa49999",
"assets/lib/images/barstool.jpeg": "7ce9453e662f5b3f36de543f8e1531e3",
"assets/lib/images/barstool.png": "6e2d40779e0a83f59ca2273916f3b701",
"assets/lib/images/bed.png": "76603cbf45b7b7b09ba40decaa96ad43",
"assets/lib/images/bed.webp": "a5a2ffde05d08158f83fe0b26440f45c",
"assets/lib/images/bedroomset.png": "e1c989f00e79e6e191801e6e8a5f0c5d",
"assets/lib/images/bedroomset.webp": "036d0dc955964b034b177e6ffa4b801b",
"assets/lib/images/bookcase.png": "f1d8e396632c4663df1839607cda08ae",
"assets/lib/images/bookcase.webp": "cfb4ee5c175f7c989784a605222982a3",
"assets/lib/images/coffeetables.png": "1a315943b0c241d904e01e568c4e51ec",
"assets/lib/images/desk.png": "6e35a4e90411051df95cef9c0a67cbc3",
"assets/lib/images/desk.webp": "81bfb55f76fbe6ad6617881f606308f4",
"assets/lib/images/deskchair.png": "966ceef6cd752739d1d5bd6405bba90a",
"assets/lib/images/deskchair.webp": "c15689e44b15c107170a9470cec62d10",
"assets/lib/images/diningchair.png": "000868d5cd0be80a52821cc20593e0cd",
"assets/lib/images/diningchair.webp": "764a5a085b8613967fe1041720af58e8",
"assets/lib/images/diningroomset.png": "836a384274ab0f868b376ca27d43daff",
"assets/lib/images/diningroomset.webp": "27399de9d4683de4dff2fc71ba4d7cbe",
"assets/lib/images/diningtable.png": "ff193323f3c7292091a3a19ebe773b7c",
"assets/lib/images/diningtable.webp": "232ec0b2770096ef7b5b412b85744000",
"assets/lib/images/dresser.png": "ad36fefbce7848bd7774661a6c5a4901",
"assets/lib/images/dresser.webp": "1739ae227162525b66703dd22f4002aa",
"assets/lib/images/filecabinet.png": "2a79112191b6c5c5723cc9902befeb2b",
"assets/lib/images/filecabinet.webp": "709f33ecce7cab35d98475ba8c0f993f",
"assets/lib/images/homeofficeset.png": "76f7e0328514f3ca8fa58ee01404a495",
"assets/lib/images/homeofficeset.webp": "c36fa05196df6acf18d79742576dbe59",
"assets/lib/images/hybridmattress.jpeg": "d87a8dfd765ad755cb123ae2366be298",
"assets/lib/images/hybridmattress.png": "98b8f536ee4dffc33ddcff823a01b95c",
"assets/lib/images/innerspringmattress.png": "26e1145ddea311d2a7c41af066ca7123",
"assets/lib/images/innerspringmattress.webp": "c16c81080b908b9e0be66a0a2c096942",
"assets/lib/images/livingroomset.png": "0c9b7b5415112caa87d1ee3f0abebe1d",
"assets/lib/images/livingroomset.webp": "01c3a04e9afafeb622ee540f4d7fdc32",
"assets/lib/images/loveseats.png": "9529324c48d40459108840e4b4d7b11e",
"assets/lib/images/manualrecliner.png": "787b6dada40180975c682ebf42f4135f",
"assets/lib/images/manualrecliner.webp": "d0954895c7acd27372b031ff179662c6",
"assets/lib/images/memoryfoammattress.png": "14eb1c2e98baec5ac0bca2a2759039a0",
"assets/lib/images/memoyfoammattress.webp": "d6088770ef0b6c2dbd1bb11e06dcdf8c",
"assets/lib/images/motionsectional.png": "4467791efc65f2767301eb1b436cf544",
"assets/lib/images/motionsectional.webp": "b5797c3e92792a23e80ac5b27e624c71",
"assets/lib/images/motionsofa.png": "a6d731ea623518d4d1a3b9c25b167728",
"assets/lib/images/motionsofa.webp": "40a9bcaf0b2a97fca879d1c7c1ec59bb",
"assets/lib/images/nightstand.png": "6b4be30d4de0730014cd43fac4997e5b",
"assets/lib/images/nightstand.webp": "799e1bd4f6bc0be1983dd5ce87917096",
"assets/lib/images/powermotion.png": "aca74135be03d597dcdacc1e0a5b2c5e",
"assets/lib/images/powermotion.webp": "8efbe91b7033d48d92d8926f4466bb12",
"assets/lib/images/powerrecliner.png": "49d08ff4eb897d72acfcb8825236fc9a",
"assets/lib/images/powerrecliner.webp": "3acc25f2c3596f9e46a3d422c3a59bdb",
"assets/lib/images/recliners.png": "bb37b100d265b6c3b740204b614d688d",
"assets/lib/images/Screenshot%25202024-10-06%2520183250.png": "5c8c1314abb1b37bdf0b9bbb6703d19b",
"assets/lib/images/Screenshot%25202024-10-06%2520183312.png": "2977b0f372b62dafc72027dc9ccb5894",
"assets/lib/images/Screenshot%25202024-10-06%2520183335.png": "ea3d11886c03ccf973e58d0164f232f5",
"assets/lib/images/Screenshot%25202024-10-06%2520183413.png": "c34ecf9579f1b1622c48f5fea6ab447d",
"assets/lib/images/sectionals.png": "8e0e42b177674757e2fec0bd521189da",
"assets/lib/images/sofas.png": "c7e39e17c4c562ede8609a0a5b731b7c",
"assets/lib/images/stationaryloveseat.jpg": "b7b32feb9bafb9ab1e6ddc62f345e618",
"assets/lib/images/stationaryloveseat.png": "4e1ba5511afaefcdf1dcc51efb13bf6c",
"assets/lib/images/stationarysectional.png": "dd90281e9641df0b3aaf088338a3bed8",
"assets/lib/images/stationarysectional.webp": "5569defdaa8ec5d73fd7b5c463c6964f",
"assets/lib/images/stationarysofa.png": "cd783f7347dc94cbb9ac124bb71cebac",
"assets/lib/images/stationarysofa.webp": "0185a80c88dc36ae6eeb5c43071771f0",
"assets/lib/images/youthbedroomset.png": "a7b9d2258e9b09e1000bb863ee434e21",
"assets/lib/images/youthbedroomset.webp": "8615a2e84d6b2b4132f860e7fca86965",
"assets/NOTICES": "21620c9753c1234f72fa2156ea13641f",
"assets/packages/awesome_snackbar_content/assets/back.svg": "ba1c3aebba280f23f5509bd42dab958d",
"assets/packages/awesome_snackbar_content/assets/bubbles.svg": "1df6817bf509ee4e615fe821bc6dabd9",
"assets/packages/awesome_snackbar_content/assets/types/failure.svg": "cb9e759ee55687836e9c1f20480dd9c8",
"assets/packages/awesome_snackbar_content/assets/types/help.svg": "7fb350b5c30bde7deeb3160f591461ff",
"assets/packages/awesome_snackbar_content/assets/types/success.svg": "6e273a8f41cd45839b2e3a36747189ac",
"assets/packages/awesome_snackbar_content/assets/types/warning.svg": "cfcc5fcb570129febe890f2e117615e0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_charts/google_fonts/Comforter-Regular.ttf": "cff123ea94f9032380183b8bbbf30ec1",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d8a94340214fba95dcc1df1644c29131",
"/": "d8a94340214fba95dcc1df1644c29131",
"main.dart.js": "28b8342c371c931915ec101f92827eea",
"manifest.json": "713b4394077afc78c0a9f2d6e5d113a7",
"version.json": "bee3dbcd683a005711e12d3955360a52"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
