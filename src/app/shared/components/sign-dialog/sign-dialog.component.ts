import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../../services/token.service';
import { LinkService } from '../../services/link.service';
import { CookieService } from '../../services/cookie.service';

@Component({
  selector: 'app-sign-dialog',
  templateUrl: './sign-dialog.component.html',
  styleUrls: ['./sign-dialog.component.scss']
})
export class SignDialogComponent implements OnInit {
  @Output() clickSignButton: EventEmitter<any> = new EventEmitter<any>();
  constructor(private router: Router, private token: TokenService, private link: LinkService, private cookie: CookieService) { }

  ngOnInit() {
  }
  sign(e) {
    e.preventDefault();
    this.cookie.setCookie('_idptickeToken', '123');
    this.token._token = '123';
    this.router.navigate([this.link._link]);
    this.clickSignButton.emit(false);
  }
  closeDialog() { }
}
