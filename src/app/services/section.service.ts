import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Section } from '../domain/models/section.model';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  private sectionSubject = new Subject<Section[]>();
  
  constructor() { }
}
