import { Component , input } from '@angular/core';
import { product } from '../../model/product';
import { CurrencyPipe, DatePipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-productitem',
  imports: [DatePipe, JsonPipe, CurrencyPipe],
  templateUrl: './productitem.html',
  styleUrls: ['./productitem.css'],
})
export class Productitem {

  product = input<product>();

   // product = input.required<product>();


}
