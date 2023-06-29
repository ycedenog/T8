import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router'
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ShopCartComponent } from './shop-cart/shop-cart.component';
import { ProductoIndComponent } from './producto-ind/producto-ind.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'products', component: ProductComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'carrito', component: ShopCartComponent},
  { path: 'productInd/:id', component: ProductoIndComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'}
  //{ path: "**", redirectTo: "home" }
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
