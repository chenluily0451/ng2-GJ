import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.loginForm = this.fb.group({
      'username' : ['', [Validators.required, Validators.minLength(6)]],
      'password' : ['', [Validators.required, Validators.minLength(6)]]
    });

    this.loginForm.valueChanges.subscribe(data => this.onValueChanged(data));
  }
  loginFormErrors = {
    'username': '',
    'password':''
  };
  loginFormMessages = {

    'username' : {
      'required'  : '用户名必填',
      'minlength' : '用户名最少6位'
    },
    'password' : {
      'required'  : '密码必填',
      'minlength' : '密码最少6位'
    }

  };
  onValueChanged(data) {

    for (const field in this.loginFormErrors) {
      this.loginFormErrors[field] = '';
      const control = this.loginForm.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.loginFormMessages[field];
        for (const key in control.errors) {
          this.loginFormErrors[field] += messages[key] + '';
        }
      }

    }

  }
  login(){
    console.log('login success')
  }
}
