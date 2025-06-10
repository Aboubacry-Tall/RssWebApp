import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notfound',
  standalone: false,
  templateUrl: './notfound.component.html',
  styleUrl: './notfound.component.scss'
})
export class NotfoundComponent {
  constructor(private router: Router) {}

  navigateToHome(): void {
    this.router.navigate(['/home']);
  }
}
