import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductComponent } from './product/product.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShopCartComponent } from './shop-cart/shop-cart.component';
import { ItemCartComponent } from './shop-cart/item-cart/item-cart.component';
import { SectionComponent } from './section/section.component';
import { ProductoIndComponent } from './producto-ind/producto-ind.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { MatDialogModule} from '@angular/material/dialog';
import { PopupComponent } from './popup/popup.component'
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductComponent,
    AboutUsComponent,
    ContactComponent,
    HomeComponent,
    ShopCartComponent,
    ItemCartComponent,
    SectionComponent,
    ProductoIndComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    PopupComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
