import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { ISection } from '../domain/models/section.model';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  private sectionSubject = new Subject<ISection[]>();
  private areaTitleSubject = new Subject<string>();
  
  constructor() { }

  sendSectionList(sections: ISection[]) {
    this.sectionSubject.next(sections);
  }

  getSectionList(): Observable<ISection[]> {
    return this.sectionSubject.asObservable();
  }

  sendAreaTitle(areaTitle) {
    this.areaTitleSubject.next(areaTitle);
  }

  getAreaTitle(): Observable<string> {
    return this.areaTitleSubject.asObservable();
  }
}
