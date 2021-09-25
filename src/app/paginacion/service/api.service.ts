import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lista } from '../interface/lista.interface';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getLista():Observable<Lista[]>{
    return this.http.get<Lista[]>(`https://jsonplaceholder.typicode.com/todos`)
  }
 
}
