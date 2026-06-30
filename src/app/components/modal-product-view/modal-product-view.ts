import { DatePipe } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { product } from '../../model/product';

@Component({
  selector: 'app-modal-product-view',
  imports: [DatePipe],
  templateUrl: './modal-product-view.html',
  styleUrls: ['./modal-product-view.css'],
})
export class ModalProductView {

 //INPUT : reçoit le produit à afficher
product = input<product>();
// OUTPUT : signal au parent de fermer le modal
close = output<void>();
     onCloseClick() {
     this.close.emit();
}
// NOUVEAU output : ajout aux favoris
favoriteAdded = output<product>();
      onAddToFavorites() {
      const p = this.product();
        if (p) {
         this.favoriteAdded.emit(p);
  }
}


}
