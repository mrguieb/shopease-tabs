import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  imports: [IonicModule, CommonModule],
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  cartItems: any[] = [];
  totalAmount = 0;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.loadCart();
  }
  ionViewWillEnter() {
  this.loadCart(); // refresh every time tab becomes active
}
  loadCart() {
    this.cartItems = this.cartService.getItems();
    this.computeTotal();
  }
  computeTotal() {
    this.totalAmount = this.cartItems.reduce(
      (sum, item) => sum + item.price * (item.quantity || 1),
      0
    );
  }
  clearCart() {
    this.cartItems = this.cartService.clearCart();
    this.totalAmount = 0;
  }
}
