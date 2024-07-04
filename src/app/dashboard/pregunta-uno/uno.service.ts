import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnoService {

  constructor(private httpClient: HttpClient) {}
  getAllPosts(): Observable<any> {
    return this.httpClient.get<any>("https://rickandmortyapi.com/api/location")
      .pipe(
        map(response => response.results.filter((location: any) => location.type === "Planet"))
      );
  }
  getAllPost2():Observable<any>{
    return this.httpClient.get<any>("https://jsonplaceholder.typicode.com/todos")
      .pipe(
        map(response => response.filter((location: any) => (location.id >= 25 && location.id <= 90 && location.completed)))
      );
  }  
}
