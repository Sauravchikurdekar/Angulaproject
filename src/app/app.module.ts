import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ForDemoComponent } from './for-demo/for-demo.component';
import { SecondComponent } from './second/second.component';
import { MarsComponent } from './mars/mars.component';
import { PlanetaryComponent } from './planetary/planetary.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { EventB1Component } from './event-b1/event-b1.component';
import { EmiComponent } from './emi/emi.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    ForDemoComponent,
    SecondComponent,
    MarsComponent,
    PlanetaryComponent,
    EventBindingComponent,
    EventB1Component,
    EmiComponent,
    ParentComponent,
    ChildComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ParentComponent,]
})
export class AppModule { }
