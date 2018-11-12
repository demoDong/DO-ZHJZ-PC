import { Component, OnInit } from '@angular/core';
import { LinkService } from '../../shared/services/link.service';
import { TokenService } from '../../shared/services/token.service';
import { Router } from '@angular/router';

declare const BMap: any;
declare const BMAP_ANIMATION_BOUNCE: any;

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
    this.ifShowDialog = false;
    this.ifShowSignContent = false;
    this.token._token === '' ? this.ifShowPopup = true : this.ifShowPopup = false;

    const _THEMEJSON = [{
      'featureType': 'land',
      'elementType': 'geometry',
      'stylers': {
        'visibility': 'on',
        'color': '#091220ff'
      }
    }, {
      'featureType': 'water',
      'elementType': 'geometry',
      'stylers': {
        'visibility': 'on',
        'color': '#113549ff'
      }
    }, {
      'featureType': 'green',
      'elementType': 'geometry',
      'stylers': {
        'visibility': 'on',
        'color': '#0e1b30ff'
      }
    }, {
      'featureType': 'building',
      'elementType': 'geometry',
      'stylers': {
        'visibility': 'on'
      }
    }, {
      'featureType': 'building',
      'elementType': 'geometry.fill',
      'stylers': {
        'color': '#09185ab3'
      }
    }, {
      'featureType': 'building',
      'elementType': 'geometry.stroke',
      'stylers': {
        'color': '#020053b3'
      }
    }, {
      'featureType': 'subwaystation',
      'elementType': 'geometry',
      'stylers': {
        'visibility': 'on',
        'color': '#b15454B2'
      }
    }, {
      'featureType': 'education',
      'elementType': 'geometry',
      'stylers': {
        'visibility': 'on',
        'color': '#e4f1f1ff'
      }
    }, {
      'featureType': 'medical',
      'elementType': 'geometry',
      'stylers': {
        'visibility': 'on',
        'color': '#f0dedeff'
      }
    }, {
      'featureType': 'scenicspots',
      'elementType': 'geometry',
      'stylers': {
        'visibility': 'on',
        'color': '#e2efe5ff'
      }
    }, {
      'featureType': 'highway',
      'elementType': 'geometry',
      'stylers': {
        'visibility': 'on',
        'weight': 4
      }
    }, {
      'featureType': 'highway',
      'elementType': 'geometry.fill',
      'stylers': {
        'color': '#f7c54dff'
      }
    }, {
      'featureType': 'highway',
      'elementType': 'geometry.stroke',
      'stylers': {
        'color': '#fed669ff'
      }
    }, {
      'featureType': 'highway',
      'elementType': 'labels',
      'stylers': {
        'visibility': 'on'
      }
    }, {
      'featureType': 'highway',
      'elementType': 'labels.text.fill',
      'stylers': {
        'color': '#8f5a33ff'
      }
    }, {
      'featureType': 'highway',
      'elementType': 'labels.text.stroke',
      'stylers': {
        'color': '#ffffffff'
      }
    }, {
      'featureType': 'highway',
      'elementType': 'labels.icon',
      'stylers': {
        'visibility': 'on'
      }
    }, {
      'featureType': 'arterial',
      'elementType': 'geometry',
      'stylers': {
        'visibility': 'on',
        'weight': 2
      }
    }, {
      'featureType': 'arterial',
      'elementType': 'geometry.fill',
      'stylers': {
        'color': '#d8d8d8ff'
      }
    }, {
      'featureType': 'arterial',
      'elementType': 'geometry.stroke',
      'stylers': {
        'color': '#ffeebbff'
      }
    }, {
      'featureType': 'arterial',
      'elementType': 'labels',
      'stylers': {
        'visibility': 'on'
      }
    }, {
      'featureType': 'arterial',
      'elementType': 'labels.text.fill',
      'stylers': {
        'color': '#525355ff'
      }
    }, {
      'featureType': 'arterial',
      'elementType': 'labels.text.stroke',
      'stylers': {
        'color': '#ffffffff'
      }
    }, {
      'featureType': 'local',
      'elementType': 'geometry',
      'stylers': {
        'visibility': 'on',
        'weight': 1
      }
    }, {
      'featureType': 'local',
      'elementType': 'geometry.fill',
      'stylers': {
        'color': '#d8d8d8ff'
      }
    }, {
      'featureType': 'local',
      'elementType': 'geometry.stroke',
      'stylers': {
        'color': '#ffffffff'
      }
    }, {
      'featureType': 'local',
      'elementType': 'labels',
      'stylers': {
        'visibility': 'on'
      }
    }, {
      'featureType': 'local',
      'elementType': 'labels.text.fill',
      'stylers': {
        'color': '#979c9aff'
      }
    }, {
      'featureType': 'local',
      'elementType': 'labels.text.stroke',
      'stylers': {
        'color': '#ffffffff'
      }
    }, {
      'featureType': 'railway',
      'elementType': 'geometry',
      'stylers': {
        'visibility': 'on',
        'weight': 1
      }
    }, {
      'featureType': 'railway',
      'elementType': 'geometry.fill',
      'stylers': {
        'color': '#123c52ff'
      }
    }, {
      'featureType': 'railway',
      'elementType': 'geometry.stroke',
      'stylers': {
        'color': '#12223dff'
      }
    }, {
      'featureType': 'subway',
      'elementType': 'geometry',
      'stylers': {
        'visibility': 'on',
        'weight': 1
      }
    }, {
      'featureType': 'subway',
      'elementType': 'geometry.fill',
      'stylers': {
        'color': '#d8d8d8ff'
      }
    }, {
      'featureType': 'subway',
      'elementType': 'geometry.stroke',
      'stylers': {
        'color': '#ffffff00'
      }
    }, {
      'featureType': 'subway',
      'elementType': 'labels',
      'stylers': {
        'visibility': 'on'
      }
    }, {
      'featureType': 'subway',
      'elementType': 'labels.text.fill',
      'stylers': {
        'color': '#979c9aff'
      }
    }, {
      'featureType': 'subway',
      'elementType': 'labels.text.stroke',
      'stylers': {
        'color': '#ffffffff'
      }
    }, {
      'featureType': 'continent',
      'elementType': 'labels',
      'stylers': {
        'visibility': 'on'
      }
    }, {
      'featureType': 'continent',
      'elementType': 'labels.icon',
      'stylers': {
        'visibility': 'on'
      }
    }, {
      'featureType': 'continent',
      'elementType': 'labels.text.fill',
      'stylers': {
        'color': '#333333ff'
      }
    }, {
      'featureType': 'continent',
      'elementType': 'labels.text.stroke',
      'stylers': {
        'color': '#ffffffff'
      }
    }, {
      'featureType': 'city',
      'elementType': 'labels.icon',
      'stylers': {
        'visibility': 'on'
      }
    }, {
      'featureType': 'city',
      'elementType': 'labels',
      'stylers': {
        'visibility': 'on'
      }
    }, {
      'featureType': 'city',
      'elementType': 'labels.text.fill',
      'stylers': {
        'color': '#454d50ff'
      }
    }, {
      'featureType': 'city',
      'elementType': 'labels.text.stroke',
      'stylers': {
        'color': '#ffffffff'
      }
    }, {
      'featureType': 'town',
      'elementType': 'labels.icon',
      'stylers': {
        'visibility': 'on'
      }
    }, {
      'featureType': 'town',
      'elementType': 'labels',
      'stylers': {
        'visibility': 'on'
      }
    }, {
      'featureType': 'town',
      'elementType': 'labels.text.fill',
      'stylers': {
        'color': '#454d50ff'
      }
    }, {
      'featureType': 'town',
      'elementType': 'labels.text.stroke',
      'stylers': {
        'color': '#ffffffff'
      }
    }, {
      'featureType': 'road',
      'elementType': 'geometry.fill',
      'stylers': {
        'color': '#002a4bff'
      }
    }, {
      'featureType': 'poilabel',
      'elementType': 'labels',
      'stylers': {
        'visibility': 'on'
      }
    }, {
      'featureType': 'districtlabel',
      'elementType': 'labels',
      'stylers': {
        'visibility': 'off'
      }
    }, {
      'featureType': 'road',
      'elementType': 'geometry',
      'stylers': {
        'visibility': 'on',
        'weight': 2.5
      }
    }, {
      'featureType': 'road',
      'elementType': 'labels',
      'stylers': {
        'visibility': 'on'
      }
    }, {
      'featureType': 'road',
      'elementType': 'geometry.stroke',
      'stylers': {
        'color': '#0001668a'
      }
    }, {
      'featureType': 'district',
      'elementType': 'labels',
      'stylers': {
        'visibility': 'off'
      }
    }, {
      'featureType': 'poilabel',
      'elementType': 'labels.icon',
      'stylers': {
        'visibility': 'off'
      }
    }, {
      'featureType': 'poilabel',
      'elementType': 'labels.text.fill',
      'stylers': {
        'color': '#2dc4bbff'
      }
    }, {
      'featureType': 'poilabel',
      'elementType': 'labels.text.stroke',
      'stylers': {
        'color': '#ffffff00'
      }
    }, {
      'featureType': 'manmade',
      'elementType': 'geometry',
      'stylers': {
        'color': '#12223dff'
      }
    }, {
      'featureType': 'districtlabel',
      'elementType': 'labels.text.stroke',
      'stylers': {
        'color': '#ff0000ff'
      }
    }, {
      'featureType': 'entertainment',
      'elementType': 'geometry',
      'stylers': {
        'color': '#ffffffff'
      }
    }, {
      'featureType': 'shopping',
      'elementType': 'geometry',
      'stylers': {
        'color': '#12223dff'
      }
    }, {
      'featureType': 'background',
      'elementType': 'geometry',
      'stylers': {
        'color': '#28525bff'
      }
    }, {
      'featureType': 'road',
      'elementType': 'labels.text.fill',
      'stylers': {
        'color': '#00848dff'
      }
    }, {
      'featureType': 'road',
      'elementType': 'labels.text.stroke',
      'stylers': {
        'color': '#adadad00'
      }
    }, {
      'featureType': 'country',
      'elementType': 'labels.text.fill',
      'stylers': {
        'color': '#ff0005ff'
      }
    }, {
      'featureType': 'country',
      'elementType': 'labels.text.stroke',
      'stylers': {
        'color': '#ff0005bd'
      }
    }, {
      'featureType': 'districtlabel',
      'elementType': 'labels.text.fill',
      'stylers': {
        'color': '#ff0000ff'
      }
    }, {
      'featureType': 'districtlabel',
      'elementType': 'labels.icon',
      'stylers': {
        'visibility': 'on'
      }
    }, {
      'featureType': 'country',
      'elementType': 'labels',
      'stylers': {
        'visibility': 'on'
      }
    }];


    const map = new BMap.Map('bmap');
    map.centerAndZoom(new BMap.Point(104.89101, 34.536594), 6);
    map.enableScrollWheelZoom();
    map.setMapStyleV2({ styleJson: _THEMEJSON });


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
    this.link._link = 'newsAnnouncement';
    if (this.token._token === '') {
      this.ifShowDialog = true;
      this.ifShowSignContent = true;
    } else {
      this.router.navigate(['newsAnnouncement']);
    }
  }
  scanNewsBulletinDetail() {
    this.link._link = 'newsBulletinDetail';
    if (this.token._token === '') {
      this.ifShowDialog = true;
      this.ifShowSignContent = true;
    } else {
      this.router.navigate(['newsBulletinDetail']);
    }
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
