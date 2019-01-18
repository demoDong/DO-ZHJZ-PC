import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpApi } from '../../shared/services/http-api.service';

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
  public btns: any;
  public responseData: any;
  public allNews: any;
  public newsArr: any;
  public filtersNews: any;
  public ifBtnClickedArr: any;
  public searchNewsName = '';

  constructor(private router: Router, private http: HttpApi) { }

  ngOnInit() {
    this.picture = 'news.png';
    this.ZH_TITLE = '新闻通告';
    this.EN_TITLE = 'NEWS BULLETIN';
    this.NAV_INDEX = 3;
    this.btns = [
      { field: '公司新闻', type: 'NEW' },
      { field: '行业新闻', type: 'ADV' }
    ];
    this.ifBtnClickedArr = new Array<boolean>(this.btns.length);
    this.filtersNews = [];
    /**
     * 初始化获取新闻通告
     * 暂无接口，读取本地json模拟数据，json文件路径：assets/mock/news.json
     */
    this.http.get('/news.json').subscribe(data => {
      this.responseData = data;
      this.onChangeTypeClick(0, 'NEW');
    });
  }
  /**
   * 新闻翻页
   * @param e 事件对象
   */
  onPageChange(e) {
    this.newsArr = this.filtersNews.slice(e.first, e.first + 5);
  }

  // 新闻搜索
  searchNews() {
    this.filtersNews = [];
    if (this.searchNewsName === '') {
      this.filtersNews = this.allNews;
      this.newsArr = this.filtersNews.slice(0, 5);
    } else {
      this.allNews.forEach(newsItem => {
        if (newsItem.title.indexOf(this.searchNewsName) !== -1) {
          this.filtersNews.push(newsItem);
        }
      });
      this.newsArr = this.filtersNews.slice(0, 5);
    }
  }
  /**
   * 点击切换新闻类型
   * @param i 按钮序号
   * @param type 新闻类型
   */
  onChangeTypeClick(i, type) {
    this.ifBtnClickedArr.fill(false);
    this.ifBtnClickedArr[i] = true;
    this.searchNewsName = '';
    this.allNews = [];
    this.responseData.forEach(element => {
      if (element.type === type) {
        this.allNews.push(element);
      }
    });
    this.filtersNews = this.allNews;
    this.newsArr = this.filtersNews.slice(0, 5);
  }
  /**
   * 查看新闻详情
   * @param id 新闻ID
   */
  scanNewsBulletinDetail(id) {
    this.router.navigate(['newsBulletinDetail'], { queryParams: { id: id } });
  }

}
