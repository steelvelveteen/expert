import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'dotnetcli',
  templateUrl: './dotnetcli.component.html',
  styleUrls: ['./dotnetcli.component.scss']
})
export class DotnetcliComponent implements OnInit {

  constructor(private _dataService: DataService ) { }

  ngOnInit() {
  }

  getEmployees(): void {
    console.log('Get employees event activated');
    this._dataService.getEmployees().subscribe(
      (res => {
        console.log('Got a response');
      })
    );
  }
}
