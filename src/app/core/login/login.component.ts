import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() logInEvent = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  login(): void {
    this.logInEvent.emit();
  }
}
