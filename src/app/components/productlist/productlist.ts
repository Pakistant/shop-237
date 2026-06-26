import { Component,signal } from '@angular/core';
import { product } from '../../model/product';
import { CurrencyPipe, DatePipe, JsonPipe } from '@angular/common';


@Component({
  selector: 'app-productlist',
  imports: [CurrencyPipe,JsonPipe,DatePipe],
  templateUrl: './productlist.html',
  styleUrl: './productlist.css',
})
export class Productlist {


   list  = signal<product[]> ([
        {   
            id:1, 
            titre:'Robe soiree',
            price: 10000, 
            image:'assets/image/product/image1.jpeg',
            createdAt: new Date('2026-01-15'),
            categories: ['vêtement', 'femme', 'traditionnel']
        },
        { 
            id:1,
            titre:'Robe femme',
            price: 8000, image:'assets/image/product/image2.jpeg',
            createdAt: new Date('2026-01-15'),
            categories: ['vêtement', 'femme', 'traditionnel']
        },
        { 
            id:1,
            titre:'Robe 3 pieces',
            price: 15000, image:'assets/image/product/image3.jpg',
            createdAt: new Date('2026-01-15'),
            categories: ['vêtement', 'femme', 'traditionnel']
        },
        { 
            id:1,
            titre:'Chemise homme',
            price: 5000, image:'assets/image/product/image4.jpg',
            createdAt: new Date('2026-01-15'),
            categories: ['vêtement', 'femme', 'traditionnel']
        },
        { 
            id:1, 
            titre:'Veste',
            price: 10000, image:'assets/image/product/image5.jpg',
            createdAt: new Date('2026-01-15'),
            categories: ['vêtement', 'femme', 'traditionnel']
        },
        {   id:1, 
            titre:'Robe pour rouge',
            price: 10000, image:'assets/image/product/image6.jpg',
            createdAt: new Date('2026-01-15'),
            categories: ['vêtement', 'femme', 'traditionnel']
        },
        
        { 
            id:1, 
            titre:'ensemble habit',
            price: 10000, image:'assets/image/product/image7.jpeg',
            createdAt: new Date('2026-01-15'),
            categories: ['vêtement', 'femme', 'traditionnel']
        },
        {   id:1, 
            titre:'Robe pour rouge',
            price: 10000, image:'assets/image/product/image9.jpg',
            createdAt: new Date('2026-01-15'),
            categories: ['vêtement', 'femme', 'traditionnel']
        },
        {    id:1, 
            titre:'Robe pour rouge',
            price: 10000, image:'assets/image/product/image8.jpg',
            createdAt: new Date('2026-01-15'),
            categories: ['vêtement', 'femme', 'traditionnel']
        },
        {   id:1, 
            titre:'Robe pour rouge',
            price: 10000, image:'assets/image/product/image11.jpg',
            createdAt: new Date('2026-01-15'),
            categories: ['vêtement', 'femme', 'traditionnel']
        }
    ]);

            // FormatPrice(price:number):string{

            //    return price + 'FCFA';

            //  }

}

























