import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from '../../shared/services/token.service';
import * as jQuery from 'jquery';

@Component({
  selector: 'app-personal-center',
  templateUrl: './personal-center.component.html',
  styleUrls: ['./personal-center.component.scss']
})
export class PersonalCenterComponent implements OnInit {
  public picture: any;
  public ZH_TITLE: string;
  public EN_TITLE: string;
  public NAV_INDEX: number;
  public allMes = {
    user: {}
  };
  public name: string;
  public company: string;
  public selectedCompanyId: string;
  public position: string;
  public isNameReadonly = true;
  public isPositionReadonly = true;
  public ifShowSubmitBtn = false;
  public isEdits = [false, false, false];
  public companys: any;

  constructor(private http: HttpClient, private token: TokenService) {
  }

  ngOnInit() {
    this.picture = 'personCenter.png';
    this.ZH_TITLE = '个人中心';
    this.EN_TITLE = 'PERSONAL CENTER';
    this.NAV_INDEX = 4;
    // 获取所有公司
    this.http.get(
      '/ucenter/rest/v2/services/ucenter_CompanyService/getAllCompany',
      { headers: { 'Authorization': `Bearer ${this.token._token}` } }
    ).subscribe(
      data => {
        this.companys = data;
        this.getPersonalMes();
      });
  }

  onClickResetName() {
    this.isNameReadonly = false;
    this.isEdits[0] = true;
    this.ifShowSubmitBtn = true;
    jQuery('#name').focus();
  }

  onClickResetCompany() {
    this.isEdits[1] = true;
    this.ifShowSubmitBtn = true;
    jQuery('#company').focus();
  }

  onClickResetPosition() {
    this.isPositionReadonly = false;
    this.isEdits[2] = true;
    this.ifShowSubmitBtn = true;
    jQuery('#position').focus();
  }

  // 修改信息提交
  onResetMesSubmit() {
    this.http.post(
      '/ucenter/rest/v2/services/ucenter_UserService/updateClient2',
      {
        'name': this.name,
        'companyId': this.selectedCompanyId,
        'position': this.position
      },
      {
        'headers': {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.token._token}`
        }
      },
    ).subscribe(
      data => {
        alert('修改成功');
        this.getPersonalMes();
      }
    );
  }

  // 获取用户信息
  getPersonalMes() {
    this.http.get<any>(
      '/ucenter/rest/v2/services/ucenter_UserService/getCurrentClient',
      { headers: { 'Authorization': `Bearer ${this.token._token}` } }
    ).subscribe(
      data => {
        this.allMes = data;
        this.name = data['name'];
        this.company = data['company'];
        this.position = data['user']['position'];
        this.companys.forEach(element => {
          if (element.name === this.company) {
            this.selectedCompanyId = element.id;
          }
        });
        this.isNameReadonly = true;
        this.isPositionReadonly = true;
        this.isEdits.fill(false);
        this.ifShowSubmitBtn = false;
      });
  }


}
