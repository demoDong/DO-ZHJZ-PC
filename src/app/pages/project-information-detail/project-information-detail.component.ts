import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from '../../shared/services/token.service';

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
  constructor(private http: HttpClient, private token: TokenService) { }

  ngOnInit() {
    this.picture = 'projectInformationTop.png';
    this.ZH_TITLE = '工程信息';
    this.EN_TITLE = 'PROJECT INFORMATION';
    this.NAV_INDEX = 2;
    this.isBuilding = true;
    const routeID = location.href.split('id=')[1];
    // this.projectDetail = {
    //   pics: ['projectInformation', 'projectInformation', 'projectInformation'],
    //   detail: [
    //     '恒都投资控股（天津）股份有限公司是一家以供应链运营和商业地产开发为主业的多元化现代服务型企业集团，成立于2008年，总部设在天津，在上海、香港等金融中心均设有子公司，拥有控股企业30余家。2016年，集团营业收入超过20亿元人民币，拥有员工数百人。',
    // tslint:disable-next-line:max-line-length
    //     '集团以国家产业政策为导向，以“构建大宗商品产业互联生态”为愿景，积极探索通过“产业+互联网”降低大宗产品交易成本、提高大宗产品交易效率的发展战略，不断创新商业模式。在供应链运营领域探索形成煤炭、塑料化工、农副产品（粮食）、木材、钢铁、有色金属等核心业务板块。',
    //     '集团实行扁平化现代企业管理，总部设有运营管理中心、行政风控中心、财务中心和金融中心和不同品类大宗产品的六大事业部。集团布局全国，在全国交易量超过千万吨级的港口和矿产区设立大宗产品交易服务中心，提供供应链运营、共享物流等各项服务。',
    //     '集团全体员工本着“放下自我，追求企业发展”的精神，不断追求执行力和管理水平的提高，促进集团健康、稳步的发展。'
    //   ]
    // };

    this.http.get<any>(
      '/ucenter/rest/v2/services/ucenter_ProjectGroupService/getAllProjectGroups',
      { headers: { 'Authorization': `Bearer ${this.token._token}` } }
    ).subscribe(data => {
      data.forEach(projectGroupItem => {
        projectGroupItem.projects.forEach(project => {
          // if (project.id === routeID && project.status === 'IN_PROGRESS') {
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
