import { HttpResponse } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from 'src/app/cart_item';
import { AddProductService } from 'src/app/services/cart/add-product.service';

@Component({
  selector: 'tr[app-item-cart]',
  templateUrl: './item-cart.component.html',
  styleUrls: ['./item-cart.component.css']
})
export class ItemCartComponent {
  @Input() cartItem!: CartItem;
  @Input() deleteItemNotifier!: BehaviorSubject<number>;
  @Input() updateItemNotifier!: BehaviorSubject<object>;

  constructor(public cartService:AddProductService){
  }

  delete(){
    this.cartService.delete(this.cartItem.id).subscribe((res:HttpResponse<any>)=>{
      if(res.status !=200){return;}
      if(!res.body["success"]){return;}
      console.log(res.body)
      // this.cartItem.quantity += 1;
      this.deleteItemNotifier.next(this.cartItem.id);
    })
  }
  augmentQuantity(){
    this.cartService.addToCart(this.cartItem.product.id, 1).subscribe((res:HttpResponse<any>)=>{
      if(res.status !=200){return;}
      if(!res.body["success"]){return;}
      console.log(res.body)
      this.cartItem = res.body["product"] as CartItem;
      this.updateItemNotifier.next(this.cartItem);

    })

  }
  reduceQuantity(){
    this.cartService.addToCart(this.cartItem.product.id, -1).subscribe((res:HttpResponse<any>)=>{
      if(res.status !=200){return;}
      if(!res.body["success"]){return;}
      console.log(res.body)
      if (res.body["product"]===null){
        this.deleteItemNotifier.next(this.cartItem.id);
        return;
      }
      this.cartItem = res.body["product"] as CartItem;
      this.updateItemNotifier.next(this.cartItem);
    })
  }

}
