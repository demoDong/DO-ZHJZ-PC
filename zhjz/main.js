(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_regist_regist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/regist/regist.component */ "./src/app/pages/regist/regist.component.ts");
/* harmony import */ var _pages_forget_pwd_forget_pwd_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/forget-pwd/forget-pwd.component */ "./src/app/pages/forget-pwd/forget-pwd.component.ts");
/* harmony import */ var _pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/homepage/homepage.component */ "./src/app/pages/homepage/homepage.component.ts");
/* harmony import */ var _pages_my_projects_my_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/my-projects/my-projects.component */ "./src/app/pages/my-projects/my-projects.component.ts");
/* harmony import */ var _pages_news_announcement_news_announcement_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/news-announcement/news-announcement.component */ "./src/app/pages/news-announcement/news-announcement.component.ts");
/* harmony import */ var _pages_personal_center_personal_center_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/personal-center/personal-center.component */ "./src/app/pages/personal-center/personal-center.component.ts");
/* harmony import */ var _pages_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/contact-us/contact-us.component */ "./src/app/pages/contact-us/contact-us.component.ts");
/* harmony import */ var _pages_project_information_project_information_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/project-information/project-information.component */ "./src/app/pages/project-information/project-information.component.ts");
/* harmony import */ var _pages_news_bulletin_detail_news_bulletin_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/news-bulletin-detail/news-bulletin-detail.component */ "./src/app/pages/news-bulletin-detail/news-bulletin-detail.component.ts");
/* harmony import */ var _pages_project_information_detail_project_information_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/project-information-detail/project-information-detail.component */ "./src/app/pages/project-information-detail/project-information-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var appRouters = [
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'regist', component: _pages_regist_regist_component__WEBPACK_IMPORTED_MODULE_3__["RegistComponent"] },
    { path: 'forgetPwd', component: _pages_forget_pwd_forget_pwd_component__WEBPACK_IMPORTED_MODULE_4__["ForgetPwdComponent"] },
    { path: 'homepage', component: _pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__["HomepageComponent"] },
    { path: 'myProjects', component: _pages_my_projects_my_projects_component__WEBPACK_IMPORTED_MODULE_6__["MyProjectsComponent"] },
    { path: 'newsAnnouncement', component: _pages_news_announcement_news_announcement_component__WEBPACK_IMPORTED_MODULE_7__["NewsAnnouncementComponent"] },
    { path: 'personalCenter', component: _pages_personal_center_personal_center_component__WEBPACK_IMPORTED_MODULE_8__["PersonalCenterComponent"] },
    { path: 'contactUs', component: _pages_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_9__["ContactUsComponent"] },
    { path: 'projectInformation', component: _pages_project_information_project_information_component__WEBPACK_IMPORTED_MODULE_10__["ProjectInformationComponent"] },
    { path: 'newsBulletinDetail', component: _pages_news_bulletin_detail_news_bulletin_detail_component__WEBPACK_IMPORTED_MODULE_11__["NewsBulletinDetailComponent"] },
    { path: 'projectInformationDetail', component: _pages_project_information_detail_project_information_detail_component__WEBPACK_IMPORTED_MODULE_12__["ProjectInformationDetailComponent"] },
    { path: '', component: _pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__["HomepageComponent"] },
];
var routerConfig = {
    useHash: true,
};
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRouters, routerConfig),
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/services/cookie.service */ "./src/app/shared/services/cookie.service.ts");
/* harmony import */ var _shared_services_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/services/token.service */ "./src/app/shared/services/token.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(cookie, token) {
        this.cookie = cookie;
        this.token = token;
        this.token._token = this.cookie.getCookie('_idptickeToken');
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: '<router-outlet></router-outlet>',
        }),
        __metadata("design:paramtypes", [_shared_services_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"], _shared_services_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/paginator */ "./node_modules/primeng/paginator.js");
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_paginator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/carousel */ "./node_modules/primeng/carousel.js");
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_carousel__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_regist_regist_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/regist/regist.component */ "./src/app/pages/regist/regist.component.ts");
/* harmony import */ var _pages_forget_pwd_forget_pwd_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/forget-pwd/forget-pwd.component */ "./src/app/pages/forget-pwd/forget-pwd.component.ts");
/* harmony import */ var _pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/homepage/homepage.component */ "./src/app/pages/homepage/homepage.component.ts");
/* harmony import */ var _pages_my_projects_my_projects_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/my-projects/my-projects.component */ "./src/app/pages/my-projects/my-projects.component.ts");
/* harmony import */ var _pages_news_announcement_news_announcement_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/news-announcement/news-announcement.component */ "./src/app/pages/news-announcement/news-announcement.component.ts");
/* harmony import */ var _pages_personal_center_personal_center_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/personal-center/personal-center.component */ "./src/app/pages/personal-center/personal-center.component.ts");
/* harmony import */ var _pages_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/contact-us/contact-us.component */ "./src/app/pages/contact-us/contact-us.component.ts");
/* harmony import */ var _pages_project_information_project_information_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/project-information/project-information.component */ "./src/app/pages/project-information/project-information.component.ts");
/* harmony import */ var _pages_news_bulletin_detail_news_bulletin_detail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/news-bulletin-detail/news-bulletin-detail.component */ "./src/app/pages/news-bulletin-detail/news-bulletin-detail.component.ts");
/* harmony import */ var _pages_project_information_detail_project_information_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/project-information-detail/project-information-detail.component */ "./src/app/pages/project-information-detail/project-information-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _pages_regist_regist_component__WEBPACK_IMPORTED_MODULE_9__["RegistComponent"],
                _pages_forget_pwd_forget_pwd_component__WEBPACK_IMPORTED_MODULE_10__["ForgetPwdComponent"],
                _pages_my_projects_my_projects_component__WEBPACK_IMPORTED_MODULE_12__["MyProjectsComponent"],
                _pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_11__["HomepageComponent"],
                _pages_news_announcement_news_announcement_component__WEBPACK_IMPORTED_MODULE_13__["NewsAnnouncementComponent"],
                _pages_personal_center_personal_center_component__WEBPACK_IMPORTED_MODULE_14__["PersonalCenterComponent"],
                _pages_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_15__["ContactUsComponent"],
                _pages_project_information_project_information_component__WEBPACK_IMPORTED_MODULE_16__["ProjectInformationComponent"],
                _pages_news_bulletin_detail_news_bulletin_detail_component__WEBPACK_IMPORTED_MODULE_17__["NewsBulletinDetailComponent"],
                _pages_project_information_detail_project_information_detail_component__WEBPACK_IMPORTED_MODULE_18__["ProjectInformationDetailComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                primeng_paginator__WEBPACK_IMPORTED_MODULE_4__["PaginatorModule"],
                primeng_carousel__WEBPACK_IMPORTED_MODULE_5__["CarouselModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pages/contact-us/contact-us.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/contact-us/contact-us.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-iframe [picture]=\"picture\" [ZH_TITLE]=\"ZH_TITLE\" [EN_TITLE]=\"EN_TITLE\" [NAV_INDEX]=\"NAV_INDEX\">\r\n    <div class='content'>\r\n        <h4>我的位置</h4>\r\n        <div class='ui-g'>\r\n            <div class=\"ui-g-8 map\"></div>\r\n            <div class=\"ui-g-4 message\">\r\n                <h4>总部位置：</h4>\r\n                <p>北京市海淀区西北旺镇百旺创新科技园永捷南路2号院2号楼2层2032</p>\r\n                <h4>联系方式：</h4>\r\n                <p>电话：101-88888888</p>\r\n                <p>传真：010-88888888</p>\r\n                <p>Q Q:659436265</p>\r\n                <p>微信号：tianchenxin</p>\r\n                <p>邮编：100000</p>\r\n                <p>邮箱：tianchenxin@163.com</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</app-page-iframe>"

/***/ }),

/***/ "./src/app/pages/contact-us/contact-us.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/contact-us/contact-us.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content h4 {\n  height: 5vh;\n  font-size: 20px;\n  letter-spacing: 2px; }\n\n.content .ui-g {\n  height: 38vh; }\n\n.message {\n  background: #1dd2e2;\n  color: #fff;\n  padding: 2vh 2vw; }\n\n.message h4 {\n  font-weight: normal;\n  margin: 20px 0 5px;\n  font-size: 20px; }\n\n.message p {\n  font-size: 15px;\n  line-height: 24px; }\n\n.map {\n  background: url('map.png') no-repeat;\n  background-size: 100% 100%; }\n"

/***/ }),

/***/ "./src/app/pages/contact-us/contact-us.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/contact-us/contact-us.component.ts ***!
  \**********************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent() {
    }
    ContactUsComponent.prototype.ngOnInit = function () {
        this.picture = 'contact.png';
        this.ZH_TITLE = '联系我们';
        this.EN_TITLE = 'CPNTACT US';
        this.NAV_INDEX = 5;
    };
    ContactUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! ./contact-us.component.html */ "./src/app/pages/contact-us/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.scss */ "./src/app/pages/contact-us/contact-us.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/pages/forget-pwd/forget-pwd.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/forget-pwd/forget-pwd.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-before-login-header>\r\n</app-before-login-header> -->\r\n<!-- <app-before-login-content></app-before-login-content> -->\r\n<!-- <app-before-login-dialog>\r\n  <form action=\"\">\r\n    <input type=\"text\" placeholder=\"请输入手机号\">\r\n    <label>\r\n      <input type=\"text\" placeholder=\"请输入验证码\"><a class=\"yzm\">获取验证码</a>\r\n    </label>\r\n    <input type=\"password\" placeholder=\"请输入密码(8~20位，不能全是数字)\"><br>\r\n    <input type=\"password\" placeholder=\"请再次输入密码\"><br>\r\n    <button>确定</button>\r\n  </form>\r\n  <div class=\"ui-g v-tooltop\">\r\n    <div class=\"ui-g-8\">\r\n    </div>\r\n    <div class=\"ui-g-4\">\r\n      <a routerLink=\"/login\" routerLinkActive=\"active\">已有账号 立即登录</a>\r\n    </div>\r\n  </div>\r\n</app-before-login-dialog> -->"

/***/ }),

/***/ "./src/app/pages/forget-pwd/forget-pwd.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/forget-pwd/forget-pwd.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  text-align: center;\n  width: 330px;\n  margin: auto; }\n  form * {\n    font-size: 16px; }\n  input {\n  width: 100%;\n  height: 40px;\n  margin: 10px 0;\n  border-radius: 4px;\n  border: 1px solid #c1bfbf;\n  padding: 0px 15px;\n  font-size: 16px; }\n  input[type=\"checkbox\"] {\n  width: 22px;\n  height: 22px;\n  float: left; }\n  label {\n  position: relative;\n  line-height: 40px; }\n  a.yzm {\n  position: absolute;\n  right: 0px;\n  margin: 10px 15px; }\n  label a {\n  color: #02dde6; }\n  form > button {\n  width: 100%;\n  color: #fff;\n  background: #00e9f3;\n  height: 40px;\n  letter-spacing: 4px;\n  font-size: 20px;\n  border: none;\n  border-radius: 5px;\n  margin: 10px 0; }\n  .ui-g.v-tooltop {\n  margin-top: 4vh;\n  padding: 8px 20px;\n  background: #F7F8FA;\n  border-radius: 0 0 10px 10px; }\n  .v-tooltop .ui-g-4 {\n  text-align: right; }\n  .ui-g.v-tooltop * {\n  color: #02dde6;\n  font-size: 18px; }\n  .ui-g.v-tooltop span {\n  margin: 0 15px; }\n"

/***/ }),

/***/ "./src/app/pages/forget-pwd/forget-pwd.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/forget-pwd/forget-pwd.component.ts ***!
  \**********************************************************/
/*! exports provided: ForgetPwdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPwdComponent", function() { return ForgetPwdComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ForgetPwdComponent = /** @class */ (function () {
    function ForgetPwdComponent() {
    }
    ForgetPwdComponent.prototype.ngOnInit = function () {
    };
    ForgetPwdComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forget-pwd',
            template: __webpack_require__(/*! ./forget-pwd.component.html */ "./src/app/pages/forget-pwd/forget-pwd.component.html"),
            styles: [__webpack_require__(/*! ./forget-pwd.component.scss */ "./src/app/pages/forget-pwd/forget-pwd.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ForgetPwdComponent);
    return ForgetPwdComponent;
}());



/***/ }),

/***/ "./src/app/pages/homepage/homepage.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/homepage/homepage.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-iframe [picture]=\"picture\" [ZH_TITLE]=\"ZH_TITLE\" [EN_TITLE]=\"EN_TITLE\" [NAV_INDEX]=\"NAV_INDEX\"\r\n    [ifShowDialog]=\"ifShowDialog\" class=\"v-homepage-container\">\r\n    <div class=\"h-content-layout\">\r\n        <div class=\"map\">\r\n\r\n        </div>\r\n        <div class=\"ui-g productIntroduce\">\r\n            <div class=\"ui-g-5 text-right\"><img src=\"assets/images/phone.png\" alt=\"\"></div>\r\n            <div class=\"ui-g-7 detail\">\r\n                <h3>产品介绍</h3>\r\n                <p>智慧建造信息平台是工程建造领域运用互联网、移动互联网、大数据、云计算技术的应用典范。通过工程建造全流程的表单在线填报、流程自动推送、手机APP施工现场电子签名、数据结构化存储等功能，实现了审批流程数字化、数据存档结构化、监督管理智能化，大幅度提高了工程建造全流程的信息化程度，降低企业成本，提高工作效率；已通过北京市住建委的科技成果鉴定，达到国内领先水平，具有良好的推广应用价值。</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"publicity text-center\">\r\n            <img src=\"assets/images/edit.png\" alt=\"\">\r\n            <h3>一站式解决资料审批和数据积累问题</h3>\r\n            <h6>INTELLIGENT BUILDING INFORMATION PLATFORM</h6>\r\n        </div>\r\n        <div class=\"projectsInformation text-center\">\r\n            <h3>在建<span>工程</span>信息</h3>\r\n            <h6>CONSTRUCTION PROJECT</h6>\r\n            <button class=\"scanMore\" (click)=\"scanMoreProject()\">查看更多>></button>\r\n            <p-carousel [value]=\"buildingPorjectsArr\" numVisible=3>\r\n                <ng-template let-project pTemplate=\"item\">\r\n                    <div class=\"ui-grid ui-grid-responsive\">\r\n                        <div class=\"ui-grid-row\">\r\n                            <div class=\"ui-grid-col-12 detailBox\">\r\n                                <img src=\"assets/images/{{project.pic}}.png\">\r\n                                <div class=\"briefIntroduction\">\r\n                                    <ul>\r\n                                        <li>项目名称：{{project.name}}</li>\r\n                                        <li>建筑规模：{{project.area}}平方米</li>\r\n                                        <li>工程地址：{{project.address}}</li>\r\n                                        <li>计划工期：{{project.planDate}}</li>\r\n                                        <li>监理单位：{{project.supervision}}</li>\r\n                                        <li>施工单位信息：{{project.builder}}</li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <button class=\"scanListMore\" (click)=\"scanProjectInformationDetail()\">查看更多详情</button>\r\n                    </div>\r\n                </ng-template>\r\n            </p-carousel>\r\n        </div>\r\n        <div class=\"newsBulletin text-center\">\r\n            <h3>新<span>闻通</span>告</h3>\r\n            <h6>NEWS BULLETIN</h6>\r\n            <button class=\"scanMore\" (click)=\"scanMoreNews()\">查看更多>></button>\r\n            <ul>\r\n                <li *ngFor=\"let item of newsArr\">\r\n                    <h4>{{item.type}}</h4>\r\n                    <p>{{item.content}}</p>\r\n                    <button (click)=\"scanNewsBulletinDetail()\">查看详情</button>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</app-page-iframe>"

/***/ }),

