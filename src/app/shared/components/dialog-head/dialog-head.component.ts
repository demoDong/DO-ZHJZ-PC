import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dialog-head',
  templateUrl: './dialog-head.component.html',
  styleUrls: ['./dialog-head.component.scss']
})
export class DialogHeadComponent implements OnInit {
  @Output() close: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }
  // 关闭弹框
  closeDialog() {
    this.close.emit();
  }

}
