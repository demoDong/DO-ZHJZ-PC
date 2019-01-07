import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageIframeComponent } from './components/page-iframe/page-iframe.component';
import { SignDialogComponent } from './components/sign-dialog/sign-dialog.component';
import { DialogHeadComponent } from './components/dialog-head/dialog-head.component';
import { FormsModule } from '@angular/forms';
import { RegistDialogComponent } from './components/regist-dialog/regist-dialog.component';
import { ForgetpwdDialogComponent } from './components/forgetpwd-dialog/forgetpwd-dialog.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [PageIframeComponent, SignDialogComponent, DialogHeadComponent, RegistDialogComponent, ForgetpwdDialogComponent],
  exports: [PageIframeComponent]
})
export class SharedModule { }
