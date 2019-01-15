import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from '../../services/cookie.service';
import { VariablesService } from '../../services/variables.service';

@Component({
    selector: 'app-page-iframe',
    templateUrl: './page-iframe.component.html',
    styleUrls: ['./page-iframe.component.scss']
})
export class PageIframeComponent implements OnInit {
    @Input() picture: any;
    @Input() ZH_TITLE: string;
    @Input() EN_TITLE: string;
    @Input() NAV_INDEX: number;
    @Input() ifShowDialog: boolean;
    @Input() ifShowSignContent: boolean;
    @Output() clickCloseDialog: EventEmitter<any> = new EventEmitter<any>();
    public ifIsFirst: boolean;
    public ifShowSignButton: boolean;
    public ifShowRegistContent: boolean;
    public ifShowResetpwdContent: boolean;
    public navArray: Array<object>;
    public ifNavClickedArr: Array<boolean>;
    public ifShowQR: boolean;
    constructor(private router: Router, private variables: VariablesService, private cookie: CookieService) { }

    ngOnInit() {
        this.navArray = [
            { name: '首页', link: 'homepage' },
            { name: '我的项目', link: 'myProjects' },
            { name: '工程信息', link: 'projectInformation' },
            { name: '新闻通告', link: 'newsAnnouncement' },
            { name: '个人中心', link: 'personalCenter' },
            { name: '联系我们', link: 'contactUs' },
        ];
        this.ifNavClickedArr = new Array<boolean>(this.navArray.length);
        this.ifNavClickedArr.fill(false);
        this.ifNavClickedArr[this.NAV_INDEX] = true;
        this.ifShowDialog = false;
        this.ifShowSignContent = false;
        this.ifShowRegistContent = false;
        this.ifShowResetpwdContent = false;
        this.ifShowQR = false;
        // 初始化根据域名切换版权
        window.location.host === 'oil.iccloudy.com' ? this.ifIsFirst = false : this.ifIsFirst = true;
        // 初始化根据token判断是否显示登录按钮
        this.variables._token === '' ? this.ifShowSignButton = true : this.ifShowSignButton = false;
    }
    /**
     * 导航切换
     * @param link 页面path
     */
    navClicked(link) {
        if (!this.ifShowSignButton) {
            this.router.navigate([link]);
        } else {
            if (link === 'homepage' || link === 'contactUs' || link === 'newsAnnouncement') {
                this.router.navigate([link]);
            } else {
                this.ifShowDialog = true;
                this.ifShowSignContent = true;
            }
        }
        this.variables._link = link;
    }
    // 点击登录显示登录框
    showSignDialog() {
        this.ifShowQR = false;
        this.ifShowDialog = true;
        this.ifShowSignContent = true;
        this.ifShowRegistContent = false;
        this.ifShowResetpwdContent = false;
    }
    // 点击注册显示注册框
    showRegistDialog() {
        this.ifShowQR = false;
        this.ifShowDialog = true;
        this.ifShowSignContent = false;
        this.ifShowRegistContent = true;
        this.ifShowResetpwdContent = false;
    }
    // 点击下载APP显示二维码
    showQR() {
        this.ifShowDialog = false;
        this.ifShowQR = true;
    }
    // 关闭弹框
    closeDialog() {
        this.ifShowDialog = false;
        this.ifShowSignContent = false;
        this.ifShowRegistContent = false;
        this.clickCloseDialog.emit();
    }
    // 点击登录
    clickSign() {
        this.ifShowSignButton = false;
        this.ifShowDialog = false;
        this.ifShowSignContent = false;
        // tslint:disable-next-line:max-line-length
        if (!this.variables._link || this.variables._link === 'homepage' || this.variables._link === 'contactUs' || this.variables._link === 'newsAnnouncement') {
            this.router.navigate(['myProjects']);
            this.variables._link = 'myProjects';
        } else {
            this.variables._link.indexOf('id=') !== -1 ?
                // tslint:disable-next-line:max-line-length
                this.router.navigate([this.variables._link.split('?id=')[0]], { queryParams: { id: this.variables._link.split('?id=')[1] } }) :
                this.router.navigate([this.variables._link]);
        }
    }
    // 点击注册
    clickRegist() {
        this.ifShowSignContent = true;
        this.ifShowRegistContent = false;
    }
    // 点击重置密码
    clickResetPwd() {
        this.ifShowSignContent = true;
        this.ifShowResetpwdContent = false;
    }
    // 登录框点击注册新用户
    clickShowRegistDialog() {
        this.ifShowSignContent = false;
        this.ifShowRegistContent = true;
    }
    // 登录框点击忘记密码
    clickShowResetpwdDialog() {
        this.ifShowSignContent = false;
        this.ifShowResetpwdContent = true;
    }
    // 退出登录
    exit() {
        this.cookie.setCookie(('_token'), '');
        this.variables._token = '';
        this.variables._idpTicket = '';
        this.ifShowSignButton = true;
        if (!this.variables._link || this.variables._link === 'homepage') {
            window.location.reload();
        } else {
            this.router.navigate(['homepage']);
            this.variables._link = 'homepage';
        }

    }
}
