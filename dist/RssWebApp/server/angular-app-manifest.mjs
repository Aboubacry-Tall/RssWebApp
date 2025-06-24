
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
    'index.csr.html': {size: 1058, hash: '389b53c028c9bc10b02da8c3a4d90c94b63c13332872e6848a63de2a07ad7100', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1155, hash: '368d60dfe7b1d379a7ba3664857c5aaa4ec987706128e6704198541c853f6c32', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 2060383, hash: 'e958adf5e47dd1211da8ef0676f9e6bc13f650e81ab8673e940d06e7886bb7f0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 57351, hash: '0f1001c4965148057e982df65655dda376da28a71e41f7f1e9ad6b9faa585b4d', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 2060383, hash: 'e958adf5e47dd1211da8ef0676f9e6bc13f650e81ab8673e940d06e7886bb7f0', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'sources/index.html': {size: 1637564, hash: 'ab3aeb82584b75df2cea6c68735d3c343e41af2765542bb9346e889067833bc6', text: () => import('./assets-chunks/sources_index_html.mjs').then(m => m.default)},
    'styles-OLJ635GC.css': {size: 13551, hash: '3vfvrHeW8jU', text: () => import('./assets-chunks/styles-OLJ635GC_css.mjs').then(m => m.default)}
  },
};
