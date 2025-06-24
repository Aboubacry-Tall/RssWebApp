import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'sources/:id',
    renderMode: RenderMode.Client
  },
  {
    path: 'source/category/:category',
    renderMode: RenderMode.Client
  },
  {
    path: 'articles/:id',
    renderMode: RenderMode.Client
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
