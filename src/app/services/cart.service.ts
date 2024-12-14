import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CartService {


    itemsToBuy = new BehaviorSubject<any[]>([])
    items = [
        {
          id: 1,
          name: 'Curado al Pimentón',
          src: 'assets/img/chesees/maxorata.webp',
          price: '14,28€',
          stock: 2,
          madeInCanarias: true,
          inCart: false
        },
        {
          id: 2,
          name: 'Cabrales',
          src: 'assets/img/chesees/cabrales.jpg',
          price: '32,30€',
          stock: 18,
          inCart: false
        },
        {
          id: 3,
          name: 'Curado de Cabra',
          src: 'assets/img/chesees/pasteurizados.jpg',
          price: '19,27€',
          stock: 11,
          madeInCanarias: true,
          inCart: false
        },
        {
          id: 4,
          name: 'Mahón-menorca',
          src: 'assets/img/chesees/mahon-menorca.png',
          price: '27,95€',
          stock: 3,
          madeInCanarias: false,
          inCart: false
        },
        null,
        {
          id: 5,
          name: 'Curado de Oveja de Guía',
          src: 'assets/img/chesees/curado-guia.png',
          price: '16,00€',
          stock: 20,
          madeInCanarias: true,
          inCart: false
        },
        {
          id: 6,
          name: 'Media flor',
          src: 'assets/img/chesees/media-flor.jpg',
          price: '9,80€',
          stock: 8,
          madeInCanarias: true,
          inCart: false
        },
        {
          id: 7,
          name: 'Idiazábal',
          src: 'assets/img/chesees/idiazabal.jpg',
          price: '22,50€',
          stock: 19,
          madeInCanarias: false,
          inCart: false
        },
        {
          id: 8,
          name: 'Gamonedo',
          src: 'assets/img/chesees/gamonedo.jpg',
          price: '15,50€',
          stock: 22,
          madeInCanarias: false,
          inCart: false
        }
      ]

    addItem(item: any) {
        const newItems = [...this.itemsToBuy.getValue(), item]
        this.itemsToBuy.next(newItems)
    }

    removeItem(item: any) {
        
    }

    getItem(id: number): any {
      return this.items.find(item => item?.id == id)
    }
}