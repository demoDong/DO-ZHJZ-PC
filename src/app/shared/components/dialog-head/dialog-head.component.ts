import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-head',
  templateUrl: './dialog-head.component.html',
  styleUrls: ['./dialog-head.component.scss']
})
export class DialogHeadComponent implements OnInit {
  @Output() close: EventEmitter<any> = new EventEmitter<any>();

  constructor(private router: Router) { }

  ngOnInit() {
  }
  closeDialog() {
    this.close.emit(false);
  }

}
