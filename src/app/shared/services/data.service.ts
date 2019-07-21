import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IArea } from '../domain/models/area.model';
import { Observable } from 'rxjs';
import { IEmployee } from '../domain/models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _url = '../../assets/areas.json';
  private readonly _webApiUrl = 'https://localhost:5001/';

  constructor(private _http: HttpClient) { }

  fetchData(): Observable<IArea[]> {
    return this._http.get<IArea[]>(this._url);
  }

  getEmployees(): Observable<IEmployee[]> {
    return this._http.get<any>(this._webApiUrl + 'Employee/GetEmployees');
  }
}
