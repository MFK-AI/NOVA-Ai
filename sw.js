const CACHE_NAME = 'nova-agent-v1';
const STATIC_ASSETS = [
  '/index.html',
  '/manifest.json',
];

// Install
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

// Activate
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch - network first, fallback to cache
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Always fetch API calls from network
  if (url.hostname.includes('anthropic') ||
      url.hostname.includes('openai') ||
      url.hostname.includes('googleapis') ||
      url.hostname.includes('deepseek') ||
      url.hostname.includes('perplexity') ||
      url.hostname.includes('moonshot') ||
      url.hostname.includes('x.ai') ||
      url.hostname.includes('fonts.googleapis') ||
      url.hostname.includes('cdnjs')) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then(response => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
