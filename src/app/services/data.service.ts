import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IArea } from '../domain/models/area.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _url = '../../assets/areas.json';
  constructor(private _http: HttpClient) { }

  fetchData(): Observable<IArea[]> {
    return this._http.get<IArea[]>(this._url);
  }
}
