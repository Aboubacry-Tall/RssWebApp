import { Component, signal } from '@angular/core';
import { Pub } from '../../modules/pub/pub.model';
import { PubService } from '../../modules/pub/pub.service';

@Component({
  selector: 'app-avis',
  standalone: false,
  templateUrl: './avis.component.html',
  styleUrl: './avis.component.scss'
})
export class AvisComponent {

  pubs = signal<Pub[]>([]);
  constructor(public pubService: PubService) { }

  ngOnInit() {
    this.getPubs();
  }

  getPubs() {
    this.pubService.getPubs().subscribe((data) => {
      this.pubs.set(data);
    });
  }
}
