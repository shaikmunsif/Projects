import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  { 
    path: 'create-product', 
    component: CreateProductComponent 
  },
  { 
    path: '', 
    component: ProductsComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
