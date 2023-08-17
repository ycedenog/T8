import { Component, Input } from '@angular/core';
import { CartItem } from 'src/app/cart_item';

@Component({
  selector: 'tr[app-item-cart]',
  templateUrl: './item-cart.component.html',
  styleUrls: ['./item-cart.component.css']
})
export class ItemCartComponent {
  @Input() cartItem!: CartItem;

}
