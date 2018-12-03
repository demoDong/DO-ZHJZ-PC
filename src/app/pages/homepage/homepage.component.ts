import { Component, OnInit } from '@angular/core';
import { LinkService } from '../../shared/services/link.service';
import { TokenService } from '../../shared/services/token.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

declare const BMap: any;
declare const BMAP_ANIMATION_BOUNCE: any;

declare const AMap: any;

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  public picture: any;
  public ZH_TITLE: string;
  public EN_TITLE: string;
  public NAV_INDEX: number;
  public buildingPorjectsArr;
  public ifShowDialog: boolean;
  public ifShowSignContent: boolean;
  public ifShowPopup: boolean;
  public newsArr;
  public mapOption;
  constructor(
    private link: LinkService,
    private token: TokenService,
    private router: Router,
    private http: HttpClient,
  ) {
    this.buildingPorjectsArr = [
      {
        name: '中关村生命科学园医药科技中心',
        area: 98000,
        address: '北京市昌平区中关村东北楼，东侧为科学院路',
        planDate: '开工日期2017年2月12日',
        supervision: '中关村生命科技监理部',
        builder: '中关村生命科技建筑部',
        pic: 'project',
        id: 1
      },
      {
        name: '中关村生命科学园医药科技中心',
        area: 98000,
        address: '北京市昌平区中关村东北楼，东侧为科学院路',
        planDate: '开工日期2017年2月12日',
        supervision: '中关村生命科技监理部',
        builder: '中关村生命科技建筑部',
        pic: 'project',
        id: 2
      },
      {
        name: '中关村生命科学园医药科技中心',
        area: 98000,
        address: '北京市昌平区中关村东北楼，东侧为科学院路',
        planDate: '开工日期2017年2月12日',
        supervision: '中关村生命科技监理部',
        builder: '中关村生命科技建筑部',
        pic: 'project',
        id: 3
      },
      {
        name: '中关村生命科学园医药科技中心',
        area: 98000,
        address: '北京市昌平区中关村东北楼，东侧为科学院路',
        planDate: '开工日期2017年2月12日',
        supervision: '中关村生命科技监理部',
        builder: '中关村生命科技建筑部',
        pic: 'project',
        id: 4
      },
      {
        name: '中关村生命科学园医药科技中心',
        area: 98000,
        address: '北京市昌平区中关村东北楼，东侧为科学院路',
        planDate: '开工日期2017年2月12日',
        supervision: '中关村生命科技监理部',
        builder: '中关村生命科技建筑部',
        pic: 'project',
        id: 5
      },
      {
        name: '中关村生命科学园医药科技中心',
        area: 98000,
        address: '北京市昌平区中关村东北楼，东侧为科学院路',
        planDate: '开工日期2017年2月12日',
        supervision: '中关村生命科技监理部',
        builder: '中关村生命科技建筑部',
        pic: 'project',
        id: 6
      },
      {
        name: '中关村生命科学园医药科技中心',
        area: 98000,
        address: '北京市昌平区中关村东北楼，东侧为科学院路',
        planDate: '开工日期2017年2月12日',
        supervision: '中关村生命科技监理部',
        builder: '中关村生命科技建筑部',
        pic: 'project',
        id: 7
      },
    ];
    this.newsArr = [
      { type: 'NEW', content: '中关村生命科学园医药科技中心在建项目已完成初步规划及项目前期准备工作......' },
      { type: 'ADV', content: '中关村生命科学园医药科技中心在建项目已完成初步规划及项目前期准备工作......' },
      { type: 'NEW', content: '中关村生命科学园医药科技中心在建项目已完成初步规划及项目前期准备工作......' }
    ];
  }

  ngOnInit() {
    this.picture = 'personCenter.png';
    this.ZH_TITLE = '首页';
    this.EN_TITLE = 'MY PROJECT';
    this.NAV_INDEX = 0;
    this.ifShowDialog = false;
    this.ifShowSignContent = false;
    this.token._token === '' ? this.ifShowPopup = true : this.ifShowPopup = false;
    const time: any = new Date();
    // this.http.get(`./assets/bmap/ditu.json?time=${Date.parse(time)}`).subscribe(data => {
    //   const _THEMEJSON = data;
    //   const map = new BMap.Map('bmap');
    //   map.centerAndZoom(new BMap.Point(120.89101, 34.536594), 6);
    //   map.setMapStyleV2({ styleJson: _THEMEJSON });
    // });

    const map = new AMap.Map('bmap', {
      zoomEnable: true,
      doubleClickZoom: true,
      mapStyle: 'amap://styles/blue',
      zoom: 5,
      center: [120.89101, 34.536594]
    });

  }
  scanMoreProject() {
    this.link._link = 'projectInformation';
    if (this.token._token === '') {
      this.ifShowDialog = true;
      this.ifShowSignContent = true;
    } else {
      this.router.navigate(['projectInformation']);
    }
  }
  scanMoreNews() {
    // this.link._link = 'newsAnnouncement';
    // if (this.token._token === '') {
    //   this.ifShowDialog = true;
    //   this.ifShowSignContent = true;
    // } else {
    //   this.router.navigate(['newsAnnouncement']);
    // }
    this.link._link = 'newsAnnouncement';
    this.router.navigate(['newsAnnouncement']);
  }
  scanNewsBulletinDetail() {
    // this.link._link = 'newsBulletinDetail';
    // if (this.token._token === '') {
    //   this.ifShowDialog = true;
    //   this.ifShowSignContent = true;
    // } else {
    //   this.router.navigate(['newsBulletinDetail']);
    // }
    this.link._link = 'newsBulletinDetail';
    this.router.navigate(['newsBulletinDetail']);
  }
  scanProjectInformationDetail() {
    this.link._link = 'projectInformationDetail';
    if (this.token._token === '') {
      this.ifShowDialog = true;
      this.ifShowSignContent = true;
    } else {
      this.router.navigate(['projectInformationDetail']);
    }
  }
  closeDialog() {
    this.ifShowDialog = false;
    this.ifShowSignContent = false;
  }
  closePopup() {
    this.ifShowPopup = false;
  }
  goSign() {
    this.ifShowDialog = true;
    this.ifShowSignContent = true;
  }
}
