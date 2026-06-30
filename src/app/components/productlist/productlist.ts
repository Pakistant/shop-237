import { Component,signal,output } from '@angular/core';
import { product } from '../../model/product';

import { Productitem } from '../productitem/productitem';
import { ModalProductView } from '../modal-product-view/modal-product-view';


@Component({
  selector: 'app-productlist',
  imports: [Productitem, ModalProductView],
  templateUrl: './productlist.html',
  styleUrls: ['./productlist.css'],
})
export class Productlist {


   list  = signal<product[]> ([
        {   
            id:1, 
            titre:'Robe soiree',
            price: 10000, 
            description: 'Robe de soirée chic avec détails pailletés, idéale pour événements élégants.',

            image:'assets/image/product/image1.jpeg',
            createdAt: new Date('2026-01-15'),
            categories: ['vêtement', 'femme', 'traditionnel']
        },
        { 
            id:2,
            titre:'Robe femme',
            description: 'Robe femme rouge en velours, parfaite pour une sortie élégante ou une réception.',
            price: 8000, image:'assets/image/product/image2.jpeg',
            createdAt: new Date('2026-01-15'),
            categories: ['vêtement', 'femme', 'traditionnel']
        },
        { 
            id:3,
            titre:'Robe 3 pieces',
            price: 15000,
            description: 'Ensemble 3 pièces raffiné, parfait pour un look complet et coordonné.', image:'assets/image/product/image3.jpg',
            createdAt: new Date('2026-01-15'),
            categories: ['vêtement', 'femme', 'traditionnel']
        },
        { 
            id:4,
            titre:'Chemise homme',
            price: 5000, 
            description: 'Chemise homme blanche classique, adaptée au bureau et aux occasions formelles.',
            image:'assets/image/product/image4.jpg',
            createdAt: new Date('2026-01-15'),
            categories: ['vêtement', 'femme', 'traditionnel']
        },
        { 
            id:5, 
            titre:'Veste',
            price: 10000,
            description: 'Veste élégante et structurée, idéale pour compléter un ensemble professionnel ou décontracté.',
             image:'assets/image/product/image5.jpg',
            createdAt: new Date('2026-01-15'),
            categories: ['vêtement', 'femme', 'traditionnel']
        },
        {   id:6, 
            titre:'Robe pour rouge',
            price: 10000,
            description: 'Robe rouge vive et féminine, parfaite pour attirer les regards lors d’une soirée.', 
            image:'assets/image/product/image6.jpg',
            createdAt: new Date('2026-01-15'),
            categories: ['vêtement', 'femme', 'traditionnel']
        },
        
        { 
            id:7, 
            titre:'ensemble habit',
            price: 10000, 
            description: 'Ensemble traditionnel moderne, conçu pour le confort et le style de tous les jours.',
            image:'assets/image/product/image7.jpeg',
            createdAt: new Date('2026-01-15'),
            categories: ['vêtement', 'femme', 'traditionnel']
        },
        {   id:8, 
            titre:'Robe pour rouge',
            price: 10000, 
            description: 'Robe chic pour une touche de glamour, adaptée aux soirées habillées.',
            image:'assets/image/product/image9.jpg',
            createdAt: new Date('2026-01-15'),
            categories: ['vêtement', 'femme', 'traditionnel']
        },
        {    id:9, 
            titre:'Robe pour rouge',
            price: 10000,
            description: 'Robe moderne au tissu fluide, parfaite pour un look élégant et confortable.',
             image:'assets/image/product/image8.jpg',
            createdAt: new Date('2026-01-15'),
            categories: ['vêtement', 'femme', 'traditionnel']
        },
        {   id:10, 
            titre:'Robe pour rouge',
            price: 10000,
            description: 'Robe rouge élégante avec coupe ajustée, idéale pour une occasion spéciale.',        
             image:'assets/image/product/image11.jpg',
            createdAt: new Date('2026-01-15'),
            categories: ['vêtement', 'femme', 'traditionnel']
        }
    ]);

            // FormatPrice(price:number):string{

            //    return price + 'FCFA';

            //  }

    //etat du modal

          isDisplayModal = signal(false);
          modalProduct = signal<product | undefined>(undefined);

        // Méthode appelée quand un produit est cliqué
          onDisplayProductViewModal(product: product) {
          this.modalProduct.set(product);
          this.isDisplayModal.set(true);
}

          onCloseModal() {
            this.isDisplayModal.set(false);
            this.modalProduct.set(undefined);
          }
          // NOUVEAU output : retransmet vers App
           favoriteAdded = output<product>();
          // Méthode appelée quand le modal ajoute aux favoris
          onFavoriteAdded(product: product) {
           console.log('Favori ajouté :', product.titre);
           this.favoriteAdded.emit(product);
}

}

























