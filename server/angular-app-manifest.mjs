
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/RssWebApp/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/RssWebApp/home",
    "route": "/RssWebApp"
  },
  {
    "renderMode": 2,
    "route": "/RssWebApp/home"
  },
  {
    "renderMode": 2,
    "route": "/RssWebApp/sources"
  },
  {
    "renderMode": 1,
    "route": "/RssWebApp/sources/*"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 950, hash: 'af9ee23adfb06ccdc2feb83461a08799dc64d112eb7f574e51c368ad5264abbd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1150, hash: '15e6e122f125aa4c01df85653b3d9a61fdbfd446c394a073c8d205148893a14d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'sources/index.html': {size: 57720, hash: '3a28b8bbe7865fdbdcaf7b042acfbc84bb2b372f2222e0172344997609982423', text: () => import('./assets-chunks/sources_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 75841, hash: 'fac69a22044d517086f0d0f93a74861cec73ba6a35d179147ad9fdb0482044c3', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-TPIZWHG4.css': {size: 13248, hash: 'qQsjf3xwlWw', text: () => import('./assets-chunks/styles-TPIZWHG4_css.mjs').then(m => m.default)}
  },
};
