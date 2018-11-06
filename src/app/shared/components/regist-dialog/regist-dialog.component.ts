import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-regist-dialog',
  templateUrl: './regist-dialog.component.html',
  styleUrls: ['./regist-dialog.component.scss']
})
export class RegistDialogComponent implements OnInit {
  @Output() clickRegist: EventEmitter<any> = new EventEmitter<any>();
  @Output() clickReturnSign: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  regist(e) {
    e.preventDefault();
    this.clickRegist.emit();
  }
  returnSign() {
    this.clickReturnSign.emit();
  }
}
