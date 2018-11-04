import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
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

const appRouters: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'regist', component: RegistComponent },
  { path: 'forgetPwd', component: ForgetPwdComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'myProjects', component: MyProjectsComponent },
  { path: 'newsAnnouncement', component: NewsAnnouncementComponent },
  { path: 'personalCenter', component: PersonalCenterComponent },
  { path: 'contactUs', component: ContactUsComponent },
  { path: 'projectInformation', component: ProjectInformationComponent },
  { path: 'newsBulletinDetail', component: NewsBulletinDetailComponent },
  { path: 'projectInformationDetail', component: ProjectInformationDetailComponent },
  { path: '', component: HomepageComponent },
];
const routerConfig: ExtraOptions = {
  useHash: true,
  // enableTracing: true,
};
@NgModule({
  imports: [
    RouterModule.forRoot(appRouters, routerConfig),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
