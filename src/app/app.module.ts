import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersDSComponent } from './components/orders-ds/orders-ds.component';
import { OrdersItemDSComponent } from './components/orders-item-ds/orders-item-ds.component';
import { OrdersDetailsDSComponent } from './components/orders-details-ds/orders-details-ds.component';

@NgModule({
  declarations: [
    AppComponent,
    OrdersDSComponent,
    OrdersItemDSComponent,
    OrdersDetailsDSComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
