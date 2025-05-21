import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  imports: [IonicModule, CommonModule], 
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  products: any[] = [];


  constructor(private productService: ProductService, private cartService: CartService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    alert(`${product.title} added to cart!`);
  }
}