import { Component, computed, signal } from '@angular/core';
import { product } from './model/product';
import { Header } from './components/header/header'
import { Container } from './components/container/container';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header,Container,Footer],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('shop-app');
  favorites = signal<product[]>([]);
  favoritesCount = computed(() => this.favorites().length);

  onFavoriteAdded(product: product) {
    const alreadyFavorite = this.favorites().some(item => item.id === product.id);

    if (alreadyFavorite) {
      return;
    }

    this.favorites.update(list => [...list, product]);
  }
}
