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
    name: '',
    area: '',
    address: '',
    startDate: '',
    endDate: '',
    supervision: '',
    designUnitName: '',
    constructionUnitName: '',
    builder: '',
    description: ''
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
            this.projectDetail.name = project.name ? project.name : '';
            this.projectDetail.area = project.constructionArea ? `${project.constructionArea}平方米` : '';
            this.projectDetail.address = project.address ? project.address : '';
            this.projectDetail.startDate = project.startDate ? project.startDate : '';
            this.projectDetail.endDate = project.endDate ? project.endDate : '';
            this.projectDetail.supervision = project.supervisionUnitName ? project.supervisionUnitName : '';
            this.projectDetail.designUnitName = project.designUnitName ? project.designUnitName : '';
            this.projectDetail.constructionUnitName = project.constructionUnitName ? project.constructionUnitName : '';
            this.projectDetail.builder = project.buildUnitName ? project.buildUnitName : '';
            this.projectDetail.builder = project.buildUnitName ? project.buildUnitName : '';
            this.projectDetail.description = project.description ? project.description : '';
          }
        });
      });
    });


  }

}
