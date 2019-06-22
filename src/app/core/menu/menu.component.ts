import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../services/data.service';
import { IArea } from '../../domain/models/area.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Section } from '../../domain/models/section.model';
import { SectionService } from '../../services/section.service';
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

  getSectionsForArea(id): void {
    const sectionList: Section[] = [];
    this.areas[id].section.forEach(s => sectionList.push(s));
    this._sectionService.sendSectionList(sectionList);
    this.loadFirstTopic(id);
  }
  
  loadFirstTopic(id): void {
    this._router.navigateByUrl(this.areas[id].section[0].url);
  }
}
