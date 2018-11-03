import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-announcement',
  templateUrl: './news-announcement.component.html',
  styleUrls: ['./news-announcement.component.scss']
})
export class NewsAnnouncementComponent implements OnInit {
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
    // this.http.get('../../../assets/mock/news.json').subscribe(
    //   data => {
    //     console.log(data);
    //     this.newsArr = data['data'];
    //   }
    // );
  }


}
