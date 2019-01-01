import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as jQuery from 'jquery';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forgetpwd-dialog',
  templateUrl: './forgetpwd-dialog.component.html',
  styleUrls: ['./forgetpwd-dialog.component.scss']
})
export class ForgetpwdDialogComponent implements OnInit {
  @Output() clickResetPwd: EventEmitter<any> = new EventEmitter<any>();
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
    const settings = {
      'url': '/ucenter-portal/api/sendCaptcha',
      'method': 'POST',
      'headers': {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      'data': {
        'phoneNum': this.phoneNum,
        'captchaType': '3'
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

  resetPwd(e) {
    e.preventDefault();
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
    } else {
      // this.http.post(
      //   '/ucenter/rest/v2/services/ucenter_UserService/resetPassword',
      //   {
      //     'code': this.yzmNum,
      //     'mobile': this.phoneNum,
      //     'newPassword': this.password
      //   },
      //   {
      //     'headers': {
      //       'Content-Type': 'application/json',
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
        'async': true,
        'crossDomain': true,
        'url': '/ucenter/rest/v2/services/ucenter_UserService/resetPassword',
        'method': 'POST',
        'headers': {
          'Content-Type': 'application/json'
        },
        'data': `{"code":${this.yzmNum},"mobile":${this.phoneNum},"newPassword":${this.password}}`
      };
      jQuery.ajax(settings).done(data => {
        if (data['responseCode'] === 200) {
          alert('密码重置成功');
          this.clickResetPwd.emit();
        } else {
          alert('密码重置失败');
        }
      });
    }
  }
  returnSign() {
    this.clickReturnSign.emit();
  }
}
