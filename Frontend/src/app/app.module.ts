import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValidateproductsComponent } from './validateproducts/validateproducts.component';
import { CheckreviewsComponent } from './checkreviews/checkreviews.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CheckproductreviewComponent } from './checkproductreview/checkproductreview.component';
import { VerifyproductComponent } from './verifyproduct/verifyproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    ValidateproductsComponent,
    CheckreviewsComponent,
    UserComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CheckproductreviewComponent,
    VerifyproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
