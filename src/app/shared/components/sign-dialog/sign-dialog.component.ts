import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CookieService } from '../../services/cookie.service';
import { HttpApi } from '../../services/http-api.service';
import { VariablesService } from '../../services/variables.service';

@Component({
  selector: 'app-sign-dialog',
  templateUrl: './sign-dialog.component.html',
  styleUrls: ['./sign-dialog.component.scss']
})
export class SignDialogComponent implements OnInit {
  @Output() clickSign: EventEmitter<any> = new EventEmitter<any>();
  @Output() clickShowRegistDialog: EventEmitter<any> = new EventEmitter<any>();
  @Output() clickShowResetpwdDialog: EventEmitter<any> = new EventEmitter<any>();
  public username: string;
  public password: string;
  constructor(
    private variables: VariablesService,
    private cookie: CookieService,
    private http: HttpApi) { }
  ngOnInit() { }
  /**
   * 点击登录，获取token
   * @param e 事件对象
   */
  sign(e) {
    e.preventDefault();
    this.http.post(
      '/ucenter-portal/rest/v2/oauth/token',
      `grant_type=password&username=${this.username}&password=${this.password}`,
      {
        'headers': {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic Y2xpZW50OnNlY3JldA==',
        }
      },
    ).subscribe(
      data => {
        this.cookie.setCookie('_token', data['access_token']);
        this.variables._token = data['access_token'];
        this.http.post(
          '/ucenter/dispatch/ticket',
          {
            'username': this.username,
            'password': this.password,
          },
          {
            'headers': {
              'Content-Type': 'application/json',
            }
          },
        ).subscribe(
          result => {
            this.variables._idpTicket = result['serviceProviderUrl'].split('?')[1];
            this.clickSign.emit();
          },
          err => {
            console.log('err:' + err);
          }
        );

      },
      err => {
        alert('用户名或密码错误，请重新输入');
      }
    );

  }
  // 点击注册新用户
  showRegistDialog() {
    this.clickShowRegistDialog.emit();
  }
  // 点击忘记密码
  showResetpwdDialog() {
    this.clickShowResetpwdDialog.emit();
  }
}
