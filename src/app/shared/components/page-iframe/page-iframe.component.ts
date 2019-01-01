import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../../services/token.service';
import { LinkService } from '../../services/link.service';
import { CookieService } from '../../services/cookie.service';

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
    constructor(private router: Router, private token: TokenService, private link: LinkService, private cookie: CookieService) { }

    ngOnInit() {
        window.location.port !== '4200' ? this.ifIsFirst = true : this.ifIsFirst = false;
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
        this.token._token === '' ? this.ifShowSignButton = true : this.ifShowSignButton = false;

    }

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
        this.link._link = link;
    }
    showSignDialog() {
        this.ifShowDialog = true;
        this.ifShowSignContent = true;
        this.ifShowRegistContent = false;
        this.ifShowResetpwdContent = false;
    }
    showRegistDialog() {
        this.ifShowDialog = true;
        this.ifShowSignContent = false;
        this.ifShowRegistContent = true;
        this.ifShowResetpwdContent = false;
    }
    closeDialog() {
        this.ifShowDialog = false;
        this.ifShowSignContent = false;
        this.ifShowRegistContent = false;
        this.clickCloseDialog.emit();
    }
    clickSign() {
        this.ifShowSignButton = false;
        this.ifShowDialog = false;
        this.ifShowSignContent = false;
        // tslint:disable-next-line:max-line-length
        if (!this.link._link || this.link._link === 'homepage' || this.link._link === 'contactUs' || this.link._link === 'newsAnnouncement') {
            this.router.navigate(['myProjects']);
            this.link._link = 'myProjects';
        } else {
            this.router.navigate([this.link._link]);
        }
    }
    clickRegist() {
        this.ifShowSignContent = true;
        this.ifShowRegistContent = false;
    }
    clickResetPwd() {
        this.ifShowSignContent = true;
        this.ifShowResetpwdContent = false;
    }
    clickShowRegistDialog() {
        this.ifShowSignContent = false;
        this.ifShowRegistContent = true;
    }
    clickShowResetpwdDialog() {
        this.ifShowSignContent = false;
        this.ifShowResetpwdContent = true;
    }
    exit() {
        this.cookie.setCookie(('_idptickeToken'), '');
        this.token._token = '';
        this.ifShowSignButton = true;
        console.log(this.link._link);
        if (!this.link._link || this.link._link === 'homepage') {
            window.location.reload();
        } else {
            this.router.navigate(['homepage']);
            this.link._link = 'homepage';
        }

    }
}
