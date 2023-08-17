import { Component } from '@angular/core';
import { AddProductService } from '../services/cart/add-product.service';
import { CartItem } from '../cart_item';
import { HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent {
  cart!: CartItem[];
  total_payment: number = 0;

  public _removeCartItemSub: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public removeCartItemObs: Observable<number> = this._removeCartItemSub.asObservable();

  public _updateCartItemSub: BehaviorSubject<Object> = new BehaviorSubject<Object>({});
  public updateCartItemObs: Observable<Object> = this._updateCartItemSub.asObservable();

  constructor(public cartService: AddProductService) {
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
        for (let cartItem of this.cart) {
          this.total_payment += cartItem.quantity * cartItem.product.price;
        }
      })
      this.updateCartItemObs.subscribe((cart_item_updated: Object) => {
        const new_cart_item = cart_item_updated as CartItem;
        this.total_payment = 0;
        for (let cartItem of this.cart) {
          if (cartItem.id === new_cart_item.id){
            cartItem.quantity = new_cart_item.quantity;
          }
        }
        for (let cartItem of this.cart) {
          this.total_payment += cartItem.quantity * cartItem.product.price;
        }
      })
    })
  }

  ngOnInit() {
  }

}
