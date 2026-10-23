const CACHE = 'bbchecklist-e5a583272d05';
const FILES = [
  "./",
  "assets/node_modules/@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Ionicons.b4eb097d35f44ed943676fd56f6bdc51.ttf",
  "assets/node_modules/@expo-google-fonts/atkinson-hyperlegible/400Regular/AtkinsonHyperlegible_400Regular.59f0f5543754fa6b68a563036eafaaab.ttf",
  "assets/node_modules/@expo-google-fonts/atkinson-hyperlegible/700Bold/AtkinsonHyperlegible_700Bold.f2193e9c742b9554852a3000f0ccdc9c.ttf",
  "assets/node_modules/@expo-google-fonts/cinzel/600SemiBold/Cinzel_600SemiBold.3b46e60e610c5f493298d3815ad999d4.ttf",
  "assets/node_modules/@expo-google-fonts/cinzel/700Bold/Cinzel_700Bold.7fa8033ca19d3d9dea10e6f019712228.ttf",
  "assets/node_modules/expo-router/assets/arrow_down.017bc6ba3fc25503e5eb5e53826d48a8.png",
  "assets/node_modules/expo-router/assets/error.d1ea1496f9057eb392d5bbf3732a61b7.png",
  "assets/node_modules/expo-router/assets/file.19eeb73b9593a38f8e9f418337fc7d10.png",
  "assets/node_modules/expo-router/assets/forward.d8b800c443b8972542883e0b9de2bdc6.png",
  "assets/node_modules/expo-router/assets/pkg.ab19f4cbc543357183a20571f68380a3.png",
  "assets/node_modules/expo-router/assets/react-navigation/elements/back-icon-mask.0a328cd9c1afd0afe8e3b1ec5165b1b4.png",
  "assets/node_modules/expo-router/assets/react-navigation/elements/back-icon.35ba0eaec5a4f5ed12ca16fabeae451d.png",
  "assets/node_modules/expo-router/assets/react-navigation/elements/clear-icon.c94f6478e7ae0cdd9f15de1fcb9e5e55.png",
  "assets/node_modules/expo-router/assets/react-navigation/elements/clear-icon.c94f6478e7ae0cdd9f15de1fcb9e5e55@2x.png",
  "assets/node_modules/expo-router/assets/react-navigation/elements/clear-icon.c94f6478e7ae0cdd9f15de1fcb9e5e55@3x.png",
  "assets/node_modules/expo-router/assets/react-navigation/elements/clear-icon.c94f6478e7ae0cdd9f15de1fcb9e5e55@4x.png",
  "assets/node_modules/expo-router/assets/react-navigation/elements/close-icon.808e1b1b9b53114ec2838071a7e6daa7.png",
  "assets/node_modules/expo-router/assets/react-navigation/elements/close-icon.808e1b1b9b53114ec2838071a7e6daa7@2x.png",
  "assets/node_modules/expo-router/assets/react-navigation/elements/close-icon.808e1b1b9b53114ec2838071a7e6daa7@3x.png",
  "assets/node_modules/expo-router/assets/react-navigation/elements/close-icon.808e1b1b9b53114ec2838071a7e6daa7@4x.png",
  "assets/node_modules/expo-router/assets/react-navigation/elements/search-icon.286d67d3f74808a60a78d3ebf1a5fb57.png",
  "assets/node_modules/expo-router/assets/sitemap.412dd9275b6b48ad28f5e3d81bb1f626.png",
  "assets/node_modules/expo-router/assets/unmatched.20e71bdf79e3a97bf55fd9e164041578.png",
  "favicon.ico",
  "icon.png",
  "index.html",
  "manifest.webmanifest",
  "_expo/static/js/web/entry-bbd076f9651d99cf4a48952d3d2b1e21.js"
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  event.respondWith(
    caches.match(req, { ignoreSearch: true }).then(
      (hit) =>
        hit ||
        fetch(req).catch(() => (req.mode === 'navigate' ? caches.match('./index.html') : Response.error())),
    ),
  );
});
