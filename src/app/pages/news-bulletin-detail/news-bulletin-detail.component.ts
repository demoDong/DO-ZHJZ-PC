import { Component, OnInit } from '@angular/core';
import { HttpApi } from '../../shared/services/http-api.service';

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
  public detailMes = {};
  public img = '';
  constructor(private http: HttpApi) { }

  ngOnInit() {
    this.picture = 'news.png';
    this.ZH_TITLE = '新闻通告';
    this.EN_TITLE = 'NEWS BULLETIN';
    this.NAV_INDEX = 3;
    const routeID = location.href.split('id=')[1];
    this.http.get<any>('/news.json').subscribe(data => {
      data.forEach(element => {
        if (element.id === routeID) {
          this.detailMes = element;
          this.img = `assets/images/${this.detailMes['pic']}`;
        }
      });
    });
  }

}
