import { Component } from '@angular/core';
import { AddProductService } from '../services/cart/add-product.service';
import { CartItem } from '../cart_item';
import { HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { OrderService } from '../services/order/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent {
  cart!: CartItem[];
  shipping_address!: string;
  total_payment: number = 0;

  public _removeCartItemSub: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public removeCartItemObs: Observable<number> = this._removeCartItemSub.asObservable();

  public _updateCartItemSub: BehaviorSubject<Object> = new BehaviorSubject<Object>({});
  public updateCartItemObs: Observable<Object> = this._updateCartItemSub.asObservable();


  shippingAddressInputEventCallback(event: any) {
    this.shipping_address = event.target.value;
  }
  processOrder(){
      this.router.navigate(["/home"])
    this.orderservice.orderCart(this.shipping_address).subscribe((response: HttpResponse<any>)=>{
      if (response.status != 200) {
        return;
      }
      if (!response.body["success"]) {
        return;
      }
      this.router.navigate(["/cart"])

    })
  }

  constructor(public cartService: AddProductService, public orderservice:OrderService, private router:Router) {
    this.cartService.getCart().subscribe((res: HttpResponse<any>) => {
      if (res.status != 200) {
        return;
      }
      this.cart = res.body["cart"] as CartItem[];
      for (let cartItem of this.cart) {
        this.total_payment += cartItem.quantity * cartItem.product.price;
      }

      this.removeCartItemObs.subscribe((cart_item_id: number) => {
        this.cart = this.cart.filter((cart_item: CartItem) => cart_item_id !== cart_item.id)
        this.total_payment = 0;
        for (let cartItem of this.cart) {
          this.total_payment += cartItem.quantity * cartItem.product.price;
        }
      })
      this.updateCartItemObs.subscribe((cart_item_updated: Object) => {
        const new_cart_item = cart_item_updated as CartItem;
        for (let cartItem of this.cart) {
          if (cartItem.id === new_cart_item.id) {
            cartItem.quantity = new_cart_item.quantity;
          }
        }
        this.total_payment = 0;
        for (let cartItem of this.cart) {
          this.total_payment += cartItem.quantity * cartItem.product.price;
        }
      })
    })
  }

  ngOnInit() {
  }

}
