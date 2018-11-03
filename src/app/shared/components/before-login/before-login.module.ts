import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeforeLoginHeaderComponent } from './before-login-header/before-login-header.component';
import { BeforeLoginContentComponent } from './before-login-content/before-login-content.component';
import { BeforeLoginDialogComponent } from './before-login-dialog/before-login-dialog.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [BeforeLoginHeaderComponent, BeforeLoginContentComponent, BeforeLoginDialogComponent],
  exports: [BeforeLoginHeaderComponent, BeforeLoginContentComponent, BeforeLoginDialogComponent],
})
export class BeforeLoginModule { }
