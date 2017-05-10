import { Component } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms";
import {Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class registerComponent {
  stepone:boolean = true;
  steptwo:boolean = false;
  stepthree:boolean = false;
  mobileRegForm: FormGroup;
  userRegForm: FormGroup;
  router:Router;

  ngAfterViewInit(): void {

  }
  constructor(private fb: FormBuilder,router: Router) {this.router=router;}
  ngOnInit() {

    this.mobileRegForm = this.fb.group({
      'mobile' : ['', [Validators.required,Validators.pattern(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/)]],
      'code' : ['', [Validators.required, Validators.minLength(4)]]
    });

    this.userRegForm = this.fb.group({
      'username' : ['', [Validators.required, Validators.minLength(6)]],
      'password' : ['', [Validators.required, Validators.minLength(6)]],
      'confirmPassword' : ['', [Validators.required]],
      'verifyCode' : ['', [Validators.required, Validators.minLength(6)]]
    });

    this.mobileRegForm.valueChanges.subscribe(data => this.onValueChanged(data));

    this.userRegForm.valueChanges.subscribe(data => this.onValueChanged(data));

  }
  mobileRegFormErrors = {
    'mobile': '',
    'code':''
  };
  mobileRegFormMessages = {

    'mobile' : {
      'required'  : '手机号必填.',
      'pattern':'手机号请输入正确的格式'
    },
    'code'   : {
      'required'  : '验证码必填.',
      'minlength' : '验证码最少4位'
    },
    'confirmPassword' : {
      'required'  : '确认密码必填.'
    }
  };
  userRegFormErrors={
    'username':'',
    'password':'',
    'confirmPassword':'',
    'verifyCode' : '',
    'validateEqual' : ''
  };
  userRegFormErrorsMessages = {

    'username'   : {
      'required'  : '用户名必填.',
      'minlength' : '用户名最少6位'
    },
    'password'   : {
      'required'  : '密码必填.',
      'minlength' : '密码最少6位',
      'validateEqual':'确认密码必须和密码一样'
    },
    'confirmPassword' : {
      'required'  : '确认密码必填.',
      'validateEqual' : '确认密码必须和密码一样'
    },
    'verifyCode' : {
      'required'  : '验证码必填.',
      'minlength' : '验证码最少6位'
    }
  };
  onValueChanged(data) {

    for (const field in this.mobileRegFormErrors) {
      this.mobileRegFormErrors[field] = '';
      const control = this.mobileRegForm.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.mobileRegFormMessages[field];
        for (const key in control.errors) {
          this.mobileRegFormErrors[field] += messages[key] + '';
        }
      }

    }
    for (const field in this.userRegFormErrors) {
      this.userRegFormErrors[field] = '';
      const control = this.userRegForm.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.userRegFormErrorsMessages[field];
        for (const key in control.errors) {
          this.userRegFormErrors[field] += messages[key] + '';
        }
      }

    }

  }

  doSubmit(obj: any) {
    this.stepone=false;
    this.steptwo=true;
  }

  finishReg(obj: any) {
    this.stepone=false;
    this.steptwo=false;
    this.stepthree=true;
  }

  // 获取验证码
  getVerifyCode(event:any) {
    var lefttime = 120,st;
    event.target.disabled=true;
    st=setInterval(function(){
      event.target.innerHTML = lefttime+'s后重新获取';
      if(lefttime==0){
        clearInterval(st);
        event.target.innerHTML = '获取验证码';
        lefttime=120;
        event.target.disabled=false;
      }
      lefttime=lefttime-1;
    },1000);

  }

  // 前往登录
  gotoLogin(){
    this.router.navigate(['/login']);
  }

}
