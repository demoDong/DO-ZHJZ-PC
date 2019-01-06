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
  public projectProduce = {};
  public selectedFile: object;
  public todoThingsNum: number;
  public projects: any = {
    building: [],
    finished: [],
  };
  constructor(private router: Router, private http: HttpClient, private token: TokenService) { }

  ngOnInit() {
    this.picture = 'personCenter.png';
    this.ZH_TITLE = '我的项目';
    this.EN_TITLE = 'MY PROJECT';
    this.NAV_INDEX = 1;
    this.http.get<any>(
      '/ucenter/rest/v2/services/ucenter_CommonService/findPendingWork',
      { headers: { 'Authorization': `Bearer ${this.token._token}` } }
    ).subscribe(data => {
      this.todoThingsNum = data.length;
    });
    // 初始化获取项目列表
    this.http.get<any>(
      '/ucenter/rest/v2/services/ucenter_ProjectGroupService/getProjectGroupsByLogin',
      { headers: { 'Authorization': `Bearer ${this.token._token}` } }
    ).subscribe(data => {
      data.forEach(projectGroupItem => {
        projectGroupItem.projects.forEach(project => {
          const entry = project.entry;
          const id = project.id;
          const buildingProList = {
            'label': project.name ? project.name : '',
            'data': {
              'pics': [],
              'name': project.name ? project.name : '',
              'address': project.address ? project.address : '',
              'area': project.constructionArea ? project.constructionArea : '',
            },
            'children': []
          };
          project.images.forEach(imgItem => {
            buildingProList.data.pics.push(`${entry}images?id=${imgItem.id}`);
          });
          this.http.get<any>(
            // tslint:disable-next-line:max-line-length
            `http://59.110.112.210:10000/ucenter/rest/v2/services/ucenter_ProjectGroupService/findUserDuty?projectUrl=${entry}&projectId=${id}`,
            { headers: { 'Authorization': `Bearer ${this.token._token}` } }
          ).subscribe(result => {
            result.forEach(buildingItem => {
              buildingProList.children.push({
                'label': buildingItem.buildingName,
                'data': {
                  'url': buildingItem.url
                }
              });
            });
          });
          this.projects.building.push(buildingProList);
        });
      });
      this.projectProduce = this.projects.building[0].data;
    });
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
