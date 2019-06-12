import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Section } from '../domain/models/section.model';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  private sectionSubject = new Subject<Section[]>();
  
  constructor() { }

  sendSections(sections: Section[]) {
    this.sectionSubject.next(sections);
  }

  getSections(): Observable<Section[]> {
    return this.sectionSubject.asObservable();
  }
}
