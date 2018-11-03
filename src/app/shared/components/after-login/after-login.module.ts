import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AfterLoginLayoutComponent } from './after-login-layout/after-login-layout.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AfterLoginLayoutComponent],
  exports: [AfterLoginLayoutComponent],
})
export class AfterLoginModule { }
