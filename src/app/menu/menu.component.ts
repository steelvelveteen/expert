import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../services/data.service';
import { IArea } from '../domain/models/area.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Section } from '../domain/models/section.model';
import { SectionService } from '../services/section.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  private areas = [];
  private httpError: HttpErrorResponse = null;
  @Output() areaSelectedEvent = new EventEmitter();

  constructor(private _dataService: DataService, private _sectionService: SectionService) { }

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

  getSections(id): void {
    const sections: Section[] = [];
    this.areas[id].section.forEach(s => sections.push(s));
    this._sectionService.sendSections(sections);
  }

}
