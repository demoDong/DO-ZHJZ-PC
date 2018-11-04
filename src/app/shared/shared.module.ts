import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageIframeComponent } from './components/page-iframe/page-iframe.component';
import { SignDialogComponent } from './components/sign-dialog/sign-dialog.component';
import { DialogHeadComponent } from './components/dialog-head/dialog-head.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PageIframeComponent, SignDialogComponent, DialogHeadComponent],
  exports: [PageIframeComponent]
})
export class SharedModule { }
