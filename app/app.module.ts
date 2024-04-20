import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import{HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';



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
import { ProductDataComponent } from './product-data/product-data.component';
import { FilterComponent } from './filter/filter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDemoComponent } from './material-demo/material-demo.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { PipeDemo2Component } from './pipe-demo2/pipe-demo2.component';
import { SentencePipe } from './pipes/SentencePipe';
import { SortingPipe } from './pipes/sorting.pipe';
// import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CapchaService } from './services/capcha.service';
import { ServiceDemoComponent } from './service-demo/service-demo.component';
import { TempleteFormComponent } from './templete-form/templete-form.component';
import { TempleteForm2Component } from './templete-form2/templete-form2.component';
import { BookAplicationComponent } from './book-aplication/book-aplication.component';
// import { ReactiveFormComponent } from './reactive-form/reactive-form.component';


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
    ProductDataComponent,
    FilterComponent,
    MaterialDemoComponent,
    PipeDemoComponent,
    PipeDemo2Component,
    SentencePipe,
    LoginComponent,
    ServiceDemoComponent,
    TempleteFormComponent,
    TempleteForm2Component,
    BookAplicationComponent,
    // BookappComponent
    // ReactiveFormComponent,
    
    // SortingPipe
    
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [CapchaService],
  bootstrap: [ BookAplicationComponent]
})
export class AppModule { }