/***/ "./src/app/pages/homepage/homepage.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/homepage/homepage.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/deep/ .v-homepage-container .h-top-content {\n  display: none; }\n\n/deep/ .v-homepage-container .h-bottom-content {\n  padding: 0px !important; }\n\n.map {\n  background: url('mapBG.png') no-repeat;\n  height: 80vh; }\n\n.productIntroduce {\n  background: #fff;\n  padding: 5vh 0; }\n\n.productIntroduce .detail {\n    padding: 0 10vw; }\n\n.productIntroduce .detail h3 {\n      padding: 5vh 0;\n      letter-spacing: 2px;\n      color: #585858; }\n\n.productIntroduce .detail p {\n      color: #585858;\n      line-height: 32px; }\n\n.publicity {\n  background: url('centerBG.png') no-repeat;\n  background-size: 100% 100%;\n  color: #fff;\n  padding: 8vh 0; }\n\n.publicity h3 {\n    padding: 4vh 0 2vh; }\n\n.projectsInformation {\n  padding: 8vh 0;\n  background: #EEEEF0;\n  position: relative; }\n\n.projectsInformation h3 {\n    color: #585858;\n    letter-spacing: 2px;\n    padding-bottom: 2vh; }\n\n.projectsInformation h3 span {\n      padding: 6px 0;\n      border-bottom: 3px solid #1DD2E2; }\n\n.projectsInformation h6 {\n    color: #585858; }\n\n.projectsInformation img {\n    width: 100%; }\n\n.projectsInformation .detailBox {\n    position: relative; }\n\n.projectsInformation .briefIntroduction {\n    position: absolute;\n    top: 0px;\n    height: 100%;\n    width: 100%;\n    background: rgba(29, 210, 226, 0.8);\n    display: flex;\n    align-items: center;\n    visibility: hidden; }\n\n.projectsInformation .briefIntroduction li {\n      color: #fff;\n      text-align: left;\n      font-size: 17px;\n      letter-spacing: 2px;\n      padding: 12px;\n      width: 100% !important; }\n\n.projectsInformation .detailBox:hover .briefIntroduction {\n    visibility: visible; }\n\n.projectsInformation button.scanMore {\n    position: absolute;\n    right: 17vw;\n    top: 23vh;\n    background: #2cc6d8;\n    border: none;\n    outline: none;\n    color: #fff;\n    font-size: 15px;\n    padding: 5px 10px;\n    border-radius: 5px;\n    z-index: 1;\n    cursor: pointer; }\n\n.projectsInformation button.scanListMore {\n    margin-top: 3vh;\n    background: none;\n    border: none;\n    color: #2cc6d8;\n    font-size: 16px;\n    letter-spacing: 1px;\n    outline: none;\n    cursor: pointer; }\n\n.projectsInformation /deep/ .ui-carousel-header.ui-widget-header.ui-corner-all {\n    margin: 5vh 0; }\n\n.projectsInformation /deep/ .ui-carousel-viewport {\n    background: none !important;\n    border: none !important; }\n\n.projectsInformation /deep/ .ui-carousel.ui-widget.ui-widget-content.ui-corner-all {\n    padding: 0px 17vw; }\n\n.projectsInformation /deep/ .ui-carousel-header.ui-widget-header.ui-corner-all {\n    display: inline-block;\n    background: none;\n    border: none; }\n\n.projectsInformation /deep/ .ui-carousel-page-links {\n    display: none; }\n\n.projectsInformation /deep/ li.ui-carousel-item.ui-widget-content.ui-corner-all {\n    padding: 10px !important;\n    border: none;\n    text-align: left;\n    width: 22vw !important; }\n\n.projectsInformation /deep/ .pi-arrow-circle-left.ui-state-disabled {\n    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA7CAYAAAAq55mNAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAOlSURBVGhD7ZrJa9RgGIf9R9RWLVpFcUFFRQSXgh48KLjgAu6KBz14qXhQPIjbwQVq63JQXG5uCFJwQxHrip2OY/d2klmSWdr/4PP3+0zGzDQIQ7NOc3ggTF4y75PvS/J+bzKpWBwVE4FItNaYuKKvswVxqC8jlv9SxYK4EhqY7/7ejHiF/CudSJnobTUn5nUpYnJnMrTMQf5tSq5MkpRE3+JMrEqoohGB15O6GM6PjAkOMsz3BvJu7ErK0a0c2ZLomUFNzIop4tKwJrTCv4AwkQMXkf9MeJyCj3VfSfQwrsupGPoPOBMFS0DY+KIVpcdeXK/W30ui+7CDc/y7XiwLCBtduaL02NmTLvs9Eg0rkai5EYmGjEjU3IhEQ0ZgRXWUm725ERFHgunC+OvrQIqypuaycAeSWolC/Fk6bxtXDYET5UhScjsSmoL/XRJXxeNUjYnmwXuL5CIsnM8PaXIK28VXQ6BEPxrTlZILIXkOkj0OSJLAiHZgGbXFkGQ34ywkux2SJIEQ/YZjb+pOSUl2Mijp1Eia+C76FcfdDEkuiqfHkuL0oCb6XWjX+CrKY1KyHoL8j5MDmki61JPyTTSG4/Huako2Q9LNnpTnouw7/cSxduO4dZCsw7FP9Gflo8Uu3ik8F/2Mu+uu3rQUbIgp4jgk3ZquVjwXvTKsy7srj7kNf8pa1i7OaTwXfaDmZFlH2TUJVTxBHcuyzy7WSTwXHcI0bVF0sQLFOmWbEinxFLJu94w9FyUKll2tkF1myK41ZO1incIXUcIbUBtkFxuyqyH73EVZ30QJR5ZvuOYab+rWQZbXrF3sePFVlKiQvYWRnYFnKsvApt8pRxbalfguStgquYu78TSjgFgP2ZcZZ2UDIUp0cAfTmNUSR3YDZNsdlA2MKGGt25rU5cjyPzei4OeLaCcePYESJSlM42vyDfXfG9RWJPZJs//+oBoCJ0oG8ei5gMU3Ow2zwX1cv3Zx1RBIUdIHWX4z0TyQFR21OqJuEImaG5FoyIhEzY1INGREouaGKcqOujUgbLCP/F/RY/1ZWWS/wBrR7d6rW3BR0J4piHqI8ttG676SaAvKsPlxRX6U/ANnxYuOnZMw307kfRD5s5NxFT7W/SXRGOb2HkzfBozqAQSzz3MPRXZYuIl8OUjsYLBxTmlbUfIOa8KjCF4aV+Xwc66HBebLPvIR5P8GHlYvUiZK4jgTj1J52Wm/HCKY70OMLO+6lU5kjGitMkFER8UfvGsIpTot1K8AAAAASUVORK5CYII=) no-repeat;\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n    background-size: contain; }\n\n.projectsInformation /deep/ .pi-arrow-circle-right.ui-state-disabled {\n    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA7CAYAAAAq55mNAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAOlSURBVGhD7ZrJa9RgGIf9R9RWLVpFcUFFRQSXgh48KLjgAu6KBz14qXhQPIjbwQVq63JQXG5uCFJwQxHrip2OY/d2klmSWdr/4PP3+0zGzDQIQ7NOc3ggTF4y75PvS/J+bzKpWBwVE4FItNaYuKKvswVxqC8jlv9SxYK4EhqY7/7ejHiF/CudSJnobTUn5nUpYnJnMrTMQf5tSq5MkpRE3+JMrEqoohGB15O6GM6PjAkOMsz3BvJu7ErK0a0c2ZLomUFNzIop4tKwJrTCv4AwkQMXkf9MeJyCj3VfSfQwrsupGPoPOBMFS0DY+KIVpcdeXK/W30ui+7CDc/y7XiwLCBtduaL02NmTLvs9Eg0rkai5EYmGjEjU3IhEQ0ZgRXWUm725ERFHgunC+OvrQIqypuaycAeSWolC/Fk6bxtXDYET5UhScjsSmoL/XRJXxeNUjYnmwXuL5CIsnM8PaXIK28VXQ6BEPxrTlZILIXkOkj0OSJLAiHZgGbXFkGQ34ywkux2SJIEQ/YZjb+pOSUl2Mijp1Eia+C76FcfdDEkuiqfHkuL0oCb6XWjX+CrKY1KyHoL8j5MDmki61JPyTTSG4/Huako2Q9LNnpTnouw7/cSxduO4dZCsw7FP9Gflo8Uu3ik8F/2Mu+uu3rQUbIgp4jgk3ZquVjwXvTKsy7srj7kNf8pa1i7OaTwXfaDmZFlH2TUJVTxBHcuyzy7WSTwXHcI0bVF0sQLFOmWbEinxFLJu94w9FyUKll2tkF1myK41ZO1incIXUcIbUBtkFxuyqyH73EVZ30QJR5ZvuOYab+rWQZbXrF3sePFVlKiQvYWRnYFnKsvApt8pRxbalfguStgquYu78TSjgFgP2ZcZZ2UDIUp0cAfTmNUSR3YDZNsdlA2MKGGt25rU5cjyPzei4OeLaCcePYESJSlM42vyDfXfG9RWJPZJs//+oBoCJ0oG8ei5gMU3Ow2zwX1cv3Zx1RBIUdIHWX4z0TyQFR21OqJuEImaG5FoyIhEzY1INGREouaGKcqOujUgbLCP/F/RY/1ZWWS/wBrR7d6rW3BR0J4piHqI8ttG676SaAvKsPlxRX6U/ANnxYuOnZMw307kfRD5s5NxFT7W/SXRGOb2HkzfBozqAQSzz3MPRXZYuIl8OUjsYLBxTmlbUfIOa8KjCF4aV+Xwc66HBebLPvIR5P8GHlYvUiZK4jgTj1J52Wm/HCKY70OMLO+6lU5kjGitMkFER8UfvGsIpTot1K8AAAAASUVORK5CYII=) no-repeat;\n    background-size: contain;\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg); }\n\n.projectsInformation /deep/ .pi-arrow-circle-left {\n    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA7CAYAAAAn+enKAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAOASURBVGhD7ZvJTxNxFMf9R1QwSgQ1LnAQ9YAxwsEL8eByATEeNEZMXCKJ0XglygGiJ8PFhJN/gEExkaAnDxJLC3QD2imdThe6BEo3nt83QMKkv3gonQ2myef2ftN+8t5veTPTA6lUmvYTjvBeRyg8KSfpoV+mix6JzrrDtqEdv7fPF6Wv0WSV0zZVwp+kOLW6JTr0N0QHbUqTK0zvQ4rGaxuN8BQy2zkXEV7EbnDSxgWZ1ggPLirUMhMWXsBuHEWWnwVljSyjEX4SkOmwYLAd4Sl5y7uskWU0wo8CUeFgu3J93hF2hIUD7YojDBxh0UC74ggDR1g0sFaacEw9P7tM5zwRanSJY/TEcOHeBYX86yWayK5RN9rNIzjfiuL0wnDhu4txkopl2iCi71vSjQZKGy7MpfxWTpO8Q/qaz7gGxZRFq3U2QkOQjpU2pb9BustX/+8RYYow04ZMD8cylCpXVOnJXJ6uevWXNk2YaYX0CKSzW9K/cuvUMa+vtKnCzGmPRB+UDBU2NqgM6ylIX9ZR2nRhpsUt0Wg8ixwTlSA+hfLuwA8Txe4WSwgzvB/vlObV+8Jc/aUtI8w04OT1KZFTS7sM6S+ZVboE6XreHraUMHMC5T2WzFG+sjmnxzNrdKWOq7flhJl27NM/snm1vHn1fhNZEcbVguWEeS73LcTJky9SBbJSoUQPlhLC2FqwlDAfL++guXCtFdTMBtFkvJRSdBJlLoqvBUsJ9yKzbmSWZReR2QHINs/UT5axjHAPMju7JSsVS/RCSqr7syh2N1hCuA+y7nwBqkTJUkWVbdbpeZbpwj0oY56zvECtYSt6jjI+ruPDO1OFbwcVmoYs77cFyPaHk3RM5yeVpgnfCCj0Z3Uzs3yqegpZI+58GC7Mx8Ruf4x+r66rc7YIWV6NjbrNY7hwl1dWm33+cB/8OpJS72SKYvXAcOH+UIIyEE1gNR6U03RKh63nfxgu3IlG4CPawFfI7Bk0/6IYPTFt0TILRxg4wqKBdsURBo6waKBdcYSBRrh/vwkPBPmhtXiw3WgAvb6oRpbRCI+G49Rm8HlXL/it4HdL1e9Ma4Td8RTd90fVV29FF7ELnN2b3mWaVlIaWUYjzPyMJelxQFZfp7dbeTcCrtB7SNqELP4bQJUw44mv0OdIgkZCCg2hLOzCMBiT4uRCpYq8GKHwXsYR3tuk6R9NRWJrxGDQjgAAAABJRU5ErkJggg==) no-repeat;\n    background-size: contain;\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n    width: 55px;\n    height: 55px;\n    font-size: 0px;\n    margin-right: 10px; }\n\n.projectsInformation /deep/ .pi-arrow-circle-right {\n    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA7CAYAAAAn+enKAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAOASURBVGhD7ZvJTxNxFMf9R1QwSgQ1LnAQ9YAxwsEL8eByATEeNEZMXCKJ0XglygGiJ8PFhJN/gEExkaAnDxJLC3QD2imdThe6BEo3nt83QMKkv3gonQ2myef2ftN+8t5veTPTA6lUmvYTjvBeRyg8KSfpoV+mix6JzrrDtqEdv7fPF6Wv0WSV0zZVwp+kOLW6JTr0N0QHbUqTK0zvQ4rGaxuN8BQy2zkXEV7EbnDSxgWZ1ggPLirUMhMWXsBuHEWWnwVljSyjEX4SkOmwYLAd4Sl5y7uskWU0wo8CUeFgu3J93hF2hIUD7YojDBxh0UC74ggDR1g0sFaacEw9P7tM5zwRanSJY/TEcOHeBYX86yWayK5RN9rNIzjfiuL0wnDhu4txkopl2iCi71vSjQZKGy7MpfxWTpO8Q/qaz7gGxZRFq3U2QkOQjpU2pb9BustX/+8RYYow04ZMD8cylCpXVOnJXJ6uevWXNk2YaYX0CKSzW9K/cuvUMa+vtKnCzGmPRB+UDBU2NqgM6ylIX9ZR2nRhpsUt0Wg8ixwTlSA+hfLuwA8Txe4WSwgzvB/vlObV+8Jc/aUtI8w04OT1KZFTS7sM6S+ZVboE6XreHraUMHMC5T2WzFG+sjmnxzNrdKWOq7flhJl27NM/snm1vHn1fhNZEcbVguWEeS73LcTJky9SBbJSoUQPlhLC2FqwlDAfL++guXCtFdTMBtFkvJRSdBJlLoqvBUsJ9yKzbmSWZReR2QHINs/UT5axjHAPMju7JSsVS/RCSqr7syh2N1hCuA+y7nwBqkTJUkWVbdbpeZbpwj0oY56zvECtYSt6jjI+ruPDO1OFbwcVmoYs77cFyPaHk3RM5yeVpgnfCCj0Z3Uzs3yqegpZI+58GC7Mx8Ruf4x+r66rc7YIWV6NjbrNY7hwl1dWm33+cB/8OpJS72SKYvXAcOH+UIIyEE1gNR6U03RKh63nfxgu3IlG4CPawFfI7Bk0/6IYPTFt0TILRxg4wqKBdsURBo6waKBdcYSBRrh/vwkPBPmhtXiw3WgAvb6oRpbRCI+G49Rm8HlXL/it4HdL1e9Ma4Td8RTd90fVV29FF7ELnN2b3mWaVlIaWUYjzPyMJelxQFZfp7dbeTcCrtB7SNqELP4bQJUw44mv0OdIgkZCCg2hLOzCMBiT4uRCpYq8GKHwXsYR3tuk6R9NRWJrxGDQjgAAAABJRU5ErkJggg==) no-repeat;\n    width: 55px;\n    height: 55px;\n    background-size: contain;\n    font-size: 0px;\n    margin-left: 10px; }\n\n.newsBulletin {\n  padding: 8vh 0;\n  background: #EEEEF0;\n  position: relative; }\n\n.newsBulletin h3 {\n    color: #585858;\n    letter-spacing: 2px;\n    padding-bottom: 2vh; }\n\n.newsBulletin h3 span {\n      padding: 6px 0;\n      border-bottom: 3px solid #1DD2E2; }\n\n.newsBulletin h6 {\n    color: #585858; }\n\n.newsBulletin button.scanMore {\n    position: absolute;\n    right: 17vw;\n    top: 12vh;\n    background: #2cc6d8;\n    border: none;\n    outline: none;\n    color: #fff;\n    font-size: 15px;\n    padding: 5px 10px;\n    border-radius: 5px;\n    z-index: 1;\n    cursor: pointer; }\n\n.newsBulletin ul {\n    padding: 5vh 17vw;\n    display: flex; }\n\n.newsBulletin ul li {\n      padding: 0 4vw;\n      text-align: left; }\n\n.newsBulletin ul h4 {\n      display: inline-block;\n      color: #2cc6d8;\n      border: 2px solid #2cc6d8;\n      padding: 2px 5px;\n      border-radius: 5px;\n      font-style: italic;\n      font-size: 20px; }\n\n.newsBulletin ul p {\n      color: #585858;\n      line-height: 32px;\n      padding: 2vh 0; }\n\n.newsBulletin ul button {\n      background: none;\n      border: none;\n      color: #2cc6d8;\n      font-size: 16px;\n      letter-spacing: 1px;\n      outline: none;\n      cursor: pointer; }\n\n@media screen and (max-width: 1440px) {\n  .briefIntroduction li {\n    font-size: 15px !important;\n    padding: 3px 12px !important; } }\n"

/***/ }),

/***/ "./src/app/pages/homepage/homepage.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/homepage/homepage.component.ts ***!
  \******************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_link_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/link.service */ "./src/app/shared/services/link.service.ts");
