import { Component, OnInit } from '@angular/core';
import { LinkService } from '../../shared/services/link.service';
import { TokenService } from '../../shared/services/token.service';
import { Router } from '@angular/router';

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
  public ifShowSignDialog: boolean;
  public newsArr;
  constructor(private link: LinkService, private token: TokenService, private router: Router) {
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
    this.ifShowSignDialog = false;
  }
  scanMoreProject() {
    this.link._link = 'projectInformation';
    this.token._token === '' ? this.ifShowSignDialog = true : this.router.navigate(['projectInformation']);
  }
  scanMoreNews() {
    this.link._link = 'newsAnnouncement';
    this.token._token === '' ? this.ifShowSignDialog = true : this.router.navigate(['newsAnnouncement']);
  }
  scanNewsBulletinDetail() {
    this.link._link = 'newsBulletinDetail';
    this.token._token === '' ? this.ifShowSignDialog = true : this.router.navigate(['newsBulletinDetail']);
  }
  scanProjectInformationDetail() {
    this.link._link = 'projectInformationDetail';
    this.token._token === '' ? this.ifShowSignDialog = true : this.router.navigate(['projectInformationDetail']);
  }
}
