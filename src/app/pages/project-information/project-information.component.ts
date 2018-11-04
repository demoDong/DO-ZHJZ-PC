import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-information',
  templateUrl: './project-information.component.html',
  styleUrls: ['./project-information.component.scss']
})
export class ProjectInformationComponent implements OnInit {
  public picture: any;
  public ZH_TITLE: string;
  public EN_TITLE: string;
  public NAV_INDEX: number;
  public buildingPorjectsArr;
  constructor(private router: Router
  ) {
    this.buildingPorjectsArr = [
      [{
        name: '中关村生命科学园医药科技中心一标段',
        pic: 'projectInformation',
        id: 1
      }, {
        name: '中关村生命科学园医药科技中心一标段',
        pic: 'projectInformation',
        id: 1
      }, {
        name: '中关村生命科学园医药科技中心一标段',
        pic: 'projectInformation',
        id: 1
      }, {
        name: '中关村生命科学园医药科技中心一标段',
        pic: 'projectInformation',
        id: 1
      }, {
        name: '中关村生命科学园医药科技中心一标段',
        pic: 'projectInformation',
        id: 1
      }, {
        name: '中关村生命科学园医药科技中心一标段',
        pic: 'projectInformation',
        id: 1
      }, {
        name: '中关村生命科学园医药科技中心一标段',
        pic: 'projectInformation',
        id: 1
      }, {
        name: '中关村生命科学园医药科技中心一标段',
        pic: 'projectInformation',
        id: 1
      }, {
        name: '中关村生命科学园医药科技中心一标段',
        pic: 'projectInformation',
        id: 1
      }],
      [{
        name: '中关村生命科学园医药科技中心一标段',
        pic: 'projectInformation',
        id: 1
      }, {
        name: '中关村生命科学园医药科技中心一标段',
        pic: 'projectInformation',
        id: 1
      }, {
        name: '中关村生命科学园医药科技中心一标段',
        pic: 'projectInformation',
        id: 1
      }, {
        name: '中关村生命科学园医药科技中心一标段',
        pic: 'projectInformation',
        id: 1
      }, {
        name: '中关村生命科学园医药科技中心一标段',
        pic: 'projectInformation',
        id: 1
      }, {
        name: '中关村生命科学园医药科技中心一标段',
        pic: 'projectInformation',
        id: 1
      }, {
        name: '中关村生命科学园医药科技中心一标段',
        pic: 'projectInformation',
        id: 1
      }],
    ];
  }

  ngOnInit() {
    this.picture = 'projectInformationTop.png';
    this.ZH_TITLE = '工程信息';
    this.EN_TITLE = 'PROJECT INFORMATION';
    this.NAV_INDEX = 2;
  }
  scanProjectInformationDetail() {
    this.router.navigate(['projectInformationDetail']);
  }

}
