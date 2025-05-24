import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { SourcesComponent } from './modules/source/sources/sources.component';
import { SourceComponent } from './modules/source/source/source.component';
import { CategoryComponent } from './core/category/category.component';
import { ContactComponent } from './core/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
