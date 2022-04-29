import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersDetailsDSComponent } from './components/orders-details-ds/orders-details-ds.component';
import { OrdersDSComponent } from './components/orders-ds/orders-ds.component';
const routes: Routes = [
  // {
  //   path: '',
  //   component: App
  // },
  // {
  //   path: '/orders/:id',
  //   component: OrdersDetailsDSComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
