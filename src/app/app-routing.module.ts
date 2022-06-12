import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './products/create-product/create-product.component';
import { ViewAllProductsComponent } from './products/view-all-products/view-all-products.component';
import { ViewProductComponent } from './products/view-product/view-product.component';

const routes: Routes = [
  {path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
