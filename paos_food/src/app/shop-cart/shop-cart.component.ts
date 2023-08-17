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

  constructor(public cartService: AddProductService) {
    this.cartService.getCart().subscribe((res:  HttpResponse<any>) => {
      if (res.status != 200){
        return;
      }
      this.cart = res.body["cart"] as CartItem[];
    })
  }

  ngOnInit() {
  }

}
