import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto} from '../producto';

@Component({
  selector: 'app-producto-ind',
  templateUrl: './producto-ind.component.html',
  styleUrls: ['./producto-ind.component.css']
})
export class ProductoIndComponent {

  product!: Producto;

  constructor(private route: ActivatedRoute) {

    this.route.params.subscribe(params => {
      
      let id= params['nombre'];

      let productos= JSON.parse(localStorage.getItem('productos')!);

      const array = Object.values(productos);

      if (productos){
        let arrProd=array as Array<Producto>;
        
        let prodFilt=arrProd.filter(producto => producto.name == id);
        
        this.product=prodFilt[0];
        
      }

    });
  }

}
