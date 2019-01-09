import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  public _token: string;
  public _idpTicket: string;
  constructor() { }
}
