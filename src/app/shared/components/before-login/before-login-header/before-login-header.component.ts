import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-before-login-header',
  templateUrl: './before-login-header.component.html',
  styleUrls: ['./before-login-header.component.scss']
})
export class BeforeLoginHeaderComponent implements OnInit {
  @Output() showDialoged: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() showQRed: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }
  showDialog() {
    this.showDialoged.emit();
  }
  showQR() {
    this.showQRed.emit();
  }

}
