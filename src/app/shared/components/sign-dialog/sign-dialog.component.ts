import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-dialog',
  templateUrl: './sign-dialog.component.html',
  styleUrls: ['./sign-dialog.component.scss']
})
export class SignDialogComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  login() {
    // this.router.navigate(['homepage']);
  }
  closeDialog() { }
}
