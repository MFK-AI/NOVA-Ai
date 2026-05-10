const CACHE = 'nova-v1';
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(['/index.html','/manifest.json'])));
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', e => {
  if (e.request.url.includes('api.anthropic') || e.request.url.includes('openai') || 
      e.request.url.includes('googleapis') || e.request.url.includes('deepseek') ||
      e.request.url.includes('perplexity') || e.request.url.includes('moonshot') ||
      e.request.url.includes('x.ai')) return;
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
