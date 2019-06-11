import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service';
import { IArea } from '../domain/models/area.model';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() sections: string;
  private areas = [];
  private httpError: HttpErrorResponse = null;

// tslint:disable-next-line: variable-name
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.fetchData().
    subscribe(
      (data: IArea[]) => {
        this.areas = data;
        this.sections = this.areas[0].section;
      },
      (error: HttpErrorResponse) => {
        this.httpError = error;
      }
    );
  }

}
