import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto} from '../producto';
import { ProductService } from '../services/product/product.service';

@Component({
  selector: 'app-producto-ind',
  templateUrl: './producto-ind.component.html',
  styleUrls: ['./producto-ind.component.css']
})
export class ProductoIndComponent {

  product!: Producto;

  constructor(private route: ActivatedRoute, public productService: ProductService ) {

    this.route.params.subscribe(params => {

      let id:string = params['id'];

      this.productService.getProductsById(id).subscribe((res: any)=>{
        let product:Producto = res["product"] as Producto
        this.product = product;

      })

      // let productos= JSON.parse(localStorage.getItem('productos')!);
      //
      // const array = Object.values(productos);
      //
      // if (productos){
      //   let arrProd=array as Array<Producto>;
      //
      //   let prodFilt=arrProd.filter(producto => producto.name == id);
      //
      //   this.product=prodFilt[0];
      //
      // }

    });
  }

}
