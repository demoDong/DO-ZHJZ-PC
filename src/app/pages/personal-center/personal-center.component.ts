import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-center',
  templateUrl: './personal-center.component.html',
  styleUrls: ['./personal-center.component.scss']
})
export class PersonalCenterComponent implements OnInit {
  public picture: any;
  public ZH_TITLE: string;
  public EN_TITLE: string;
  public NAV_INDEX: number;
  constructor() { }

  ngOnInit() {
    this.picture = 'personCenter.png';
    this.ZH_TITLE = '个人中心';
    this.EN_TITLE = 'PERSONAL CENTER';
    this.NAV_INDEX = 4;
  }


}
