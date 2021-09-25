import { Component, OnInit } from '@angular/core';
import { Lista } from 'src/app/paginacion/interface/lista.interface';
import { ApiService } from 'src/app/paginacion/service/api.service';

@Component({
  selector: 'app-paginalista',
  templateUrl: './pagina-lista.component.html',
  styles: [
  `
  .container{display:inline;pading:13px;}
  button{margin:8px}
  `
  ]
})
export class PaginaListaComponent implements OnInit {
  public datos: Lista[] = [];
  p: number = 1;
  papagenumber: number = 0;
  pagesice: number = 0;
  numerocontador: string[] = [];
  valores: number=0;
  val: number =3;
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getLista().subscribe(rest => {
      this.datos = rest
      this.valores = this.datos.length
    })
  }

  nextPage() {
    this.papagenumber += 10;
    console.log(this.papagenumber);
    this.val = this.val +1 
  }

  prevPage() {
    if (this.papagenumber > 0)
      this.papagenumber -= 5; 
  }

  page(i:number) { 
    this.papagenumber =  (i * 10)
    this.val = i +1
     
  }
}