
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
    'index.csr.html': {size: 1058, hash: '51594c158252a47b9749e5306e6a8f2eea0a0f3e3a1aced7dd912b50c6024bf3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1155, hash: 'cbcdc63b89eec63f2e37ef547ee3792ae41bea15712e864d7f35b4b230d6ef95', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 1529956, hash: '0b0b2ee45e3abefc480b8d5e1866c18c6d362f5564fbf96d989a4a6e31e42daa', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 1529956, hash: '0b0b2ee45e3abefc480b8d5e1866c18c6d362f5564fbf96d989a4a6e31e42daa', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'sources/index.html': {size: 726993, hash: 'a406efe5888939faeeafdb2443f7da05521827f782034615d0456077f7598cb5', text: () => import('./assets-chunks/sources_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 160458, hash: '4f19d6580464bc638d866e1eba61f8b74fdbdbb219a52c0a35311be665c7a4c1', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-OLJ635GC.css': {size: 13551, hash: '3vfvrHeW8jU', text: () => import('./assets-chunks/styles-OLJ635GC_css.mjs').then(m => m.default)}
  },
};
