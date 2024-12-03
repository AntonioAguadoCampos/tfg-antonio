import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-supermarket',
  templateUrl: './supermarket.component.html',
  styleUrls: ['./supermarket.component.scss'],
})
export class SupermarketComponent {
  items = [
    {
      name: 'Agua 1',
      src: 'assets/img/water/canaria.jpg',
      price: '2€',
      madeInCanarias: true,
      inCart: false
    },
    {
      name: 'Agua 2',
      src: 'assets/img/water/eco.jpg',
      price: '1€',
      eco: true,
      inCart: false
    },
    {
      name: 'Agua 3',
      src: 'assets/img/water/km0.jpg',
      price: '1,3€',
      km0: true,
      inCart: false
    },
    {
      name: 'Agua 4',
      src: 'assets/img/water/nada.jpg',
      price: '0,95€',
      madeInCanarias: false,
      inCart: false
    },
    null,
    {
      name: 'Agua 3',
      src: 'assets/img/water/km0.jpg',
      price: '1,3€',
      km0: true,
      inCart: false
    },
    {
      name: 'Agua 4',
      src: 'assets/img/water/nada.jpg',
      price: '0,95€',
      madeInCanarias: false,
      inCart: false
    },
    {
      name: 'Agua 3',
      src: 'assets/img/water/km0.jpg',
      price: '1,3€',
      km0: true,
      inCart: false
    },
    {
      name: 'Agua 4',
      src: 'assets/img/water/nada.jpg',
      price: '0,95€',
      madeInCanarias: false,
      inCart: false
    }
  ];

  constructor(
    private cartService: CartService
  ) {}

  onBuyItem(item: any) {
    item.inCart = true
    this.cartService.addItem(item)
  }

}
