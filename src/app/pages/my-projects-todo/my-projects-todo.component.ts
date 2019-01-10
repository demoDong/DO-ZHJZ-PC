import { Component, OnInit } from '@angular/core';
import { HttpApi } from '../../shared/services/http-api.service';
import { VariablesService } from '../../shared/services/variables.service';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects-todo.component.html',
  styleUrls: ['./my-projects-todo.component.scss'],
})
export class MyProjectsTodoComponent implements OnInit {
  public picture: any;
  public ZH_TITLE: string;
  public EN_TITLE: string;
  public NAV_INDEX: number;
  public newsArr: Array<object>;
  public allTodoThings: any;
  public rencentPageTotoThings: any;
  private idp_ticket: any;
  constructor(private http: HttpApi, private variables: VariablesService) { }

  ngOnInit() {
    this.picture = 'personCenter.png';
    this.ZH_TITLE = '我的项目';
    this.EN_TITLE = 'MY PROJECT';
    this.NAV_INDEX = 1;
    this.allTodoThings = [];
    this.idp_ticket = this.variables._idpTicket;
    this.http.get(
      '/ucenter/rest/v2/services/ucenter_CommonService/findPendingWork',
      { headers: { 'Authorization': `Bearer ${this.variables._token}` } }
    ).subscribe(data => {
      this.allTodoThings = data;
      this.rencentPageTotoThings = this.allTodoThings.slice(0, 5);
    });
  }
  onPageChange(e) {
    e.page < e.pageCount - 1 ?
      this.rencentPageTotoThings = this.allTodoThings.slice(e.first, e.first + 5) :
      this.rencentPageTotoThings = this.allTodoThings.slice(e.first, this.allTodoThings.length + 1);
  }
  onGoResolveClick(url) {
    let ucenter_url;
    if (url.indexOf('?') !== -1) {
      ucenter_url = `${url}&${this.idp_ticket}`;
    } else {
      ucenter_url = url.charAt(url.length - 1) === '/' ? `${url}?${this.idp_ticket}` : `${url}/?${this.idp_ticket}`;
    }
    window.open(ucenter_url);
  }

}
