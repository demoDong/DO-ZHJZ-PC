import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from '../../shared/services/token.service';
import * as jQuery from 'jquery';
import { LinkService } from '../../shared/services/link.service';

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
  public mobile: string;
  public name: string;
  public company: string;
  public position: string;
  public isNameReadonly = true;
  public isCompanyReadonly = true;
  public isPositionReadonly = true;

  public ifNameResetSureClicked = false;
  public ifComponyResetSureClicked = false;
  public ifPositionResetSureClicked = false;

  constructor(private http: HttpClient, private token: TokenService, private link: LinkService) {
  }

  ngOnInit() {
    this.picture = 'personCenter.png';
    this.ZH_TITLE = '个人中心';
    this.EN_TITLE = 'PERSONAL CENTER';
    this.NAV_INDEX = 4;
    this.getPersonalMes();
  }

  onClickResetName(type) {
    this.isNameReadonly = !this.isNameReadonly;
    jQuery('#name').focus();
    if (!this.isNameReadonly) {
      this.ifNameResetSureClicked = true;
    } else {
      this.sendResetMessage(type);
    }
  }

  onClickResetCompany(type) {
    this.isCompanyReadonly = !this.isCompanyReadonly;
    jQuery('#company').focus();
    if (!this.isCompanyReadonly) {
      this.ifComponyResetSureClicked = true;
    } else {
      this.sendResetMessage(type);
    }
  }
  onClickResetPosition(type) {
    this.isPositionReadonly = !this.isPositionReadonly;
    jQuery('#position').focus();
    if (!this.isPositionReadonly) {
      this.ifPositionResetSureClicked = true;
    } else {
      this.sendResetMessage(type);
    }
  }

  sendResetMessage(type) {
    this.http.post(
      '/ucenter/rest/v2/services/ucenter_UserService/updateClient2',
      {
        'name': this.name,
        'companyId': '7265364b-b0c5-e8bc-e927-7a3982458fd6',
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

  getPersonalMes() {
    this.http.get(
      '/ucenter/rest/v2/services/ucenter_UserService/getCurrentClient',
      { headers: { 'Authorization': `Bearer ${this.token._token}` } }
    ).subscribe(
      data => {
        this.mobile = data['mobile'];
        this.name = data['name'];
        this.company = data['company'];
        this.position = data['user']['position'];
        this.isNameReadonly = true;
        this.isCompanyReadonly = true;
        this.isPositionReadonly = true;
        this.ifNameResetSureClicked = false;
        this.ifComponyResetSureClicked = false;
        this.ifPositionResetSureClicked = false;
        jQuery('#name').blur();
        jQuery('#company').blur();
        jQuery('#position').blur();
      });
  }


}
