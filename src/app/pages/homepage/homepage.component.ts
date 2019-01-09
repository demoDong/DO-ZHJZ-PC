import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpApi } from '../../shared/services/http-api.service';
import { VariablesService } from '../../shared/services/variables.service';

declare const AMap: any;


@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
    public picture: any;
    public ZH_TITLE: string;
    public EN_TITLE: string;
    public NAV_INDEX: number;
    public buildingPorjectsArr = [];
    public ifShowDialog: boolean;
    public ifShowSignContent: boolean;
    public ifShowPopup: boolean;
    public newsArr;
    public mapOption;
    public timgs;
    public bigPic;
    public ifShowBigPic: boolean;
    constructor(
        private variables: VariablesService,
        private router: Router,
        private http: HttpApi,
    ) {
        this.newsArr = [
            { type: 'NEW', content: '中关村生命科学园医药科技中心在建项目已完成初步规划及项目前期准备工作......' },
            { type: 'ADV', content: '中关村生命科学园医药科技中心在建项目已完成初步规划及项目前期准备工作......' },
            { type: 'NEW', content: '中关村生命科学园医药科技中心在建项目已完成初步规划及项目前期准备工作......' }
        ];
        this.timgs = ['timg1', 'timg2', 'timg3'];
    }

    ngOnInit() {
        this.picture = 'personCenter.png';
        this.ZH_TITLE = '首页';
        this.EN_TITLE = 'MY PROJECT';
        this.NAV_INDEX = 0;
        this.ifShowDialog = false;
        this.ifShowSignContent = false;
        this.ifShowBigPic = false;
        this.variables._token === '' ? this.ifShowPopup = true : this.ifShowPopup = false;
        const map = new AMap.Map('bmap', {
            zoomEnable: true,
            doubleClickZoom: true,
            mapStyle: 'amap://styles/blue',
            zoom: 5,
            center: [120.89101, 34.536594]
        });
        let markerIcon;
        let marker;
        const markers = [];
        this.http.get<any>('/ucenter/rest/v2/services/ucenter_ProjectGroupService/getLimitProjectGroups').subscribe(
            data => {
                data.forEach(projectGroupItem => {
                    projectGroupItem.projects.forEach(project => {
                        if (project.location.longitude && project.location.latitude) {
                            markerIcon = new AMap.Icon({
                                size: new AMap.Size(70, 70),
                                image: 'assets/images/marker.png',
                                imageSize: new AMap.Size(70, 70),
                                // imageOffset: new AMap.Pixel(-95, -3)
                            });
                            marker = new AMap.Marker({
                                position: new AMap.LngLat(project.location.longitude, project.location.latitude),
                                // position: new AMap.LngLat(116.45, 39.93),
                                icon: markerIcon,
                                offset: new AMap.Pixel(-13, -30)
                            });
                            markers.push(marker);
                        }
                        this.buildingPorjectsArr.push({
                            name: project.name ? project.name : '',
                            area: project.constructionArea ? `${project.constructionArea}平方米` : '',
                            address: project.address ? project.address : '',
                            planDate: project.startDate ? project.startDate : '',
                            supervision: project.supervisionUnitName ? `开工日期${project.supervisionUnitName}` : '',
                            builder: project.buildUnitName ? project.buildUnitName : '',
                            pic: project.images[0] ? `${project.entry}images?id=${project['images'][0].id}` : 'assets/images/no.jpg',
                            id: project.id
                        });
                    });
                });
                map.add(markers);
            });
    }
    scanMoreProject() {
        this.variables._link = 'projectInformation';
        if (this.variables._token === '') {
            this.ifShowDialog = true;
            this.ifShowSignContent = true;
        } else {
            this.router.navigate(['projectInformation']);
        }
    }
    scanMoreNews() {
        this.variables._link = 'newsAnnouncement';
        this.router.navigate(['newsAnnouncement']);
    }
    scanNewsBulletinDetail() {
        this.variables._link = 'newsBulletinDetail';
        this.router.navigate(['newsBulletinDetail']);
    }
    scanProjectInformationDetail(id) {
        this.variables._link = `projectInformationDetail?id=${id}`;
        if (this.variables._token === '') {
            this.ifShowDialog = true;
            this.ifShowSignContent = true;
        } else {
            this.router.navigate(['projectInformationDetail'], { queryParams: { id: id } });
        }
    }
    showBigPic(pic) {
        this.bigPic = pic;
        this.ifShowBigPic = true;
    }
    closeDialog() {
        this.ifShowDialog = false;
        this.ifShowSignContent = false;
    }
    closePopup() {
        this.ifShowPopup = false;
    }
    goSign() {
        this.ifShowDialog = true;
        this.ifShowSignContent = true;
    }
}
