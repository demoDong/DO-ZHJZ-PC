import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpApi } from '../../shared/services/http-api.service';
import { VariablesService } from '../../shared/services/variables.service';

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
  constructor(private router: Router, private http: HttpApi, private variables: VariablesService) { }

  ngOnInit() {
    this.picture = 'personCenter.png';
    this.ZH_TITLE = '我的项目';
    this.EN_TITLE = 'MY PROJECT';
    this.NAV_INDEX = 1;
    this.http.get<any>(
      '/ucenter/rest/v2/services/ucenter_CommonService/findPendingWork',
      { headers: { 'Authorization': `Bearer ${this.variables._token}` } }
    ).subscribe(data => {
      this.todoThingsNum = data.length;
    });
    // 初始化获取项目列表
    this.http.get<any>(
      '/ucenter/rest/v2/services/ucenter_ProjectGroupService/getProjectGroupsByLogin',
      { headers: { 'Authorization': `Bearer ${this.variables._token}` } }
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
            `/ucenter/rest/v2/services/ucenter_ProjectGroupService/findUserDuty?projectUrl=${entry}&projectId=${id}`,
            { headers: { 'Authorization': `Bearer ${this.variables._token}` } }
          ).subscribe(result => {
            result.forEach(buildingItem => {
              let ucenter_url = '';
              const idp_ticket = this.variables._idpTicket;
              if (buildingItem.url.indexOf('?') !== -1) {
                ucenter_url = `${buildingItem.url}&${idp_ticket}`;
              } else {
                ucenter_url = buildingItem.url.charAt(buildingItem.url.length - 1) === '/' ?
                  `${buildingItem.url}?${idp_ticket}` :
                  `${buildingItem.url}/?${idp_ticket}`;
              }
              buildingProList.children.push({
                'label': buildingItem.buildingName,
                'data': {
                  'url': ucenter_url
                }
              });
            });
          });
          this.projects.building.push(buildingProList);
        });
      });
      this.projectProduce = this.projects.building[0] && this.projects.building[0]['data'] ? this.projects.building[0]['data'] : {};
    });
  }
  nodeSelect(e) {
    if (!e.node.parent) {
      this.projectProduce = e.node.data;
    } else {
      window.open(e.node.data.url);
    }
  }
  jumpTodopage() {
    this.router.navigate(['myProjectsTodo']);
  }
}
