import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';


import { LayoutModule } from '../layout/layout.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StoreComponent } from './store/store.component';
import { ProductComponent } from './store/product/product.component';
import { ProductsComponent } from './store/products/products.component';
import { AddProductComponent } from './dashboard/add-product/add-product.component';
import { MainDashboardComponent } from './dashboard/main-dashboard/main-dashboard.component';
import { AddUserComponent } from './dashboard/add-user/add-user.component';

@NgModule({
  declarations: [

    HomeComponent,
    LoginComponent,
    RegisterComponent,
    StoreComponent,
    ProductComponent,
    ProductsComponent,
    AddProductComponent,
    MainDashboardComponent,
    AddUserComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    LayoutModule,
    ReactiveFormsModule,
  ]
})
export class PagesModule { }
