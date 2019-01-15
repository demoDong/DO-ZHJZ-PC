import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as jQuery from 'jquery';
import { HttpApi } from '../../services/http-api.service';
import { environment } from '../../../../environments/environment';

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
  private url = environment.apiurl;
  constructor(private http: HttpApi) { }

  ngOnInit() {
  }
  // 获取密码重置验证码
  getVerificationCode() {
    const settings = {
      'url': `${this.url}/ucenter-portal/api/sendCaptcha`,
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
      if (response === '验证码发送成功') {
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
      }
    }).fail(err => {
      console.log(err);
    });
  }
  // 重置信息验证，通过后提交重置
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
      this.http.post(
        '/ucenter/rest/v2/services/ucenter_UserService/resetPassword',
        {
          'code': this.yzmNum,
          'mobile': this.phoneNum,
          'newPassword': this.password
        },
        {
          'headers': {
            'Content-Type': 'application/json',
          }
        },
      ).subscribe(
        data => {
          if (data['responseCode'] === 200) {
            alert('密码重置成功');
            this.clickResetPwd.emit();
          } else {
            alert('密码重置失败');
          }
        },
        err => {
          console.log('err:' + err);
        }
      );
    }
  }
  // 返回登录页
  returnSign() {
    this.clickReturnSign.emit();
  }
}
