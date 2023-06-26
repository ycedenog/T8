import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../producto';
import { ProductService } from '../services/product/product.service';
import { AddProductService } from '../services/cart/add-product.service';

@Component({
  selector: 'app-producto-ind',
  templateUrl: './producto-ind.component.html',
  styleUrls: ['./producto-ind.component.css']
})
export class ProductoIndComponent {

  product!: Producto;
  total!: number;
  item_count!: number;

  increment_product_count() {
    this.item_count++;
    this.total = this.product.price * this.item_count;
  }
  decrement_product_count() {
    if (this.item_count === 0) return;
    this.item_count--;
    this.total = this.product.price * this.item_count;
  }
  add_to_cart(){
    this.cartService.addToCart(this.product.id, this.item_count).subscribe((res:any)=>{
      if (res["success"] as boolean){
        this.router.navigate(["/carrito"])
      }
    })
  }

  constructor(private route: ActivatedRoute, private router: Router, public productService: ProductService, public cartService:AddProductService) {
    this.item_count = 0;
    this.total = 0.00;

    this.route.params.subscribe(params => {

      let id: string = params['id'];

      this.productService.getProductsById(id).subscribe((res: any) => {
        let product: Producto = res["product"] as Producto
        this.product = product;

      })

    });
  }

}
