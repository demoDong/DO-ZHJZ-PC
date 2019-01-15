import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PaginatorModule } from 'primeng/paginator';
import { CarouselModule } from 'primeng/carousel';
import { SharedModule } from './shared/shared.module';
import { TreeModule } from 'primeng/tree';

import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NewsAnnouncementComponent } from './pages/news-announcement/news-announcement.component';
import { PersonalCenterComponent } from './pages/personal-center/personal-center.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ProjectInformationComponent } from './pages/project-information/project-information.component';
import { NewsBulletinDetailComponent } from './pages/news-bulletin-detail/news-bulletin-detail.component';
import { ProjectInformationDetailComponent } from './pages/project-information-detail/project-information-detail.component';
import { MyProjectsTodoComponent } from './pages/my-projects-todo/my-projects-todo.component';
import { MyProjectsComponent } from './pages/my-projects/my-projects.component';
import { HttpApi } from './shared/services/http-api.service';
import { AuthGuard } from './auth-guard';



@NgModule({
  declarations: [
    AppComponent,
    MyProjectsTodoComponent,
    HomepageComponent,
    NewsAnnouncementComponent,
    PersonalCenterComponent,
    ContactUsComponent,
    ProjectInformationComponent,
    NewsBulletinDetailComponent,
    ProjectInformationDetailComponent,
    MyProjectsComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    PaginatorModule,
    CarouselModule,
    TreeModule,
  ],
  providers: [HttpApi, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
