import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VariablesService {
  public _token: string;
  public _idpTicket: string;
  public _link: string;
  public _detailID: string;
  constructor() { }
}
