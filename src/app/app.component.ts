import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './shared/services/data.service';
import { IArea } from './shared/domain/models/area.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 
  private areas = [];
  private httpError: HttpErrorResponse = null;

  constructor(private _dataService: DataService, private _router: Router) {}

  ngOnInit() {
    this._dataService.fetchData().
    subscribe(
      (data: IArea[]) => {
        this.areas = data;
      // this._router.navigateByUrl(this.areas[0].section[0].url);
        this._router.navigateByUrl('dashboard/angular-material');

      },
      (error: HttpErrorResponse) => {
        this.httpError = error;
        console.log(error);
      }
    );
  }
}
