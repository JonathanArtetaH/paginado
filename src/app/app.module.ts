import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'; 
import { AppComponent } from './app.component'; 
import { PaginacionModule } from './paginacion/paginacion.module'; 
import {NgxPaginationModule} from 'ngx-pagination';  
@NgModule({
  declarations: [
    AppComponent,  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PaginacionModule,
    NgxPaginationModule
  ],exports:[
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
