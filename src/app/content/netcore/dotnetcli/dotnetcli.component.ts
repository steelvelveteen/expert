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
  displaySpinner = false;


  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.clearMessages();
  }

  getEmployees(): void {
    this.displaySpinner = true;

    this._dataService.getEmployees().subscribe(
      response => {
        this.employees = response;
        console.log(this.employees);
        this.displaySpinner = false;
      },
      (error: HttpErrorResponse) => {
        console.log("Error retrieving employees from db.");
        this.employeesError = true;
        this.displaySpinner = false;
      }
    );
  }

  clearMessages(): void {
    this.employeesError = false;
  }
}
