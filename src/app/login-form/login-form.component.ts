import { Component, Input, OnInit } from '@angular/core';

import MockUsers from "./mock-users"

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  @Input()
  login: string;

  @Input()
  password: string;

  isLoggedIn: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit() {
    if (!this.login || !this.password) {
      alert("You need to fill login and password inputs")
      return;
    }
    const foundUser = MockUsers[this.login];

    if (foundUser) {
      if (foundUser.password != this.password) {
        alert("Wrong password");
        return;
      }
      this.isLoggedIn = true;
    } else alert("User not found")
  }

}
