import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { SourcesComponent } from './modules/source/sources/sources.component';
import { SourceComponent } from './modules/source/source/source.component';
import { CategoryComponent } from './core/category/category.component';
import { ContactComponent } from './core/contact/contact.component';
import { ArticleComponent } from './modules/article/article/article.component';
import { NotfoundComponent } from './core/notfound/notfound.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'sources',
    component : SourcesComponent
  },
  {
    path: 'contact',
    component : ContactComponent
  },
  {
    path: 'sources/:id',
    component : SourceComponent
  },
  {
    path: 'source/category/:category',
    component : CategoryComponent
  },
  {
    path: 'articles/:id',
    component : ArticleComponent
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
