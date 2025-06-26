import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rss-web-app';
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['ar', 'fr']);
    this.translate.setDefaultLang('ar');
    if (typeof window !== 'undefined' && window.localStorage) {
      this.translate.use(localStorage.getItem("language") ?? 'ar');
    } 
    
  }
}