import { Component, OnInit } from '@angular/core';

interface AccountTypes {
   value: number; 
   viewValue: string; 
}

@Component({
  selector: 'angular-material',
  templateUrl: './angular-material.component.html',
  styleUrls: ['./angular-material.component.scss']
})
export class AngularMaterialComponent implements OnInit {

  accountTypes: AccountTypes[] = [
    { value: 0, viewValue: "Basic" },
    { value: 1, viewValue: "Deposit" },
    { value: 2, viewValue: "Investment" },
  ];
  defaultAccount = this.accountTypes[1].value;

  ngOnInit() {
  }

}
