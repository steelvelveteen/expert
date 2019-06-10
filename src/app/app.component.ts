import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private sectionNames: string[] = [];
  listAreaSections(section): void {
    section.forEach(s => console.log(s.name));
    section.forEach(s => this.sectionNames.push(s.name));
  }
}
