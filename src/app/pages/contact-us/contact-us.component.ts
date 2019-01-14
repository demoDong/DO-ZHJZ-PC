import { Component, OnInit } from '@angular/core';
declare const BMap: any;
declare const BMAP_ANIMATION_BOUNCE: any;

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  public picture: any;
  public ZH_TITLE: string;
  public EN_TITLE: string;
  public NAV_INDEX: number;
  constructor() { }

  ngOnInit() {
    this.picture = 'contact.png';
    this.ZH_TITLE = '联系我们';
    this.EN_TITLE = 'CPNTACT US';
    this.NAV_INDEX = 5;
    // 地图初始化
    const map = new BMap.Map('allmap');
    const point = new BMap.Point(116.34583, 39.929089);
    const opts = {
      position: point,
      offset: new BMap.Size(-50, -80),
    };
    const label = new BMap.Label('国侨宾馆商务楼宇工作站', opts);
    map.centerAndZoom(point, 16);
    const marker = new BMap.Marker(point);
    map.addOverlay(marker);
    map.addOverlay(label);
    marker.setAnimation(BMAP_ANIMATION_BOUNCE);
  }


}
