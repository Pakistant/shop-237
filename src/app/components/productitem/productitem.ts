import { Component , input , output} from '@angular/core';
import { product } from '../../model/product';
import { CurrencyPipe, DatePipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-productitem',
  imports: [DatePipe, JsonPipe, CurrencyPipe],
  templateUrl: './productitem.html',
  styleUrls: ['./productitem.css'],
})
export class Productitem {

  product = input.required<product>();

   // product = input.required<product>();


   // output qui emet un object product
   productClicked = output <product>();

   // methode qui emet l'evenement 
       displayProductViewModal = output<product>();
       onProductClick() {
       this.displayProductViewModal.emit(this.product());

}
}

