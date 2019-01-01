import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TokenService } from '../../services/token.service';
import { CookieService } from '../../services/cookie.service';
import { HttpClient } from '@angular/common/http';

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
    private token: TokenService,
    private cookie: CookieService,
    private http: HttpClient) { }
  ngOnInit() {
  }
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
        this.cookie.setCookie('_idptickeToken', data['access_token']);
        this.token._token = data['access_token'];
        this.clickSign.emit();
      },
      err => {
        alert('用户名或密码错误，请重新输入');
      }
    );

  }
  showRegistDialog() {
    this.clickShowRegistDialog.emit();
  }
  showResetpwdDialog() {
    this.clickShowResetpwdDialog.emit();
  }
}
