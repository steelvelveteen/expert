import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  
  constructor(private _router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
  }

  login(): void {
    console.log(this.loginForm.value);
    this._router.navigateByUrl('dashboard/setup-angular');
  }
}
