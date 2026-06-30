import { Component,signal } from '@angular/core';
import { product } from '../../model/product';

import { Productitem } from '../productitem/productitem';


@Component({
  selector: 'app-productlist',
  imports: [Productitem],
  templateUrl: './productlist.html',
  styleUrls: ['./productlist.css'],
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
            id:2,
            titre:'Robe femme',
            price: 8000, image:'assets/image/product/image2.jpeg',
            createdAt: new Date('2026-01-15'),
            categories: ['vêtement', 'femme', 'traditionnel']
        },
        { 
            id:3,
            titre:'Robe 3 pieces',
            price: 15000, image:'assets/image/product/image3.jpg',
            createdAt: new Date('2026-01-15'),
            categories: ['vêtement', 'femme', 'traditionnel']
        },
        { 
            id:4,
            titre:'Chemise homme',
            price: 5000, image:'assets/image/product/image4.jpg',
            createdAt: new Date('2026-01-15'),
            categories: ['vêtement', 'femme', 'traditionnel']
        },
        { 
            id:5, 
            titre:'Veste',
            price: 10000, image:'assets/image/product/image5.jpg',
            createdAt: new Date('2026-01-15'),
            categories: ['vêtement', 'femme', 'traditionnel']
        },
        {   id:6, 
            titre:'Robe pour rouge',
            price: 10000, image:'assets/image/product/image6.jpg',
            createdAt: new Date('2026-01-15'),
            categories: ['vêtement', 'femme', 'traditionnel']
        },
        
        { 
            id:7, 
            titre:'ensemble habit',
            price: 10000, image:'assets/image/product/image7.jpeg',
            createdAt: new Date('2026-01-15'),
            categories: ['vêtement', 'femme', 'traditionnel']
        },
        {   id:8, 
            titre:'Robe pour rouge',
            price: 10000, image:'assets/image/product/image9.jpg',
            createdAt: new Date('2026-01-15'),
            categories: ['vêtement', 'femme', 'traditionnel']
        },
        {    id:9, 
            titre:'Robe pour rouge',
            price: 10000, image:'assets/image/product/image8.jpg',
            createdAt: new Date('2026-01-15'),
            categories: ['vêtement', 'femme', 'traditionnel']
        },
        {   id:10, 
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

























