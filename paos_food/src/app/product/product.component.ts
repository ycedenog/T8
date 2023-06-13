import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  productos!: any[];
  //Filtro de la api a componentes individuales del producto
  constructor() {
    let productos=JSON.parse(localStorage.getItem('productos')!);

    const array=Object.values(productos.data);

    if(productos){

      this.productos=array;
    }

  }

}
