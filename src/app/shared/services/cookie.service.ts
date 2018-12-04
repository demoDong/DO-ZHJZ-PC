import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookieService {

  constructor() { }
  setCookie(name, value, expiredays?) {
    document.cookie = `${name}=${value}`;
  }
  getCookie(name) {
    const cookieArr = document.cookie.split(';');
    for (let i = 0; i < cookieArr.length; i++) {
      const cookie = cookieArr[i].split('=');
      if (cookie[0] === name) {
        return cookie[1];
      }
    }
    return '';
  }
}
