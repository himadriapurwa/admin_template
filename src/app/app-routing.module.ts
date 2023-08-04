import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceComponent } from './invoice/invoice.component';
import { ProductsComponent } from './products/products.component';
import { UserListComponent } from './user-list/user-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CartComponent } from './cart/cart.component';
import { ChartsComponent } from './charts/charts.component';

const routes: Routes = [{
  path:'invoice', component:InvoiceComponent
},
{path:'products', component: ProductsComponent},
{path:'user-list', component: UserListComponent},{path:'dashboard', component: DashboardComponent},
{path:'cart', component:CartComponent},
{path:'charts', component:ChartsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
