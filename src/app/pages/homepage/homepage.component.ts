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
    ) { }

    ngOnInit() {
        this.picture = 'personCenter.png';
        this.ZH_TITLE = '首页';
        this.EN_TITLE = 'MY PROJECT';
        this.timgs = ['timg1', 'timg2', 'timg3'];
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
        const infoWindow = new AMap.InfoWindow({ offset: new AMap.Pixel(0, -30) });
        this.http.get<any>('/news.json').subscribe(data => {
            this.newsArr = data.slice(0, 3);
        });
        this.http.get<any>('/ucenter/rest/v2/services/ucenter_ProjectGroupService/getLimitProjectGroups').subscribe(
            data => {
                data.forEach(projectGroupItem => {
                    projectGroupItem.projects.forEach(project => {
                        if (project.location.longitude && project.location.latitude) {
                            markerIcon = new AMap.Icon({
                                size: new AMap.Size(70, 70),
                                image: 'assets/images/marker.png',
                                imageSize: new AMap.Size(70, 70),
                            });
                            marker = new AMap.Marker({
                                position: new AMap.LngLat(project.location.longitude, project.location.latitude),
                                icon: markerIcon,
                                offset: new AMap.Pixel(-35, -35)
                            });
                            markers.push(marker);
                            marker.content = project.name;
                            marker.on('mouseover', (e) => {
                                infoWindow.setContent(e.target.content);
                                infoWindow.open(map, e.target.getPosition());
                            });
                            marker.on('mouseout', () => {
                                infoWindow.close();
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
    scanNewsBulletinDetail(id) {
        this.variables._link = 'newsBulletinDetail';
        this.router.navigate(['newsBulletinDetail'], { queryParams: { id: id } });
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
