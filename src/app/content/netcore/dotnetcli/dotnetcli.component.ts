import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { IEmployee } from 'src/app/shared/domain/models/employee.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'dotnetcli',
  templateUrl: './dotnetcli.component.html',
  styleUrls: ['./dotnetcli.component.scss']
})
export class DotnetcliComponent implements OnInit {

  employees: IEmployee[];
  employeesError = false;
  constructor(private _dataService: DataService ) { }

  ngOnInit() {
    this.clearMessages();
  }

  getEmployees(): void {
    this._dataService.getEmployees().subscribe(
      response => {
        this.employees = response;
        console.log(this.employees);
      },
      ((error: HttpErrorResponse) => {
        console.log("Error retrieving employees from db.");
        this.employeesError = true;
      })
    );
  }

  clearMessages(): void {
    this.employeesError = false;
  }
}
