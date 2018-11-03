import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-after-login-layout',
    templateUrl: './after-login-layout.component.html',
    styleUrls: ['./after-login-layout.component.scss']
})
export class AfterLoginLayoutComponent implements OnInit {
    @Input() picture: any;
    @Input() ZH_TITLE: string;
    @Input() EN_TITLE: string;
    @Input() NAV_INDEX: number;
    @Input() ifShowSignDialog: boolean;
    public navArray: Array<object>;
    public ifNavClickedArr: Array<boolean>;
    constructor(private router: Router) { }

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
    }
    showSignDialog() {
        this.ifShowSignDialog = true;
    }
    navClicked(link) {
        this.router.navigate([link]);
    }
    exit() {
        this.router.navigate(['main']);
    }
}
