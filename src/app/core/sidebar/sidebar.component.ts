import { SectionService } from '../../shared/services/section.service';
import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { IArea } from '../../shared/domain/models/area.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { ISection } from '../../shared/domain/models/section.model';
@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  sections: ISection[];
  areaTitle: string;
  private areas: IArea[] = [];
  private httpError: HttpErrorResponse = null;
  private sectionSubscription: Subscription;
  private areaTitleSubscription: Subscription;

  @Input() areasList: IArea[];
  
  constructor(private _dataService: DataService, private _sectionService: SectionService) { }

  ngOnInit() {
    // Sets the sections from angular area by default
    this._dataService.fetchData().
    subscribe(
      (data: IArea[]) => {
        this.areas = data;
        this.sections = this.areas[0].section;
        this.areaTitle = this.areas[0].title;
      },
      (error: HttpErrorResponse) => {
        this.httpError = error;
      }
    );

    // Sets the section list from corresponding clicked area
    this.sectionSubscription = this._sectionService.getSectionList().
    subscribe(
      (sections: ISection[]) => {
        this.sections = sections;
      }
    );

    // Sets the section title to the selected Area Title
    this.areaTitleSubscription = this._sectionService.getAreaTitle().
    subscribe(
      (areaTitle: string) => {
        this.areaTitle = areaTitle;
      }
    );
  }
}
