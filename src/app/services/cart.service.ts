import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CartService {
  private storageKey = 'cart_items';

  addToCart(product: any) {
    let items = this.getItems();
    const existingItem = items.find(item => item.d_id === product.d_id);

    if (existingItem) {
      existingItem.quantity = (existingItem.quantity || 1) + 1;
    } else {
      items.push({ ...product, quantity: 1 });
    }

    this.saveItems(items);
  }

  getItems(): any[] {
    const stored = localStorage.getItem(this.storageKey);
    return stored ? JSON.parse(stored) : [];
  }

  clearCart(): any[] {
    localStorage.removeItem(this.storageKey);
    return [];
  }

  updateItems(updatedItems: any[]) {
    this.saveItems(updatedItems);
  }

  private saveItems(items: any[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(items));
  }
}
