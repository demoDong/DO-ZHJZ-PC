import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as jQuery from 'jquery';

@Component({
  selector: 'app-regist-dialog',
  templateUrl: './regist-dialog.component.html',
  styleUrls: ['./regist-dialog.component.scss']
})
export class RegistDialogComponent implements OnInit {
  @Output() clickRegist: EventEmitter<any> = new EventEmitter<any>();
  @Output() clickReturnSign: EventEmitter<any> = new EventEmitter<any>();
  public phoneNum: string;
  public yzmNum: string;
  public ifshowTimeOut = false;
  public yzmMes = '获取验证码';
  public second = 60;
  public password: string;
  public repassword: string;
  public isReadedMes: boolean;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  getVerificationCode() {
    if (!(/^1[3456789]\d{9}$/.test(this.phoneNum))) {
      alert('手机号码有误，请重新输入');
    } else {
      // this.http.post(
      //   '/ucenter-portal/api/sendCaptcha',
      //   `phoneNum=${this.phoneNum}&captchaType=1`,
      //   {
      //     'headers': {
      //       'Content-Type': 'application/x-www-form-urlencoded',
      //     }
      //   },
      // ).subscribe(
      //   data => {
      //     if (data) {
      //       this.ifshowTimeOut = !this.ifshowTimeOut;
      //       const Timer = setTimeout(() => {
      //         --this.second;
      //         if (this.second === 0) {
      //           clearTimeout(Timer);
      //           this.second = 60;
      //           this.ifshowTimeOut = !this.ifshowTimeOut;
      //           this.yzmMes = '重新发送';
      //         }
      //       }, 1000);
      //     }
      //   },
      //   err => { }
      // );

      const settings = {
        'url': '/ucenter-portal/api/sendCaptcha',
        'method': 'POST',
        'headers': {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        'data': {
          'phoneNum': this.phoneNum,
          'captchaType': '1'
        }
      };
      jQuery.ajax(settings).done(response => {
        this.ifshowTimeOut = !this.ifshowTimeOut;
        const Timer = setInterval(() => {
          --this.second;
          if (this.second === 0) {
            clearInterval(Timer);
            this.second = 60;
            this.ifshowTimeOut = !this.ifshowTimeOut;
            this.yzmMes = '重新发送';
          }
        }, 1000);
      });
    }
  }
  regist(e) {
    e.preventDefault();
    console.log(this.isReadedMes);
    if (!this.phoneNum || this.phoneNum === '') {
      alert('手机号不能为空');
    } else if (!this.yzmNum || this.yzmNum === '') {
      alert('验证码不能为空');
    } else if (!this.password || this.password === '') {
      alert('密码不能为空');
    } else if (this.password.length < 8 || this.password.length > 20 || /^[0-9]*$/.test(this.password)) {
      alert('密码格式不正确，请重新输入（8~20位，不能全是数字）');
    } else if (this.password !== this.repassword) {
      alert('两次密码不一样，请重新输入');
    } else if (!this.isReadedMes) {
      alert('请阅读并接受 《智慧建造用户协议》');
    } else {
      // this.http.post(
      //   'ucenter-portal/api/register',
      //   `username=${this.phoneNum}&captcha=${this.yzmNum}&password=${this.password}`,
      //   {
      //     'headers': {
      //       'Content-Type': 'application/x-www-form-urlencoded',
      //     }
      //   },
      // ).subscribe(
      //   data => {
      //     console.log('succ:' + data);
      //   },
      //   err => {
      //     console.log('err:' + err);
      //   }
      // );
      const settings = {
        'url': '/ucenter-portal/api/register',
        'method': 'POST',
        'headers': {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        'data': {
          'username': this.phoneNum,
          'captcha': this.yzmNum,
          'password': this.password
        }
      };
      jQuery.ajax(settings).done(data => {
        alert(data);
        if (data === '注册成功') {
          this.clickRegist.emit();
        }
      });
    }
  }
  returnSign() {
    this.clickReturnSign.emit();
  }
}
