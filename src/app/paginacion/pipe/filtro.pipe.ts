import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from 'src/app/paginacion/interface/lista.interface'; 
@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(user: Lista[],pagen:number): Lista[] {
    
     
    return user.slice(pagen, pagen + 10);
  }

}
