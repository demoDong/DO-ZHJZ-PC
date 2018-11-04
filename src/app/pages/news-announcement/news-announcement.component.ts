import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  public isConpanyNews: boolean;
  constructor(private router: Router) { }

  ngOnInit() {
    this.picture = 'news.png';
    this.ZH_TITLE = '新闻通告';
    this.EN_TITLE = 'NEWS BULLETIN';
    this.NAV_INDEX = 3;
    this.isConpanyNews = true;
    this.newsArr = [
      {
        title: '中关村生命科学园医药科技中心开工仪式举行',
        pic: 'newsList',
        // tslint:disable-next-line:max-line-length
        detail: '项目位于北京 地坛西侧，北临安德路，南临安定河西滨河路。本项目主要分为东区和西区两部分。西区包括1号楼（住宅）、5号楼（配套设施）和西区车库，西区总建筑面积67670平方米。东区包括2号楼（住宅）、3号楼（住宅）、4号楼（配套设施）、变电室和东区车库，东区总建筑面积101920平方米。幼儿园建筑面积为 2710平方米。',
        date: '2017-07-08'
      },
      {
        title: '中关村生命科学园医药科技中心开工仪式举行',
        pic: 'newsList',
        // tslint:disable-next-line:max-line-length
        detail: '项目位于北京 地坛西侧，北临安德路，南临安定河西滨河路。本项目主要分为东区和西区两部分。西区包括1号楼（住宅）、5号楼（配套设施）和西区车库，西区总建筑面积67670平方米。东区包括2号楼（住宅）、3号楼（住宅）、4号楼（配套设施）、变电室和东区车库，东区总建筑面积101920平方米。幼儿园建筑面积为 2710平方米。',
        date: '2017-07-08'
      },
      {
        title: '中关村生命科学园医药科技中心开工仪式举行',
        pic: 'newsList',
        // tslint:disable-next-line:max-line-length
        detail: '项目位于北京 地坛西侧，北临安德路，南临安定河西滨河路。本项目主要分为东区和西区两部分。西区包括1号楼（住宅）、5号楼（配套设施）和西区车库，西区总建筑面积67670平方米。东区包括2号楼（住宅）、3号楼（住宅）、4号楼（配套设施）、变电室和东区车库，东区总建筑面积101920平方米。幼儿园建筑面积为 2710平方米。',
        date: '2017-07-08'
      },
      {
        title: '中关村生命科学园医药科技中心开工仪式举行',
        pic: 'newsList',
        // tslint:disable-next-line:max-line-length
        detail: '项目位于北京 地坛西侧，北临安德路，南临安定河西滨河路。本项目主要分为东区和西区两部分。西区包括1号楼（住宅）、5号楼（配套设施）和西区车库，西区总建筑面积67670平方米。东区包括2号楼（住宅）、3号楼（住宅）、4号楼（配套设施）、变电室和东区车库，东区总建筑面积101920平方米。幼儿园建筑面积为 2710平方米。',
        date: '2017-07-08'
      },
      {
        title: '中关村生命科学园医药科技中心开工仪式举行',
        pic: 'newsList',
        // tslint:disable-next-line:max-line-length
        detail: '项目位于北京 地坛西侧，北临安德路，南临安定河西滨河路。本项目主要分为东区和西区两部分。西区包括1号楼（住宅）、5号楼（配套设施）和西区车库，西区总建筑面积67670平方米。东区包括2号楼（住宅）、3号楼（住宅）、4号楼（配套设施）、变电室和东区车库，东区总建筑面积101920平方米。幼儿园建筑面积为 2710平方米。',
        date: '2017-07-08'
      },
      {
        title: '中关村生命科学园医药科技中心开工仪式举行',
        pic: 'newsList',
        // tslint:disable-next-line:max-line-length
        detail: '项目位于北京 地坛西侧，北临安德路，南临安定河西滨河路。本项目主要分为东区和西区两部分。西区包括1号楼（住宅）、5号楼（配套设施）和西区车库，西区总建筑面积67670平方米。东区包括2号楼（住宅）、3号楼（住宅）、4号楼（配套设施）、变电室和东区车库，东区总建筑面积101920平方米。幼儿园建筑面积为 2710平方米。',
        date: '2017-07-08'
      },
      {
        title: '中关村生命科学园医药科技中心开工仪式举行',
        pic: 'newsList',
        // tslint:disable-next-line:max-line-length
        detail: '项目位于北京 地坛西侧，北临安德路，南临安定河西滨河路。本项目主要分为东区和西区两部分。西区包括1号楼（住宅）、5号楼（配套设施）和西区车库，西区总建筑面积67670平方米。东区包括2号楼（住宅）、3号楼（住宅）、4号楼（配套设施）、变电室和东区车库，东区总建筑面积101920平方米。幼儿园建筑面积为 2710平方米。',
        date: '2017-07-08'
      }, {
        title: '中关村生命科学园医药科技中心开工仪式举行',
        pic: 'newsList',
        // tslint:disable-next-line:max-line-length
        detail: '项目位于北京 地坛西侧，北临安德路，南临安定河西滨河路。本项目主要分为东区和西区两部分。西区包括1号楼（住宅）、5号楼（配套设施）和西区车库，西区总建筑面积67670平方米。东区包括2号楼（住宅）、3号楼（住宅）、4号楼（配套设施）、变电室和东区车库，东区总建筑面积101920平方米。幼儿园建筑面积为 2710平方米。',
        date: '2017-07-08'
      },
      {
        title: '中关村生命科学园医药科技中心开工仪式举行',
        pic: 'newsList',
        // tslint:disable-next-line:max-line-length
        detail: '项目位于北京 地坛西侧，北临安德路，南临安定河西滨河路。本项目主要分为东区和西区两部分。西区包括1号楼（住宅）、5号楼（配套设施）和西区车库，西区总建筑面积67670平方米。东区包括2号楼（住宅）、3号楼（住宅）、4号楼（配套设施）、变电室和东区车库，东区总建筑面积101920平方米。幼儿园建筑面积为 2710平方米。',
        date: '2017-07-08'
      },
      {
        title: '中关村生命科学园医药科技中心开工仪式举行',
        pic: 'newsList',
        // tslint:disable-next-line:max-line-length
        detail: '项目位于北京 地坛西侧，北临安德路，南临安定河西滨河路。本项目主要分为东区和西区两部分。西区包括1号楼（住宅）、5号楼（配套设施）和西区车库，西区总建筑面积67670平方米。东区包括2号楼（住宅）、3号楼（住宅）、4号楼（配套设施）、变电室和东区车库，东区总建筑面积101920平方米。幼儿园建筑面积为 2710平方米。',
        date: '2017-07-08'
      }
    ];
  }
  scanNewsBulletinDetail() {
    this.router.navigate(['newsBulletinDetail']);
  }

}
