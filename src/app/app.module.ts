import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PaginatorModule } from 'primeng/paginator';
import { CarouselModule } from 'primeng/carousel';
import { SharedModule } from './shared/shared.module';
import { DoEChartsModule } from './shared/do-echarts/do-echarts.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistComponent } from './pages/regist/regist.component';
import { ForgetPwdComponent } from './pages/forget-pwd/forget-pwd.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MyProjectsComponent } from './pages/my-projects/my-projects.component';
import { NewsAnnouncementComponent } from './pages/news-announcement/news-announcement.component';
import { PersonalCenterComponent } from './pages/personal-center/personal-center.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ProjectInformationComponent } from './pages/project-information/project-information.component';
import { NewsBulletinDetailComponent } from './pages/news-bulletin-detail/news-bulletin-detail.component';
import { ProjectInformationDetailComponent } from './pages/project-information-detail/project-information-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistComponent,
    ForgetPwdComponent,
    MyProjectsComponent,
    HomepageComponent,
    NewsAnnouncementComponent,
    PersonalCenterComponent,
    ContactUsComponent,
    ProjectInformationComponent,
    NewsBulletinDetailComponent,
    ProjectInformationDetailComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    PaginatorModule,
    CarouselModule,
    DoEChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
