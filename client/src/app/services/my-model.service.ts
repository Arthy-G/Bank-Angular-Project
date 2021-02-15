import { MyEntity } from './MyEntity';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MyModelService {

  constructor(private http: HttpClient) { }

  fetchAllEntities(): Observable<MyEntity[]> {
    return this.http.get<MyEntity[]>('http://localhost:8080/api');;
  }
}
