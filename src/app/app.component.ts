import { Component } from '@angular/core';
import { CookieService } from './shared/services/cookie.service';
import { TokenService } from './shared/services/token.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  constructor(private cookie: CookieService, private token: TokenService) {
    this.token._token = this.cookie.getCookie('_idptickeToken');
  }
}