/* harmony import */ var _shared_services_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/token.service */ "./src/app/shared/services/token.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(link, token, router) {
        this.link = link;
        this.token = token;
        this.router = router;
        this.buildingPorjectsArr = [
            {
                name: '中关村生命科学园医药科技中心',
                area: 98000,
                address: '北京市昌平区中关村东北楼，东侧为科学院路',
                planDate: '开工日期2017年2月12日',
                supervision: '中关村生命科技监理部',
                builder: '中关村生命科技建筑部',
                pic: 'project',
                id: 1
            },
            {
                name: '中关村生命科学园医药科技中心',
                area: 98000,
                address: '北京市昌平区中关村东北楼，东侧为科学院路',
                planDate: '开工日期2017年2月12日',
                supervision: '中关村生命科技监理部',
                builder: '中关村生命科技建筑部',
                pic: 'project',
                id: 2
            },
            {
                name: '中关村生命科学园医药科技中心',
                area: 98000,
                address: '北京市昌平区中关村东北楼，东侧为科学院路',
                planDate: '开工日期2017年2月12日',
                supervision: '中关村生命科技监理部',
                builder: '中关村生命科技建筑部',
                pic: 'project',
                id: 3
            },
            {
                name: '中关村生命科学园医药科技中心',
                area: 98000,
                address: '北京市昌平区中关村东北楼，东侧为科学院路',
                planDate: '开工日期2017年2月12日',
                supervision: '中关村生命科技监理部',
                builder: '中关村生命科技建筑部',
                pic: 'project',
                id: 4
            },
            {
                name: '中关村生命科学园医药科技中心',
                area: 98000,
                address: '北京市昌平区中关村东北楼，东侧为科学院路',
                planDate: '开工日期2017年2月12日',
                supervision: '中关村生命科技监理部',
                builder: '中关村生命科技建筑部',
                pic: 'project',
                id: 5
            },
            {
                name: '中关村生命科学园医药科技中心',
                area: 98000,
                address: '北京市昌平区中关村东北楼，东侧为科学院路',
                planDate: '开工日期2017年2月12日',
                supervision: '中关村生命科技监理部',
                builder: '中关村生命科技建筑部',
                pic: 'project',
                id: 6
            },
            {
                name: '中关村生命科学园医药科技中心',
                area: 98000,
                address: '北京市昌平区中关村东北楼，东侧为科学院路',
                planDate: '开工日期2017年2月12日',
                supervision: '中关村生命科技监理部',
                builder: '中关村生命科技建筑部',
                pic: 'project',
                id: 7
            },
        ];
        this.newsArr = [
            { type: 'NEW', content: '中关村生命科学园医药科技中心在建项目已完成初步规划及项目前期准备工作......' },
            { type: 'ADV', content: '中关村生命科学园医药科技中心在建项目已完成初步规划及项目前期准备工作......' },
            { type: 'NEW', content: '中关村生命科学园医药科技中心在建项目已完成初步规划及项目前期准备工作......' }
        ];
    }
    HomepageComponent.prototype.ngOnInit = function () {
        this.picture = 'personCenter.png';
        this.ZH_TITLE = '首页';
        this.EN_TITLE = 'MY PROJECT';
        this.NAV_INDEX = 0;
        this.ifShowDialog = false;
    };
    HomepageComponent.prototype.scanMoreProject = function () {
        this.link._link = 'projectInformation';
        this.token._token === '' ? this.ifShowDialog = true : this.router.navigate(['projectInformation']);
    };
    HomepageComponent.prototype.scanMoreNews = function () {
        this.link._link = 'newsAnnouncement';
        this.token._token === '' ? this.ifShowDialog = true : this.router.navigate(['newsAnnouncement']);
    };
    HomepageComponent.prototype.scanNewsBulletinDetail = function () {
        this.link._link = 'newsBulletinDetail';
        this.token._token === '' ? this.ifShowDialog = true : this.router.navigate(['newsBulletinDetail']);
    };
    HomepageComponent.prototype.scanProjectInformationDetail = function () {
        this.link._link = 'projectInformationDetail';
        this.token._token === '' ? this.ifShowDialog = true : this.router.navigate(['projectInformationDetail']);
    };
    HomepageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/pages/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.scss */ "./src/app/pages/homepage/homepage.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_link_service__WEBPACK_IMPORTED_MODULE_1__["LinkService"], _shared_services_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-before-login-header>\r\n</app-before-login-header>\r\n<app-before-login-content></app-before-login-content>\r\n<app-before-login-dialog>\r\n    <form action=\"\">\r\n        <input type=\"text\" placeholder=\"请输入手机号\"><br>\r\n        <input type=\"password\" placeholder=\"请输入密码\"><br>\r\n        <button (click)=\"login()\">登录</button>\r\n    </form>\r\n    <div class=\"ui-g v-tooltop\">\r\n        <div class=\"ui-g-8\">\r\n            <a routerLink=\"/forgetPwd\" routerLinkActive=\"forgetPwd\">忘记密码</a>\r\n            <span>|</span>\r\n            <a routerLink=\"/heroes\" routerLinkActive=\"active\">使用指南</a>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n            <a routerLink=\"/regist\" routerLinkActive=\"active\">注册新用户</a>\r\n        </div>\r\n    </div>\r\n</app-before-login-dialog> -->\r\n<app-page-iframe></app-page-iframe>"

/***/ }),

/***/ "./src/app/pages/login/login.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  text-align: center;\n  width: 330px;\n  margin: auto; }\n\ninput {\n  width: 100%;\n  height: 40px;\n  margin: 10px 0;\n  border-radius: 4px;\n  border: 1px solid #c1bfbf;\n  padding: 0px 15px;\n  font-size: 16px; }\n\nform > button {\n  width: 100%;\n  color: #fff;\n  background: #00e9f3;\n  height: 40px;\n  font-size: 20px;\n  border: none;\n  letter-spacing: 4px;\n  border-radius: 5px;\n  margin: 10px 0; }\n\n.ui-g.v-tooltop {\n  margin-top: 4vh;\n  padding: 8px 20px;\n  background: #F7F8FA;\n  border-radius: 0 0 10px 10px; }\n\n.v-tooltop .ui-g-4 {\n  text-align: right; }\n\n.ui-g.v-tooltop * {\n  color: #02dde6;\n  font-size: 18px; }\n\n.ui-g.v-tooltop span {\n  margin: 0 15px; }\n"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        this.router.navigate(['homepage']);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/pages/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/my-projects/my-projects.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/my-projects/my-projects.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-iframe [picture]=\"picture\" [ZH_TITLE]=\"ZH_TITLE\" [EN_TITLE]=\"EN_TITLE\" [NAV_INDEX]=\"NAV_INDEX\">\r\n    <div class=\"h-content-layout\">\r\n        <div class=\"h-content-top\">\r\n            <span>我的项目&lt;&lt;待办事项</span>\r\n        </div>\r\n        <ul class=\"h-content-botttom\">\r\n            <li class=\"contentTitle\">\r\n                <h4>待办事项<span>10</span></h4>\r\n            </li>\r\n            <li class=\"ui-g\">\r\n                <div class=\"ui-g-10\">\r\n                    <div class=\"listDetail\"><span>【任务审批通知】</span><span>新的《空调系统试运转调试记录》审批流程需要处理</span></div>\r\n                    <div class=\"listMes\"><span>类型：审批流程</span><span>发送人：安静二</span></div>\r\n                </div>\r\n                <div class=\"ui-g-2 text-center\">\r\n                    <button>查看详情</button>\r\n                    <p>2017-07-08</p>\r\n                </div>\r\n            </li>\r\n            <li class=\"ui-g\">\r\n                <div class=\"ui-g-10\">\r\n                    <div class=\"listDetail\"><span>【任务审批通知】</span><span>新的《空调系统试运转调试记录》审批流程需要处理</span></div>\r\n                    <div class=\"listMes\"><span>类型：审批流程</span><span>发送人：安静二</span></div>\r\n                </div>\r\n                <div class=\"ui-g-2 text-center\">\r\n                    <button>查看详情</button>\r\n                    <p>2017-07-08</p>\r\n                </div>\r\n            </li>\r\n            <li class=\"ui-g\">\r\n                <div class=\"ui-g-10\">\r\n                    <div class=\"listDetail\"><span>【任务审批通知】</span><span>新的《空调系统试运转调试记录》审批流程需要处理</span></div>\r\n                    <div class=\"listMes\"><span>类型：审批流程</span><span>发送人：安静二</span></div>\r\n                </div>\r\n                <div class=\"ui-g-2 text-center\">\r\n                    <button>查看详情</button>\r\n                    <p>2017-07-08</p>\r\n                </div>\r\n            </li>\r\n            <li class=\"ui-g\">\r\n                <div class=\"ui-g-10\">\r\n                    <div class=\"listDetail\"><span>【任务审批通知】</span><span>新的《空调系统试运转调试记录》审批流程需要处理</span></div>\r\n                    <div class=\"listMes\"><span>类型：审批流程</span><span>发送人：安静二</span></div>\r\n                </div>\r\n                <div class=\"ui-g-2 text-center\">\r\n                    <button>查看详情</button>\r\n                    <p>2017-07-08</p>\r\n                </div>\r\n            </li>\r\n            <li class=\"ui-g\">\r\n                <div class=\"ui-g-10\">\r\n                    <div class=\"listDetail\"><span>【任务审批通知】</span><span>新的《空调系统试运转调试记录》审批流程需要处理</span></div>\r\n                    <div class=\"listMes\"><span>类型：审批流程</span><span>发送人：安静二</span></div>\r\n                </div>\r\n                <div class=\"ui-g-2 text-center\">\r\n                    <button>查看详情</button>\r\n                    <p>2017-07-08</p>\r\n                </div>\r\n            </li>\r\n            <li class=\"ui-g\">\r\n                <div class=\"ui-g-10\">\r\n                    <div class=\"listDetail\"><span>【任务审批通知】</span><span>新的《空调系统试运转调试记录》审批流程需要处理</span></div>\r\n                    <div class=\"listMes\"><span>类型：审批流程</span><span>发送人：安静二</span></div>\r\n                </div>\r\n                <div class=\"ui-g-2 text-center\">\r\n                    <button>查看详情</button>\r\n                    <p>2017-07-08</p>\r\n                </div>\r\n            </li>\r\n            <li class=\"ui-g\">\r\n                <div class=\"ui-g-10\">\r\n                    <div class=\"listDetail\"><span>【任务审批通知】</span><span>新的《空调系统试运转调试记录》审批流程需要处理</span></div>\r\n                    <div class=\"listMes\"><span>类型：审批流程</span><span>发送人：安静二</span></div>\r\n                </div>\r\n                <div class=\"ui-g-2 text-center\">\r\n                    <button>查看详情</button>\r\n                    <p>2017-07-08</p>\r\n                </div>\r\n            </li>\r\n            <li class=\"ui-g\">\r\n                <div class=\"ui-g-10\">\r\n                    <div class=\"listDetail\"><span>【任务审批通知】</span><span>新的《空调系统试运转调试记录》审批流程需要处理</span></div>\r\n                    <div class=\"listMes\"><span>类型：审批流程</span><span>发送人：安静二</span></div>\r\n                </div>\r\n                <div class=\"ui-g-2 text-center\">\r\n                    <button>查看详情</button>\r\n                    <p>2017-07-08</p>\r\n                </div>\r\n            </li>\r\n            <li class=\"ui-g\">\r\n                <div class=\"ui-g-10\">\r\n                    <div class=\"listDetail\"><span>【任务审批通知】</span><span>新的《空调系统试运转调试记录》审批流程需要处理</span></div>\r\n                    <div class=\"listMes\"><span>类型：审批流程</span><span>发送人：安静二</span></div>\r\n                </div>\r\n                <div class=\"ui-g-2 text-center\">\r\n                    <button>查看详情</button>\r\n                    <p>2017-07-08</p>\r\n                </div>\r\n            </li>\r\n            <li class=\"ui-g\">\r\n                <div class=\"ui-g-10\">\r\n                    <div class=\"listDetail\"><span>【任务审批通知】</span><span>新的《空调系统试运转调试记录》审批流程需要处理</span></div>\r\n                    <div class=\"listMes\"><span>类型：审批流程</span><span>发送人：安静二</span></div>\r\n                </div>\r\n                <div class=\"ui-g-2 text-center\">\r\n                    <button>查看详情</button>\r\n                    <p>2017-07-08</p>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n        <p-paginator [rows]=\"5\" [totalRecords]=\"18\"></p-paginator>\r\n    </div>\r\n</app-page-iframe>"

/***/ }),

/***/ "./src/app/pages/my-projects/my-projects.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/my-projects/my-projects.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".h-content-top span {\n  color: #2cc6d8; }\n\nul.h-content-botttom {\n  background: #fff;\n  margin: 4vh 0; }\n\nul.h-content-botttom li.contentTitle {\n  margin: 0 !important;\n  border: 1px solid #00e9f3 !important;\n  color: #2cc6d8; }\n\nul.h-content-botttom li.contentTitle h4 {\n    margin: auto;\n    font-size: 30px; }\n\nul.h-content-botttom li.contentTitle h4 span {\n    background: #EB6100;\n    border-radius: 18px;\n    display: inline-block;\n    width: 36px;\n    height: 36px;\n    text-align: center;\n    line-height: 36px;\n    font-size: 20px;\n    color: #fff;\n    margin-left: 15px; }\n\nul.h-content-botttom li {\n  display: flex;\n  align-items: center;\n  margin: 0 2vw;\n  padding: 2vh 0;\n  border-bottom: 1px dashed #837F80; }\n\nul.h-content-botttom li:last-child {\n    border: none; }\n\nul.h-content-botttom li .listDetail {\n    font-size: 20px;\n    padding: 8px 0; }\n\nul.h-content-botttom li .listMes {\n    font-size: 18px;\n    padding: 8px 0; }\n\nul.h-content-botttom li .listMes span {\n      margin-right: 5vw; }\n\nul.h-content-botttom li button {\n    color: #2cc6d8;\n    background: none;\n    border: none;\n    outline: none;\n    cursor: pointer;\n    font-size: 18px;\n    padding: 8px 0; }\n\nul.h-content-botttom li p {\n    font-size: 18px; }\n\np-paginator {\n  float: right; }\n\n/deep/ .ui-paginator.ui-widget.ui-widget-header.ui-unselectable-text.ui-helper-clearfix {\n  border: none;\n  background: none; }\n\n/deep/ .ui-paginator .ui-paginator-element.ui-paginator-first,\n/deep/ .ui-paginator .ui-paginator-element.ui-paginator-prev,\n/deep/ .ui-paginator .ui-paginator-element.ui-paginator-next,\n/deep/ .ui-paginator .ui-paginator-element.ui-paginator-last {\n  background: #00e9f3;\n  color: #FFF !important; }\n\n/deep/ .ui-paginator-element.ui-state-default {\n  border: 1px solid #00e9f3 !important;\n  margin: 0px 5px !important;\n  border-radius: 3px !important;\n  color: #00e9f3 !important; }\n"

/***/ }),

/***/ "./src/app/pages/my-projects/my-projects.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/my-projects/my-projects.component.ts ***!
  \************************************************************/
/*! exports provided: MyProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProjectsComponent", function() { return MyProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyProjectsComponent = /** @class */ (function () {
    function MyProjectsComponent() {
    }
    MyProjectsComponent.prototype.ngOnInit = function () {
        this.picture = 'personCenter.png';
        this.ZH_TITLE = '我的项目';
        this.EN_TITLE = 'MY PROJECT';
        this.NAV_INDEX = 1;
    };
    MyProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-projects',
            template: __webpack_require__(/*! ./my-projects.component.html */ "./src/app/pages/my-projects/my-projects.component.html"),
            styles: [__webpack_require__(/*! ./my-projects.component.scss */ "./src/app/pages/my-projects/my-projects.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MyProjectsComponent);
    return MyProjectsComponent;
}());



/***/ }),

/***/ "./src/app/pages/news-announcement/news-announcement.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/pages/news-announcement/news-announcement.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-iframe [picture]=\"picture\" [ZH_TITLE]=\"ZH_TITLE\" [EN_TITLE]=\"EN_TITLE\" [NAV_INDEX]=\"NAV_INDEX\">\r\n    <div class=\"h-content-layout\">\r\n        <div class=\"h-content-top\">\r\n            <button [ngClass]=\"{companyNews: isConpanyNews}\">公司新闻</button>\r\n            <button [ngClass]=\"{companyNews: !isConpanyNews}\">行业新闻</button>\r\n            <input type=\"text\" placeholder=\"搜索新闻\">\r\n        </div>\r\n        <ul class=\"h-content-botttom\">\r\n            <li *ngFor=\"let item of newsArr\">\r\n                <img src=\"assets/images/newsList.png\" alt=\"\" (click)=\"scanNewsBulletinDetail()\">\r\n                <div class=\"content\">\r\n                    <h4>{{item['title']}}</h4>\r\n                    <p>{{item['detail']}}</p>\r\n                    <span>{{item['date']}}</span>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n        <p-paginator [rows]=\"5\" [totalRecords]=\"18\"></p-paginator>\r\n    </div>\r\n</app-page-iframe>"

/***/ }),

