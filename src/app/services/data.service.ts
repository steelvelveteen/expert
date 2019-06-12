import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IArea } from '../domain/models/area.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = '../../assets/areas.json';
  constructor(private http: HttpClient) { }

  fetchData(): Observable<IArea[]> {
    return this.http.get<IArea[]>(this.url);
  }
}
