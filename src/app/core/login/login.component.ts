import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  
  constructor(private _router: Router) { }

  ngOnInit() {
  }

  login(): void {
    this._router.navigateByUrl('dashboard');
  }
}
