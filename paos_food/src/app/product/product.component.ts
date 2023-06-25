import { Component } from '@angular/core';
import { Producto } from '../producto';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  productos!: Producto[];
  //Filtro de la api a componentes individuales del producto
  constructor() {
    let productos=JSON.parse(localStorage.getItem('productos')!);

    const array=Object.values(productos);

    if(productos){
      let arregloCorrec=array as Producto[];
      this.productos=arregloCorrec;
    }

  }

}
