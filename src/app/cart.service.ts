import { Product } from './products';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  // 定义一个items属性来存储购物车中当前产品的数组
  items: Product[] = [];
/* . . . */

  // 添加到购物车
  addToCart(product: Product) {
    this.items.push(product);
  }

  // 获取购物车
  getItems() {
    return this.items;
  }

  // 清空购物车
  clearCart() {
    this.items = [];
    return this.items;
  }
/* . . . */
}