import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  getLista():Observable<Lista[]>{
    return this.http.get<Lista[]>(`https://jsonplaceholder.typicode.com/todos`)
  }
  
}
