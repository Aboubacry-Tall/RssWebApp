import { Component } from '@angular/core';


@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  subscribeToNewsletter(email: string) {
    // TODO: Implement newsletter subscription logic
    console.log('Newsletter subscription for:', email);
  }
}
