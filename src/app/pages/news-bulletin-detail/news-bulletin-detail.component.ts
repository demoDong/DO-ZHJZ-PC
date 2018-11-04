import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-bulletin-detail',
  templateUrl: './news-bulletin-detail.component.html',
  styleUrls: ['./news-bulletin-detail.component.scss']
})
export class NewsBulletinDetailComponent implements OnInit {
  public picture: any;
  public ZH_TITLE: string;
  public EN_TITLE: string;
  public NAV_INDEX: number;
  public newsArr: Array<object>;
  constructor() { }

  ngOnInit() {
    this.picture = 'news.png';
    this.ZH_TITLE = '新闻通告';
    this.EN_TITLE = 'NEWS BULLETIN';
    this.NAV_INDEX = 3;
  }

}
