import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-forgetpwd-dialog',
  templateUrl: './forgetpwd-dialog.component.html',
  styleUrls: ['./forgetpwd-dialog.component.scss']
})
export class ForgetpwdDialogComponent implements OnInit {
  @Output() clickResetPwd: EventEmitter<any> = new EventEmitter<any>();
  @Output() clickReturnSign: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  resetPwd(e) {
    e.preventDefault();
    this.clickResetPwd.emit();
  }
  returnSign() {
    this.clickReturnSign.emit();
  }
}
