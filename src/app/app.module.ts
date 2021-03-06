import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { BeforeLoginModule } from './shared/components/before-login/before-login.module';
import { AfterLoginModule } from './shared/components/after-login/after-login.module';
import { PaginatorModule } from 'primeng/paginator';
import { CarouselModule } from 'primeng/carousel';



import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { RegistComponent } from './pages/regist/regist.component';
import { ForgetPwdComponent } from './pages/forget-pwd/forget-pwd.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MyProjectsComponent } from './pages/my-projects/my-projects.component';
import { NewsAnnouncementComponent } from './pages/news-announcement/news-announcement.component';
import { PersonalCenterComponent } from './pages/personal-center/personal-center.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ProjectInformationComponent } from './pages/project-information/project-information.component';
import { SignDialogComponent } from './shared/components/sign-dialog/sign-dialog.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    RegistComponent,
    ForgetPwdComponent,
    MyProjectsComponent,
    HomepageComponent,
    NewsAnnouncementComponent,
    PersonalCenterComponent,
    ContactUsComponent,
    ProjectInformationComponent,
    SignDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BeforeLoginModule,
    AfterLoginModule,
    PaginatorModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
