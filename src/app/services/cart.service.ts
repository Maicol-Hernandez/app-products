import { Product } from '../products';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  constructor() { }

  addToCart(product: Product): void {
    this.items.push(product);
  }

  getItems(): Product[] {
    return this.items
  }

  clearCart(): Product[] {
    this.items = [];
    return this.items;
  }
}
