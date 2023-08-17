import { Component } from '@angular/core';
import { AddProductService } from '../services/cart/add-product.service';
import { CartItem } from '../cart_item';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent {
  cart!: CartItem[];
  total_payment: number=0;

  constructor(public cartService: AddProductService) {
    this.cartService.getCart().subscribe((res:  HttpResponse<any>) => {
      if (res.status != 200){
        return;
      }
      this.cart = res.body["cart"] as CartItem[];
      for (let cartItem of this.cart){
        this.total_payment += cartItem.quantity * cartItem.product.price;
      }
    })
  }

  ngOnInit() {
  }

}
