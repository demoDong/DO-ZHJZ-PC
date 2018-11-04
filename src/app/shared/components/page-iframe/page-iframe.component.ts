import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

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
    @Input() ifShowSignButton: boolean;
    public navArray: Array<object>;
    public ifNavClickedArr: Array<boolean>;
    public ifShowSignDialog: boolean;
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
        this.ifShowSignDialog = false;
        // this.ifShowSignButton = true;
    }

    navClicked(link) {
        console.log(this.ifShowSignButton);
        if (!this.ifShowSignButton) {
            this.router.navigate([link]);
        } else {
            if (link === 'homepage' || link === 'contactUs') {
                this.router.navigate([link]);
            } else {
                this.ifShowSignDialog = true;
            }
        }

    }
    closeDialog(e) {
        this.ifShowSignDialog = e;
    }
    showSignDialog() {
        this.ifShowSignDialog = true;
    }
    clickSignButton(e) {
        console.log(e);
        this.ifShowSignButton = e;
        this.ifShowSignDialog = e;
    }
    exit() {
        this.ifShowSignButton = true;
    }
}
