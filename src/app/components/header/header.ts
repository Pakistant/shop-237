import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header {
   links = [
  { label: 'Home',      href: '#home' },
  { label: 'Product',         href: '#product' },
  { label: 'Blog',       href: '#blog' },
  { label: 'Contact',      href: '#contact' },
];

  activeLink = 'Home';
isMenuOpen = false;

toggleMenu() {
  this.isMenuOpen = !this.isMenuOpen;
}

setActive(label: string) {
  this.activeLink = label;
  this.isMenuOpen = false;
}
}
