import { Component, signal } from '@angular/core';
import { Pub } from '../../modules/pub/pub.model';
import { PubService } from '../../modules/pub/pub.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  pubs = signal<Pub[]>([]);
  primaryPub = signal<Pub | undefined>(undefined);
  secondaryPub = signal<Pub>({} as Pub);
  language: string = "";
  ltrrtl: string = 'rtl';
  constructor(public pubService: PubService, public translate: TranslateService) { 
    this.translate.onLangChange.subscribe((event) => {
      this.language = event.lang;
      if (event.lang == 'ar') {
          this.ltrrtl = 'rtl';
      }
      else {
          this.ltrrtl = 'ltr';
      }
      document.getElementsByTagName("html")[0].setAttribute('lang', this.language);
      document.getElementsByTagName("body")[0].setAttribute('dir', this.ltrrtl);
    });
  }
  

  ngOnInit() {
    this.getPrimaryPub();
    this.getSecondaryPub();
    this.language = this.translate.currentLang
  }

  getPrimaryPub() {
    this.pubService.getPrimaryPub().subscribe((pub: Pub) => {
      this.primaryPub.set(pub);
    });
  }

  getSecondaryPub() {
    this.pubService.getSecondaryPub().subscribe((pub: Pub) => {
      this.secondaryPub.set(pub);
    });
  }

  setLanguage() {
    console.log("2");
    if (this.language == 'ar') {
        // this.translate.use('fr');
        localStorage.setItem("language", "fr");
    } else {
        // this.translate.use('ar');
        localStorage.setItem("language", "ar");
    }
    window.location.reload();
  }

  getLanguage() {
    if (this.language == 'ar') {
        return 'AR';
    } else {
        return 'FR';
    }
  }
}
