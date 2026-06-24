import { Component } from '@angular/core';
import { product } from '../../model/product';

@Component({
  selector: 'app-productlist',
  imports: [],
  templateUrl: './productlist.html',
  styleUrl: './productlist.css',
})
export class Productlist {
    list: product[] = [{ id:1, titre:'Robe soiree',price: 10000, image:'assets/image/product/image1.jpeg'},
        { id:1, titre:'Robe femme',price: 8000, image:'assets/image/product/image2.jpeg'},
        { id:1, titre:'Robe 3 pieces',price: 15000, image:'assets/image/product/image3.jpg'},
        { id:1, titre:'Chemise homme',price: 5000, image:'assets/image/product/image4.jpg'},
        { id:1, titre:'Veste',price: 10000, image:'assets/image/product/image5.jpg'},
        { id:1, titre:'Robe pour rouge',price: 10000, image:'assets/image/product/image6.jpg'},
        { id:1, titre:'Robe pour rouge',price: 10000, image:'assets/image/product/image7.jpeg'},
        { id:1, titre:'Robe pour rouge',price: 10000, image:'assets/image/product/image9.jpg'},
        { id:1, titre:'Robe pour rouge',price: 10000, image:'assets/image/product/image8.jpg'},
        { id:1, titre:'Robe pour rouge',price: 10000, image:'assets/image/product/image11.jpg'}
    ];
}






















