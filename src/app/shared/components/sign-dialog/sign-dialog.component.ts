import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-dialog',
  templateUrl: './sign-dialog.component.html',
  styleUrls: ['./sign-dialog.component.scss']
})
export class SignDialogComponent implements OnInit {
  @Output() clickSignButton: EventEmitter<any> = new EventEmitter<any>();
  constructor(private router: Router) { }

  ngOnInit() {
  }
  sign(e) {
    e.preventDefault();
    this.clickSignButton.emit(false);
  }
  closeDialog() { }
}
