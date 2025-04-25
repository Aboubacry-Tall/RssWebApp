import { Component, signal } from '@angular/core';
import { Pub } from '../../modules/pub/pub.model';
import { PubService } from '../../modules/pub/pub.service';

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
  constructor(public pubService: PubService) { }

  ngOnInit() {
    this.getPrimaryPub();
    this.getSecondaryPub();
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
}
