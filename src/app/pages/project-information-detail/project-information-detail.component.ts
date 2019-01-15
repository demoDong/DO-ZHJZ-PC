import { Component, OnInit } from '@angular/core';
import { HttpApi } from '../../shared/services/http-api.service';
import { VariablesService } from '../../shared/services/variables.service';

@Component({
  selector: 'app-project-information-detail',
  templateUrl: './project-information-detail.component.html',
  styleUrls: ['./project-information-detail.component.scss']
})
export class ProjectInformationDetailComponent implements OnInit {
  public picture: any;
  public ZH_TITLE: string;
  public EN_TITLE: string;
  public NAV_INDEX: number;
  public projectDetail = {
    pics: [],
    detail: []
  };
  public isBuilding: boolean;
  constructor(private http: HttpApi, private variables: VariablesService) { }

  ngOnInit() {
    this.picture = 'projectInformationTop.png';
    this.ZH_TITLE = '工程信息';
    this.EN_TITLE = 'PROJECT INFORMATION';
    this.NAV_INDEX = 2;
    this.isBuilding = true;
    const routeID = location.href.split('id=')[1];
    // 初始化根据ID过滤对应工程信息
    this.http.get<any>(
      '/ucenter/rest/v2/services/ucenter_ProjectGroupService/getAllProjectGroups',
      { headers: { 'Authorization': `Bearer ${this.variables._token}` } }
    ).subscribe(data => {
      data.forEach(projectGroupItem => {
        projectGroupItem.projects.forEach(project => {
          if (project.id === routeID) {
            if (project.images.length === 0) {
              this.projectDetail.pics.push('assets/images/no.jpg');
            } else {
              project.images.forEach(item => {
                this.projectDetail.pics.push(`${project.entry}images?id=${item.id}`);
              });
            }
            this.projectDetail.detail.push(project.description ? project.description : '暂无信息');
          }
        });
      });
    });


  }

}
