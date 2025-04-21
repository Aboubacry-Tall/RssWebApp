import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

export class NavbarComponent {
  items: MenuItem[] | undefined;
  url = environment.api;

  ngOnInit() {
    this.items = [
      // {
      //   label: 'Accueil',
      //   icon: 'pi pi-home',
      // },
      // {
      //   label: 'Actualités',
      //   icon: 'pi pi-home',
      // },
      // {
      //   label: 'Avis',
      //   icon: 'pi pi-search',
      //   badge: '3',
      //   items: [
      //     {
      //       label: 'Core',
      //       icon: 'pi pi-bolt',
      //       shortcut: '⌘+S',
      //     },
      //     {
      //       label: 'Blocks',
      //       icon: 'pi pi-server',
      //       shortcut: '⌘+B',
      //     },
      //     {
      //       separator: true,
      //     },
      //     {
      //       label: 'UI Kit',
      //       icon: 'pi pi-pencil',
      //       shortcut: '⌘+U',
      //     },
      //   ],
      // },
    ];
  }

  redirectTo() {
    window.location.href = this.url;
  }
}
