import { HttpResponse } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { CartItem } from 'src/app/cart_item';
import { AddProductService } from 'src/app/services/cart/add-product.service';

@Component({
  selector: 'tr[app-item-cart]',
  templateUrl: './item-cart.component.html',
  styleUrls: ['./item-cart.component.css']
})
export class ItemCartComponent {
  @Input() cartItem!: CartItem;

  constructor(public cartService:AddProductService){
  }

  delete(){
  }
  augmentQuantity(){
    this.cartService.addToCart(this.cartItem.product.id, 1).subscribe((res:HttpResponse<any>)=>{
      if(res.status !=200){return;}
      if(!res.body["success"]){return;}
      console.log(res.body)
      this.cartItem.quantity += 1;
    })

  }
  reduceQuantity(){
    this.cartService.addToCart(this.cartItem.product.id, -1).subscribe((res:HttpResponse<any>)=>{
      if(res.status !=200){return;}
      if(!res.body["success"]){return;}
      console.log(res.body)
      this.cartItem.quantity -= 1;
    })
  }

}
