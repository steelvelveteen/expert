import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { IArea } from '../../shared/domain/models/area.model';
import { HttpErrorResponse } from '@angular/common/http';
import { ISection } from '../../shared/domain/models/section.model';
import { SectionService } from '../../shared/services/section.service';
import { Router } from '@angular/router';

@Component({
  selector: 'menu-bar',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  private areas = [];
  private httpError: HttpErrorResponse = null;
  @Output() areaSelectedEvent = new EventEmitter();

  constructor(private _dataService: DataService, private _sectionService: SectionService, private _router: Router) { }

  ngOnInit() {
    this._dataService.fetchData().
    subscribe(
      (data: IArea[]) => {
        this.areas = data;
      },
      (error: HttpErrorResponse) => {
        this.httpError = error;
      }
    );
  }

  getSectionsForArea(areaId): void {
    const sectionList: ISection[] = [];
    const areaSection = this.areas.find(a => a.id === areaId).section;
    areaSection.forEach(s => sectionList.push(s));
    this._sectionService.sendSectionList(sectionList);
    this.loadFirstTopic(areaSection);
    this._sectionService.sendAreaTitle(this.areas[areaId].title);
  }
  
  loadFirstTopic(areaSection): void {
    this._router.navigate([`dashboard/${areaSection[0].url}`]);
  }
}
