// Endereço antigo: o app mudou para https://financeiro-app.github.io/.
// Este service worker substitui o anterior só para limpar o cache e se desinstalar,
// assim quem abriu o endereço antigo não fica preso na versão guardada no aparelho.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil((async () => {
  for (const k of await caches.keys()) await caches.delete(k);
  await self.registration.unregister();
  for (const c of await self.clients.matchAll({ type: 'window' })) c.navigate(c.url);
})()));