/***/ "./src/app/pages/news-announcement/news-announcement.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/news-announcement/news-announcement.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".h-content-top button {\n  background: #BFBFBF;\n  padding: 10px 40px;\n  color: #fff;\n  border: none;\n  font-size: 22px;\n  margin-right: 40px; }\n  .h-content-top button.companyNews {\n    background: #00e9f3 !important; }\n  .h-content-top input {\n  float: right;\n  height: 100% !important;\n  font-size: 20px;\n  height: 50px !important;\n  padding: 0px 20px;\n  border: 1px solid #00e9f3;\n  border-radius: 5px;\n  width: 300px; }\n  ul.h-content-botttom {\n  background: #fff;\n  margin: 4vh 0;\n  padding: 2vh 2vw; }\n  ul.h-content-botttom li {\n  display: flex;\n  align-items: center;\n  padding: 2vh 1vw;\n  border-bottom: 1px dashed #837F80; }\n  ul.h-content-botttom li:last-child {\n    border: none; }\n  ul.h-content-botttom img {\n  float: left;\n  width: 30%;\n  cursor: pointer; }\n  .content {\n  float: right;\n  padding-left: 4vw;\n  width: 70%; }\n  .content h4 {\n  font-weight: normal;\n  font-size: 22px;\n  padding: 1vh 0 2vh; }\n  .content p {\n  line-height: 30px; }\n  .content span {\n  float: right;\n  color: #868686;\n  margin-top: 4vh; }\n  p-paginator {\n  float: right; }\n  /deep/ .ui-paginator.ui-widget.ui-widget-header.ui-unselectable-text.ui-helper-clearfix {\n  border: none;\n  background: none; }\n  /deep/ .ui-paginator .ui-paginator-element.ui-paginator-first,\n/deep/ .ui-paginator .ui-paginator-element.ui-paginator-prev,\n/deep/ .ui-paginator .ui-paginator-element.ui-paginator-next,\n/deep/ .ui-paginator .ui-paginator-element.ui-paginator-last {\n  background: #00e9f3;\n  color: #FFF !important; }\n  /deep/ .ui-paginator-element.ui-state-default {\n  border: 1px solid #00e9f3 !important;\n  margin: 0px 5px !important;\n  border-radius: 3px !important;\n  color: #00e9f3 !important; }\n"

/***/ }),

/***/ "./src/app/pages/news-announcement/news-announcement.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/news-announcement/news-announcement.component.ts ***!
  \************************************************************************/
/*! exports provided: NewsAnnouncementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsAnnouncementComponent", function() { return NewsAnnouncementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewsAnnouncementComponent = /** @class */ (function () {
    function NewsAnnouncementComponent(router) {
        this.router = router;
    }
    NewsAnnouncementComponent.prototype.ngOnInit = function () {
        this.picture = 'news.png';
        this.ZH_TITLE = '新闻通告';
        this.EN_TITLE = 'NEWS BULLETIN';
        this.NAV_INDEX = 3;
        this.isConpanyNews = true;
        this.newsArr = [
            {
                title: '中关村生命科学园医药科技中心开工仪式举行',
                pic: 'newsList',
                // tslint:disable-next-line:max-line-length
                detail: '项目位于北京 地坛西侧，北临安德路，南临安定河西滨河路。本项目主要分为东区和西区两部分。西区包括1号楼（住宅）、5号楼（配套设施）和西区车库，西区总建筑面积67670平方米。东区包括2号楼（住宅）、3号楼（住宅）、4号楼（配套设施）、变电室和东区车库，东区总建筑面积101920平方米。幼儿园建筑面积为 2710平方米。',
                date: '2017-07-08'
            },
            {
                title: '中关村生命科学园医药科技中心开工仪式举行',
                pic: 'newsList',
                // tslint:disable-next-line:max-line-length
                detail: '项目位于北京 地坛西侧，北临安德路，南临安定河西滨河路。本项目主要分为东区和西区两部分。西区包括1号楼（住宅）、5号楼（配套设施）和西区车库，西区总建筑面积67670平方米。东区包括2号楼（住宅）、3号楼（住宅）、4号楼（配套设施）、变电室和东区车库，东区总建筑面积101920平方米。幼儿园建筑面积为 2710平方米。',
                date: '2017-07-08'
            },
            {
                title: '中关村生命科学园医药科技中心开工仪式举行',
                pic: 'newsList',
                // tslint:disable-next-line:max-line-length
                detail: '项目位于北京 地坛西侧，北临安德路，南临安定河西滨河路。本项目主要分为东区和西区两部分。西区包括1号楼（住宅）、5号楼（配套设施）和西区车库，西区总建筑面积67670平方米。东区包括2号楼（住宅）、3号楼（住宅）、4号楼（配套设施）、变电室和东区车库，东区总建筑面积101920平方米。幼儿园建筑面积为 2710平方米。',
                date: '2017-07-08'
            },
            {
                title: '中关村生命科学园医药科技中心开工仪式举行',
                pic: 'newsList',
                // tslint:disable-next-line:max-line-length
                detail: '项目位于北京 地坛西侧，北临安德路，南临安定河西滨河路。本项目主要分为东区和西区两部分。西区包括1号楼（住宅）、5号楼（配套设施）和西区车库，西区总建筑面积67670平方米。东区包括2号楼（住宅）、3号楼（住宅）、4号楼（配套设施）、变电室和东区车库，东区总建筑面积101920平方米。幼儿园建筑面积为 2710平方米。',
                date: '2017-07-08'
            },
            {
                title: '中关村生命科学园医药科技中心开工仪式举行',
                pic: 'newsList',
                // tslint:disable-next-line:max-line-length
                detail: '项目位于北京 地坛西侧，北临安德路，南临安定河西滨河路。本项目主要分为东区和西区两部分。西区包括1号楼（住宅）、5号楼（配套设施）和西区车库，西区总建筑面积67670平方米。东区包括2号楼（住宅）、3号楼（住宅）、4号楼（配套设施）、变电室和东区车库，东区总建筑面积101920平方米。幼儿园建筑面积为 2710平方米。',
                date: '2017-07-08'
            },
            {
                title: '中关村生命科学园医药科技中心开工仪式举行',
                pic: 'newsList',
                // tslint:disable-next-line:max-line-length
                detail: '项目位于北京 地坛西侧，北临安德路，南临安定河西滨河路。本项目主要分为东区和西区两部分。西区包括1号楼（住宅）、5号楼（配套设施）和西区车库，西区总建筑面积67670平方米。东区包括2号楼（住宅）、3号楼（住宅）、4号楼（配套设施）、变电室和东区车库，东区总建筑面积101920平方米。幼儿园建筑面积为 2710平方米。',
                date: '2017-07-08'
            },
            {
                title: '中关村生命科学园医药科技中心开工仪式举行',
                pic: 'newsList',
                // tslint:disable-next-line:max-line-length
                detail: '项目位于北京 地坛西侧，北临安德路，南临安定河西滨河路。本项目主要分为东区和西区两部分。西区包括1号楼（住宅）、5号楼（配套设施）和西区车库，西区总建筑面积67670平方米。东区包括2号楼（住宅）、3号楼（住宅）、4号楼（配套设施）、变电室和东区车库，东区总建筑面积101920平方米。幼儿园建筑面积为 2710平方米。',
                date: '2017-07-08'
            }, {
                title: '中关村生命科学园医药科技中心开工仪式举行',
                pic: 'newsList',
                // tslint:disable-next-line:max-line-length
                detail: '项目位于北京 地坛西侧，北临安德路，南临安定河西滨河路。本项目主要分为东区和西区两部分。西区包括1号楼（住宅）、5号楼（配套设施）和西区车库，西区总建筑面积67670平方米。东区包括2号楼（住宅）、3号楼（住宅）、4号楼（配套设施）、变电室和东区车库，东区总建筑面积101920平方米。幼儿园建筑面积为 2710平方米。',
                date: '2017-07-08'
            },
            {
                title: '中关村生命科学园医药科技中心开工仪式举行',
                pic: 'newsList',
                // tslint:disable-next-line:max-line-length
                detail: '项目位于北京 地坛西侧，北临安德路，南临安定河西滨河路。本项目主要分为东区和西区两部分。西区包括1号楼（住宅）、5号楼（配套设施）和西区车库，西区总建筑面积67670平方米。东区包括2号楼（住宅）、3号楼（住宅）、4号楼（配套设施）、变电室和东区车库，东区总建筑面积101920平方米。幼儿园建筑面积为 2710平方米。',
                date: '2017-07-08'
            },
            {
                title: '中关村生命科学园医药科技中心开工仪式举行',
                pic: 'newsList',
                // tslint:disable-next-line:max-line-length
                detail: '项目位于北京 地坛西侧，北临安德路，南临安定河西滨河路。本项目主要分为东区和西区两部分。西区包括1号楼（住宅）、5号楼（配套设施）和西区车库，西区总建筑面积67670平方米。东区包括2号楼（住宅）、3号楼（住宅）、4号楼（配套设施）、变电室和东区车库，东区总建筑面积101920平方米。幼儿园建筑面积为 2710平方米。',
                date: '2017-07-08'
            }
        ];
    };
    NewsAnnouncementComponent.prototype.scanNewsBulletinDetail = function () {
        this.router.navigate(['newsBulletinDetail']);
    };
    NewsAnnouncementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-news-announcement',
            template: __webpack_require__(/*! ./news-announcement.component.html */ "./src/app/pages/news-announcement/news-announcement.component.html"),
            styles: [__webpack_require__(/*! ./news-announcement.component.scss */ "./src/app/pages/news-announcement/news-announcement.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NewsAnnouncementComponent);
    return NewsAnnouncementComponent;
}());



/***/ }),

/***/ "./src/app/pages/news-bulletin-detail/news-bulletin-detail.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/pages/news-bulletin-detail/news-bulletin-detail.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-iframe [picture]=\"picture\" [ZH_TITLE]=\"ZH_TITLE\" [EN_TITLE]=\"EN_TITLE\" [NAV_INDEX]=\"NAV_INDEX\">\n  <div class=\"h-content-layout\">\n    <div class=\"h-content-top\">\n      <span>新闻通告&lt;&lt;新闻详情</span>\n    </div>\n    <div class=\"messageDetail text-center\">\n      <h3>中关村生命科学园医药科技中心开工仪式举行</h3>\n      <div><span>发布人：天辰信</span><span>发布时间：2017-07-08</span></div>\n      <img src=\"assets/images/newsList.png\" alt=\"\">\n      <p>项目位于北京 地坛西侧，北临安德路，南临安定河西滨河路。本项目主要分为东区和西区两部分。西区包括1号楼（住 宅）、5号楼（配套设施）和西区车库，西区总建筑面积67670平方米。东区包括2号楼（住宅）、3号楼（\n        住宅）、4号楼（配套设施）、变电室和东区车库，东区总建筑面积101920平方米。幼儿园建筑面积为 2710平方米。项目位于北京 地坛西侧，北临安德路，南临安定河西滨河路。本项目主要分为东区和西区两部分。西区包括1号楼（住\n        宅）、5号楼（配套设施）和西区车库，西区总建筑面积67670平方米。东区包括2号楼（住宅）、3号楼（ 住宅）、4号楼（配套设施）、变电室和东区车库，东区总建筑面积101920平方米。幼儿园建筑面积为\n        2710平方米。项目位于北京\n        地坛西侧，北临安德路，南临安定河西滨河路。本项目主要分为东区和西区两部分。西区包括1号楼（住 宅）、5号楼（配套设施）和西区车库，西区总建筑面积67670平方米。东区包括2号楼（住宅）、3号楼（\n        住宅）、4号楼（配套设施）、变电室和东区车库，东区总建筑面积101920平方米。幼儿园建筑面积为 2710平方米。项目位于北京 地坛西侧，北临安德路，南临安定河西滨河路。本项目主要分为东区和西区两部分。西区包括1号楼（住\n        宅）、5号楼（配套设施）和西区车库，西区总建筑面积67670平方米。东区包括2号楼（住宅）、3号楼（ 住宅）、4号楼（配套设施）、变电室和东区车库，东区总建筑面积101920平方米。幼儿园建筑面积为 2710平方米。</p>\n    </div>\n  </div>\n</app-page-iframe>"

/***/ }),

/***/ "./src/app/pages/news-bulletin-detail/news-bulletin-detail.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/news-bulletin-detail/news-bulletin-detail.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".h-content-top span {\n  color: #2cc6d8; }\n\n.messageDetail {\n  padding: 5vh 15vw; }\n\n.messageDetail span {\n    color: #989595;\n    padding: 2vh 2vw;\n    display: inline-block; }\n\n.messageDetail img {\n    width: 100%;\n    margin: 5vh 0; }\n\n.messageDetail p {\n    width: 100%;\n    text-align: left;\n    line-height: 2em; }\n"

/***/ }),

/***/ "./src/app/pages/news-bulletin-detail/news-bulletin-detail.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/news-bulletin-detail/news-bulletin-detail.component.ts ***!
  \******************************************************************************/
/*! exports provided: NewsBulletinDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsBulletinDetailComponent", function() { return NewsBulletinDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewsBulletinDetailComponent = /** @class */ (function () {
    function NewsBulletinDetailComponent() {
    }
    NewsBulletinDetailComponent.prototype.ngOnInit = function () {
        this.picture = 'news.png';
        this.ZH_TITLE = '新闻通告';
        this.EN_TITLE = 'NEWS BULLETIN';
        this.NAV_INDEX = 3;
    };
    NewsBulletinDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-news-bulletin-detail',
            template: __webpack_require__(/*! ./news-bulletin-detail.component.html */ "./src/app/pages/news-bulletin-detail/news-bulletin-detail.component.html"),
            styles: [__webpack_require__(/*! ./news-bulletin-detail.component.scss */ "./src/app/pages/news-bulletin-detail/news-bulletin-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NewsBulletinDetailComponent);
    return NewsBulletinDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/personal-center/personal-center.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/personal-center/personal-center.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-iframe [picture]=\"picture\" [ZH_TITLE]=\"ZH_TITLE\" [EN_TITLE]=\"EN_TITLE\" [NAV_INDEX]=\"NAV_INDEX\" class=\"personalCenter\">\r\n    <ul class=\"h-content-layout\">\r\n        <li><span>账&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;户：</span><input type=\"text\"></li>\r\n        <li><span>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：</span><input type=\"text\"><button>修改</button></li>\r\n        <li><span>归属公司：</span><input type=\"text\"><button>修改</button></li>\r\n        <li><span>所在职位：</span><input type=\"text\"><button>修改</button></li>\r\n        <li><span>手机号码：</span><input type=\"text\"></li>\r\n        <li><span>实名认证：</span><span class=\"status\">未认证</span></li>\r\n        <li><span>CA&nbsp;&nbsp;认证：</span><span class=\"status\">未认证</span><span class=\"warning\">请使用手机进行认证！</span></li>\r\n    </ul>\r\n</app-page-iframe>"

/***/ }),

/***/ "./src/app/pages/personal-center/personal-center.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/personal-center/personal-center.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/deep/.personalCenter .h-bottom-content {\n  display: flex;\n  align-items: center; }\n\nul.h-content-layout {\n  display: inline-block;\n  margin: auto; }\n\nul.h-content-layout li {\n    padding: 8px 0; }\n\nul.h-content-layout li input {\n      width: 280px;\n      height: 35px;\n      border: 1px solid #b9b5b5;\n      border-radius: 4px;\n      background: #eeeef0;\n      padding: 5px 10px; }\n\nul.h-content-layout li button {\n      height: 35px;\n      margin-left: 20px;\n      color: #03ccde;\n      background: none;\n      border: none;\n      outline: none;\n      cursor: pointer; }\n\nul.h-content-layout li span.status {\n      color: #f00;\n      font-weight: bold;\n      margin-right: 60px; }\n\nul.h-content-layout li span.warning {\n      color: #03ccde; }\n\nul.h-content-layout li span:first-child {\n    width: 90px;\n    text-align: right;\n    display: inline-block;\n    margin-right: 10px; }\n"

/***/ }),

/***/ "./src/app/pages/personal-center/personal-center.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/personal-center/personal-center.component.ts ***!
  \********************************************************************/
/*! exports provided: PersonalCenterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalCenterComponent", function() { return PersonalCenterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PersonalCenterComponent = /** @class */ (function () {
    function PersonalCenterComponent() {
    }
    PersonalCenterComponent.prototype.ngOnInit = function () {
        this.picture = 'personCenter.png';
        this.ZH_TITLE = '个人中心';
        this.EN_TITLE = 'PERSONAL CENTER';
        this.NAV_INDEX = 4;
    };
    PersonalCenterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-personal-center',
            template: __webpack_require__(/*! ./personal-center.component.html */ "./src/app/pages/personal-center/personal-center.component.html"),
            styles: [__webpack_require__(/*! ./personal-center.component.scss */ "./src/app/pages/personal-center/personal-center.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PersonalCenterComponent);
    return PersonalCenterComponent;
}());



/***/ }),

