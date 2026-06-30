import { Component , output} from '@angular/core';
import { Productlist } from '../productlist/productlist';
import { product } from '../../model/product';

@Component({
  selector: 'app-container',
  imports: [Productlist],
  templateUrl: './container.html',
  styleUrls: ['./container.css'],
})
export class Container {

    favoriteAdded = output<product>();
onFavoriteAdded(product: product) {
this.favoriteAdded.emit(product);
}
}
