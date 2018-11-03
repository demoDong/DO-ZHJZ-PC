import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-before-login-dialog',
  templateUrl: './before-login-dialog.component.html',
  styleUrls: ['./before-login-dialog.component.scss']
})
export class BeforeLoginDialogComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  closeDialog() {
    this.router.navigate(['main']);
  }

}