/***/ "./src/app/pages/project-information-detail/project-information-detail.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/project-information-detail/project-information-detail.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-iframe [picture]=\"picture\" [ZH_TITLE]=\"ZH_TITLE\" [EN_TITLE]=\"EN_TITLE\" [NAV_INDEX]=\"NAV_INDEX\" class=\"projectInformationDetail\">\n  <div class=\"h-content-layout ui-g\">\n    <div class=\"ui-g-2 h-content-left\">\n      <button [ngClass]=\"{building: isBuilding}\">在建项目</button>\n      <button [ngClass]=\"{building: !isBuilding}\">完成项目</button>\n    </div>\n    <div class=\"ui-g-10 h-content-right\">\n      <p-carousel [value]=\"projectDetail['pics']\" numVisible=1>\n        <ng-template let-projectPic pTemplate=\"item\">\n          <div class=\"ui-grid ui-grid-responsive\">\n            <div class=\"ui-grid-row\">\n              <div class=\"ui-grid-col-12 detailBox\">\n                <img src=\"assets/images/{{projectPic}}.png\" alt=\"\">\n              </div>\n            </div>\n          </div>\n        </ng-template>\n      </p-carousel>\n      <p *ngFor=\"let item of projectDetail['detail']\">\n        {{item}}\n      </p>\n    </div>\n  </div>\n</app-page-iframe>"

/***/ }),

/***/ "./src/app/pages/project-information-detail/project-information-detail.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/project-information-detail/project-information-detail.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/deep/ .projectInformationDetail .h-bottom-content {\n  background: #fff !important;\n  padding: 6vh 12vw !important; }\n\n/deep/ .projectInformationDetail li.ui-carousel-item.ui-widget-content.ui-corner-all {\n  border: none;\n  width: 60vw !important; }\n\n/deep/ .projectInformationDetail .ui-carousel-viewport {\n  border: none !important; }\n\n/deep/ .projectInformationDetail .ui-carousel-header.ui-widget-header.ui-corner-all {\n  position: absolute;\n  bottom: 0px;\n  z-index: 100;\n  border: none;\n  background: none; }\n\n/deep/ .projectInformationDetail .ui-carousel-page-links {\n  display: none; }\n\n/deep/ .projectInformationDetail .ui-carousel.ui-widget.ui-widget-content.ui-corner-all {\n  padding-bottom: 10vh;\n  margin-bottom: 5vh;\n  display: flex;\n  justify-content: center;\n  width: 60vw; }\n\n/deep/ .projectInformationDetail .pi-arrow-circle-left.ui-state-disabled {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA7CAYAAAAq55mNAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAOlSURBVGhD7ZrJa9RgGIf9R9RWLVpFcUFFRQSXgh48KLjgAu6KBz14qXhQPIjbwQVq63JQXG5uCFJwQxHrip2OY/d2klmSWdr/4PP3+0zGzDQIQ7NOc3ggTF4y75PvS/J+bzKpWBwVE4FItNaYuKKvswVxqC8jlv9SxYK4EhqY7/7ejHiF/CudSJnobTUn5nUpYnJnMrTMQf5tSq5MkpRE3+JMrEqoohGB15O6GM6PjAkOMsz3BvJu7ErK0a0c2ZLomUFNzIop4tKwJrTCv4AwkQMXkf9MeJyCj3VfSfQwrsupGPoPOBMFS0DY+KIVpcdeXK/W30ui+7CDc/y7XiwLCBtduaL02NmTLvs9Eg0rkai5EYmGjEjU3IhEQ0ZgRXWUm725ERFHgunC+OvrQIqypuaycAeSWolC/Fk6bxtXDYET5UhScjsSmoL/XRJXxeNUjYnmwXuL5CIsnM8PaXIK28VXQ6BEPxrTlZILIXkOkj0OSJLAiHZgGbXFkGQ34ywkux2SJIEQ/YZjb+pOSUl2Mijp1Eia+C76FcfdDEkuiqfHkuL0oCb6XWjX+CrKY1KyHoL8j5MDmki61JPyTTSG4/Huako2Q9LNnpTnouw7/cSxduO4dZCsw7FP9Gflo8Uu3ik8F/2Mu+uu3rQUbIgp4jgk3ZquVjwXvTKsy7srj7kNf8pa1i7OaTwXfaDmZFlH2TUJVTxBHcuyzy7WSTwXHcI0bVF0sQLFOmWbEinxFLJu94w9FyUKll2tkF1myK41ZO1incIXUcIbUBtkFxuyqyH73EVZ30QJR5ZvuOYab+rWQZbXrF3sePFVlKiQvYWRnYFnKsvApt8pRxbalfguStgquYu78TSjgFgP2ZcZZ2UDIUp0cAfTmNUSR3YDZNsdlA2MKGGt25rU5cjyPzei4OeLaCcePYESJSlM42vyDfXfG9RWJPZJs//+oBoCJ0oG8ei5gMU3Ow2zwX1cv3Zx1RBIUdIHWX4z0TyQFR21OqJuEImaG5FoyIhEzY1INGREouaGKcqOujUgbLCP/F/RY/1ZWWS/wBrR7d6rW3BR0J4piHqI8ttG676SaAvKsPlxRX6U/ANnxYuOnZMw307kfRD5s5NxFT7W/SXRGOb2HkzfBozqAQSzz3MPRXZYuIl8OUjsYLBxTmlbUfIOa8KjCF4aV+Xwc66HBebLPvIR5P8GHlYvUiZK4jgTj1J52Wm/HCKY70OMLO+6lU5kjGitMkFER8UfvGsIpTot1K8AAAAASUVORK5CYII=) no-repeat;\n  -webkit-transform: rotate(0deg);\n          transform: rotate(0deg);\n  background-size: contain; }\n\n/deep/ .projectInformationDetail .pi-arrow-circle-right.ui-state-disabled {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA7CAYAAAAq55mNAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAOlSURBVGhD7ZrJa9RgGIf9R9RWLVpFcUFFRQSXgh48KLjgAu6KBz14qXhQPIjbwQVq63JQXG5uCFJwQxHrip2OY/d2klmSWdr/4PP3+0zGzDQIQ7NOc3ggTF4y75PvS/J+bzKpWBwVE4FItNaYuKKvswVxqC8jlv9SxYK4EhqY7/7ejHiF/CudSJnobTUn5nUpYnJnMrTMQf5tSq5MkpRE3+JMrEqoohGB15O6GM6PjAkOMsz3BvJu7ErK0a0c2ZLomUFNzIop4tKwJrTCv4AwkQMXkf9MeJyCj3VfSfQwrsupGPoPOBMFS0DY+KIVpcdeXK/W30ui+7CDc/y7XiwLCBtduaL02NmTLvs9Eg0rkai5EYmGjEjU3IhEQ0ZgRXWUm725ERFHgunC+OvrQIqypuaycAeSWolC/Fk6bxtXDYET5UhScjsSmoL/XRJXxeNUjYnmwXuL5CIsnM8PaXIK28VXQ6BEPxrTlZILIXkOkj0OSJLAiHZgGbXFkGQ34ywkux2SJIEQ/YZjb+pOSUl2Mijp1Eia+C76FcfdDEkuiqfHkuL0oCb6XWjX+CrKY1KyHoL8j5MDmki61JPyTTSG4/Huako2Q9LNnpTnouw7/cSxduO4dZCsw7FP9Gflo8Uu3ik8F/2Mu+uu3rQUbIgp4jgk3ZquVjwXvTKsy7srj7kNf8pa1i7OaTwXfaDmZFlH2TUJVTxBHcuyzy7WSTwXHcI0bVF0sQLFOmWbEinxFLJu94w9FyUKll2tkF1myK41ZO1incIXUcIbUBtkFxuyqyH73EVZ30QJR5ZvuOYab+rWQZbXrF3sePFVlKiQvYWRnYFnKsvApt8pRxbalfguStgquYu78TSjgFgP2ZcZZ2UDIUp0cAfTmNUSR3YDZNsdlA2MKGGt25rU5cjyPzei4OeLaCcePYESJSlM42vyDfXfG9RWJPZJs//+oBoCJ0oG8ei5gMU3Ow2zwX1cv3Zx1RBIUdIHWX4z0TyQFR21OqJuEImaG5FoyIhEzY1INGREouaGKcqOujUgbLCP/F/RY/1ZWWS/wBrR7d6rW3BR0J4piHqI8ttG676SaAvKsPlxRX6U/ANnxYuOnZMw307kfRD5s5NxFT7W/SXRGOb2HkzfBozqAQSzz3MPRXZYuIl8OUjsYLBxTmlbUfIOa8KjCF4aV+Xwc66HBebLPvIR5P8GHlYvUiZK4jgTj1J52Wm/HCKY70OMLO+6lU5kjGitMkFER8UfvGsIpTot1K8AAAAASUVORK5CYII=) no-repeat;\n  background-size: contain;\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n\n/deep/ .projectInformationDetail .pi-arrow-circle-left {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA7CAYAAAAn+enKAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAOASURBVGhD7ZvJTxNxFMf9R1QwSgQ1LnAQ9YAxwsEL8eByATEeNEZMXCKJ0XglygGiJ8PFhJN/gEExkaAnDxJLC3QD2imdThe6BEo3nt83QMKkv3gonQ2myef2ftN+8t5veTPTA6lUmvYTjvBeRyg8KSfpoV+mix6JzrrDtqEdv7fPF6Wv0WSV0zZVwp+kOLW6JTr0N0QHbUqTK0zvQ4rGaxuN8BQy2zkXEV7EbnDSxgWZ1ggPLirUMhMWXsBuHEWWnwVljSyjEX4SkOmwYLAd4Sl5y7uskWU0wo8CUeFgu3J93hF2hIUD7YojDBxh0UC74ggDR1g0sFaacEw9P7tM5zwRanSJY/TEcOHeBYX86yWayK5RN9rNIzjfiuL0wnDhu4txkopl2iCi71vSjQZKGy7MpfxWTpO8Q/qaz7gGxZRFq3U2QkOQjpU2pb9BustX/+8RYYow04ZMD8cylCpXVOnJXJ6uevWXNk2YaYX0CKSzW9K/cuvUMa+vtKnCzGmPRB+UDBU2NqgM6ylIX9ZR2nRhpsUt0Wg8ixwTlSA+hfLuwA8Txe4WSwgzvB/vlObV+8Jc/aUtI8w04OT1KZFTS7sM6S+ZVboE6XreHraUMHMC5T2WzFG+sjmnxzNrdKWOq7flhJl27NM/snm1vHn1fhNZEcbVguWEeS73LcTJky9SBbJSoUQPlhLC2FqwlDAfL++guXCtFdTMBtFkvJRSdBJlLoqvBUsJ9yKzbmSWZReR2QHINs/UT5axjHAPMju7JSsVS/RCSqr7syh2N1hCuA+y7nwBqkTJUkWVbdbpeZbpwj0oY56zvECtYSt6jjI+ruPDO1OFbwcVmoYs77cFyPaHk3RM5yeVpgnfCCj0Z3Uzs3yqegpZI+58GC7Mx8Ruf4x+r66rc7YIWV6NjbrNY7hwl1dWm33+cB/8OpJS72SKYvXAcOH+UIIyEE1gNR6U03RKh63nfxgu3IlG4CPawFfI7Bk0/6IYPTFt0TILRxg4wqKBdsURBo6waKBdcYSBRrh/vwkPBPmhtXiw3WgAvb6oRpbRCI+G49Rm8HlXL/it4HdL1e9Ma4Td8RTd90fVV29FF7ELnN2b3mWaVlIaWUYjzPyMJelxQFZfp7dbeTcCrtB7SNqELP4bQJUw44mv0OdIgkZCCg2hLOzCMBiT4uRCpYq8GKHwXsYR3tuk6R9NRWJrxGDQjgAAAABJRU5ErkJggg==) no-repeat;\n  background-size: contain;\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n  width: 55px;\n  height: 55px;\n  font-size: 0px;\n  margin-right: 10px; }\n\n/deep/ .projectInformationDetail .pi-arrow-circle-right {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA7CAYAAAAn+enKAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAOASURBVGhD7ZvJTxNxFMf9R1QwSgQ1LnAQ9YAxwsEL8eByATEeNEZMXCKJ0XglygGiJ8PFhJN/gEExkaAnDxJLC3QD2imdThe6BEo3nt83QMKkv3gonQ2myef2ftN+8t5veTPTA6lUmvYTjvBeRyg8KSfpoV+mix6JzrrDtqEdv7fPF6Wv0WSV0zZVwp+kOLW6JTr0N0QHbUqTK0zvQ4rGaxuN8BQy2zkXEV7EbnDSxgWZ1ggPLirUMhMWXsBuHEWWnwVljSyjEX4SkOmwYLAd4Sl5y7uskWU0wo8CUeFgu3J93hF2hIUD7YojDBxh0UC74ggDR1g0sFaacEw9P7tM5zwRanSJY/TEcOHeBYX86yWayK5RN9rNIzjfiuL0wnDhu4txkopl2iCi71vSjQZKGy7MpfxWTpO8Q/qaz7gGxZRFq3U2QkOQjpU2pb9BustX/+8RYYow04ZMD8cylCpXVOnJXJ6uevWXNk2YaYX0CKSzW9K/cuvUMa+vtKnCzGmPRB+UDBU2NqgM6ylIX9ZR2nRhpsUt0Wg8ixwTlSA+hfLuwA8Txe4WSwgzvB/vlObV+8Jc/aUtI8w04OT1KZFTS7sM6S+ZVboE6XreHraUMHMC5T2WzFG+sjmnxzNrdKWOq7flhJl27NM/snm1vHn1fhNZEcbVguWEeS73LcTJky9SBbJSoUQPlhLC2FqwlDAfL++guXCtFdTMBtFkvJRSdBJlLoqvBUsJ9yKzbmSWZReR2QHINs/UT5axjHAPMju7JSsVS/RCSqr7syh2N1hCuA+y7nwBqkTJUkWVbdbpeZbpwj0oY56zvECtYSt6jjI+ruPDO1OFbwcVmoYs77cFyPaHk3RM5yeVpgnfCCj0Z3Uzs3yqegpZI+58GC7Mx8Ruf4x+r66rc7YIWV6NjbrNY7hwl1dWm33+cB/8OpJS72SKYvXAcOH+UIIyEE1gNR6U03RKh63nfxgu3IlG4CPawFfI7Bk0/6IYPTFt0TILRxg4wqKBdsURBo6waKBdcYSBRrh/vwkPBPmhtXiw3WgAvb6oRpbRCI+G49Rm8HlXL/it4HdL1e9Ma4Td8RTd90fVV29FF7ELnN2b3mWaVlIaWUYjzPyMJelxQFZfp7dbeTcCrtB7SNqELP4bQJUw44mv0OdIgkZCCg2hLOzCMBiT4uRCpYq8GKHwXsYR3tuk6R9NRWJrxGDQjgAAAABJRU5ErkJggg==) no-repeat;\n  width: 55px;\n  height: 55px;\n  background-size: contain;\n  font-size: 0px;\n  margin-left: 10px; }\n\n.h-content-layout .h-content-left button {\n  display: block;\n  background: #EEEEEE;\n  color: #000;\n  padding: 10px 40px;\n  border: none;\n  outline: none; }\n\n.h-content-layout button.building {\n  background: #00e9f3 !important;\n  color: #fff !important; }\n\n.h-content-layout img {\n  width: 100%; }\n\n.h-content-layout p {\n  width: 60vw;\n  line-height: 2em;\n  padding: 2vh 0; }\n"

/***/ }),

