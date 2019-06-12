import { SectionService } from './../services/section.service';
import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service';
import { IArea } from '../domain/models/area.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() sections: any;
  private areas = [];
  private httpError: HttpErrorResponse = null;
  private sectionSubscription: Subscription;
  
  constructor(private _dataService: DataService, private _sectionService: SectionService) { }

  ngOnInit() {

    // Sets the sections from angular area by default
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

    this.sectionSubscription = this._sectionService.getSections().
    subscribe(
      (sections: any) => {
        this.sections = sections;
      }
    );
  }

}
