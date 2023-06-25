import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router'
import { ProductComponent } from './product/product.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ShopCartComponent } from './shop-cart/shop-cart.component';
import { ProductoIndComponent } from './producto-ind/producto-ind.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'products', component: ProductComponent},
  { path: 'aboutus', component: AboutUsComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'carrito', component: ShopCartComponent},
  { path: 'productInd/:nombre', component: ProductoIndComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
