import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ExchangeRateComponent } from './components/exchange-rate/exchange-rate.component';
import { IfscComponent } from './components/ifsc/ifsc.component';
import { LayoutModule } from '../app/layout/layout.module';

@NgModule({
  declarations: [
    AppComponent,
    ExchangeRateComponent,
    IfscComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
