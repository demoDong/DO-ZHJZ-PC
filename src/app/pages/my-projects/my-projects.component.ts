import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TokenService } from '../../shared/services/token.service';

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
  public projects: object;
  public projectProduce: object;
  public selectedFile: object;
  constructor(private router: Router, private http: HttpClient, private token: TokenService) { }

  ngOnInit() {
    this.picture = 'personCenter.png';
    this.ZH_TITLE = '我的项目';
    this.EN_TITLE = 'MY PROJECT';
    this.NAV_INDEX = 1;

    this.projects = {
      'building': [
        {
          'label': '中关村声明科学院医药科技中心二标段',
          'data': {
            'pics': ['projectInformation'],
            'name': '中关村声明科学院医药科技中心二标段',
            'address': '北京市昌平区回龙观镇中关村国际生命医疗园东北部',
            'area': '98000平方米',
          },
          'children': [
            { 'label': '中关村声明科学院医药科技中心 #6 号楼' },
            { 'label': '中关村声明科学院医药科技中心 #5 号楼' },
            { 'label': '中关村声明科学院医药科技中心 #4 号楼' },
            { 'label': '中关村声明科学院医药科技中心 #3 号楼' },
            { 'label': '中关村声明科学院医药科技中心 #2 号楼' },
            { 'label': '中关村声明科学院医药科技中心 #1 号楼' }
          ]
        },
        {
          'label': '中关村声明科学院医药科技中心一标段',
          'data': {
            'pics': ['projectInformation', 'projectInformation', 'projectInformation'],
            'name': '中关村声明科学院医药科技中心一标段',
            'address': '北京市昌平区回龙观镇中关村国际生命医疗园西北部',
            'area': '80000平方米',
          },
          'children': [
            { 'label': '中关村声明科学院医药科技中心 #6 号楼' },
            { 'label': '中关村声明科学院医药科技中心 #5 号楼' },
            { 'label': '中关村声明科学院医药科技中心 #4 号楼' },
            { 'label': '中关村声明科学院医药科技中心 #3 号楼' },
            { 'label': '中关村声明科学院医药科技中心 #2 号楼' },
            { 'label': '中关村声明科学院医药科技中心 #1 号楼' }
          ]
        },
        {
          'label': '东城区西河沿房改带危改项目（幼儿园）',
          'data': {
            'pics': ['projectInformation', 'projectInformation', 'projectInformation'],
            'name': '东城区西河沿房改带危改项目（幼儿园）',
            'address': '北京市东城区',
            'area': '86000平方米',
          },
          'children': [
            { 'label': '中关村声明科学院医药科技中心 #2 号楼' },
            { 'label': '中关村声明科学院医药科技中心 #1 号楼' }
          ]
        },
        {
          'label': '东城区西河沿房改带危改项目（东区）',
          'data': {
            'pics': ['projectInformation', 'projectInformation', 'projectInformation'],
            'name': '东城区西河沿房改带危改项目（东区）',
            'address': '北京市东城区',
            'area': '86000平方米',
          },
          'children': [
            { 'label': '中关村声明科学院医药科技中心 #2 号楼' },
            { 'label': '中关村声明科学院医药科技中心 #1 号楼' }]
        },
        {
          'label': '东城区西河沿房改带危改项目（西区）',
          'data': {
            'pics': ['projectInformation', 'projectInformation', 'projectInformation'],
            'name': '东城区西河沿房改带危改项目（西区）',
            'address': '北京市东城区',
            'area': '86000平方米',
          },
          'children': [
            { 'label': '中关村声明科学院医药科技中心 #2 号楼' },
            { 'label': '中关村声明科学院医药科技中心 #1 号楼' }]
        }
      ],
      'finished': [
        {
          'label': '中关村声明科学院医药科技中心二标段',
          'data': {
            'pics': ['projectInformation', 'projectInformation', 'projectInformation'],
            'name': '中关村声明科学院医药科技中心二标段',
            'address': '北京市昌平区回龙观镇中关村国际生命医疗园东北部',
            'area': '98000平方米',
          },
          'children': [
            { 'label': '中关村声明科学院医药科技中心 #6 号楼' },
            { 'label': '中关村声明科学院医药科技中心 #5 号楼' },
            { 'label': '中关村声明科学院医药科技中心 #4 号楼' },
            { 'label': '中关村声明科学院医药科技中心 #3 号楼' },
            { 'label': '中关村声明科学院医药科技中心 #2 号楼' },
            { 'label': '中关村声明科学院医药科技中心 #1 号楼' }
          ]
        },
        {
          'label': '中关村声明科学院医药科技中心一标段',
          'data': {
            'pics': ['projectInformation', 'projectInformation', 'projectInformation'],
            'name': '中关村声明科学院医药科技中心一标段',
            'address': '北京市昌平区回龙观镇中关村国际生命医疗园西北部',
            'area': '80000平方米',
          },
          'children': [
            { 'label': '中关村声明科学院医药科技中心 #6 号楼' },
            { 'label': '中关村声明科学院医药科技中心 #5 号楼' },
            { 'label': '中关村声明科学院医药科技中心 #4 号楼' },
            { 'label': '中关村声明科学院医药科技中心 #3 号楼' },
            { 'label': '中关村声明科学院医药科技中心 #2 号楼' },
            { 'label': '中关村声明科学院医药科技中心 #1 号楼' }
          ]
        },
        {
          'label': '东城区西河沿房改带危改项目（幼儿园）',
          'data': {
            'pics': ['projectInformation', 'projectInformation', 'projectInformation'],
            'name': '东城区西河沿房改带危改项目（幼儿园）',
            'address': '北京市东城区',
            'area': '86000平方米',
          },
          'children': [
            { 'label': '中关村声明科学院医药科技中心 #2 号楼' },
            { 'label': '中关村声明科学院医药科技中心 #1 号楼' }
          ]
        },
        {
          'label': '东城区西河沿房改带危改项目（东区）',
          'data': {
            'pics': ['projectInformation', 'projectInformation', 'projectInformation'],
            'name': '东城区西河沿房改带危改项目（东区）',
            'address': '北京市东城区',
            'area': '86000平方米',
          },
          'children': [
            { 'label': '中关村声明科学院医药科技中心 #2 号楼' },
            { 'label': '中关村声明科学院医药科技中心 #1 号楼' }]
        },
        {
          'label': '东城区西河沿房改带危改项目（西区）',
          'data': {
            'pics': ['projectInformation', 'projectInformation', 'projectInformation'],
            'name': '东城区西河沿房改带危改项目（西区）',
            'address': '北京市东城区',
            'area': '86000平方米',
          },
          'children': [
            { 'label': '中关村声明科学院医药科技中心 #2 号楼' },
            { 'label': '中关村声明科学院医药科技中心 #1 号楼' }]
        }
      ]
    };

    this.http.get(
      '/ucenter/rest/v2/services/ucenter_ProjectGroupService/getProjectGroupsByLogin',
      { headers: { 'Authorization': `Bearer ${this.token._token}` } }
    ).subscribe(data => {
      console.log(data);
    });

    // this.selectedFile = {
    //   'node': {
    //     'label': '中关村声明科学院医药科技中心二标段'
    //   },
    // };
    this.projectProduce = this.projects['building'][0].data;
  }
  nodeSelect(e) {
    if (!e.node.parent) {
      this.projectProduce = e.node.data;
    }
  }
  onNodeCollapse(e) {
  }

  jumpTodopage() {
    this.router.navigate(['myProjectsTodo']);
  }
}