/***/ "./src/app/pages/project-information-detail/project-information-detail.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/project-information-detail/project-information-detail.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ProjectInformationDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectInformationDetailComponent", function() { return ProjectInformationDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectInformationDetailComponent = /** @class */ (function () {
    function ProjectInformationDetailComponent() {
    }
    ProjectInformationDetailComponent.prototype.ngOnInit = function () {
        this.picture = 'projectInformationTop.png';
        this.ZH_TITLE = '工程信息';
        this.EN_TITLE = 'PROJECT INFORMATION';
        this.NAV_INDEX = 2;
        this.isBuilding = true;
        this.projectDetail = {
            pics: ['projectInformation', 'projectInformation', 'projectInformation'],
            detail: [
                '恒都投资控股（天津）股份有限公司是一家以供应链运营和商业地产开发为主业的多元化现代服务型企业集团，成立于2008年，总部设在天津，在上海、香港等金融中心均设有子公司，拥有控股企业30余家。2016年，集团营业收入超过20亿元人民币，拥有员工数百人。',
                '集团以国家产业政策为导向，以“构建大宗商品产业互联生态”为愿景，积极探索通过“产业+互联网”降低大宗产品交易成本、提高大宗产品交易效率的发展战略，不断创新商业模式。在供应链运营领域探索形成煤炭、塑料化工、农副产品（粮食）、木材、钢铁、有色金属等核心业务板块。',
                '集团实行扁平化现代企业管理，总部设有运营管理中心、行政风控中心、财务中心和金融中心和不同品类大宗产品的六大事业部。集团布局全国，在全国交易量超过千万吨级的港口和矿产区设立大宗产品交易服务中心，提供供应链运营、共享物流等各项服务。',
                '集团全体员工本着“放下自我，追求企业发展”的精神，不断追求执行力和管理水平的提高，促进集团健康、稳步的发展。'
            ]
        };
    };
    ProjectInformationDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-information-detail',
            template: __webpack_require__(/*! ./project-information-detail.component.html */ "./src/app/pages/project-information-detail/project-information-detail.component.html"),
            styles: [__webpack_require__(/*! ./project-information-detail.component.scss */ "./src/app/pages/project-information-detail/project-information-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectInformationDetailComponent);
    return ProjectInformationDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/project-information/project-information.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/pages/project-information/project-information.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-iframe [picture]=\"picture\" [ZH_TITLE]=\"ZH_TITLE\" [EN_TITLE]=\"EN_TITLE\" [NAV_INDEX]=\"NAV_INDEX\" class=\"projectInformation\">\r\n  <div class=\"h-content-layout\">\r\n    <div class=\"h-content-top\">\r\n      <button>在建项目</button>\r\n      <input type=\"text\" placeholder=\"搜索新闻\">\r\n    </div>\r\n    <p-carousel [value]=\"buildingPorjectsArr\" numVisible=1>\r\n      <ng-template let-projects pTemplate=\"item\">\r\n        <div class=\"ui-grid ui-grid-responsive\">\r\n          <div class=\"ui-grid-row\">\r\n            <div class=\"ui-grid-col-12 detailBox\">\r\n              <div *ngFor=\"let item of projects\">\r\n                <img src=\"assets/images/{{item.pic}}.png\" alt=\"\" (click)=\"scanProjectInformationDetail()\">\r\n                <p>{{item.name}}</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n    </p-carousel>\r\n  </div>\r\n</app-page-iframe>"

/***/ }),

/***/ "./src/app/pages/project-information/project-information.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/pages/project-information/project-information.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".h-content-top {\n  margin-bottom: 8vh; }\n  .h-content-top button {\n    background: #00e9f3;\n    padding: 10px 40px;\n    color: #fff;\n    border: none;\n    font-size: 22px;\n    margin-right: 40px; }\n  .h-content-top input {\n  float: right;\n  height: 100% !important;\n  font-size: 20px;\n  height: 50px !important;\n  padding: 0px 20px;\n  border: 1px solid #00e9f3;\n  border-radius: 5px;\n  width: 300px; }\n  .detailBox {\n  flex-wrap: wrap;\n  display: flex;\n  justify-content: space-between; }\n  .detailBox div {\n    position: relative;\n    margin: 8px 0; }\n  .detailBox div:hover p {\n      visibility: visible; }\n  .detailBox img {\n    width: 27.5vw;\n    cursor: pointer; }\n  .detailBox p {\n    height: 50px;\n    line-height: 50px;\n    background: rgba(0, 233, 243, 0.5);\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    color: #fff;\n    text-align: center;\n    font-size: 16px;\n    visibility: hidden; }\n  /deep/ .projectInformation .h-bottom-content {\n  background: #fff !important; }\n  /deep/ .projectInformation li.ui-carousel-item.ui-widget-content.ui-corner-all {\n  width: 84vw !important;\n  border: none;\n  margin: 0; }\n  /deep/ .projectInformation .ui-carousel-viewport {\n  border: none !important; }\n  /deep/ .projectInformation .ui-carousel-header.ui-widget-header.ui-corner-all {\n  position: absolute;\n  bottom: 0px;\n  z-index: 100;\n  border: none;\n  background: none; }\n  /deep/ .projectInformation .ui-carousel-page-links {\n  display: none; }\n  /deep/ .projectInformation .ui-carousel.ui-widget.ui-widget-content.ui-corner-all {\n  padding-bottom: 15vh;\n  display: flex;\n  justify-content: center; }\n  /deep/ .projectInformation .pi-arrow-circle-left.ui-state-disabled {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA7CAYAAAAq55mNAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAOlSURBVGhD7ZrJa9RgGIf9R9RWLVpFcUFFRQSXgh48KLjgAu6KBz14qXhQPIjbwQVq63JQXG5uCFJwQxHrip2OY/d2klmSWdr/4PP3+0zGzDQIQ7NOc3ggTF4y75PvS/J+bzKpWBwVE4FItNaYuKKvswVxqC8jlv9SxYK4EhqY7/7ejHiF/CudSJnobTUn5nUpYnJnMrTMQf5tSq5MkpRE3+JMrEqoohGB15O6GM6PjAkOMsz3BvJu7ErK0a0c2ZLomUFNzIop4tKwJrTCv4AwkQMXkf9MeJyCj3VfSfQwrsupGPoPOBMFS0DY+KIVpcdeXK/W30ui+7CDc/y7XiwLCBtduaL02NmTLvs9Eg0rkai5EYmGjEjU3IhEQ0ZgRXWUm725ERFHgunC+OvrQIqypuaycAeSWolC/Fk6bxtXDYET5UhScjsSmoL/XRJXxeNUjYnmwXuL5CIsnM8PaXIK28VXQ6BEPxrTlZILIXkOkj0OSJLAiHZgGbXFkGQ34ywkux2SJIEQ/YZjb+pOSUl2Mijp1Eia+C76FcfdDEkuiqfHkuL0oCb6XWjX+CrKY1KyHoL8j5MDmki61JPyTTSG4/Huako2Q9LNnpTnouw7/cSxduO4dZCsw7FP9Gflo8Uu3ik8F/2Mu+uu3rQUbIgp4jgk3ZquVjwXvTKsy7srj7kNf8pa1i7OaTwXfaDmZFlH2TUJVTxBHcuyzy7WSTwXHcI0bVF0sQLFOmWbEinxFLJu94w9FyUKll2tkF1myK41ZO1incIXUcIbUBtkFxuyqyH73EVZ30QJR5ZvuOYab+rWQZbXrF3sePFVlKiQvYWRnYFnKsvApt8pRxbalfguStgquYu78TSjgFgP2ZcZZ2UDIUp0cAfTmNUSR3YDZNsdlA2MKGGt25rU5cjyPzei4OeLaCcePYESJSlM42vyDfXfG9RWJPZJs//+oBoCJ0oG8ei5gMU3Ow2zwX1cv3Zx1RBIUdIHWX4z0TyQFR21OqJuEImaG5FoyIhEzY1INGREouaGKcqOujUgbLCP/F/RY/1ZWWS/wBrR7d6rW3BR0J4piHqI8ttG676SaAvKsPlxRX6U/ANnxYuOnZMw307kfRD5s5NxFT7W/SXRGOb2HkzfBozqAQSzz3MPRXZYuIl8OUjsYLBxTmlbUfIOa8KjCF4aV+Xwc66HBebLPvIR5P8GHlYvUiZK4jgTj1J52Wm/HCKY70OMLO+6lU5kjGitMkFER8UfvGsIpTot1K8AAAAASUVORK5CYII=) no-repeat;\n  -webkit-transform: rotate(0deg);\n          transform: rotate(0deg);\n  background-size: contain; }\n  /deep/ .projectInformation .pi-arrow-circle-right.ui-state-disabled {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA7CAYAAAAq55mNAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAOlSURBVGhD7ZrJa9RgGIf9R9RWLVpFcUFFRQSXgh48KLjgAu6KBz14qXhQPIjbwQVq63JQXG5uCFJwQxHrip2OY/d2klmSWdr/4PP3+0zGzDQIQ7NOc3ggTF4y75PvS/J+bzKpWBwVE4FItNaYuKKvswVxqC8jlv9SxYK4EhqY7/7ejHiF/CudSJnobTUn5nUpYnJnMrTMQf5tSq5MkpRE3+JMrEqoohGB15O6GM6PjAkOMsz3BvJu7ErK0a0c2ZLomUFNzIop4tKwJrTCv4AwkQMXkf9MeJyCj3VfSfQwrsupGPoPOBMFS0DY+KIVpcdeXK/W30ui+7CDc/y7XiwLCBtduaL02NmTLvs9Eg0rkai5EYmGjEjU3IhEQ0ZgRXWUm725ERFHgunC+OvrQIqypuaycAeSWolC/Fk6bxtXDYET5UhScjsSmoL/XRJXxeNUjYnmwXuL5CIsnM8PaXIK28VXQ6BEPxrTlZILIXkOkj0OSJLAiHZgGbXFkGQ34ywkux2SJIEQ/YZjb+pOSUl2Mijp1Eia+C76FcfdDEkuiqfHkuL0oCb6XWjX+CrKY1KyHoL8j5MDmki61JPyTTSG4/Huako2Q9LNnpTnouw7/cSxduO4dZCsw7FP9Gflo8Uu3ik8F/2Mu+uu3rQUbIgp4jgk3ZquVjwXvTKsy7srj7kNf8pa1i7OaTwXfaDmZFlH2TUJVTxBHcuyzy7WSTwXHcI0bVF0sQLFOmWbEinxFLJu94w9FyUKll2tkF1myK41ZO1incIXUcIbUBtkFxuyqyH73EVZ30QJR5ZvuOYab+rWQZbXrF3sePFVlKiQvYWRnYFnKsvApt8pRxbalfguStgquYu78TSjgFgP2ZcZZ2UDIUp0cAfTmNUSR3YDZNsdlA2MKGGt25rU5cjyPzei4OeLaCcePYESJSlM42vyDfXfG9RWJPZJs//+oBoCJ0oG8ei5gMU3Ow2zwX1cv3Zx1RBIUdIHWX4z0TyQFR21OqJuEImaG5FoyIhEzY1INGREouaGKcqOujUgbLCP/F/RY/1ZWWS/wBrR7d6rW3BR0J4piHqI8ttG676SaAvKsPlxRX6U/ANnxYuOnZMw307kfRD5s5NxFT7W/SXRGOb2HkzfBozqAQSzz3MPRXZYuIl8OUjsYLBxTmlbUfIOa8KjCF4aV+Xwc66HBebLPvIR5P8GHlYvUiZK4jgTj1J52Wm/HCKY70OMLO+6lU5kjGitMkFER8UfvGsIpTot1K8AAAAASUVORK5CYII=) no-repeat;\n  background-size: contain;\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n  /deep/ .projectInformation .pi-arrow-circle-left {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA7CAYAAAAn+enKAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAOASURBVGhD7ZvJTxNxFMf9R1QwSgQ1LnAQ9YAxwsEL8eByATEeNEZMXCKJ0XglygGiJ8PFhJN/gEExkaAnDxJLC3QD2imdThe6BEo3nt83QMKkv3gonQ2myef2ftN+8t5veTPTA6lUmvYTjvBeRyg8KSfpoV+mix6JzrrDtqEdv7fPF6Wv0WSV0zZVwp+kOLW6JTr0N0QHbUqTK0zvQ4rGaxuN8BQy2zkXEV7EbnDSxgWZ1ggPLirUMhMWXsBuHEWWnwVljSyjEX4SkOmwYLAd4Sl5y7uskWU0wo8CUeFgu3J93hF2hIUD7YojDBxh0UC74ggDR1g0sFaacEw9P7tM5zwRanSJY/TEcOHeBYX86yWayK5RN9rNIzjfiuL0wnDhu4txkopl2iCi71vSjQZKGy7MpfxWTpO8Q/qaz7gGxZRFq3U2QkOQjpU2pb9BustX/+8RYYow04ZMD8cylCpXVOnJXJ6uevWXNk2YaYX0CKSzW9K/cuvUMa+vtKnCzGmPRB+UDBU2NqgM6ylIX9ZR2nRhpsUt0Wg8ixwTlSA+hfLuwA8Txe4WSwgzvB/vlObV+8Jc/aUtI8w04OT1KZFTS7sM6S+ZVboE6XreHraUMHMC5T2WzFG+sjmnxzNrdKWOq7flhJl27NM/snm1vHn1fhNZEcbVguWEeS73LcTJky9SBbJSoUQPlhLC2FqwlDAfL++guXCtFdTMBtFkvJRSdBJlLoqvBUsJ9yKzbmSWZReR2QHINs/UT5axjHAPMju7JSsVS/RCSqr7syh2N1hCuA+y7nwBqkTJUkWVbdbpeZbpwj0oY56zvECtYSt6jjI+ruPDO1OFbwcVmoYs77cFyPaHk3RM5yeVpgnfCCj0Z3Uzs3yqegpZI+58GC7Mx8Ruf4x+r66rc7YIWV6NjbrNY7hwl1dWm33+cB/8OpJS72SKYvXAcOH+UIIyEE1gNR6U03RKh63nfxgu3IlG4CPawFfI7Bk0/6IYPTFt0TILRxg4wqKBdsURBo6waKBdcYSBRrh/vwkPBPmhtXiw3WgAvb6oRpbRCI+G49Rm8HlXL/it4HdL1e9Ma4Td8RTd90fVV29FF7ELnN2b3mWaVlIaWUYjzPyMJelxQFZfp7dbeTcCrtB7SNqELP4bQJUw44mv0OdIgkZCCg2hLOzCMBiT4uRCpYq8GKHwXsYR3tuk6R9NRWJrxGDQjgAAAABJRU5ErkJggg==) no-repeat;\n  background-size: contain;\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n  width: 55px;\n  height: 55px;\n  font-size: 0px;\n  margin-right: 10px; }\n  /deep/ .projectInformation .pi-arrow-circle-right {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA7CAYAAAAn+enKAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAOASURBVGhD7ZvJTxNxFMf9R1QwSgQ1LnAQ9YAxwsEL8eByATEeNEZMXCKJ0XglygGiJ8PFhJN/gEExkaAnDxJLC3QD2imdThe6BEo3nt83QMKkv3gonQ2myef2ftN+8t5veTPTA6lUmvYTjvBeRyg8KSfpoV+mix6JzrrDtqEdv7fPF6Wv0WSV0zZVwp+kOLW6JTr0N0QHbUqTK0zvQ4rGaxuN8BQy2zkXEV7EbnDSxgWZ1ggPLirUMhMWXsBuHEWWnwVljSyjEX4SkOmwYLAd4Sl5y7uskWU0wo8CUeFgu3J93hF2hIUD7YojDBxh0UC74ggDR1g0sFaacEw9P7tM5zwRanSJY/TEcOHeBYX86yWayK5RN9rNIzjfiuL0wnDhu4txkopl2iCi71vSjQZKGy7MpfxWTpO8Q/qaz7gGxZRFq3U2QkOQjpU2pb9BustX/+8RYYow04ZMD8cylCpXVOnJXJ6uevWXNk2YaYX0CKSzW9K/cuvUMa+vtKnCzGmPRB+UDBU2NqgM6ylIX9ZR2nRhpsUt0Wg8ixwTlSA+hfLuwA8Txe4WSwgzvB/vlObV+8Jc/aUtI8w04OT1KZFTS7sM6S+ZVboE6XreHraUMHMC5T2WzFG+sjmnxzNrdKWOq7flhJl27NM/snm1vHn1fhNZEcbVguWEeS73LcTJky9SBbJSoUQPlhLC2FqwlDAfL++guXCtFdTMBtFkvJRSdBJlLoqvBUsJ9yKzbmSWZReR2QHINs/UT5axjHAPMju7JSsVS/RCSqr7syh2N1hCuA+y7nwBqkTJUkWVbdbpeZbpwj0oY56zvECtYSt6jjI+ruPDO1OFbwcVmoYs77cFyPaHk3RM5yeVpgnfCCj0Z3Uzs3yqegpZI+58GC7Mx8Ruf4x+r66rc7YIWV6NjbrNY7hwl1dWm33+cB/8OpJS72SKYvXAcOH+UIIyEE1gNR6U03RKh63nfxgu3IlG4CPawFfI7Bk0/6IYPTFt0TILRxg4wqKBdsURBo6waKBdcYSBRrh/vwkPBPmhtXiw3WgAvb6oRpbRCI+G49Rm8HlXL/it4HdL1e9Ma4Td8RTd90fVV29FF7ELnN2b3mWaVlIaWUYjzPyMJelxQFZfp7dbeTcCrtB7SNqELP4bQJUw44mv0OdIgkZCCg2hLOzCMBiT4uRCpYq8GKHwXsYR3tuk6R9NRWJrxGDQjgAAAABJRU5ErkJggg==) no-repeat;\n  width: 55px;\n  height: 55px;\n  background-size: contain;\n  font-size: 0px;\n  margin-left: 10px; }\n"

/***/ }),

/***/ "./src/app/pages/project-information/project-information.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/project-information/project-information.component.ts ***!
  \****************************************************************************/
/*! exports provided: ProjectInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectInformationComponent", function() { return ProjectInformationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectInformationComponent = /** @class */ (function () {
    function ProjectInformationComponent(router) {
        this.router = router;
        this.buildingPorjectsArr = [
            [{
                    name: '中关村生命科学园医药科技中心一标段',
                    pic: 'projectInformation',
                    id: 1
                }, {
                    name: '中关村生命科学园医药科技中心一标段',
                    pic: 'projectInformation',
                    id: 1
                }, {
                    name: '中关村生命科学园医药科技中心一标段',
                    pic: 'projectInformation',
                    id: 1
                }, {
                    name: '中关村生命科学园医药科技中心一标段',
                    pic: 'projectInformation',
                    id: 1
                }, {
                    name: '中关村生命科学园医药科技中心一标段',
                    pic: 'projectInformation',
                    id: 1
                }, {
                    name: '中关村生命科学园医药科技中心一标段',
                    pic: 'projectInformation',
                    id: 1
                }, {
                    name: '中关村生命科学园医药科技中心一标段',
                    pic: 'projectInformation',
                    id: 1
                }, {
                    name: '中关村生命科学园医药科技中心一标段',
                    pic: 'projectInformation',
                    id: 1
                }, {
                    name: '中关村生命科学园医药科技中心一标段',
                    pic: 'projectInformation',
                    id: 1
                }],
            [{
                    name: '中关村生命科学园医药科技中心一标段',
                    pic: 'projectInformation',
                    id: 1
                }, {
                    name: '中关村生命科学园医药科技中心一标段',
                    pic: 'projectInformation',
                    id: 1
                }, {
                    name: '中关村生命科学园医药科技中心一标段',
                    pic: 'projectInformation',
                    id: 1
                }, {
                    name: '中关村生命科学园医药科技中心一标段',
                    pic: 'projectInformation',
                    id: 1
                }, {
                    name: '中关村生命科学园医药科技中心一标段',
                    pic: 'projectInformation',
                    id: 1
                }, {
                    name: '中关村生命科学园医药科技中心一标段',
                    pic: 'projectInformation',
                    id: 1
                }, {
                    name: '中关村生命科学园医药科技中心一标段',
                    pic: 'projectInformation',
                    id: 1
                }],
        ];
    }
    ProjectInformationComponent.prototype.ngOnInit = function () {
        this.picture = 'projectInformationTop.png';
        this.ZH_TITLE = '工程信息';
        this.EN_TITLE = 'PROJECT INFORMATION';
        this.NAV_INDEX = 2;
    };
    ProjectInformationComponent.prototype.scanProjectInformationDetail = function () {
        this.router.navigate(['projectInformationDetail']);
    };
    ProjectInformationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-information',
            template: __webpack_require__(/*! ./project-information.component.html */ "./src/app/pages/project-information/project-information.component.html"),
            styles: [__webpack_require__(/*! ./project-information.component.scss */ "./src/app/pages/project-information/project-information.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ProjectInformationComponent);
    return ProjectInformationComponent;
}());



/***/ }),

/***/ "./src/app/pages/regist/regist.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/regist/regist.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-before-login-header>\r\n</app-before-login-header> -->\r\n<!-- <app-before-login-content></app-before-login-content> -->\r\n<!-- <app-before-login-dialog>\r\n  <form action=\"\">\r\n    <input type=\"text\" placeholder=\"请输入手机号\">\r\n    <label>\r\n      <input type=\"text\" placeholder=\"请输入验证码\"><a class=\"yzm\">获取验证码</a>\r\n    </label>\r\n    <input type=\"password\" placeholder=\"请输入密码(8~20位，不能全是数字)\"><br>\r\n    <input type=\"password\" placeholder=\"请再次输入密码\"><br>\r\n    <label>\r\n      <input type=\"checkbox\"><span>阅读并接受<a href=\"\">\r\n          《智慧建造用户协议》\r\n        </a></span>\r\n    </label>\r\n    <button>注册</button>\r\n  </form>\r\n  <div class=\"ui-g v-tooltop\">\r\n    <div class=\"ui-g-8\">\r\n    </div>\r\n    <div class=\"ui-g-4\">\r\n      <a routerLink=\"/login\" routerLinkActive=\"active\">已有账号 立即登录</a>\r\n    </div>\r\n  </div>\r\n</app-before-login-dialog> -->"

/***/ }),

