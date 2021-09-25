import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaListaComponent } from './pagina-lista/pagina-lista.component'; 
import { FiltroPipe } from './pipe/filtro.pipe';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    PaginaListaComponent, 
    FiltroPipe
  ],
  imports: [
    CommonModule,
    NgxPaginationModule
  ],
  exports:[ 
    PaginaListaComponent,
  ]
})
export class PaginacionModule { }
