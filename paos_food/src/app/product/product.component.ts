import { Component } from '@angular/core';
import { Producto } from '../producto';
import { ProductService } from '../services/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  starters!: Producto[];
  breakfast!: Producto[];
  lunch!: Producto[];
  dinner!: Producto[];
  //Filtro de la api a componentes individuales del producto
  constructor(public ProductService: ProductService) {
    this.ProductService.getProduct().subscribe((res:any)=>{
      let products = res["products"]//Object.values(res)
      const array=Object.values(products);
      if (products){
        let parsed_products=array as Producto[];
        this.starters = parsed_products.filter((product: Producto)=>{return product.category==="Starter"})
        this.breakfast = parsed_products.filter((product: Producto)=>{return product.category==="Breakfast"})
        this.lunch = parsed_products.filter((product: Producto)=>{return product.category==="Lunch"})
        this.dinner = parsed_products.filter((product: Producto)=>{return product.category==="Dinner"})
        // this.productos = parsed_products
      }

    })
  }

}