/***/ "./src/app/pages/regist/regist.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/regist/regist.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  text-align: center;\n  width: 330px;\n  margin: auto; }\n  form * {\n    font-size: 16px; }\n  input {\n  width: 100%;\n  height: 40px;\n  margin: 10px 0;\n  border-radius: 4px;\n  border: 1px solid #c1bfbf;\n  padding: 0px 15px;\n  font-size: 16px; }\n  input[type=\"checkbox\"] {\n  width: 22px;\n  height: 22px;\n  float: left; }\n  label {\n  position: relative;\n  line-height: 40px; }\n  a.yzm {\n  position: absolute;\n  right: 0px;\n  margin: 10px 15px; }\n  label a {\n  color: #02dde6; }\n  form > button {\n  width: 100%;\n  color: #fff;\n  background: #00e9f3;\n  letter-spacing: 4px;\n  height: 40px;\n  font-size: 20px;\n  border: none;\n  border-radius: 5px;\n  margin: 10px 0; }\n  .ui-g.v-tooltop {\n  margin-top: 4vh;\n  padding: 8px 20px;\n  background: #F7F8FA;\n  border-radius: 0 0 10px 10px; }\n  .v-tooltop .ui-g-4 {\n  text-align: right; }\n  .ui-g.v-tooltop * {\n  color: #02dde6;\n  font-size: 18px; }\n  .ui-g.v-tooltop span {\n  margin: 0 15px; }\n"

/***/ }),

/***/ "./src/app/pages/regist/regist.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/regist/regist.component.ts ***!
  \**************************************************/
