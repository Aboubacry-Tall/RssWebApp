import { Component, signal } from '@angular/core';
import { Pub } from '../../modules/pub/pub.model';
import { PubService } from '../../modules/pub/pub.service';
import { AppComponent } from '../../app.component';
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
  language = '';
  constructor(public pubService: PubService, public translate: TranslateService) { }
  

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
    
    if (this.language == 'ar') {
        this.translate.use('fr');
        localStorage.setItem("language", "fr");
    } else {
        this.translate.use('ar');
        localStorage.setItem("language", "ar");
    }
    location.reload();
  }
}
