import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  public picture: any;
  public ZH_TITLE: string;
  public EN_TITLE: string;
  public NAV_INDEX: number;
  constructor() { }

  ngOnInit() {
    this.picture = 'contact.png';
    this.ZH_TITLE = '联系我们';
    this.EN_TITLE = 'CPNTACT US';
    this.NAV_INDEX = 5;
  }


}
