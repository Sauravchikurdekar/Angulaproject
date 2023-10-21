import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ForDemoComponent } from './for-demo/for-demo.component';
import { SecondComponent } from './second/second.component';
import { MarsComponent } from './mars/mars.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    ForDemoComponent,
    SecondComponent,
    MarsComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [MarsComponent,]
})
export class AppModule { }
