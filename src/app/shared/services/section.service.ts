import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { ISection } from '../domain/models/section.model';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  private sectionSubject = new Subject<ISection[]>();
  
  constructor() { }

  sendSectionList(sections: ISection[]) {
    this.sectionSubject.next(sections);
  }

  getSectionList(): Observable<ISection[]> {
    return this.sectionSubject.asObservable();
  }
}
