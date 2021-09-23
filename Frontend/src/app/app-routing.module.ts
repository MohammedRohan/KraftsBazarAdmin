import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductsComponent } from './add-products/add-products.component';
import { CheckreviewsComponent } from './checkreviews/checkreviews.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ValidateproductsComponent } from './validateproducts/validateproducts.component';

const routes: Routes = [{path:'',component:HomeComponent},
{path:'validate', component:ValidateproductsComponent},
{path:'checkreview',component:CheckreviewsComponent},
{path:'user',component:UserComponent},
{path:'addproducts',component:AddProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
