(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "/Lhg":
    /*!***************************************************!*\
      !*** ./src/app/layout/header/header.component.ts ***!
      \***************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function Lhg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var src_app_core_service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/core/service/rightsidebar.service */
      "ld2u");
      /* harmony import */


      var src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/service/auth.service */
      "KDUW");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_config_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/config/config.service */
      "Cxl7");
      /* harmony import */


      var src_app_core_service_language_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/core/service/language.service */
      "rLcU");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _layout_confirmed_validator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../layout/confirmed.validator */
      "MgoP");
      /* harmony import */


      var _services_request_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../services/request.service */
      "CzMn");
      /* harmony import */


      var angular_feather__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! angular-feather */
      "8mtn");

      function HeaderComponent_ng_template_25_div_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.error2);
        }
      }

      function HeaderComponent_ng_template_25_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h4", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Reset Password ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_ng_template_25_Template_button_click_7_listener() {
            var modal_r2 = ctx.$implicit;
            return modal_r2.dismiss();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "main", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Change Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "p", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Enter Your New Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "form", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function HeaderComponent_ng_template_25_Template_form_ngSubmit_23_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r5.onEditSave(ctx_r5.editForm);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "New Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "input", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Confirm Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "input", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, HeaderComponent_ng_template_25_div_32_Template, 2, 1, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "button", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, " Reset Password ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r1.editForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.error2);
        }
      }

      var document = window.document;

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(toastr, document, renderer, elementRef, modalService, dataService, configService, authService, router, languageService, fb, request //
        ) {
          var _this2 = this;

          _classCallCheck(this, HeaderComponent);

          this.toastr = toastr;
          this.document = document;
          this.renderer = renderer;
          this.elementRef = elementRef;
          this.modalService = modalService;
          this.dataService = dataService;
          this.configService = configService;
          this.authService = authService;
          this.router = router;
          this.languageService = languageService;
          this.fb = fb;
          this.request = request;
          this.config = {};
          this.isNavbarCollapsed = true;
          this.scrollBarHorizontal = window.innerWidth < 1200;
          this.error2 = '';
          this.listLang = [{
            text: 'English',
            flag: 'assets/images/flags/us.jpg',
            lang: 'en'
          }, {
            text: 'Spanish',
            flag: 'assets/images/flags/spain.jpg',
            lang: 'es'
          }, {
            text: 'German',
            flag: 'assets/images/flags/germany.jpg',
            lang: 'de'
          }];
          this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
          this.currentUser = this.currentUserSubject.asObservable();
          this.memberid = this.currentUserSubject.value[0];
          console.log("userrridd", this.memberid.m_id);

          window.onresize = function () {
            _this2.scrollBarHorizontal = window.innerWidth < 1200;
          };

          this.editForm = this.fb.group({
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
            confirm_password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]]
          }, {
            validator: Object(_layout_confirmed_validator__WEBPACK_IMPORTED_MODULE_11__["ConfirmedValidator"])('password', 'confirm_password')
          });

          window.onresize = function () {
            _this2.scrollBarHorizontal = window.innerWidth < 1200;
          };
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.config = this.configService.configData;
            this.langStoreValue = localStorage.getItem('lang');
            var val = this.listLang.filter(function (x) {
              return x.lang === _this3.langStoreValue;
            });
            this.countryName = val.map(function (element) {
              return element.text;
            });

            if (val.length === 0) {
              if (this.flagvalue === undefined) {
                this.defaultFlag = 'assets/images/flags/us.jpg';
              }
            } else {
              this.flagvalue = val.map(function (element) {
                return element.flag;
              });
            }
          }
        }, {
          key: "onEditSave",
          value: function onEditSave(form) {
            var _this4 = this;

            if (this.editForm.invalid) {
              this.error2 = 'Password and Confirm Password must be match.';
              console.log("err2", this.error2); // form.reset();

              return;
            } else {
              var edata = {
                m_id: this.memberid.m_id,
                password: form.value.password
              };
              this.request.updatePassword(edata).subscribe(function (res) {
                if (res[0].status == 'success') {
                  _this4.modalService.dismissAll();

                  _this4.changeRecordSuccess();

                  form.reset();
                  _this4.error2 = '';
                  return true;
                } else if (res[0].status == 'error') {
                  _this4.modalService.dismissAll();
                }
              }, function (error) {
                console.log(error);

                _this4.modalService.dismissAll();
              });
            }
          }
        }, {
          key: "changeRecordSuccess",
          value: function changeRecordSuccess() {
            this.toastr.success('Password Chnged Successfully', '');
            console.log("changed status");
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            // set theme on startup
            if (localStorage.getItem('theme')) {
              this.renderer.removeClass(this.document.body, this.config.layout.variant);
              this.renderer.addClass(this.document.body, localStorage.getItem('theme'));
            } else {
              this.renderer.addClass(this.document.body, this.config.layout.variant);
            }

            if (localStorage.getItem('menuOption')) {
              this.renderer.addClass(this.document.body, localStorage.getItem('menuOption'));
            } else {
              this.renderer.addClass(this.document.body, this.config.layout.sidebar.backgroundColor + '-sidebar');
            }

            if (localStorage.getItem('sidebar_status')) {
              if (localStorage.getItem('sidebar_status') === 'close') {
                this.renderer.addClass(this.document.body, 'side-closed');
                this.renderer.addClass(this.document.body, 'submenu-closed');
              } else {
                this.renderer.removeClass(this.document.body, 'side-closed');
                this.renderer.removeClass(this.document.body, 'submenu-closed');
              }
            } else {
              if (this.config.layout.sidebar.collapsed === true) {
                this.renderer.addClass(this.document.body, 'side-closed');
                this.renderer.addClass(this.document.body, 'submenu-closed');
              }
            }
          }
        }, {
          key: "callFullscreen",
          value: function callFullscreen() {
            if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
              if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
              } else if (document.documentElement.msRequestFullscreen) {
                document.documentElement.msRequestFullscreen();
              } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
              } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen();
              }
            } else {
              if (document.exitFullscreen) {
                document.exitFullscreen();
              } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
              } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
              } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
              }
            }
          }
        }, {
          key: "setLanguage",
          value: function setLanguage(text, lang, flag) {
            this.countryName = text;
            this.flagvalue = flag;
            this.langStoreValue = lang;
            this.languageService.setLanguage(lang);
          }
        }, {
          key: "mobileMenuSidebarOpen",
          value: function mobileMenuSidebarOpen(event, className) {
            if (window.innerWidth < 1025) {
              var hasClass = event.target.classList.contains(className);

              if (hasClass) {
                this.renderer.removeClass(this.document.body, className);
                this.renderer.addClass(this.document.body, 'sidebar-gone');
              } else {
                this.renderer.addClass(this.document.body, className);
                this.renderer.removeClass(this.document.body, 'sidebar-gone');
              }
            } else {
              var _hasClass = this.document.body.classList.contains('side-closed');

              if (_hasClass) {
                this.renderer.removeClass(this.document.body, 'side-closed');
                this.renderer.removeClass(this.document.body, 'submenu-closed');
              } else {
                this.renderer.addClass(this.document.body, 'side-closed');
                this.renderer.addClass(this.document.body, 'submenu-closed');
              }
            }
          }
        }, {
          key: "toggleRightSidebar",
          value: function toggleRightSidebar() {
            this.dataService.changeMsg(this.dataService.currentStatus._isScalar = !this.dataService.currentStatus._isScalar);
          }
        }, {
          key: "logout",
          value: function logout() {
            var _this5 = this;

            this.authService.logout().subscribe(function (res) {
              if (!res.success) {
                _this5.router.navigate(['/authentication/signin']);
              }
            });
          }
        }, {
          key: "ChangePassword",
          value: function ChangePassword(content) {
            this.modalService.open(content, {
              ariaLabelledBy: 'modal-basic-title',
              size: 'lg'
            });
          }
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_0__["RightSidebarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_config_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_service_language_service__WEBPACK_IMPORTED_MODULE_6__["LanguageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_request_service__WEBPACK_IMPORTED_MODULE_12__["RequestService"]));
      };

      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"]])],
        decls: 27,
        vars: 0,
        consts: [[1, "navbar", "navbar-expand-lg", "main-navbar", "sticky", 2, "background-color", "#fefeff"], [1, "form-inline", "mr-auto"], [1, "navbar-nav", "mr-3"], ["data-toggle", "sidebar", 1, "nav-li", "collapse-btn", 3, "click"], ["name", "menu"], [1, "navbar-nav", "navbar-right"], [1, "nav-link", 2, "color", "blue", 3, "click"], ["name", "maximize"], ["ngbDropdown", ""], ["ngbDropdownToggle", "", "data-toggle", "dropdown", 1, "nav-link", "dropdown-toggle", "nav-link-lg", "nav-link-user"], ["alt", "image", "src", "assets/images/user.png", 1, "user-img-radious-style", "collapse-btn"], [1, "d-sm-none", "d-lg-inline-block"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-right", "pullDown"], ["routerLink", "/profile", 1, "dropdown-item", "has-icon"], [1, "fa", "fa-user"], [1, "dropdown-item", "has-icon", 3, "click"], [1, "fa", "fa-key"], [1, "dropdown-divider"], ["href", "javascript:void(0);", 1, "dropdown-item", "has-icon", "text-danger", 3, "click"], [1, "fas", "fa-sign-out-alt"], ["changeRecord", ""], [1, "modal-header", "editRowModal"], ["id", "modal-basic-title", 1, "modal-title"], [1, "table-modal-header"], ["src", "assets/images/JCOM logo 4.jpg", "alt", "avatar"], [1, "modal-about"], [1, "font-weight-bold", "p-t-10", "font-17"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "material-icons"], [1, "d-flex", "align-items-center", "min-vh-100", "py-3", "py-md-0"], [1, "container"], [1, "auth-card"], [1, "row"], [1, "col-12"], [1, "card", "card-primary"], [1, "card-header"], [1, "card-body"], [1, "text-muted"], [1, "edit-form", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "password", "formControlName", "password", "required", "", 1, "form-control"], ["type", "password", "formControlName", "confirm_password", "required", "", 1, "form-control"], ["class", "alert alert-danger mb-3 msl-3", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", "btn-block"], [1, "alert", "alert-danger", "mb-3", "msl-3"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ul", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_4_listener($event) {
              return ctx.mobileMenuSidebarOpen($event, "overlay-open");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "i-feather", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_8_listener() {
              return ctx.callFullscreen();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "i-feather", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " Profile ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_18_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](26);

              return ctx.ChangePassword(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, " ChangePassword ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_22_listener() {
              return ctx.logout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, " Logout ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, HeaderComponent_ng_template_25_Template, 36, 2, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbNavbar"], angular_feather__WEBPACK_IMPORTED_MODULE_13__["FeatherComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbDropdownMenu"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNhc3MifQ== */"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](HeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.sass'],
            providers: [ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"]]
          }]
        }], function () {
          return [{
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"]
          }, {
            type: Document,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }, {
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"]
          }, {
            type: src_app_core_service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_0__["RightSidebarService"]
          }, {
            type: src_app_config_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"]
          }, {
            type: src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: src_app_core_service_language_service__WEBPACK_IMPORTED_MODULE_6__["LanguageService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"]
          }, {
            type: _services_request_service__WEBPACK_IMPORTED_MODULE_12__["RequestService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! D:\NEO-PROJECTS\jcom\JCOM-ui\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "1EDf":
    /*!********************************************!*\
      !*** ./src/app/shared/bootstrap.module.ts ***!
      \********************************************/

    /*! exports provided: BootstrapModule */

    /***/
    function EDf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BootstrapModule", function () {
        return BootstrapModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      var bootstrapModules = [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModule"]];

      var BootstrapModule = function BootstrapModule() {
        _classCallCheck(this, BootstrapModule);
      };

      BootstrapModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: BootstrapModule
      });
      BootstrapModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function BootstrapModule_Factory(t) {
          return new (t || BootstrapModule)();
        },
        imports: [[bootstrapModules], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BootstrapModule, {
          imports: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModule"]],
          exports: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModule"]]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BootstrapModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [],
            imports: [bootstrapModules],
            exports: [bootstrapModules]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "3IAN":
    /*!******************************************!*\
      !*** ./src/app/core/guard/auth.guard.ts ***!
      \******************************************/

    /*! exports provided: AuthGuard */

    /***/
    function IAN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../service/auth.service */
      "KDUW");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(authService, router) {
          _classCallCheck(this, AuthGuard);

          this.authService = authService;
          this.router = router;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            if (this.authService.currentUserValue) {
              return true;
            }

            this.router.navigate(['/authentication/signin']);
            return false;
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthGuard,
        factory: AuthGuard.ɵfac,
        providedIn: 'root'
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "4veq":
    /*!*************************************************!*\
      !*** ./src/app/layout/sidebar/sidebar-items.ts ***!
      \*************************************************/

    /*! exports provided: ROUTES */

    /***/
    function veq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ROUTES", function () {
        return ROUTES;
      });

      var ROUTES = [{
        path: '/dashboard/main',
        title: 'Dashboard',
        moduleName: 'dashboard',
        iconType: 'feather',
        icon: 'trello',
        "class": '',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        submenu: []
      }, {
        path: 'profile',
        title: 'Profile',
        moduleName: 'profile',
        iconType: 'feather',
        icon: 'user',
        "class": '',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        submenu: []
      }, {
        path: 'connectentry',
        title: 'Connect Entry',
        moduleName: 'connectentry',
        iconType: 'feather',
        icon: 'file-text',
        "class": '',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        submenu: []
      }, {
        path: 'gnoteentry',
        title: 'GNote Entry',
        moduleName: 'gnoteentry',
        iconType: 'feather',
        icon: 'copy',
        "class": '',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        submenu: []
      }, {
        path: 'showcase',
        title: 'ShowCase',
        moduleName: 'showcase',
        iconType: 'feather',
        icon: 'server',
        "class": '',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        submenu: []
      }, {
        path: 'jcomtables',
        title: 'JCOM Tables',
        moduleName: 'jcomtables',
        iconType: 'feather',
        icon: 'columns',
        "class": '',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        submenu: []
      }, {
        path: 'searchmembers',
        title: 'Search Members',
        moduleName: 'searchmembers',
        iconType: 'feather',
        icon: 'search',
        "class": '',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        submenu: []
      }, {
        path: 'guestreg',
        title: 'Guest Registration',
        moduleName: 'guestreg',
        iconType: 'feather',
        icon: 'users',
        "class": '',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        submenu: []
      }];
      /***/
    },

    /***/
    "57d4":
    /*!*****************************************************************!*\
      !*** ./src/app/layout/right-sidebar/right-sidebar.component.ts ***!
      \*****************************************************************/

    /*! exports provided: RightSidebarComponent */

    /***/
    function d4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RightSidebarComponent", function () {
        return RightSidebarComponent;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_core_service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/service/rightsidebar.service */
      "ld2u");
      /* harmony import */


      var _config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../config/config.service */
      "Cxl7");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "Kdsb");

      var _c0 = function _c0(a1, a2) {
        return {
          "position": "relative",
          "max-height": a1,
          "max-width": a2
        };
      };

      var _c1 = function _c1(a0) {
        return {
          "active": a0
        };
      };

      var RightSidebarComponent = /*#__PURE__*/function () {
        function RightSidebarComponent(document, renderer, elementRef, dataService, configService) {
          _classCallCheck(this, RightSidebarComponent);

          this.document = document;
          this.renderer = renderer;
          this.elementRef = elementRef;
          this.dataService = dataService;
          this.configService = configService;
          this.selectedBgColor = 'white';
          this.showpanel = false;
          this.isDarkSidebar = false;
          this.isDarTheme = false;
          this.headerHeight = 60;
          this.config = {};
        }

        _createClass(RightSidebarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            this.config = this.configService.configData;
            this.dataService.currentStatus.subscribe(function (data) {
              _this6.isOpenSidebar = data;
            });
            this.setMenuHeight();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            // set header color on startup
            if (localStorage.getItem('choose_skin')) {
              this.renderer.addClass(this.document.body, localStorage.getItem('choose_skin'));
              this.selectedBgColor = localStorage.getItem('choose_skin_active');
            } else {
              this.renderer.addClass(this.document.body, 'theme-' + this.config.layout.theme_color);
              this.selectedBgColor = this.config.layout.theme_color;
            }

            if (localStorage.getItem('menuOption')) {
              if (localStorage.getItem('menuOption') === 'dark-sidebar') {
                this.isDarkSidebar = true;
              } else if (localStorage.getItem('menuOption') === 'light-sidebar') {
                this.isDarkSidebar = false;
              } else {
                this.isDarkSidebar = this.config.layout.sidebar.backgroundColor === 'dark' ? true : false;
              }
            } else {
              this.isDarkSidebar = this.config.layout.sidebar.backgroundColor === 'dark' ? true : false;
            }

            if (localStorage.getItem('theme')) {
              if (localStorage.getItem('theme') === 'dark') {
                this.isDarTheme = true;
              } else if (localStorage.getItem('theme') === 'light') {
                this.isDarTheme = false;
              } else {
                this.isDarTheme = this.config.layout.variant === 'dark' ? true : false;
              }
            } else {
              this.isDarTheme = this.config.layout.variant === 'dark' ? true : false;
            }
          }
        }, {
          key: "windowResizecall",
          value: function windowResizecall(event) {
            this.setMenuHeight();
          }
        }, {
          key: "setMenuHeight",
          value: function setMenuHeight() {
            var height = window.innerHeight - this.headerHeight;
            this.maxHeight = height + '';
          }
        }, {
          key: "selectTheme",
          value: function selectTheme(e) {
            this.selectedBgColor = e;
            var prevTheme = this.elementRef.nativeElement.querySelector('.choose-theme li.active').getAttribute('data-theme');
            this.renderer.removeClass(this.document.body, 'theme-' + prevTheme);
            this.renderer.addClass(this.document.body, 'theme-' + this.selectedBgColor);
            localStorage.setItem('choose_skin', 'theme-' + this.selectedBgColor);
            localStorage.setItem('choose_skin_active', this.selectedBgColor);
          }
        }, {
          key: "lightSidebarBtnClick",
          value: function lightSidebarBtnClick() {
            this.renderer.removeClass(this.document.body, 'dark-sidebar');
            this.renderer.addClass(this.document.body, 'light-sidebar');
            var menuOption = 'light-sidebar';
            localStorage.setItem('menuOption', menuOption);
          }
        }, {
          key: "darkSidebarBtnClick",
          value: function darkSidebarBtnClick() {
            this.renderer.removeClass(this.document.body, 'light-sidebar');
            this.renderer.addClass(this.document.body, 'dark-sidebar');
            var menuOption = 'dark-sidebar';
            localStorage.setItem('menuOption', menuOption);
          }
        }, {
          key: "lightThemeBtnClick",
          value: function lightThemeBtnClick() {
            this.renderer.removeClass(this.document.body, 'dark');
            this.renderer.removeClass(this.document.body, 'dark-sidebar');

            if (localStorage.getItem('choose_skin')) {
              this.renderer.removeClass(this.document.body, localStorage.getItem('choose_skin'));
            } else {
              this.renderer.removeClass(this.document.body, 'theme-' + this.config.layout.theme_color);
            }

            this.renderer.addClass(this.document.body, 'light');
            this.renderer.addClass(this.document.body, 'light-sidebar');
            this.renderer.addClass(this.document.body, 'theme-white');
            var theme = 'light';
            var menuOption = 'light-sidebar';
            this.selectedBgColor = 'white';
            this.isDarkSidebar = false;
            localStorage.setItem('choose_skin', 'theme-white');
            localStorage.setItem('theme', theme);
            localStorage.setItem('menuOption', menuOption);
          }
        }, {
          key: "darkThemeBtnClick",
          value: function darkThemeBtnClick() {
            this.renderer.removeClass(this.document.body, 'light');
            this.renderer.removeClass(this.document.body, 'light-sidebar');

            if (localStorage.getItem('choose_skin')) {
              this.renderer.removeClass(this.document.body, localStorage.getItem('choose_skin'));
            } else {
              this.renderer.removeClass(this.document.body, 'theme-' + this.config.layout.theme_color);
            }

            this.renderer.addClass(this.document.body, 'dark');
            this.renderer.addClass(this.document.body, 'dark-sidebar');
            this.renderer.addClass(this.document.body, 'theme-black');
            var theme = 'dark';
            var menuOption = 'dark-sidebar';
            this.selectedBgColor = 'black';
            this.isDarkSidebar = true;
            localStorage.setItem('choose_skin', 'theme-black');
            localStorage.setItem('theme', theme);
            localStorage.setItem('menuOption', menuOption);
          }
        }, {
          key: "toggleRightSidebar",
          value: function toggleRightSidebar() {
            this.dataService.changeMsg(this.dataService.currentStatus._isScalar = !this.dataService.currentStatus._isScalar);
          }
        }]);

        return RightSidebarComponent;
      }();

      RightSidebarComponent.ɵfac = function RightSidebarComponent_Factory(t) {
        return new (t || RightSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_2__["RightSidebarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]));
      };

      RightSidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: RightSidebarComponent,
        selectors: [["app-right-sidebar"]],
        hostBindings: function RightSidebarComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function RightSidebarComponent_resize_HostBindingHandler($event) {
              return ctx.windowResizecall($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
          }
        },
        decls: 54,
        vars: 30,
        consts: [[1, "settingSidebar", 3, "ngClass"], ["href", "javascript:void(0)", 1, "settingPanelToggle", 3, "click"], [1, "fa", "fa-spin", "fa-cog"], [1, "settingSidebar-body", "ps-container", "ps-theme-default", 3, "ngStyle", "perfectScrollbar"], [1, "fade", "show", "active"], [1, "setting-panel-header"], [1, "p-15", "border-bottom"], [1, "font-medium", "m-b-10"], [1, "flex", "flex-wrap", "hiddenradio"], [1, "flex", "flex-col"], ["type", "radio", "name", "value", "value", "light", 3, "checked", "click"], ["src", "assets/images/light.png"], [1, "mt-1", "text-md", "text-center"], [1, "flex", "flex-col", "mt-3"], ["type", "radio", "name", "value", "value", "dark", 3, "checked", "click"], ["src", "assets/images/dark.png"], [1, "selectgroup", "selectgroup-pills", "sidebar-color"], [1, "selectgroup-item"], ["type", "radio", "name", "icon-input", "value", "light", 1, "selectgroup-input", "select-sidebar", 3, "checked", "click"], ["data-toggle", "tooltip", "data-original-title", "Light Sidebar", 1, "selectgroup-button", "selectgroup-button-icon"], [1, "fas", "fa-sun"], ["type", "radio", "name", "icon-input", 1, "selectgroup-input", "select-sidebar", 3, "checked", "click"], ["data-toggle", "tooltip", "data-original-title", "Dark Sidebar", 1, "selectgroup-button", "selectgroup-button-icon"], [1, "fas", "fa-moon"], [1, "theme-setting-options"], [1, "choose-theme", "list-unstyled", "mb-0"], ["data-theme", "white", 3, "ngClass", "click"], [1, "white"], ["data-theme", "cyan", 3, "ngClass", "click"], [1, "cyan"], ["data-theme", "black", 3, "ngClass", "click"], [1, "black"], ["data-theme", "purple", 3, "ngClass", "click"], [1, "purple"], ["data-theme", "orange", 3, "ngClass", "click"], [1, "orange"], ["data-theme", "green", 3, "ngClass", "click"], [1, "green"], ["data-theme", "red", 3, "ngClass", "click"], [1, "red"]],
        template: function RightSidebarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RightSidebarComponent_Template_a_click_1_listener() {
              return ctx.toggleRightSidebar();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Setting Panel ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h6", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Select Layout");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RightSidebarComponent_Template_input_click_13_listener() {
              return ctx.lightThemeBtnClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Light ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RightSidebarComponent_Template_input_click_19_listener() {
              return ctx.darkThemeBtnClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Dark ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "h6", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Sidebar Color");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RightSidebarComponent_Template_input_click_28_listener() {
              return ctx.lightSidebarBtnClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "i", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RightSidebarComponent_Template_input_click_32_listener() {
              return ctx.darkSidebarBtnClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "i", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "h6", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Color Theme");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "ul", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "li", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RightSidebarComponent_Template_li_click_40_listener() {
              return ctx.selectTheme("white");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "li", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RightSidebarComponent_Template_li_click_42_listener() {
              return ctx.selectTheme("cyan");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "li", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RightSidebarComponent_Template_li_click_44_listener() {
              return ctx.selectTheme("black");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "li", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RightSidebarComponent_Template_li_click_46_listener() {
              return ctx.selectTheme("purple");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "li", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RightSidebarComponent_Template_li_click_48_listener() {
              return ctx.selectTheme("orange");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "li", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RightSidebarComponent_Template_li_click_50_listener() {
              return ctx.selectTheme("green");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "li", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RightSidebarComponent_Template_li_click_52_listener() {
              return ctx.selectTheme("red");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.isOpenSidebar ? "showSettingPanel" : "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](13, _c0, ctx.maxHeight + "px", ctx.maxWidth + "px"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx.isDarTheme == false ? true : false);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx.isDarTheme == true ? true : false);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx.isDarkSidebar == false ? true : false);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx.isDarkSidebar == true ? true : false);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](16, _c1, ctx.selectedBgColor === "white"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](18, _c1, ctx.selectedBgColor === "cyan"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](20, _c1, ctx.selectedBgColor === "black"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](22, _c1, ctx.selectedBgColor === "purple"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](24, _c1, ctx.selectedBgColor === "orange"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](26, _c1, ctx.selectedBgColor === "green"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](28, _c1, ctx.selectedBgColor === "red"));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgStyle"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarDirective"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyaWdodC1zaWRlYmFyLmNvbXBvbmVudC5zYXNzIn0= */"],
        changeDetection: 0
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RightSidebarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            selector: 'app-right-sidebar',
            templateUrl: './right-sidebar.component.html',
            styleUrls: ['./right-sidebar.component.sass']
          }]
        }], function () {
          return [{
            type: Document,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: src_app_core_service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_2__["RightSidebarService"]
          }, {
            type: _config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]
          }];
        }, {
          windowResizecall: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['window:resize', ['$event']]
          }]
        });
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: true,
        firebase: {},
        baseURL1: 'https://tranzporter.herokuapp.com',
        //jcom api
        baseURL2: 'https://admin.jcombiz.com/jcomweb'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
      // export const environment = {
      //   production: true,
      //   firebase: {
      //     apiKey: "AIzaSyAoLcNgydeYwT0xYeSpENDZv_d7ecRYg5g",
      //     authDomain: "kargos.firebaseapp.com",
      //     projectId: "kargos",
      //     databaseURL: "https://kargos.firebaseio.com",
      //     storageBucket: "kargos.appspot.com",
      //     messagingSenderId: "538130488263",
      //     appId: "1:538130488263:web:3608a68144475cb2d797e2",
      //     measurementId: "G-6YC49795VM"
      //   }
      // };

      /***/
    },

    /***/
    "Cxl7":
    /*!******************************************!*\
      !*** ./src/app/config/config.service.ts ***!
      \******************************************/

    /*! exports provided: ConfigService */

    /***/
    function Cxl7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfigService", function () {
        return ConfigService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ConfigService = /*#__PURE__*/function () {
        function ConfigService() {
          _classCallCheck(this, ConfigService);

          this.setConfigData();
        }

        _createClass(ConfigService, [{
          key: "setConfigData",
          value: function setConfigData() {
            this.configData = {
              layout: {
                variant: 'light',
                theme_color: 'purple',
                sidebar: {
                  collapsed: false,
                  backgroundColor: 'light'
                }
              }
            };
          }
        }]);

        return ConfigService;
      }();

      ConfigService.ɵfac = function ConfigService_Factory(t) {
        return new (t || ConfigService)();
      };

      ConfigService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ConfigService,
        factory: ConfigService.ɵfac,
        providedIn: 'root'
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "CzMn":
    /*!*********************************************!*\
      !*** ./src/app/services/request.service.ts ***!
      \*********************************************/

    /*! exports provided: RequestService */

    /***/
    function CzMn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RequestService", function () {
        return RequestService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");

      var RequestService = /*#__PURE__*/function () {
        function RequestService(http) {
          _classCallCheck(this, RequestService);

          this.http = http;
          this.endPoint = 'https://tamilrise.herokuapp.com';
          this.endPoint1 = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseURL1;
          this.endPoint2 = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseURL2;
        }

        _createClass(RequestService, [{
          key: "adminlogin",
          value: function adminlogin(credentials) {
            console.log('credentials2', credentials);
            this.url = "".concat(this.endPoint1, "/api_seller/login.php");
            return this.http.post(this.url, credentials);
          }
        }, {
          key: "adminotplogin",
          value: function adminotplogin(credentials) {
            console.log('credentials2', credentials);
            this.url = "".concat(this.endPoint1, "/api_seller/login_otp.php");
            return this.http.post(this.url, credentials);
          }
        }, {
          key: "adminotploginverify",
          value: function adminotploginverify(credentials) {
            console.log('credentials2', credentials);
            this.url = "".concat(this.endPoint1, "/api_seller/login_otp_verification.php");
            return this.http.post(this.url, credentials);
          }
        }, {
          key: "loadpincodebyins",
          value: function loadpincodebyins(credentials) {
            console.log('credentials2', credentials);
            this.url = "".concat(this.endPoint1, "/api_seller/get_pincode.php");
            return this.http.post(this.url, credentials);
          }
        }, {
          key: "addseller",
          value: function addseller(credentials) {
            console.log('credentials2', credentials);
            this.url = "".concat(this.endPoint1, "/api_seller/seller_signup.php");
            return this.http.post(this.url, credentials);
          }
        }, {
          key: "addsellerotp",
          value: function addsellerotp(credentials) {
            console.log('credentials2', credentials);
            this.url = "".concat(this.endPoint1, "/api_seller/seller_otp_verification.php");
            return this.http.post(this.url, credentials);
          }
        }, {
          key: "send_kyc_a",
          value: function send_kyc_a(credentials) {
            console.log('credentials2', credentials);
            this.url = "".concat(this.endPoint1, "/api_seller/send_kyc_a.php");
            return this.http.post(this.url, credentials).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (cr) {
              console.log("ttttttttt", cr);
            }));
          }
        }, {
          key: "send_kyc_b",
          value: function send_kyc_b(credentials) {
            console.log('credentials2', credentials);
            this.url = "".concat(this.endPoint1, "/api_seller/send_kyc_b.php");
            return this.http.post(this.url, credentials);
          }
        }, {
          key: "send_kyc_c",
          value: function send_kyc_c(credentials) {
            console.log('credentials2', credentials);
            this.url = "".concat(this.endPoint1, "/api_seller/send_kyc_c.php");
            return this.http.post(this.url, credentials);
          } //meeting type

        }, {
          key: "getmeetingtype",
          value: function getmeetingtype() {
            this.url = "".concat(this.endPoint2, "/get_meeting_type.php");
            return this.http.get(this.url);
          } //profile

        }, {
          key: "fetchuserBymId",
          value: function fetchuserBymId(id) {
            this.url = "".concat(this.endPoint2, "/get_member_details.php?m_id=") + id;
            return this.http.get(this.url);
          }
        }, {
          key: "updateprofile",
          value: function updateprofile(body) {
            this.url = "".concat(this.endPoint2, "/send_member_details.php");
            return this.http.put(this.url, body);
          } //pincode

        }, {
          key: "fetchpinBy",
          value: function fetchpinBy(id) {
            this.url = "".concat(this.endPoint2, "/get_pincode.php?pincode=") + id;
            return this.http.get(this.url);
          } //showcase

        }, {
          key: "fetchshowcaseById",
          value: function fetchshowcaseById(id) {
            this.url = "".concat(this.endPoint2, "/get_showcase_history.php?m_id=") + id;
            return this.http.get(this.url);
          }
        }, {
          key: "addshowcase",
          value: function addshowcase(newshow) {
            this.url = "".concat(this.endPoint2, "/send_showcase.php");
            return this.http.post(this.url, newshow);
          } //guest reg

        }, {
          key: "fetchguestById",
          value: function fetchguestById(id) {
            this.url = "".concat(this.endPoint2, "/get_guest_history.php?m_id=") + id;
            return this.http.get(this.url);
          }
        }, {
          key: "addguest",
          value: function addguest(newguest) {
            this.url = "".concat(this.endPoint2, "/send_guest.php");
            return this.http.post(this.url, newguest);
          } //business category 

        }, {
          key: "fetchbusiness",
          value: function fetchbusiness() {
            this.url = "".concat(this.endPoint2, "/get_business_category.php");
            return this.http.get(this.url);
          } // connectentry

        }, {
          key: "fetchconnectById",
          value: function fetchconnectById(id) {
            this.url = "".concat(this.endPoint2, "/get_connect_list.php?m_id=") + id;
            return this.http.get(this.url);
          }
        }, {
          key: "getconnectpending",
          value: function getconnectpending(id) {
            this.url = "".concat(this.endPoint2, "/get_guest_history.php?m_id=") + id;
            return this.http.get(this.url);
          }
        }, {
          key: "fetchpersonById",
          value: function fetchpersonById(id) {
            this.url = "".concat(this.endPoint2, "/get_guest_history.php?m_id=") + id;
            return this.http.get(this.url);
          }
        }, {
          key: "addconnect",
          value: function addconnect(newconnect) {
            this.url = "".concat(this.endPoint2, "/send_connect.php");
            return this.http.post(this.url, newconnect);
          } // pendingconnect

        }, {
          key: "fetchpendingconnectById",
          value: function fetchpendingconnectById(id) {
            this.url = "".concat(this.endPoint2, "/get_pending_connect.php?m_id=") + id;
            return this.http.get(this.url);
          }
        }, {
          key: "poststatus",
          value: function poststatus(newconnect) {
            this.url = "".concat(this.endPoint2, "/send_marku.php");
            console.log("sts", newconnect);
            return this.http.post(this.url, newconnect);
          } //gnoteentry

        }, {
          key: "fetchgnoteById",
          value: function fetchgnoteById(id) {
            this.url = "".concat(this.endPoint2, "/get_gnote_list.php?m_id=") + id;
            return this.http.get(this.url);
          } //change password

        }, {
          key: "updatePassword",
          value: function updatePassword(body) {
            this.url = "".concat(this.endPoint2, "/change_password.php");
            return this.http.put(this.url, body);
          } //tables

        }, {
          key: "gettables",
          value: function gettables() {
            this.url = "".concat(this.endPoint2, "/get_jcom_table.php");
            return this.http.get(this.url);
          } //tablemembers

        }, {
          key: "gettablemembers",
          value: function gettablemembers(id, id2) {
            this.url = "".concat(this.endPoint2, "/get_member_list.php?m_id=") + id + '&table_id=' + id2;
            return this.http.get(this.url);
          } // public fetchtableById(id) {
          //   this.url = `${this.endPoint2}/get_gnote_list.php?m_id=` + id;
          //   return this.http.get(this.url);
          // }
          //get member connect

        }, {
          key: "getconnectmembers",
          value: function getconnectmembers(id, id2) {
            this.url = "".concat(this.endPoint2, "/get_connect_member.php?m_id=") + id + '&to_member_id=' + id2;
            return this.http.get(this.url);
          }
        }, {
          key: "addgnote",
          value: function addgnote(newgnote) {
            this.url = "".concat(this.endPoint2, "/send_gnote.php");
            return this.http.post(this.url, newgnote);
          } //search by key

        }, {
          key: "getkeymembers",
          value: function getkeymembers(id, key) {
            this.url = "".concat(this.endPoint2, "/get_keyword_search.php?m_id=") + id + '&keyword=' + key;
            return this.http.get(this.url);
          }
        }, {
          key: "getbusinessmembers",
          value: function getbusinessmembers(id, id2) {
            this.url = "".concat(this.endPoint2, "/get_category_members.php?m_id=") + id + '&category_id=' + id2;
            return this.http.get(this.url);
          } //customer

        }, {
          key: "getcustomer",
          value: function getcustomer() {
            this.url = "".concat(this.endPoint1, "/customer/");
            return this.http.get(this.url);
          }
        }, {
          key: "addcustomer",
          value: function addcustomer(newexam) {
            this.url = "".concat(this.endPoint1, "/customer/add");
            return this.http.post(this.url, newexam);
          }
        }, {
          key: "deletecustomer",
          value: function deletecustomer(id) {
            this.url = "".concat(this.endPoint1, "/customer/delete?id=") + id;
            return this.http["delete"](this.url);
          }
        }, {
          key: "fetchcustomerById",
          value: function fetchcustomerById(id) {
            this.url = "".concat(this.endPoint1, "/customer/fetchdata?id=") + id;
            return this.http.get(this.url);
          }
        }, {
          key: "updatecustomer",
          value: function updatecustomer(id, body) {
            this.url = "".concat(this.endPoint1, "/customer/update?id=").concat(id);
            return this.http.put(this.url, body);
          }
        }, {
          key: "fetchpendingagreegationById",
          value: function fetchpendingagreegationById(id) {
            this.url = "".concat(this.endPoint1, "/booking/acceptedaggregation?_id=") + id + '&Bookingstatus=Pending';
            return this.http.get(this.url);
          } //user

        }, {
          key: "getuser",
          value: function getuser() {
            this.url = "".concat(this.endPoint1, "/customer/");
            return this.http.get(this.url);
          }
        }, {
          key: "adduser",
          value: function adduser(newexam) {
            this.url = "".concat(this.endPoint1, "/user/add");
            return this.http.post(this.url, newexam);
          }
        }, {
          key: "deleteuser",
          value: function deleteuser(id) {
            this.url = "".concat(this.endPoint1, "/user/delete?id=") + id;
            return this.http["delete"](this.url);
          }
        }, {
          key: "fetchuserById",
          value: function fetchuserById(id) {
            this.url = "".concat(this.endPoint1, "/user/fetchdata?id=") + id;
            return this.http.get(this.url);
          }
        }, {
          key: "updateuser",
          value: function updateuser(id, body) {
            this.url = "".concat(this.endPoint1, "/user/update?id=").concat(id);
            return this.http.put(this.url, body);
          } //goodstype

        }, {
          key: "getgoodstype",
          value: function getgoodstype() {
            this.url = "".concat(this.endPoint1, "/goods/");
            return this.http.get(this.url);
          }
        }, {
          key: "addgoodstype",
          value: function addgoodstype(newexam) {
            this.url = "".concat(this.endPoint1, "/goods/add");
            return this.http.post(this.url, newexam);
          }
        }, {
          key: "deletegoodstype",
          value: function deletegoodstype(id) {
            this.url = "".concat(this.endPoint1, "/goods/delete?id=") + id;
            return this.http["delete"](this.url);
          }
        }, {
          key: "fetchgoodstypeById",
          value: function fetchgoodstypeById(id) {
            this.url = "".concat(this.endPoint1, "/goods/fetchdata?id=") + id;
            return this.http.get(this.url);
          }
        }, {
          key: "updategoodstype",
          value: function updategoodstype(id, body) {
            this.url = "".concat(this.endPoint1, "/goods/update?id=").concat(id);
            return this.http.put(this.url, body);
          }
        }, {
          key: "getpending",
          value: function getpending() {
            this.url = "".concat(this.endPoint1, "/booking/aggregation");
            return this.http.get(this.url);
          }
        }, {
          key: "getAccepted",
          value: function getAccepted() {
            this.url = "".concat(this.endPoint1, "/booking/acceptaggregation?Bookingstatus=Accepted");
            return this.http.get(this.url);
          }
        }, {
          key: "getComplted",
          value: function getComplted() {
            this.url = "".concat(this.endPoint1, "/booking/acceptaggregation?Bookingstatus=Closed");
            return this.http.get(this.url);
          }
        }, {
          key: "getcanceled",
          value: function getcanceled() {
            this.url = "".concat(this.endPoint1, "/booking/acceptaggregation?Bookingstatus=Cancel");
            return this.http.get(this.url);
          } //vechicle

        }, {
          key: "getvechiclecost",
          value: function getvechiclecost(id) {
            this.url = "".concat(this.endPoint1, "/vechicalcost/fetchdata1?Vechicle=") + id;
            return this.http.get(this.url);
          }
        }, {
          key: "addvechiclecost",
          value: function addvechiclecost(newexam) {
            this.url = "".concat(this.endPoint1, "/vechicalcost/add");
            return this.http.post(this.url, newexam);
          }
        }, {
          key: "deletevechiclecost",
          value: function deletevechiclecost(id) {
            this.url = "".concat(this.endPoint1, "/vechicalcost/delete?id=") + id;
            return this.http["delete"](this.url);
          }
        }, {
          key: "fetchvechiclecostById",
          value: function fetchvechiclecostById(id) {
            this.url = "".concat(this.endPoint1, "/vechicalcost/fetchdata?id=") + id;
            return this.http.get(this.url);
          }
        }, {
          key: "updatevechiclecost",
          value: function updatevechiclecost(id, body) {
            this.url = "".concat(this.endPoint1, "/vechicalcost/update?id=").concat(id);
            return this.http.put(this.url, body);
          } //vechiclecost

        }, {
          key: "getvechicle",
          value: function getvechicle() {
            this.url = "".concat(this.endPoint1, "/vechicle/");
            return this.http.get(this.url);
          }
        }, {
          key: "addvechicle",
          value: function addvechicle(newexam) {
            this.url = "".concat(this.endPoint1, "/vechicle/add");
            return this.http.post(this.url, newexam);
          }
        }, {
          key: "deletevechicle",
          value: function deletevechicle(id) {
            this.url = "".concat(this.endPoint1, "/vechicle/delete?id=") + id;
            return this.http["delete"](this.url);
          }
        }, {
          key: "fetchvechicleById",
          value: function fetchvechicleById(id) {
            this.url = "".concat(this.endPoint1, "/vechicle/fetchdata?id=") + id;
            return this.http.get(this.url);
          }
        }, {
          key: "updatevechicle",
          value: function updatevechicle(id, body) {
            this.url = "".concat(this.endPoint1, "/vechicle/update?id=").concat(id);
            return this.http.put(this.url, body);
          }
        }, {
          key: "getdesignation",
          value: function getdesignation() {
            this.url = "".concat(this.endPoint1, "/designation/");
            return this.http.get(this.url);
          }
        }, {
          key: "getmap",
          value: function getmap() {
            this.url = "https://app.fleettrack.co.in/api/get_vehicles?token=G6dwJti2egsaU85hvjHYyXl743O0uQFW&email=kargosranjith@gmail.com";
            return this.http.get(this.url);
          } //vechicle

        }, {
          key: "getdriver",
          value: function getdriver() {
            this.url = "".concat(this.endPoint1, "/driverreg/");
            return this.http.get(this.url);
          }
        }, {
          key: "adddriver",
          value: function adddriver(newexam) {
            this.url = "".concat(this.endPoint1, "/driverreg/add");
            return this.http.post(this.url, newexam);
          }
        }, {
          key: "deletdriver",
          value: function deletdriver(id) {
            this.url = "".concat(this.endPoint1, "/driverreg/delete?id=") + id;
            return this.http["delete"](this.url);
          }
        }, {
          key: "fetchdriverById",
          value: function fetchdriverById(id) {
            this.url = "".concat(this.endPoint1, "/driverreg/fetchdata?id=") + id;
            return this.http.get(this.url);
          }
        }, {
          key: "updatedriver",
          value: function updatedriver(id, body) {
            this.url = "".concat(this.endPoint1, "/driverreg/update?id=").concat(id);
            return this.http.put(this.url, body);
          }
        }, {
          key: "getcount",
          value: function getcount() {
            this.url = "".concat(this.endPoint1, "/booking/bookingcount");
            return this.http.get(this.url);
          }
        }]);

        return RequestService;
      }();

      RequestService.ɵfac = function RequestService_Factory(t) {
        return new (t || RequestService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      RequestService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: RequestService,
        factory: RequestService.ɵfac,
        providedIn: 'root'
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "GHa4":
    /*!***************************************************************!*\
      !*** ./src/app/core/service/dynamic-script-loader.service.ts ***!
      \***************************************************************/

    /*! exports provided: ScriptStore, DynamicScriptLoaderService */

    /***/
    function GHa4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScriptStore", function () {
        return ScriptStore;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DynamicScriptLoaderService", function () {
        return DynamicScriptLoaderService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ScriptStore = [];

      var DynamicScriptLoaderService = /*#__PURE__*/function () {
        function DynamicScriptLoaderService() {
          var _this7 = this;

          _classCallCheck(this, DynamicScriptLoaderService);

          this.scripts = {};
          ScriptStore.forEach(function (script) {
            _this7.scripts[script.name] = {
              loaded: false,
              src: script.src
            };
          });
        }

        _createClass(DynamicScriptLoaderService, [{
          key: "load",
          value: function load() {
            var _this8 = this;

            var promises = [];

            for (var _len = arguments.length, scripts = new Array(_len), _key = 0; _key < _len; _key++) {
              scripts[_key] = arguments[_key];
            }

            scripts.forEach(function (script) {
              return promises.push(_this8.loadScript(script));
            });
            return Promise.all(promises);
          }
        }, {
          key: "loadScript",
          value: function loadScript(name) {
            var _this9 = this;

            return new Promise(function (resolve, reject) {
              if (!_this9.scripts[name].loaded) {
                // load script
                var script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = _this9.scripts[name].src;

                if (script.readyState) {
                  // IE
                  script.onreadystatechange = function () {
                    if (script.readyState === 'loaded' || script.readyState === 'complete') {
                      script.onreadystatechange = null;
                      _this9.scripts[name].loaded = true;
                      resolve({
                        script: name,
                        loaded: true,
                        status: 'Loaded'
                      });
                    }
                  };
                } else {
                  // Others
                  script.onload = function () {
                    _this9.scripts[name].loaded = true;
                    resolve({
                      script: name,
                      loaded: true,
                      status: 'Loaded'
                    });
                  };
                }

                script.onerror = function (error) {
                  return resolve({
                    script: name,
                    loaded: false,
                    status: 'Loaded'
                  });
                };

                document.getElementsByTagName('head')[0].appendChild(script);
              } else {
                resolve({
                  script: name,
                  loaded: true,
                  status: 'Already Loaded'
                });
              }
            });
          }
        }]);

        return DynamicScriptLoaderService;
      }();

      DynamicScriptLoaderService.ɵfac = function DynamicScriptLoaderService_Factory(t) {
        return new (t || DynamicScriptLoaderService)();
      };

      DynamicScriptLoaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: DynamicScriptLoaderService,
        factory: DynamicScriptLoaderService.ɵfac
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DynamicScriptLoaderService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "HSgw":
    /*!************************************************************************!*\
      !*** ./src/app/layout/app-layout/main-layout/main-layout.component.ts ***!
      \************************************************************************/

    /*! exports provided: MainLayoutComponent */

    /***/
    function HSgw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MainLayoutComponent", function () {
        return MainLayoutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../header/header.component */
      "/Lhg");
      /* harmony import */


      var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../sidebar/sidebar.component */
      "MR0u");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../footer/footer.component */
      "kVkw");

      var MainLayoutComponent = /*#__PURE__*/function () {
        function MainLayoutComponent() {
          _classCallCheck(this, MainLayoutComponent);
        }

        _createClass(MainLayoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MainLayoutComponent;
      }();

      MainLayoutComponent.ɵfac = function MainLayoutComponent_Factory(t) {
        return new (t || MainLayoutComponent)();
      };

      MainLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MainLayoutComponent,
        selectors: [["app-main-layout"]],
        decls: 4,
        vars: 0,
        template: function MainLayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-sidebar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
          }
        },
        directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
        encapsulation: 2
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainLayoutComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-main-layout',
            templateUrl: './main-layout.component.html',
            styleUrls: []
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "KDUW":
    /*!**********************************************!*\
      !*** ./src/app/core/service/auth.service.ts ***!
      \**********************************************/

    /*! exports provided: AuthService */

    /***/
    function KDUW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _services_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/request.service */
      "CzMn");

      var AuthService = /*#__PURE__*/function () {
        function AuthService(http, request) {
          _classCallCheck(this, AuthService);

          this.http = http;
          this.request = request;
          this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
          this.currentUser = this.currentUserSubject.asObservable();
        }

        _createClass(AuthService, [{
          key: "currentUserValue",
          get: function get() {
            return this.currentUserSubject.value;
          }
        }, {
          key: "login",
          value: function login(username, password, meeting_type) {
            var _this10 = this;

            return this.http.post('https://admin.jcombiz.com/jcomweb/login.php', {
              username: username,
              password: password,
              meeting_type: meeting_type
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              // console.log(JSON.stringify(user));
              localStorage.setItem('currentUser', JSON.stringify(user));

              _this10.currentUserSubject.next(user);

              console.log("currentuser:", user);
              return user;
            }));
          }
        }, {
          key: "logout",
          value: function logout() {
            // remove user from local storage to log user out
            localStorage.removeItem('currentUser');
            this.currentUserSubject.next(null);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
              success: false
            });
          }
        }]);

        return AuthService;
      }();

      AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"]));
      };

      AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthService,
        factory: AuthService.ɵfac,
        providedIn: 'root'
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: _services_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "KwYr":
    /*!**************************************************!*\
      !*** ./src/app/core/interceptor/fake-backend.ts ***!
      \**************************************************/

    /*! exports provided: FakeBackendInterceptor, fakeBackendProvider */

    /***/
    function KwYr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function () {
        return FakeBackendInterceptor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function () {
        return fakeBackendProvider;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var users = [{
        id: 1,
        username: 'admin@email.com',
        password: 'admin@123',
        firstName: 'Sarah',
        lastName: 'Smith',
        token: 'admin-token'
      }];

      var FakeBackendInterceptor = /*#__PURE__*/function () {
        function FakeBackendInterceptor() {
          _classCallCheck(this, FakeBackendInterceptor);
        }

        _createClass(FakeBackendInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var url = request.url,
                method = request.method,
                headers = request.headers,
                body = request.body; // wrap in delayed observable to simulate server api call

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(handleRoute));

            function handleRoute() {
              switch (true) {
                case url.endsWith('/authenticate') && method === 'POST':
                  return authenticate();

                default:
                  // pass through any requests not handled above
                  return next.handle(request);
              }
            } // route functions


            function authenticate() {
              var username = body.username,
                  password = body.password;
              var user = users.find(function (x) {
                return x.username === username && x.password === password;
              });

              if (!user) {
                return error('Username or password is incorrect');
              }

              return ok({
                id: user.id,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                token: user.token
              });
            } // helper functions


            function ok(body) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({
                status: 200,
                body: body
              }));
            }

            function error(message) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({
                error: {
                  message: message
                }
              });
            }

            function unauthorized() {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({
                status: 401,
                error: {
                  message: 'Unauthorised'
                }
              });
            }

            function isLoggedIn() {
              return headers.get('Authorization') === 'Bearer fake-jwt-token';
            }
          }
        }]);

        return FakeBackendInterceptor;
      }();

      FakeBackendInterceptor.ɵfac = function FakeBackendInterceptor_Factory(t) {
        return new (t || FakeBackendInterceptor)();
      };

      FakeBackendInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: FakeBackendInterceptor,
        factory: FakeBackendInterceptor.ɵfac
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FakeBackendInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], null, null);
      })();

      var fakeBackendProvider = {
        // use fake backend in place of Http service for backend-less development
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
        useClass: FakeBackendInterceptor,
        multi: true
      };
      /***/
    },

    /***/
    "MR0u":
    /*!*****************************************************!*\
      !*** ./src/app/layout/sidebar/sidebar.component.ts ***!
      \*****************************************************/

    /*! exports provided: SidebarComponent */

    /***/
    function MR0u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
        return SidebarComponent;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _sidebar_items__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./sidebar-items */
      "4veq");
      /* harmony import */


      var src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/service/auth.service */
      "KDUW");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "Kdsb");
      /* harmony import */


      var angular_feather__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! angular-feather */
      "8mtn");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      function SidebarComponent_li_11_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, sidebarItem_r1.title));
        }
      }

      var _c0 = function _c0(a0) {
        return [a0];
      };

      function SidebarComponent_li_11_a_2_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, sidebarItem_r1.badgeClass));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](sidebarItem_r1.badge);
        }
      }

      function SidebarComponent_li_11_a_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SidebarComponent_li_11_a_2_Template_a_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);

            var sidebarItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r8.callLevel1Toggle($event, sidebarItem_r1.moduleName);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i-feather", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, SidebarComponent_li_11_a_2_span_5_Template, 2, 4, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", sidebarItem_r1["class"] === "" ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](7, _c0, sidebarItem_r1.path) : null)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](9, _c0, sidebarItem_r1["class"]));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", sidebarItem_r1.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 5, sidebarItem_r1.title), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", sidebarItem_r1.badge != "");
        }
      }

      function SidebarComponent_li_11_ul_3_li_1_ul_4_li_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SidebarComponent_li_11_ul_3_li_1_ul_4_li_1_Template_a_click_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);

            var sidebarSubsubItem_r16 = ctx.$implicit;

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5);

            return ctx_r17.callLevel3Toggle($event, sidebarSubsubItem_r16.moduleName);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarSubsubItem_r16 = ctx.$implicit;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r15.level3Menu === sidebarSubsubItem_r16.moduleName ? "activeSubSub" : "")("routerLinkActive", sidebarSubsubItem_r16.submenu.length > 0 ? "" : "active");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", sidebarSubsubItem_r16.submenu.length > 0 ? null : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](7, _c0, sidebarSubsubItem_r16.path))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](9, _c0, sidebarSubsubItem_r16["class"]));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 5, sidebarSubsubItem_r16.title), " ");
        }
      }

      function SidebarComponent_li_11_ul_3_li_1_ul_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SidebarComponent_li_11_ul_3_li_1_ul_4_li_1_Template, 4, 11, "li", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarSubItem_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", sidebarSubItem_r13.submenu);
        }
      }

      function SidebarComponent_li_11_ul_3_li_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SidebarComponent_li_11_ul_3_li_1_Template_a_click_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21);

            var sidebarSubItem_r13 = ctx.$implicit;

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

            return ctx_r20.callLevel2Toggle($event, sidebarSubItem_r13.moduleName);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, SidebarComponent_li_11_ul_3_li_1_ul_4_Template, 2, 1, "ul", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarSubItem_r13 = ctx.$implicit;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r12.level2Menu === sidebarSubItem_r13.moduleName ? "activeSub" : "")("routerLinkActive", sidebarSubItem_r13.submenu.length > 0 ? "" : "active");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", sidebarSubItem_r13.submenu.length > 0 ? null : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](8, _c0, sidebarSubItem_r13.path))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c0, sidebarSubItem_r13["class"]));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 6, sidebarSubItem_r13.title), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", sidebarSubItem_r13.submenu.length > 0);
        }
      }

      function SidebarComponent_li_11_ul_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SidebarComponent_li_11_ul_3_li_1_Template, 5, 12, "li", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", sidebarItem_r1.submenu);
        }
      }

      function SidebarComponent_li_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SidebarComponent_li_11_div_1_Template, 3, 3, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SidebarComponent_li_11_a_2_Template, 6, 11, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, SidebarComponent_li_11_ul_3_Template, 2, 1, "ul", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarItem_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx_r0.level1Menu === sidebarItem_r1.moduleName && sidebarItem_r1.submenu.length != 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLinkActive", sidebarItem_r1.submenu.length != 0 ? "" : "active");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", sidebarItem_r1.groupTitle === true);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !sidebarItem_r1.groupTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", sidebarItem_r1.submenu.length > 0);
        }
      }

      var _c1 = function _c1(a1, a2) {
        return {
          "position": "relative",
          "max-height": a1,
          "max-width": a2
        };
      };

      var SidebarComponent = /*#__PURE__*/function () {
        function SidebarComponent(document, renderer, elementRef, authService, router) {
          var _this11 = this;

          _classCallCheck(this, SidebarComponent);

          this.document = document;
          this.renderer = renderer;
          this.elementRef = elementRef;
          this.authService = authService;
          this.router = router;
          this.level1Menu = '';
          this.level2Menu = '';
          this.level3Menu = '';
          this.headerHeight = 60;
          this.routerObj = null;
          this.routerObj = this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"]) {
              // logic for select active menu in dropdown
              var currenturl = event.url.split('?')[0];
              _this11.level1Menu = currenturl.split('/')[1];
              _this11.level2Menu = currenturl.split('/')[2]; // close sidebar on mobile screen after menu select

              _this11.renderer.removeClass(_this11.document.body, 'overlay-open');

              _this11.sidebbarClose();
            }
          });
        }

        _createClass(SidebarComponent, [{
          key: "windowResizecall",
          value: function windowResizecall(event) {
            this.setMenuHeight();
            this.checkStatuForResize(false);
          }
        }, {
          key: "onGlobalClick",
          value: function onGlobalClick(event) {
            if (!this.elementRef.nativeElement.contains(event.target)) {
              this.renderer.removeClass(this.document.body, 'overlay-open');
              this.sidebbarClose();
            }
          }
        }, {
          key: "callLevel1Toggle",
          value: function callLevel1Toggle(event, element) {
            if (element === this.level1Menu) {
              this.level1Menu = '0';
            } else {
              this.level1Menu = element;
            }

            var hasClass = event.target.classList.contains('toggled');

            if (hasClass) {
              this.renderer.removeClass(event.target, 'toggled');
            } else {
              this.renderer.addClass(event.target, 'toggled');
            }
          }
        }, {
          key: "callLevel2Toggle",
          value: function callLevel2Toggle(event, element) {
            if (element === this.level2Menu) {
              this.level2Menu = '0';
            } else {
              this.level2Menu = element;
            }
          }
        }, {
          key: "callLevel3Toggle",
          value: function callLevel3Toggle(event, element) {
            if (element === this.level3Menu) {
              this.level3Menu = '0';
            } else {
              this.level3Menu = element;
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.authService.currentUserValue) {
              this.sidebarItems = _sidebar_items__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].filter(function (sidebarItem) {
                return sidebarItem;
              });
            }

            this.initLeftSidebar();
            this.bodyTag = this.document.body;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.routerObj.unsubscribe();
          }
        }, {
          key: "initLeftSidebar",
          value: function initLeftSidebar() {
            var _this = this; // Set menu height


            _this.setMenuHeight();

            _this.checkStatuForResize(true);
          }
        }, {
          key: "setMenuHeight",
          value: function setMenuHeight() {
            this.innerHeight = window.innerHeight;
            var height = this.innerHeight - this.headerHeight;
            this.listMaxHeight = height + '';
            this.listMaxWidth = '500px';
          }
        }, {
          key: "isOpen",
          value: function isOpen() {
            return this.bodyTag.classList.contains('overlay-open');
          }
        }, {
          key: "checkStatuForResize",
          value: function checkStatuForResize(firstTime) {
            if (window.innerWidth < 1025) {
              this.renderer.addClass(this.document.body, 'sidebar-gone');
            } else {
              this.renderer.removeClass(this.document.body, 'sidebar-gone');
            }
          }
        }, {
          key: "mouseHover",
          value: function mouseHover(e) {
            var body = this.elementRef.nativeElement.closest('body');

            if (body.classList.contains('submenu-closed')) {
              this.renderer.addClass(this.document.body, 'side-closed-hover');
              this.renderer.removeClass(this.document.body, 'submenu-closed');
            }
          }
        }, {
          key: "mouseOut",
          value: function mouseOut(e) {
            var body = this.elementRef.nativeElement.closest('body');

            if (body.classList.contains('side-closed-hover')) {
              this.renderer.removeClass(this.document.body, 'side-closed-hover');
              this.renderer.addClass(this.document.body, 'submenu-closed');
            }
          }
        }, {
          key: "sidebbarClose",
          value: function sidebbarClose() {
            if (window.innerWidth < 1025) {
              this.renderer.addClass(this.document.body, 'sidebar-gone');
            }
          }
        }]);

        return SidebarComponent;
      }();

      SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
        return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]));
      };

      SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: SidebarComponent,
        selectors: [["app-sidebar"]],
        hostBindings: function SidebarComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("resize", function SidebarComponent_resize_HostBindingHandler($event) {
              return ctx.windowResizecall($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"])("mousedown", function SidebarComponent_mousedown_HostBindingHandler($event) {
              return ctx.onGlobalClick($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveDocument"]);
          }
        },
        decls: 12,
        vars: 5,
        consts: [["id", "leftsidebar", 1, "sidebar", "main-sidebar", 3, "mouseenter", "mouseleave"], [1, "sidebar-brand"], ["routerLink", "/dashboard/main"], ["alt", "image", "src", "assets/images/logo111.png", 1, "header-logo", 2, "height", "34px", "width", "125px", "margin-top", "10px"], [1, "logo-name"], [1, "menu"], [1, "list", 3, "ngStyle", "perfectScrollbar"], [1, "sidebar-user-panel"], [1, "user-panel"], [1, "profile-usertitle"], [3, "active", "routerLinkActive", 4, "ngFor", "ngForOf"], [3, "routerLinkActive"], ["class", "header", 4, "ngIf"], ["class", "menu-top", 3, "routerLink", "ngClass", "click", 4, "ngIf"], ["class", "ml-menu", 4, "ngIf"], [1, "header"], [1, "menu-top", 3, "routerLink", "ngClass", "click"], [1, "sidebarIcon", 3, "name"], [1, "hide-menu"], [3, "ngClass", 4, "ngIf"], [3, "ngClass"], [1, "ml-menu"], [3, "ngClass", "routerLinkActive", 4, "ngFor", "ngForOf"], [3, "ngClass", "routerLinkActive"], [3, "routerLink", "ngClass", "click"], ["class", "ml-menu-2", 4, "ngIf"], [1, "ml-menu-2"]],
        template: function SidebarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "aside", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseenter", function SidebarComponent_Template_aside_mouseenter_1_listener($event) {
              return ctx.mouseHover($event);
            })("mouseleave", function SidebarComponent_Template_aside_mouseleave_1_listener($event) {
              return ctx.mouseOut($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, SidebarComponent_li_11_Template, 4, 6, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](2, _c1, ctx.listMaxHeight + "px", ctx.listMaxWidth + "px"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.sidebarItems);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], angular_feather__WEBPACK_IMPORTED_MODULE_6__["FeatherComponent"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5zYXNzIn0= */"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SidebarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
          args: [{
            selector: 'app-sidebar',
            templateUrl: './sidebar.component.html',
            styleUrls: ['./sidebar.component.sass']
          }]
        }], function () {
          return [{
            type: Document,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
          }, {
            type: src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]
          }];
        }, {
          windowResizecall: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
            args: ['window:resize', ['$event']]
          }],
          onGlobalClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
            args: ['document:mousedown', ['$event']]
          }]
        });
      })();
      /***/

    },

    /***/
    "MgoP":
    /*!***********************************************!*\
      !*** ./src/app/layout/confirmed.validator.ts ***!
      \***********************************************/

    /*! exports provided: ConfirmedValidator */

    /***/
    function MgoP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmedValidator", function () {
        return ConfirmedValidator;
      });

      function ConfirmedValidator(controlName, matchingControlName) {
        return function (formGroup) {
          var control = formGroup.controls[controlName];
          var matchingControl = formGroup.controls[matchingControlName];

          if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
            return;
          }

          if (control.value !== matchingControl.value) {
            matchingControl.setErrors({
              confirmedValidator: true
            });
          } else {
            matchingControl.setErrors(null);
          }
        };
      }
      /***/

    },

    /***/
    "PCNd":
    /*!*****************************************!*\
      !*** ./src/app/shared/shared.module.ts ***!
      \*****************************************/

    /*! exports provided: SharedModule */

    /***/
    function PCNd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
      });
      /* harmony import */


      var _bootstrap_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./bootstrap.module */
      "1EDf");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _feather_icons_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./feather-icons.module */
      "uhJ+");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");

      var SharedModule = function SharedModule() {
        _classCallCheck(this, SharedModule);
      };

      SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: SharedModule
      });
      SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function SharedModule_Factory(t) {
          return new (t || SharedModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerModule"], _feather_icons_module__WEBPACK_IMPORTED_MODULE_5__["IconsModule"], _bootstrap_module__WEBPACK_IMPORTED_MODULE_0__["BootstrapModule"]], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerModule"], _feather_icons_module__WEBPACK_IMPORTED_MODULE_5__["IconsModule"], _bootstrap_module__WEBPACK_IMPORTED_MODULE_0__["BootstrapModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerModule"], _feather_icons_module__WEBPACK_IMPORTED_MODULE_5__["IconsModule"], _bootstrap_module__WEBPACK_IMPORTED_MODULE_0__["BootstrapModule"]],
          exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerModule"], _feather_icons_module__WEBPACK_IMPORTED_MODULE_5__["IconsModule"], _bootstrap_module__WEBPACK_IMPORTED_MODULE_0__["BootstrapModule"]]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SharedModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerModule"], _feather_icons_module__WEBPACK_IMPORTED_MODULE_5__["IconsModule"], _bootstrap_module__WEBPACK_IMPORTED_MODULE_0__["BootstrapModule"]],
            exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerModule"], _feather_icons_module__WEBPACK_IMPORTED_MODULE_5__["IconsModule"], _bootstrap_module__WEBPACK_IMPORTED_MODULE_0__["BootstrapModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "Qc9P":
    /*!*************************************************************!*\
      !*** ./src/app/layout/page-loader/page-loader.component.ts ***!
      \*************************************************************/

    /*! exports provided: PageLoaderComponent */

    /***/
    function Qc9P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageLoaderComponent", function () {
        return PageLoaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");

      var PageLoaderComponent = /*#__PURE__*/function () {
        function PageLoaderComponent() {
          _classCallCheck(this, PageLoaderComponent);
        }

        _createClass(PageLoaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PageLoaderComponent;
      }();

      PageLoaderComponent.ɵfac = function PageLoaderComponent_Factory(t) {
        return new (t || PageLoaderComponent)();
      };

      PageLoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PageLoaderComponent,
        selectors: [["app-page-loader"]],
        decls: 1,
        vars: 1,
        consts: [["bdColor", "white", "size", "medium", "color", "#6777EF", "type", "ball-scale-pulse", 3, "fullScreen"]],
        template: function PageLoaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-spinner", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullScreen", true);
          }
        },
        directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWxvYWRlci5jb21wb25lbnQuc2FzcyJ9 */"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageLoaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-page-loader',
            templateUrl: './page-loader.component.html',
            styleUrls: ['./page-loader.component.sass']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "SLXU":
    /*!*******************************************************!*\
      !*** ./src/app/core/interceptor/error.interceptor.ts ***!
      \*******************************************************/

    /*! exports provided: ErrorInterceptor */

    /***/
    function SLXU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
        return ErrorInterceptor;
      });
      /* harmony import */


      var _service_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../service/auth.service */
      "KDUW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var ErrorInterceptor = /*#__PURE__*/function () {
        function ErrorInterceptor(authenticationService) {
          _classCallCheck(this, ErrorInterceptor);

          this.authenticationService = authenticationService;
        }

        _createClass(ErrorInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var _this12 = this;

            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
              if (err.status === 401) {
                // auto logout if 401 response returned from api
                _this12.authenticationService.logout();

                location.reload(true);
              }

              var error = err.error.message || err.statusText;
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
            }));
          }
        }]);

        return ErrorInterceptor;
      }();

      ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) {
        return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]));
      };

      ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: ErrorInterceptor,
        factory: ErrorInterceptor.ɵfac
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ErrorInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], function () {
          return [{
            type: _service_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _layout_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./layout/page-loader/page-loader.component */
      "Qc9P");

      var AppComponent = function AppComponent(_router, location, spinner) {
        var _this13 = this;

        _classCallCheck(this, AppComponent);

        this._router = _router;
        this.spinner = spinner;

        this._router.events.subscribe(function (routerEvent) {
          if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
            _this13.spinner.show();

            location.onPopState(function () {
              window.location.reload();
            });
            _this13.currentUrl = routerEvent.url.substring(routerEvent.url.lastIndexOf('/') + 1);
          }

          if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
            _this13.spinner.hide();
          }

          window.scrollTo(0, 0);
        });
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["PlatformLocation"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 2,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-page-loader");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
          }
        },
        directives: [_layout_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_4__["PageLoaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["PlatformLocation"]
          }, {
            type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: createTranslateLoader, AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function () {
        return createTranslateLoader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _core_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./core/core.module */
      "pKmL");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./shared/shared.module */
      "PCNd");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./layout/header/header.component */
      "/Lhg");
      /* harmony import */


      var _layout_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./layout/page-loader/page-loader.component */
      "Qc9P");
      /* harmony import */


      var _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./layout/sidebar/sidebar.component */
      "MR0u");
      /* harmony import */


      var _layout_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./layout/right-sidebar/right-sidebar.component */
      "57d4");
      /* harmony import */


      var _layout_app_layout_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./layout/app-layout/auth-layout/auth-layout.component */
      "f9dz");
      /* harmony import */


      var _layout_app_layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./layout/app-layout/main-layout/main-layout.component */
      "HSgw");
      /* harmony import */


      var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./layout/footer/footer.component */
      "kVkw");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _core_interceptor_fake_backend__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./core/interceptor/fake-backend */
      "KwYr");
      /* harmony import */


      var _core_interceptor_error_interceptor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./core/interceptor/error.interceptor */
      "SLXU");
      /* harmony import */


      var _core_interceptor_jwt_interceptor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./core/interceptor/jwt.interceptor */
      "sIiH");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "Kdsb");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "lDzL");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @ngx-translate/http-loader */
      "mqiu");
      /* harmony import */


      var ng_click_outside__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ng-click-outside */
      "Hicy");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _n_n_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./n/n.component */
      "jZhY");
      /* harmony import */


      var angular_archwizard__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! angular-archwizard */
      "mkVx");
      /* harmony import */


      var _mapview_mapview_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./mapview/mapview.component */
      "j71v");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");

      var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
        suppressScrollX: true,
        wheelPropagation: false
      };

      function createTranslateLoader(http) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_22__["TranslateHttpLoader"](http, 'assets/i18n/', '.json');
      }

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [{
          provide: _angular_common__WEBPACK_IMPORTED_MODULE_15__["LocationStrategy"],
          useClass: _angular_common__WEBPACK_IMPORTED_MODULE_15__["HashLocationStrategy"]
        }, {
          provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__["PERFECT_SCROLLBAR_CONFIG"],
          useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HTTP_INTERCEPTORS"],
          useClass: _core_interceptor_jwt_interceptor__WEBPACK_IMPORTED_MODULE_18__["JwtInterceptor"],
          multi: true
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HTTP_INTERCEPTORS"],
          useClass: _core_interceptor_error_interceptor__WEBPACK_IMPORTED_MODULE_17__["ErrorInterceptor"],
          multi: true
        }, _core_interceptor_fake_backend__WEBPACK_IMPORTED_MODULE_16__["fakeBackendProvider"]],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__["PerfectScrollbarModule"], ng_click_outside__WEBPACK_IMPORTED_MODULE_23__["ClickOutsideModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_29__["ToastrModule"].forRoot(), angular_archwizard__WEBPACK_IMPORTED_MODULE_27__["ArchwizardModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__["TranslateModule"].forRoot({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__["TranslateLoader"],
            useFactory: createTranslateLoader,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpClient"]]
          }
        }), // core & shared
        _core_core_module__WEBPACK_IMPORTED_MODULE_2__["CoreModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__["NgbModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_20__["NgxDatatableModule"], angular_archwizard__WEBPACK_IMPORTED_MODULE_27__["ArchwizardModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _layout_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _layout_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_9__["PageLoaderComponent"], _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["SidebarComponent"], _layout_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["RightSidebarComponent"], _layout_app_layout_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_12__["AuthLayoutComponent"], _layout_app_layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_13__["MainLayoutComponent"], _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"], _n_n_component__WEBPACK_IMPORTED_MODULE_26__["NComponent"], _mapview_mapview_component__WEBPACK_IMPORTED_MODULE_28__["MapviewComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__["PerfectScrollbarModule"], ng_click_outside__WEBPACK_IMPORTED_MODULE_23__["ClickOutsideModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_29__["ToastrModule"], angular_archwizard__WEBPACK_IMPORTED_MODULE_27__["ArchwizardModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__["TranslateModule"], // core & shared
          _core_core_module__WEBPACK_IMPORTED_MODULE_2__["CoreModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__["NgbModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_20__["NgxDatatableModule"], angular_archwizard__WEBPACK_IMPORTED_MODULE_27__["ArchwizardModule"]]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _layout_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _layout_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_9__["PageLoaderComponent"], _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["SidebarComponent"], _layout_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["RightSidebarComponent"], _layout_app_layout_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_12__["AuthLayoutComponent"], _layout_app_layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_13__["MainLayoutComponent"], _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"], _n_n_component__WEBPACK_IMPORTED_MODULE_26__["NComponent"], _mapview_mapview_component__WEBPACK_IMPORTED_MODULE_28__["MapviewComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__["PerfectScrollbarModule"], ng_click_outside__WEBPACK_IMPORTED_MODULE_23__["ClickOutsideModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_29__["ToastrModule"].forRoot(), angular_archwizard__WEBPACK_IMPORTED_MODULE_27__["ArchwizardModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__["TranslateModule"].forRoot({
              loader: {
                provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__["TranslateLoader"],
                useFactory: createTranslateLoader,
                deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpClient"]]
              }
            }), // core & shared
            _core_core_module__WEBPACK_IMPORTED_MODULE_2__["CoreModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__["NgbModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_20__["NgxDatatableModule"], angular_archwizard__WEBPACK_IMPORTED_MODULE_27__["ArchwizardModule"]],
            providers: [{
              provide: _angular_common__WEBPACK_IMPORTED_MODULE_15__["LocationStrategy"],
              useClass: _angular_common__WEBPACK_IMPORTED_MODULE_15__["HashLocationStrategy"]
            }, {
              provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__["PERFECT_SCROLLBAR_CONFIG"],
              useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
            }, {
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HTTP_INTERCEPTORS"],
              useClass: _core_interceptor_jwt_interceptor__WEBPACK_IMPORTED_MODULE_18__["JwtInterceptor"],
              multi: true
            }, {
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HTTP_INTERCEPTORS"],
              useClass: _core_interceptor_error_interceptor__WEBPACK_IMPORTED_MODULE_17__["ErrorInterceptor"],
              multi: true
            }, _core_interceptor_fake_backend__WEBPACK_IMPORTED_MODULE_16__["fakeBackendProvider"]],
            entryComponents: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "crnd":
    /*!**********************************************************!*\
      !*** ./src/$$_lazy_route_resource lazy namespace object ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function crnd(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "crnd";
      /***/
    },

    /***/
    "f9dz":
    /*!************************************************************************!*\
      !*** ./src/app/layout/app-layout/auth-layout/auth-layout.component.ts ***!
      \************************************************************************/

    /*! exports provided: AuthLayoutComponent */

    /***/
    function f9dz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function () {
        return AuthLayoutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AuthLayoutComponent = /*#__PURE__*/function () {
        function AuthLayoutComponent() {
          _classCallCheck(this, AuthLayoutComponent);
        }

        _createClass(AuthLayoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AuthLayoutComponent;
      }();

      AuthLayoutComponent.ɵfac = function AuthLayoutComponent_Factory(t) {
        return new (t || AuthLayoutComponent)();
      };

      AuthLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AuthLayoutComponent,
        selectors: [["app-auth-layout"]],
        decls: 1,
        vars: 0,
        template: function AuthLayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        encapsulation: 2
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthLayoutComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-auth-layout',
            templateUrl: './auth-layout.component.html',
            styleUrls: []
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "j71v":
    /*!**********************************************!*\
      !*** ./src/app/mapview/mapview.component.ts ***!
      \**********************************************/

    /*! exports provided: MapviewComponent */

    /***/
    function j71v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapviewComponent", function () {
        return MapviewComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var MapviewComponent = /*#__PURE__*/function () {
        function MapviewComponent() {
          _classCallCheck(this, MapviewComponent);
        }

        _createClass(MapviewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MapviewComponent;
      }();

      MapviewComponent.ɵfac = function MapviewComponent_Factory(t) {
        return new (t || MapviewComponent)();
      };

      MapviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MapviewComponent,
        selectors: [["app-mapview"]],
        decls: 2,
        vars: 0,
        template: function MapviewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "mapview works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYXB2aWV3LmNvbXBvbmVudC5zYXNzIn0= */"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapviewComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-mapview',
            templateUrl: './mapview.component.html',
            styleUrls: ['./mapview.component.sass']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "jZhY":
    /*!**********************************!*\
      !*** ./src/app/n/n.component.ts ***!
      \**********************************/

    /*! exports provided: NComponent */

    /***/
    function jZhY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NComponent", function () {
        return NComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NComponent = /*#__PURE__*/function () {
        function NComponent() {
          _classCallCheck(this, NComponent);
        }

        _createClass(NComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NComponent;
      }();

      NComponent.ɵfac = function NComponent_Factory(t) {
        return new (t || NComponent)();
      };

      NComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NComponent,
        selectors: [["app-n"]],
        decls: 2,
        vars: 0,
        template: function NComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "n works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuLmNvbXBvbmVudC5zYXNzIn0= */"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-n',
            templateUrl: './n.component.html',
            styleUrls: ['./n.component.sass']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "kCjQ":
    /*!***************************************************!*\
      !*** ./src/app/core/guard/module-import.guard.ts ***!
      \***************************************************/

    /*! exports provided: throwIfAlreadyLoaded */

    /***/
    function kCjQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "throwIfAlreadyLoaded", function () {
        return throwIfAlreadyLoaded;
      });

      function throwIfAlreadyLoaded(parentModule, moduleName) {
        if (parentModule) {
          throw new Error("".concat(moduleName, " has already been loaded. Import ").concat(moduleName, " modules in the AppModule only."));
        }
      }
      /***/

    },

    /***/
    "kVkw":
    /*!***************************************************!*\
      !*** ./src/app/layout/footer/footer.component.ts ***!
      \***************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function kVkw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var angular_feather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! angular-feather */
      "8mtn");

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterComponent;
      }();

      FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterComponent,
        selectors: [["app-footer"]],
        decls: 10,
        vars: 0,
        consts: [[1, "main-footer"], [1, "footer-left"], [1, "bullet"], ["href", "#", "onClick", "return false;"], [1, "footer-right"], ["name", "heart", 1, "footer-icon"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Copyright \xA9 2021 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Design By ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Neophron");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Coded with ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i-feather", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [angular_feather__WEBPACK_IMPORTED_MODULE_1__["FeatherComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNhc3MifQ== */"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-footer',
            templateUrl: './footer.component.html',
            styleUrls: ['./footer.component.sass']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "ld2u":
    /*!******************************************************!*\
      !*** ./src/app/core/service/rightsidebar.service.ts ***!
      \******************************************************/

    /*! exports provided: RightSidebarService */

    /***/
    function ld2u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RightSidebarService", function () {
        return RightSidebarService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var RightSidebarService = /*#__PURE__*/function () {
        function RightSidebarService() {
          _classCallCheck(this, RightSidebarService);

          this.statusService = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
          this.currentStatus = this.statusService.asObservable();
        }

        _createClass(RightSidebarService, [{
          key: "changeMsg",
          value: function changeMsg(msg) {
            this.statusService.next(msg);
          }
        }]);

        return RightSidebarService;
      }();

      RightSidebarService.ɵfac = function RightSidebarService_Factory(t) {
        return new (t || RightSidebarService)();
      };

      RightSidebarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: RightSidebarService,
        factory: RightSidebarService.ɵfac
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RightSidebarService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "pKmL":
    /*!*************************************!*\
      !*** ./src/app/core/core.module.ts ***!
      \*************************************/

    /*! exports provided: CoreModule */

    /***/
    function pKmL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
        return CoreModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./service/rightsidebar.service */
      "ld2u");
      /* harmony import */


      var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./guard/auth.guard */
      "3IAN");
      /* harmony import */


      var _service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./service/auth.service */
      "KDUW");
      /* harmony import */


      var _service_dynamic_script_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./service/dynamic-script-loader.service */
      "GHa4");
      /* harmony import */


      var _guard_module_import_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./guard/module-import.guard */
      "kCjQ");

      var CoreModule = function CoreModule(parentModule) {
        _classCallCheck(this, CoreModule);

        Object(_guard_module_import_guard__WEBPACK_IMPORTED_MODULE_6__["throwIfAlreadyLoaded"])(parentModule, 'CoreModule');
      };

      CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: CoreModule
      });
      CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function CoreModule_Factory(t) {
          return new (t || CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](CoreModule, 12));
        },
        providers: [_service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_2__["RightSidebarService"], _guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"], _service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _service_dynamic_script_loader_service__WEBPACK_IMPORTED_MODULE_5__["DynamicScriptLoaderService"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            providers: [_service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_2__["RightSidebarService"], _guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"], _service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _service_dynamic_script_loader_service__WEBPACK_IMPORTED_MODULE_5__["DynamicScriptLoaderService"]]
          }]
        }], function () {
          return [{
            type: CoreModule,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "rLcU":
    /*!**************************************************!*\
      !*** ./src/app/core/service/language.service.ts ***!
      \**************************************************/

    /*! exports provided: LanguageService */

    /***/
    function rLcU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LanguageService", function () {
        return LanguageService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var LanguageService = /*#__PURE__*/function () {
        function LanguageService(translate) {
          _classCallCheck(this, LanguageService);

          this.translate = translate;
          this.languages = ['en', 'es', 'de'];
          var browserLang;
          translate.addLangs(this.languages);

          if (localStorage.getItem('lang')) {
            browserLang = localStorage.getItem('lang');
          } else {
            browserLang = translate.getBrowserLang();
          }

          translate.use(browserLang.match(/en|es|de/) ? browserLang : 'en');
        }

        _createClass(LanguageService, [{
          key: "setLanguage",
          value: function setLanguage(lang) {
            this.translate.use(lang);
            localStorage.setItem('lang', lang);
          }
        }]);

        return LanguageService;
      }();

      LanguageService.ɵfac = function LanguageService_Factory(t) {
        return new (t || LanguageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]));
      };

      LanguageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: LanguageService,
        factory: LanguageService.ɵfac,
        providedIn: 'root'
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LanguageService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "sIiH":
    /*!*****************************************************!*\
      !*** ./src/app/core/interceptor/jwt.interceptor.ts ***!
      \*****************************************************/

    /*! exports provided: JwtInterceptor */

    /***/
    function sIiH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () {
        return JwtInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../service/auth.service */
      "KDUW");

      var JwtInterceptor = /*#__PURE__*/function () {
        function JwtInterceptor(authenticationService) {
          _classCallCheck(this, JwtInterceptor);

          this.authenticationService = authenticationService;
        }

        _createClass(JwtInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            // add authorization header with jwt token if available
            var currentUser = this.authenticationService.currentUserValue;
            var userdetails = localStorage.getItem('currentUser'); // this.loginid=userdetails.

            var user = JSON.parse(userdetails); // console.log("userdetails",""+user.token);
            // this.loginid=user.username;
            // this.s_id=user.token;
            // console.log("loginid",""+this.loginid);
            // console.log("s_id",""+this.s_id);

            if (currentUser && user.token) {
              request = request.clone({
                setHeaders: {
                  Authorization: "".concat(user.token)
                }
              });
            } // console.log("currentUser",""+currentUser.username);


            return next.handle(request);
          }
        }]);

        return JwtInterceptor;
      }();

      JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) {
        return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
      };

      JwtInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: JwtInterceptor,
        factory: JwtInterceptor.ɵfac
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JwtInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "uhJ+":
    /*!************************************************!*\
      !*** ./src/app/shared/feather-icons.module.ts ***!
      \************************************************/

    /*! exports provided: IconsModule */

    /***/
    function uhJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IconsModule", function () {
        return IconsModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var angular_feather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! angular-feather */
      "8mtn");
      /* harmony import */


      var angular_feather_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! angular-feather/icons */
      "q7zL"); // Select some icons (use an object, not an array)


      var IconsModule = function IconsModule() {
        _classCallCheck(this, IconsModule);
      };

      IconsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: IconsModule
      });
      IconsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function IconsModule_Factory(t) {
          return new (t || IconsModule)();
        },
        imports: [[angular_feather__WEBPACK_IMPORTED_MODULE_1__["FeatherModule"].pick(angular_feather_icons__WEBPACK_IMPORTED_MODULE_2__["allIcons"])], angular_feather__WEBPACK_IMPORTED_MODULE_1__["FeatherModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IconsModule, {
          imports: [angular_feather__WEBPACK_IMPORTED_MODULE_1__["FeatherModule"]],
          exports: [angular_feather__WEBPACK_IMPORTED_MODULE_1__["FeatherModule"]]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IconsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [angular_feather__WEBPACK_IMPORTED_MODULE_1__["FeatherModule"].pick(angular_feather_icons__WEBPACK_IMPORTED_MODULE_2__["allIcons"])],
            exports: [angular_feather__WEBPACK_IMPORTED_MODULE_1__["FeatherModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _layout_app_layout_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./layout/app-layout/auth-layout/auth-layout.component */
      "f9dz");
      /* harmony import */


      var _layout_app_layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./layout/app-layout/main-layout/main-layout.component */
      "HSgw");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./core/guard/auth.guard */
      "3IAN");

      var routes = [{
        path: '',
        component: _layout_app_layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_1__["MainLayoutComponent"],
        canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        children: [{
          path: '',
          redirectTo: '/authentication/signin',
          pathMatch: 'full'
        }, {
          path: 'dashboard',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | dashboard-dashboard-module */
            [__webpack_require__.e("common"), __webpack_require__.e("dashboard-dashboard-module")]).then(__webpack_require__.bind(null,
            /*! ./dashboard/dashboard.module */
            "TDBs")).then(function (m) {
              return m.DashboardModule;
            });
          }
        }, {
          path: 'dashboard/main/weekstatus',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | weekstatus-weekstatus-module */
            [__webpack_require__.e("common"), __webpack_require__.e("weekstatus-weekstatus-module")]).then(__webpack_require__.bind(null,
            /*! ./weekstatus/weekstatus.module */
            "YEay")).then(function (m) {
              return m.WeekstatusModule;
            });
          }
        }, {
          path: 'dashboard/main/currentstatus',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | currentstatus-currentstatus-module */
            "currentstatus-currentstatus-module").then(__webpack_require__.bind(null,
            /*! ./currentstatus/currentstatus.module */
            "PKNF")).then(function (m) {
              return m.CurrentstatusModule;
            });
          }
        }, {
          path: 'profile',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | profile-profile-module */
            [__webpack_require__.e("default~changepassword-changepassword-module~connectentry-connectentry-module~connectpending-connect~166a4e9d"), __webpack_require__.e("profile-profile-module")]).then(__webpack_require__.bind(null,
            /*! ./profile/profile.module */
            "cRhG")).then(function (m) {
              return m.ProfileModule;
            });
          }
        }, {
          path: 'changepassword',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | changepassword-changepassword-module */
            [__webpack_require__.e("default~changepassword-changepassword-module~connectentry-connectentry-module~connectpending-connect~166a4e9d"), __webpack_require__.e("changepassword-changepassword-module")]).then(__webpack_require__.bind(null,
            /*! ./changepassword/changepassword.module */
            "u0FJ")).then(function (m) {
              return m.ChangepasswordModule;
            });
          }
        }, {
          path: 'connectentry',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | connectentry-connectentry-module */
            [__webpack_require__.e("default~changepassword-changepassword-module~connectentry-connectentry-module~connectpending-connect~166a4e9d"), __webpack_require__.e("default~connectentry-connectentry-module~connectpending-connectpending-module~gnoteentry-gnoteentry-~1aaf4157"), __webpack_require__.e("connectentry-connectentry-module")]).then(__webpack_require__.bind(null,
            /*! ./connectentry/connectentry.module */
            "EAJ4")).then(function (m) {
              return m.ConnectentryModule;
            });
          }
        }, {
          path: 'gnoteentry',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | gnoteentry-gnoteentry-module */
            [__webpack_require__.e("default~changepassword-changepassword-module~connectentry-connectentry-module~connectpending-connect~166a4e9d"), __webpack_require__.e("default~connectentry-connectentry-module~connectpending-connectpending-module~gnoteentry-gnoteentry-~1aaf4157"), __webpack_require__.e("gnoteentry-gnoteentry-module")]).then(__webpack_require__.bind(null,
            /*! ./gnoteentry/gnoteentry.module */
            "ozL1")).then(function (m) {
              return m.GnoteentryModule;
            });
          }
        }, {
          path: 'showcase',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | showcase-showcase-module */
            [__webpack_require__.e("default~changepassword-changepassword-module~connectentry-connectentry-module~connectpending-connect~166a4e9d"), __webpack_require__.e("showcase-showcase-module")]).then(__webpack_require__.bind(null,
            /*! ./showcase/showcase.module */
            "Zah/")).then(function (m) {
              return m.ShowcaseModule;
            });
          }
        }, {
          path: 'guestreg',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | guestreg-guestreg-module */
            [__webpack_require__.e("default~changepassword-changepassword-module~connectentry-connectentry-module~connectpending-connect~166a4e9d"), __webpack_require__.e("default~connectentry-connectentry-module~connectpending-connectpending-module~gnoteentry-gnoteentry-~1aaf4157"), __webpack_require__.e("default~advance-table-advance-table-module~customer-customer-module~guestreg-guestreg-module~user-user-module"), __webpack_require__.e("guestreg-guestreg-module")]).then(__webpack_require__.bind(null,
            /*! ./guestreg/guestreg.module */
            "77kb")).then(function (m) {
              return m.GuestregModule;
            });
          }
        }, {
          path: 'jcomtables',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | jcomtables-jcomtables-module */
            [__webpack_require__.e("default~changepassword-changepassword-module~connectentry-connectentry-module~connectpending-connect~166a4e9d"), __webpack_require__.e("default~jcomtables-jcomtables-module~searchmembers-searchmembers-module"), __webpack_require__.e("jcomtables-jcomtables-module")]).then(__webpack_require__.bind(null,
            /*! ./jcomtables/jcomtables.module */
            "0Hwp")).then(function (m) {
              return m.JcomtablesModule;
            });
          }
        }, {
          path: 'searchmembers',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | searchmembers-searchmembers-module */
            [__webpack_require__.e("default~changepassword-changepassword-module~connectentry-connectentry-module~connectpending-connect~166a4e9d"), __webpack_require__.e("default~jcomtables-jcomtables-module~searchmembers-searchmembers-module"), __webpack_require__.e("searchmembers-searchmembers-module")]).then(__webpack_require__.bind(null,
            /*! ./searchmembers/searchmembers.module */
            "6hWy")).then(function (m) {
              return m.SearchmembersModule;
            });
          }
        }, {
          path: 'connectpending',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | connectpending-connectpending-module */
            [__webpack_require__.e("default~changepassword-changepassword-module~connectentry-connectentry-module~connectpending-connect~166a4e9d"), __webpack_require__.e("default~connectentry-connectentry-module~connectpending-connectpending-module~gnoteentry-gnoteentry-~1aaf4157"), __webpack_require__.e("connectpending-connectpending-module")]).then(__webpack_require__.bind(null,
            /*! ./connectpending/connectpending.module */
            "LeVT")).then(function (m) {
              return m.ConnectpendingModule;
            });
          }
        }, {
          path: 'Customer',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | customer-customer-module */
            [__webpack_require__.e("default~advance-table-advance-table-module~customer-customer-module~guestreg-guestreg-module~user-user-module"), __webpack_require__.e("customer-customer-module")]).then(__webpack_require__.bind(null,
            /*! ./customer/customer.module */
            "d7gL")).then(function (m) {
              return m.CustomerModule;
            });
          }
        }, {
          path: 'User',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | user-user-module */
            [__webpack_require__.e("default~advance-table-advance-table-module~customer-customer-module~guestreg-guestreg-module~user-user-module"), __webpack_require__.e("user-user-module")]).then(__webpack_require__.bind(null,
            /*! ./user/user.module */
            "7UCR")).then(function (m) {
              return m.UserModule;
            });
          }
        }, {
          path: 'Pending',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | pending-pending-module */
            "pending-pending-module").then(__webpack_require__.bind(null,
            /*! ./pending/pending.module */
            "y1ik")).then(function (m) {
              return m.PendingModule;
            });
          }
        }, {
          path: 'Accepted',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | accepted-accepted-module */
            "accepted-accepted-module").then(__webpack_require__.bind(null,
            /*! ./accepted/accepted.module */
            "Iwr+")).then(function (m) {
              return m.AcceptedModule;
            });
          }
        }, {
          path: 'Completed',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | completed-completed-module */
            "completed-completed-module").then(__webpack_require__.bind(null,
            /*! ./completed/completed.module */
            "3swY")).then(function (m) {
              return m.CompletedModule;
            });
          }
        }, {
          path: 'Cancel',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | cancel-cancel-module */
            "cancel-cancel-module").then(__webpack_require__.bind(null,
            /*! ./cancel/cancel.module */
            "aBHD")).then(function (m) {
              return m.CancelModule;
            });
          }
        }, {
          path: 'advance-table',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | advance-table-advance-table-module */
            [__webpack_require__.e("default~advance-table-advance-table-module~customer-customer-module~guestreg-guestreg-module~user-user-module"), __webpack_require__.e("advance-table-advance-table-module")]).then(__webpack_require__.bind(null,
            /*! ./advance-table/advance-table.module */
            "VTO7")).then(function (m) {
              return m.AdvanceTableModule;
            });
          }
        }, {
          path: 'extra-pages',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | extra-pages-extra-pages-module */
            "extra-pages-extra-pages-module").then(__webpack_require__.bind(null,
            /*! ./extra-pages/extra-pages.module */
            "hOZs")).then(function (m) {
              return m.ExtraPagesModule;
            });
          }
        }, {
          path: 'multilevel',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | multilevel-multilevel-module */
            "multilevel-multilevel-module").then(__webpack_require__.bind(null,
            /*! ./multilevel/multilevel.module */
            "6LPo")).then(function (m) {
              return m.MultilevelModule;
            });
          }
        }]
      }, {
        path: 'authentication',
        component: _layout_app_layout_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_0__["AuthLayoutComponent"],
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | authentication-authentication-module */
          "authentication-authentication-module").then(__webpack_require__.bind(null,
          /*! ./authentication/authentication.module */
          "OpKh")).then(function (m) {
            return m.AuthenticationModule;
          });
        }
      }, {
        path: 'currentstatus',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | currentstatus-currentstatus-module */
          "currentstatus-currentstatus-module").then(__webpack_require__.bind(null,
          /*! ./currentstatus/currentstatus.module */
          "PKNF")).then(function (m) {
            return m.CurrentstatusModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
          relativeLinkResolution: 'legacy'
        })], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
              relativeLinkResolution: 'legacy'
            })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map