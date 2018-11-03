import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss']
})
export class MyProjectsComponent implements OnInit {
  public picture: any;
  public ZH_TITLE: string;
  public EN_TITLE: string;
  public NAV_INDEX: number;
  public newsArr: Array<object>;
  constructor() { }

  ngOnInit() {
    this.picture = 'personCenter.png';
    this.ZH_TITLE = '我的项目';
    this.EN_TITLE = 'MY PROJECT';
    this.NAV_INDEX = 1;
  }

}
