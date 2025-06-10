
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: "fr",
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/sources"
  },
  {
    "renderMode": 1,
    "route": "/sources/*"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  },
  {
    "renderMode": 1,
    "route": "/source/category/*"
  },
  {
    "renderMode": 1,
    "route": "/articles/*"
  },
  {
    "renderMode": 2,
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1023, hash: '0bcb6d70ec9be113a12ebe7805ba1aaebd255ce0478b79f56213d719800220a0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1155, hash: '3ac219ab6c638f6db8da2d560673656f161e7d5fc0f12389cdc43ecf429759f0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'sources/index.html': {size: 707613, hash: '67bc0baf6c5e89a0c2f485c3cb3536c2f2d8ca44f7fc87311aa7339f9a51d91c', text: () => import('./assets-chunks/sources_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 1511424, hash: '6abaee221f65f53c28e27ba502d39ffc068a78f17f7e4ac6a8d00861e12c7faa', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'index.html': {size: 1511424, hash: '6abaee221f65f53c28e27ba502d39ffc068a78f17f7e4ac6a8d00861e12c7faa', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 160395, hash: '81671b422201d24ad3de5e0c2b8f389e147d92bcd51dd55701cbf8a0e8fc01c4', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-YOQLQSNA.css': {size: 13387, hash: 'j4m+hr87N+M', text: () => import('./assets-chunks/styles-YOQLQSNA_css.mjs').then(m => m.default)}
  },
};
