import { Component } from '@angular/core';
import { CookieService } from './shared/services/cookie.service';
import { VariablesService } from './shared/services/variables.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  constructor(private cookie: CookieService, private variables: VariablesService) {
    this.variables._token = this.cookie.getCookie('_token');
  }
}