/*! exports provided: RegistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistComponent", function() { return RegistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegistComponent = /** @class */ (function () {
    function RegistComponent() {
    }
    RegistComponent.prototype.ngOnInit = function () {
    };
    RegistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-regist',
            template: __webpack_require__(/*! ./regist.component.html */ "./src/app/pages/regist/regist.component.html"),
            styles: [__webpack_require__(/*! ./regist.component.scss */ "./src/app/pages/regist/regist.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RegistComponent);
    return RegistComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/dialog-head/dialog-head.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/dialog-head/dialog-head.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog\">\r\n  <div class=\"v-scroll-box\">\r\n    <div class=\"ui-g dialogContainer\">\r\n      <div class=\"ui-g-10 v-dialog-layout\">\r\n        <h4 class=\"title\"></h4>\r\n        <ng-content></ng-content>\r\n      </div>\r\n      <div class=\"ui-g-2 close\" (click)=\"closeDialog()\">X</div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/components/dialog-head/dialog-head.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/dialog-head/dialog-head.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dialog {\n  position: absolute;\n  top: 7vh;\n  width: 100%;\n  background: rgba(8, 8, 8, 0.3); }\n\n.dialogContainer {\n  width: 700px;\n  margin: auto; }\n\n.v-scroll-box {\n  height: 85vh;\n  padding: 2vh 0;\n  margin-top: 8vh;\n  overflow: auto;\n  display: flex; }\n\n.close {\n  font-size: 55px;\n  padding: 0px;\n  text-align: center;\n  height: 10vh; }\n\n.v-dialog-layout {\n  background: #fff;\n  border-radius: 10px;\n  padding: 0px; }\n\n.title {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUgAAABxCAMAAACAyMrQAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowM2NmYjYwMC1hMmY3LTZmNDgtYWJlMC1iNGZmYjAzMWJjMzkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkM1NUM5NkFEMEVFMTFFODgwMENEOEZGQkQxODU3NDQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkM1NUM5NjlEMEVFMTFFODgwMENEOEZGQkQxODU3NDQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODdmOThjMzEtYmVhZi02ZTRkLWFlNmEtMDM3Yzk0MGNiNzRkIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6N2ZmM2U3MDEtOGNjZC0xMWU4LThiNjItYTNlZTRlMmFkYmVjIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+HvGu/gAAAwBQTFRF0BAc0x4q+Nvd1uDv+d/hx9XpwtLnSni28LK20hglHVekIlunDkKV++vs2T1Hih9F3lVeB0SZ0A4b0RQh311lTnu4zAsZ2kROZYzBUHy5GVSj20dRC0mdEkGTjIyM2dnZwNDmsrKyRHS0gqLNzwoX9fX17Ozs4uLicHBwg4ODoKCgeXl5xcXFqampvLy8z8/PlpaWobnZ0Nzs7/P5scXgJFyo4OjyY4vBNGiuFVGhka3Tc5fHU3+6E0+g+ufoCUid4GBp8fX6CEeczwwZ2uPw766z7fL4P3CyDUueaI/D/fP0/fX25u3143J5iafQ9Pf74WVtkK3T/vn68/b6eZvJN2qvs8bgEE2f54SLdJfH+Pr88LS4GT+OJ1+pDkyf/P3+1ScyyAwc6Y6Ue53K54KJ5Hh/gKDM5HN688DDrsLeZ47Coxc0/O7v+/z9RnW16e/24m112ePw/PDw9tHT2OLvEk6guMrj1i866IqQXoe/76+z/fb3cpbHzwsY65ed99bY6O72/vz8LmSrO22x43F4wdHmyNbpB0ac4WRtzVloX4i/eJrJrBQunRk46ImPxNPn+PT2OjV4Mz6E/fPzWYS9Pm+yYorAFFChohs4vM3kC0OXQjNz4F9ns2uDwJ2x3JWg0yAsjh1Bz9vsKF+pQ3O0h4iwpyZCF1Ki1zQ/CkSY++3u7J6j9MnMqL7c++rrfJ3Kq8Dd0EpY3U9ZV4K8orra65qf+uTmUX66uszk7qmusLzXJV2o3VdgNWmu2F5oRXS0ZilbfCJNdyRQ/f7++fv91Sk0pLvbww0f6IyStBIpIFmmS3m3hqXPdZjIgSJLkq7T54eNWIO8oLjZ/ff4zhEepbzb4mpy/fT1p73c2kBKn7jZ2kNNydfp+N3fID2JLzmAT0WA88LG1N/utMjhtsnit8riphs33llizNnrR3a13+fyvs/l//399fj742935+32LGKr/O/wL2SslRs98r3A8r/CsRMrnlR0thUrapDD8bq9/PHx9tDSBUWbZmZm////9SHFYAAAAQB0Uk5T////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AFP3ByUAAA9OSURBVHja7JoFmCTFFYDRBAgWjiCBdE/PXrtM78zurOLucgQCQUIISYBgwUJCEmIQJ+7u7u4uEHd3d/etynsl3VUts7M5du/yUe/77namuqq6+q+n1bMFNXKryBYGgQFpQBqQjXL0Ax+555a7rV+/5c6XvfuPy/ae6qJ0xp+e9e9rTZPYNLn80D4b23ChMwEyX+s8t7S06UA+9NHr1peyxe6vW6b/9BKI/nATFdERYf8lHfwENk3oaJYKGVYam3ZT6TiJt+yM6LwKICc1edtBlO5/4Pqq7PrdkVOw5U53S5mgJYOlGQWzwkaMmaJ60xyOrnbu0u5Si5Ts5/ArU8kBu9JfW5Daqo78BqWHbV8C3O2afd6y88fhw7rXLqeQmkwq085MtIMEGdBak1TVIajVjJhvDJCs62ypnMXowiz6qwlyOLyuWNR+N1B6r4Li9r/765dZl9ds97wt1l/2sLYZ5rnSdDnPWVDIRbE/8x2QgQpyyJ9IEOYmz5sYqW7Nz80L2pMShsJmWgc5JfWQI63L7Cr7yAl5o31vR+l9JMZ1T3yq0ucN5+924G+ahw+YSc1QOssWO6h5QRWkIFmC7Et/KkFOdjS9YZMu1hwnD1kVt8oWstBoIgXjNQEJqvAAyfGb21R6XXHN+aOGD8XfPh0NslOzbEprfkGxl1rLCJBMEachVhczr6WPLEHentL7HiI47n5yrdu/9zlsZFqie6wxQS7W3DSSqMaxwXggOyzQDbk7WKSbCuTBV9Jj7iE4/rzJIR6z606NTpb7rlnNr8+3gVxJ+gOyKJhMFgnBrPDIXZYiYuAfVgfNFuF7k4A8itK7CY6v+rq8dugpR/zpiNN/JBzlF5qGd5rc0UILSJ5Od4uwhOkPb5ouU6gS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) no-repeat;\n  width: 100%;\n  height: 20vh;\n  background-position: center center; }\n"

/***/ }),

/***/ "./src/app/shared/components/dialog-head/dialog-head.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/dialog-head/dialog-head.component.ts ***!
  \************************************************************************/
/*! exports provided: DialogHeadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogHeadComponent", function() { return DialogHeadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DialogHeadComponent = /** @class */ (function () {
    function DialogHeadComponent(router) {
        this.router = router;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    DialogHeadComponent.prototype.ngOnInit = function () {
    };
    DialogHeadComponent.prototype.closeDialog = function () {
        this.close.emit(false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DialogHeadComponent.prototype, "close", void 0);
    DialogHeadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dialog-head',
            template: __webpack_require__(/*! ./dialog-head.component.html */ "./src/app/shared/components/dialog-head/dialog-head.component.html"),
            styles: [__webpack_require__(/*! ./dialog-head.component.scss */ "./src/app/shared/components/dialog-head/dialog-head.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], DialogHeadComponent);
    return DialogHeadComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/page-iframe/page-iframe.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/page-iframe/page-iframe.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"v-container-layout\">\r\n  <div class=\"ui-g h-top-header\">\r\n    <div class=\"ui-g-6 logo\"></div>\r\n    <div class=\"ui-g-6 buttons\"><button class=\"sign\" (click)=\"showSignDialog()\" *ngIf=\"ifShowSignButton\">登录/注册</button><button\r\n        class=\"exit\" (click)=\"exit()\" *ngIf=\"!ifShowSignButton\">退出登录</button><button class=\"downloadApp text-right\">下载APP</button></div>\r\n  </div>\r\n\r\n  <div class=\"h-bottom\">\r\n    <div class=\"ui-g h-bottom-header\">\r\n      <h4 class=\"ui-g-5\"><span></span>智慧建造信息平台<span></span></h4>\r\n      <ul class=\"ui-g-7 nav\">\r\n        <li *ngFor=\"let item of navArray;index as i\" (click)=\"navClicked(item['link'])\" [ngClass]=\"{navClicked: ifNavClickedArr[i]}\">{{item['name']}}</li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"h-top-content\">\r\n      <img src=\"assets/images/{{picture}}\" alt=\"\">\r\n      <div class=\"title\">\r\n        <h4>{{ZH_TITLE}}</h4><span>{{EN_TITLE}}</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"h-bottom-content\">\r\n      <ng-content></ng-content>\r\n    </div>\r\n    <div class=\"footer\">\r\n      <div class=\"baseMessage\">\r\n        <div class=\"QR\">\r\n          <img src=\"assets/images/QR.png\" alt=\"\">\r\n          <br><span>智慧建造信息平台</span>\r\n          <br><span>扫描下载官方APP</span>\r\n        </div>\r\n        <ul class=\"tools\">\r\n          <li>\r\n            <img src=\"\" alt=\"\">\r\n            <br>\r\n            <i class=\"fa fa-envelope-o\"></i>\r\n          </li>\r\n          <li>\r\n            <img src=\"assets/images/wechat.png\" alt=\"\">\r\n            <br>\r\n            <i class=\"fa fa-weixin\"></i>\r\n          </li>\r\n          <li>\r\n            <img src=\"\" alt=\"\">\r\n            <br>\r\n            <i class=\"fa fa-qq\"></i>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"copyMessage\">\r\n        <span>©2017-2020 北京天辰科技有限公司 版权所有</span>\r\n        <span class=\"centerBase\">京公网安备11010602005793号</span>\r\n        <span>联系电话：010-62419299；18513900020&nbsp;&nbsp;邮箱：icc@iccloudy.com</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-dialog-head (close)=\"closeDialog($event)\" *ngIf=\"ifShowDialog\">\r\n  <app-sign-dialog (clickSignButton)=\"clickSignButton($event)\"></app-sign-dialog>\r\n</app-dialog-head>"

/***/ }),

/***/ "./src/app/shared/components/page-iframe/page-iframe.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/page-iframe/page-iframe.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".h-top-header {\n  height: 5vh;\n  padding-left: 4vw; }\n  .h-top-header > div {\n    height: 100%; }\n  .h-top-header .logo {\n    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAa4AAABOCAMAAABPGAKeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowM2NmYjYwMC1hMmY3LTZmNDgtYWJlMC1iNGZmYjAzMWJjMzkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzA3OUJFMDRDNzE1MTFFODhGMjNERTk2OTREQjg1NjIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzA3OUJFMDNDNzE1MTFFODhGMjNERTk2OTREQjg1NjIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZDk4OGMwYTktNTFiMy0wNzRkLTgyNTEtYjM1MjJlODk1ZjU0IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6N2ZmM2U3MDEtOGNjZC0xMWU4LThiNjItYTNlZTRlMmFkYmVjIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+LzhhrwAAAwBQTFRFpqamcpbHzc3NdW5sytfq/PLy65Wb3UpTMzMzpBg04+r0ycnJ1y03LCws0Q0Z/Pz85HJ5wcHB0xkl54SLRXS0nZ2dobnZ9PT0REREra2tbm5u2TlDubm54WNroqGhS0tL8bi7sbGxFlKi9vb2WoS9eXl5+NnbcXFxqampDAwM4mpx/vr6IyMjGhoakZGR0NDQfn5++uPldXV1hISEvb29xcXFm7TXkYuK+Pj48vLygYGB6/H3YipetbW131VemZmZ1NTU+vr64uLiyMXE7+7uIxgVjY2N19bWXV1dEhISBUWb88LFVVVVlZWV99LV7OzsYlpYure2ZmZm2kJLPT09iIiIaWlpYWFhTENAOTk5g317UkpH39/fe3Rz2+TwIVqnWVlZqaWk2traYovA7qis5OTk0tLS8vX6M2et2NjY+u/w++ztTk6KRDo45XuC3lFa6Ojo8r3A6urq4ODg4Fxk8ba65ubmoZybUVFR9crN31lh983QscXg3Nzc7qSp93Z+EU6gZ2BdmZSTgaLNXFRS9fj7LGKqWVFP8K6yvM3kPjQx7Jyhwb69Iz2IMCYja2Ri0NzsrsLeioSCBAQEzAsa2NbW4uDgOWyw7aGmmh9A8LG10REe6OfnzMvL1jQ/p6Oh1tTUC0mdjqvS//z876uwnpqY9VtlvLu7xcPC3NvanJeWNSso3U5Xh4F/3lNc+d7g3d3d4N7eJhwZ1dPSMykmsa2s1SEsOjAulY+OLiQhD0KV+vv9NzZ6KR4bwg4gT3y5LCEe20dRzwoX1tTTrKin8PDw8fHw8fHx8vHx5eTjcGln8/Pz5OPj6+vrx8TD5eXlOC4r7+/vSkE+9fX1+fn56enpw8DA5+bl6Y2S7e3tt7Szv7y7joiH+8HE/vb3/f39/f7+29nY3dzb/dja9Gx0a5HE1YGO9FRelbDVp77cCkSY0M7NP3Cyt7Oyk2OHwdHmramo9uHkrWF8t8ri/NXX1s/d9cjLy0RTl5KRj4mI0kVSfnh2+/z9eHFvAAAA////LP3NdQAAAQB0Uk5T////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AFP3ByUAABF7SURBVHja7JsNXFRlusBRLMfGMyPqyIDEyE7TeHKGmUBSIJcBPDIjYwqCfEhKmKa1mqUWt6xNS9nIJXcH10zQW1dXDSuWbS3bzBJRQwlZ0Kt3S9q73Xtrb3u73b1370d3z7PP875nvgB3wYV+xZ6nX+N5P845zPs/z+d7JgJU+QZJhLoEKi5VVFyqqLhUXKqouFRRcam4VFFxqaLiUnGpouJSRcWl4lJFxaWKikvFpYqKSxUV118FrpsvPTJ294kTu/esv/7Vb8LXmjB+8h3w3PiF18HdRybfCs+P33MrTBk/9vfwPDWHN65pj08+ESILn//6f63xOt334JJOdz3s0enGwWid7m4Yp9M9Dgt1uhuHE65JYbIRe6aMPdFDJv/NX37j1uLiy/TvPxYXF58d9K81VqebAtcTmtH08W2dbgO8q9M9D/frdIeHE665obJ1CVy5JYTTkYWHF5JR1E2YFnLKgU29RBlZUNxL3ucj5iZp9SkSrSRJ59jRUOBiijWOcE0hUt+jo/XDCdeSG5YFaaXDfQsDrN59nFv9K7njxp945UrwlP1SL1FGqnuP5PGRX0rSH/o+Z4hwbYBXhiMugBF+WkvT4d49AVh3hEy5cmn36KB+jZzB5ZgkVSmHQVx788JlLR/ZJEkHa8JlKHDdwnEd/ivA9cIomObXrd3X95j0xeTeHrtGkmaE9yCurD5vW49kh/JrMVwTdLrnOC60g/uuiutBV05jF6TmrMpJ7TESfbYztSusp8ORUwaZj+Ws6AQ4tyJHefbMp83K+OkcV1n4GTjYGRhWZGbZirJMdlTnqjitdJa5Kjr/ElxPAqxRaI3P7R0uPvJM/3CVhjm1NtY/HwdKYWZ2iGgHH9eGI3vuI1y3QO7Yd2+9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) no-repeat;\n    background-position: center left;\n    background-size: contain; }\n  .h-top-header .buttons {\n    text-align: right;\n    padding: 0 10vw 0 0; }\n  .h-top-header .buttons button {\n    border: none;\n    height: 100%;\n    letter-spacing: 2px;\n    font-size: 18px;\n    padding: 0px 2.5vw;\n    margin: 0px 11px; }\n  .h-top-header button.sign,\n  .h-top-header button.exit {\n    background: #00e9f3;\n    color: #fff; }\n  .ui-g.h-bottom-header {\n  background: rgba(16, 16, 16, 0.5);\n  height: 6vh;\n  line-height: 6vh;\n  padding-left: 4vw;\n  position: absolute;\n  width: 100%;\n  z-index: 10; }\n  .ui-g.h-bottom-header h4 {\n    padding: 0;\n    color: #00E9FE;\n    font-size: 32px;\n    letter-spacing: 2px;\n    font-weight: normal; }\n  .ui-g.h-bottom-header h4 span {\n    display: inline-block;\n    width: 5vw;\n    background: #00e9fe;\n    height: 1px;\n    margin: 0px 15px;\n    line-height: -4vh;\n    vertical-align: middle; }\n  .ui-g.h-bottom-header .nav {\n    display: flex;\n    padding: 0;\n    padding-right: 10vw; }\n  .ui-g.h-bottom-header .nav li {\n      flex: 1;\n      color: #fff;\n      text-align: center; }\n  .ui-g.h-bottom-header .nav .navClicked,\n    .ui-g.h-bottom-header .nav li:hover {\n      color: #00e9fe; }\n  .h-top-content {\n  height: 20vh;\n  position: relative; }\n  .h-top-content img {\n  height: 100%;\n  width: 100%; }\n  .title {\n  text-align: center;\n  position: absolute;\n  width: 100%;\n  top: 0p;\n  color: #fff;\n  top: 9vh; }\n  .title h4 {\n  font-size: 20px;\n  font-weight: normal;\n  letter-spacing: 2px; }\n  .title span {\n  font-size: 12px;\n  line-height: 30px; }\n  .h-bottom {\n  height: 95vh;\n  overflow: auto; }\n  .h-bottom-content {\n  min-height: 55vh;\n  padding: 6vh 8vw;\n  background: #EEEEF0; }\n  .footer {\n  position: relative;\n  height: 20vh;\n  background: url('bottomBG.png') no-repeat; }\n  .copyMessage {\n  color: #797A84;\n  font-size: 15px;\n  position: absolute;\n  bottom: 0;\n  height: 4vh;\n  width: 100%;\n  line-height: 4vh;\n  text-align: center;\n  background: rgba(31, 34, 49, 0.8); }\n  span.centerBase {\n  margin: 0px 5vw; }\n  .QR {\n  position: absolute;\n  left: 25vw;\n  top: 1.5vh;\n  font-size: 12px;\n  text-align: center;\n  color: #d6d6d6; }\n  .QR img {\n  width: 9vh;\n  margin-bottom: 0.5vh; }\n  ul.tools {\n  position: absolute;\n  right: 25vw;\n  top: 2vh; }\n  ul.tools li {\n  float: left;\n  padding: 0px 1.5vw;\n  font-size: 22px;\n  color: #fff;\n  text-align: center; }\n  ul.tools li:hover {\n  color: #00e9fe; }\n  ul.tools li:hover > *:first-child {\n  visibility: visible; }\n  ul.tools li > *:first-child {\n  height: 6vh;\n  display: inline-block;\n  visibility: hidden; }\n  .h-bottom::-webkit-scrollbar {\n  width: 0px; }\n"

/***/ }),

/***/ "./src/app/shared/components/page-iframe/page-iframe.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/page-iframe/page-iframe.component.ts ***!
  \************************************************************************/
/*! exports provided: PageIframeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageIframeComponent", function() { return PageIframeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/token.service */ "./src/app/shared/services/token.service.ts");
/* harmony import */ var _services_link_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/link.service */ "./src/app/shared/services/link.service.ts");
/* harmony import */ var _services_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/cookie.service */ "./src/app/shared/services/cookie.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PageIframeComponent = /** @class */ (function () {
    function PageIframeComponent(router, token, link, cookie) {
        this.router = router;
        this.token = token;
        this.link = link;
        this.cookie = cookie;
    }
    PageIframeComponent.prototype.ngOnInit = function () {
        this.navArray = [
            { name: '首页', link: 'homepage' },
            { name: '我的项目', link: 'myProjects' },
            { name: '工程信息', link: 'projectInformation' },
            { name: '新闻通告', link: 'newsAnnouncement' },
            { name: '个人中心', link: 'personalCenter' },
            { name: '联系我们', link: 'contactUs' },
        ];
        this.ifNavClickedArr = new Array(this.navArray.length);
        this.ifNavClickedArr.fill(false);
        this.ifNavClickedArr[this.NAV_INDEX] = true;
        this.ifShowDialog = false;
        this.token._token === '' ? this.ifShowSignButton = true : this.ifShowSignButton = false;
    };
    PageIframeComponent.prototype.navClicked = function (link) {
        if (!this.ifShowSignButton) {
            this.router.navigate([link]);
        }
        else {
            if (link === 'homepage' || link === 'contactUs') {
                this.router.navigate([link]);
            }
            else {
                this.ifShowDialog = true;
            }
        }
        this.link._link = link;
    };
    PageIframeComponent.prototype.closeDialog = function (e) {
        this.ifShowDialog = e;
    };
    PageIframeComponent.prototype.showSignDialog = function () {
        this.ifShowDialog = true;
    };
    PageIframeComponent.prototype.clickSignButton = function (e) {
        this.ifShowSignButton = e;
        this.ifShowDialog = e;
    };
    PageIframeComponent.prototype.exit = function () {
        this.cookie.setCookie('_idptickeToken', '');
        this.token._token = '';
        this.ifShowSignButton = true;
        this.router.navigate(['homepage']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PageIframeComponent.prototype, "picture", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PageIframeComponent.prototype, "ZH_TITLE", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PageIframeComponent.prototype, "EN_TITLE", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PageIframeComponent.prototype, "NAV_INDEX", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], PageIframeComponent.prototype, "ifShowDialog", void 0);
    PageIframeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-iframe',
            template: __webpack_require__(/*! ./page-iframe.component.html */ "./src/app/shared/components/page-iframe/page-iframe.component.html"),
            styles: [__webpack_require__(/*! ./page-iframe.component.scss */ "./src/app/shared/components/page-iframe/page-iframe.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"], _services_link_service__WEBPACK_IMPORTED_MODULE_3__["LinkService"], _services_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])
    ], PageIframeComponent);
    return PageIframeComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/sign-dialog/sign-dialog.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/sign-dialog/sign-dialog.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-dialog-head> -->\r\n<div class=\"dialog\">\r\n  <div class=\"v-scroll-box\">\r\n    <div class=\"dialogContainer\">\r\n      <div class=\"ui-g-12 v-dialog-layout\">\r\n        <h4 class=\"title\"></h4>\r\n        <form action=\"\">\r\n          <input type=\"text\" placeholder=\"请输入手机号\"><br>\r\n          <input type=\"password\" placeholder=\"请输入密码\"><br>\r\n          <button (click)=\"sign($event)\">登录</button>\r\n        </form>\r\n        <div class=\"ui-g v-tooltop\">\r\n          <div class=\"ui-g-8\">\r\n            <a routerLink=\"/forgetPwd\" routerLinkActive=\"forgetPwd\">忘记密码</a>\r\n            <span>|</span>\r\n            <a routerLink=\"/heroes\" routerLinkActive=\"active\">使用指南</a>\r\n          </div>\r\n          <div class=\"ui-g-4\">\r\n            <a routerLink=\"/regist\" routerLinkActive=\"active\">注册新用户</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/components/sign-dialog/sign-dialog.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/sign-dialog/sign-dialog.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  text-align: center;\n  width: 330px;\n  margin: auto; }\n\ninput {\n  width: 100%;\n  height: 40px;\n  margin: 10px 0;\n  border-radius: 4px;\n  border: 1px solid #c1bfbf;\n  padding: 0px 15px;\n  font-size: 16px; }\n\nform > button {\n  width: 100%;\n  color: #fff;\n  background: #00e9f3;\n  height: 40px;\n  font-size: 20px;\n  border: none;\n  letter-spacing: 4px;\n  border-radius: 5px;\n  margin: 10px 0; }\n\n.ui-g.v-tooltop {\n  margin-top: 4vh;\n  padding: 8px 20px;\n  background: #F7F8FA;\n  border-radius: 0 0 10px 10px; }\n\n.v-tooltop .ui-g-4 {\n  text-align: right; }\n\n.ui-g.v-tooltop * {\n  color: #02dde6;\n  font-size: 18px; }\n\n.ui-g.v-tooltop span {\n  margin: 0 15px; }\n"

/***/ }),

/***/ "./src/app/shared/components/sign-dialog/sign-dialog.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/sign-dialog/sign-dialog.component.ts ***!
  \************************************************************************/
/*! exports provided: SignDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignDialogComponent", function() { return SignDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/token.service */ "./src/app/shared/services/token.service.ts");
/* harmony import */ var _services_link_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/link.service */ "./src/app/shared/services/link.service.ts");
/* harmony import */ var _services_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/cookie.service */ "./src/app/shared/services/cookie.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignDialogComponent = /** @class */ (function () {
    function SignDialogComponent(router, token, link, cookie) {
        this.router = router;
        this.token = token;
        this.link = link;
        this.cookie = cookie;
        this.clickSignButton = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SignDialogComponent.prototype.ngOnInit = function () {
    };
    SignDialogComponent.prototype.sign = function (e) {
        e.preventDefault();
        this.cookie.setCookie('_idptickeToken', '123');
        this.token._token = '123';
        this.router.navigate([this.link._link]);
        this.clickSignButton.emit(false);
    };
    SignDialogComponent.prototype.closeDialog = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SignDialogComponent.prototype, "clickSignButton", void 0);
    SignDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-dialog',
            template: __webpack_require__(/*! ./sign-dialog.component.html */ "./src/app/shared/components/sign-dialog/sign-dialog.component.html"),
            styles: [__webpack_require__(/*! ./sign-dialog.component.scss */ "./src/app/shared/components/sign-dialog/sign-dialog.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"], _services_link_service__WEBPACK_IMPORTED_MODULE_3__["LinkService"], _services_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])
    ], SignDialogComponent);
    return SignDialogComponent;
}());



/***/ }),

/***/ "./src/app/shared/services/cookie.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/cookie.service.ts ***!
  \***************************************************/
/*! exports provided: CookieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieService", function() { return CookieService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CookieService = /** @class */ (function () {
    function CookieService() {
    }
    CookieService.prototype.setCookie = function (name, value, expiredays) {
        document.cookie = name + "=" + value;
    };
    CookieService.prototype.getCookie = function (name) {
        var cookieArr = document.cookie.split(';');
        for (var i = 0; i < cookieArr.length; i++) {
            var cookie = cookieArr[i].split('=');
            if (cookie[0] === name) {
                return cookie[1];
            }
        }
        return '';
    };
    CookieService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CookieService);
    return CookieService;
}());



/***/ }),

/***/ "./src/app/shared/services/link.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/link.service.ts ***!
  \*************************************************/
/*! exports provided: LinkService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkService", function() { return LinkService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LinkService = /** @class */ (function () {
    function LinkService() {
    }
    LinkService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], LinkService);
    return LinkService;
}());



/***/ }),

/***/ "./src/app/shared/services/token.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/token.service.ts ***!
  \**************************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TokenService = /** @class */ (function () {
    function TokenService() {
    }
    TokenService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], TokenService);
    return TokenService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_page_iframe_page_iframe_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/page-iframe/page-iframe.component */ "./src/app/shared/components/page-iframe/page-iframe.component.ts");
/* harmony import */ var _components_sign_dialog_sign_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/sign-dialog/sign-dialog.component */ "./src/app/shared/components/sign-dialog/sign-dialog.component.ts");
/* harmony import */ var _components_dialog_head_dialog_head_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/dialog-head/dialog-head.component */ "./src/app/shared/components/dialog-head/dialog-head.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            ],
            declarations: [_components_page_iframe_page_iframe_component__WEBPACK_IMPORTED_MODULE_2__["PageIframeComponent"], _components_sign_dialog_sign_dialog_component__WEBPACK_IMPORTED_MODULE_3__["SignDialogComponent"], _components_dialog_head_dialog_head_component__WEBPACK_IMPORTED_MODULE_4__["DialogHeadComponent"]],
            exports: [_components_page_iframe_page_iframe_component__WEBPACK_IMPORTED_MODULE_2__["PageIframeComponent"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\workspace-test\Angular\DO-ZHJZ-PC\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map