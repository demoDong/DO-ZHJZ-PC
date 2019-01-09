import { Component, OnInit } from '@angular/core';
import { HttpApi } from '../../shared/services/http-api.service';
import { VariablesService } from '../../shared/services/variables.service';

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
  public buildingPorjectsArr: any;
  public searchProjectName = '';
  private projectGroups: any;
  constructor(private http: HttpApi, private variables: VariablesService) { }

  ngOnInit() {
    this.picture = 'projectInformationTop.png';
    this.ZH_TITLE = '工程信息';
    this.EN_TITLE = 'PROJECT INFORMATION';
    this.NAV_INDEX = 2;
    this.http.get<any>(
      '/ucenter/rest/v2/services/ucenter_ProjectGroupService/getAllProjectGroups',
      { headers: { 'Authorization': `Bearer ${this.variables._token}` } }
    ).subscribe(data => {
      this.projectGroups = data;
      // 项目列表初始化渲染
      this.searchProjects();
    });
  }

  // 项目搜索
  searchProjects() {
    this.buildingPorjectsArr = [[]];
    if (this.searchProjectName === '') {
      this.projectGroups.forEach(projectGroupItem => {
        projectGroupItem.projects.forEach(project => {
          if (project.status === 'IN_PROGRESS') {
            this.dataAnalyze(project);
          }
        });
      });
    } else {
      this.projectGroups.forEach(projectGroupItem => {
        projectGroupItem.projects.forEach(project => {
          if (project.status === 'IN_PROGRESS' && project.name.indexOf(this.searchProjectName) !== -1) {
            this.dataAnalyze(project);
          }
        });
      });
    }

  }

  /**
   * 数据处理
   * @param project 单个项目对象
   */
  dataAnalyze(project) {
    if (this.buildingPorjectsArr[this.buildingPorjectsArr.length - 1].length === 9) {
      this.buildingPorjectsArr.push([]);
    }
    this.buildingPorjectsArr[this.buildingPorjectsArr.length - 1].push({
      name: project.name,
      pic: project['images'][0] ? `${project.entry}images?id=${project['images'][0].id}` : 'assets/images/no.jpg',
      id: project.id
    });
  }

}
