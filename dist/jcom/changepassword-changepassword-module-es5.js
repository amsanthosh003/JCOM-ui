(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["changepassword-changepassword-module"], {
    /***/
    "8gUA":
    /*!*****************************************************************!*\
      !*** ./src/app/changepassword/changepassword-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: ChangepasswordRoutingModule */

    /***/
    function gUA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChangepasswordRoutingModule", function () {
        return ChangepasswordRoutingModule;
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


      var _changepassword_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./changepassword.component */
      "Hipp");

      var routes = [{
        path: '',
        component: _changepassword_component__WEBPACK_IMPORTED_MODULE_2__["ChangepasswordComponent"]
      }];

      var ChangepasswordRoutingModule = function ChangepasswordRoutingModule() {
        _classCallCheck(this, ChangepasswordRoutingModule);
      };

      ChangepasswordRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ChangepasswordRoutingModule
      });
      ChangepasswordRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ChangepasswordRoutingModule_Factory(t) {
          return new (t || ChangepasswordRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChangepasswordRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangepasswordRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "Hipp":
    /*!************************************************************!*\
      !*** ./src/app/changepassword/changepassword.component.ts ***!
      \************************************************************/

    /*! exports provided: ChangepasswordComponent */

    /***/
    function Hipp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChangepasswordComponent", function () {
        return ChangepasswordComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ChangepasswordComponent = /*#__PURE__*/function () {
        function ChangepasswordComponent() {
          _classCallCheck(this, ChangepasswordComponent);
        }

        _createClass(ChangepasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ChangepasswordComponent;
      }();

      ChangepasswordComponent.ɵfac = function ChangepasswordComponent_Factory(t) {
        return new (t || ChangepasswordComponent)();
      };

      ChangepasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ChangepasswordComponent,
        selectors: [["app-changepassword"]],
        decls: 0,
        vars: 0,
        template: function ChangepasswordComponent_Template(rf, ctx) {},
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFuZ2VwYXNzd29yZC5jb21wb25lbnQuc2FzcyJ9 */"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangepasswordComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-changepassword',
            templateUrl: './changepassword.component.html',
            styleUrls: ['./changepassword.component.sass']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "u0FJ":
    /*!*********************************************************!*\
      !*** ./src/app/changepassword/changepassword.module.ts ***!
      \*********************************************************/

    /*! exports provided: ChangepasswordModule */

    /***/
    function u0FJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChangepasswordModule", function () {
        return ChangepasswordModule;
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


      var _changepassword_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./changepassword-routing.module */
      "8gUA");
      /* harmony import */


      var _changepassword_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./changepassword.component */
      "Hipp");
      /* harmony import */


      var angular_feather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! angular-feather */
      "8mtn");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "lDzL");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var angular_archwizard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! angular-archwizard */
      "mkVx");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-skeleton-loader */
      "xJkR");
      /* harmony import */


      var angular_feather_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! angular-feather/icons */
      "q7zL");

      var icons = {
        Facebook: angular_feather_icons__WEBPACK_IMPORTED_MODULE_11__["Facebook"],
        Twitter: angular_feather_icons__WEBPACK_IMPORTED_MODULE_11__["Twitter"],
        Github: angular_feather_icons__WEBPACK_IMPORTED_MODULE_11__["Github"],
        Gitlab: angular_feather_icons__WEBPACK_IMPORTED_MODULE_11__["Gitlab"],
        User: angular_feather_icons__WEBPACK_IMPORTED_MODULE_11__["User"],
        Key: angular_feather_icons__WEBPACK_IMPORTED_MODULE_11__["Key"],
        UserCheck: angular_feather_icons__WEBPACK_IMPORTED_MODULE_11__["UserCheck"],
        Mail: angular_feather_icons__WEBPACK_IMPORTED_MODULE_11__["Mail"],
        Users: angular_feather_icons__WEBPACK_IMPORTED_MODULE_11__["Users"],
        Phone: angular_feather_icons__WEBPACK_IMPORTED_MODULE_11__["Phone"],
        Globe: angular_feather_icons__WEBPACK_IMPORTED_MODULE_11__["Globe"],
        Crosshair: angular_feather_icons__WEBPACK_IMPORTED_MODULE_11__["Crosshair"],
        Flag: angular_feather_icons__WEBPACK_IMPORTED_MODULE_11__["Flag"],
        Lock: angular_feather_icons__WEBPACK_IMPORTED_MODULE_11__["Lock"],
        Award: angular_feather_icons__WEBPACK_IMPORTED_MODULE_11__["Award"],
        Briefcase: angular_feather_icons__WEBPACK_IMPORTED_MODULE_11__["Briefcase"],
        Smartphone: angular_feather_icons__WEBPACK_IMPORTED_MODULE_11__["Smartphone"],
        UserPlus: angular_feather_icons__WEBPACK_IMPORTED_MODULE_11__["UserPlus"],
        Airplay: angular_feather_icons__WEBPACK_IMPORTED_MODULE_11__["Airplay"],
        Link2: angular_feather_icons__WEBPACK_IMPORTED_MODULE_11__["Link2"],
        FileText: angular_feather_icons__WEBPACK_IMPORTED_MODULE_11__["FileText"]
      };

      var ChangepasswordModule = function ChangepasswordModule() {
        _classCallCheck(this, ChangepasswordModule);
      };

      ChangepasswordModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ChangepasswordModule
      });
      ChangepasswordModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ChangepasswordModule_Factory(t) {
          return new (t || ChangepasswordModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _changepassword_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChangepasswordRoutingModule"], angular_feather__WEBPACK_IMPORTED_MODULE_4__["FeatherModule"].pick(icons), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot(), angular_archwizard__WEBPACK_IMPORTED_MODULE_8__["ArchwizardModule"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_10__["NgxSkeletonLoaderModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChangepasswordModule, {
          declarations: [_changepassword_component__WEBPACK_IMPORTED_MODULE_3__["ChangepasswordComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _changepassword_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChangepasswordRoutingModule"], angular_feather__WEBPACK_IMPORTED_MODULE_4__["FeatherModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"], angular_archwizard__WEBPACK_IMPORTED_MODULE_8__["ArchwizardModule"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_10__["NgxSkeletonLoaderModule"]]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangepasswordModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_changepassword_component__WEBPACK_IMPORTED_MODULE_3__["ChangepasswordComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _changepassword_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChangepasswordRoutingModule"], angular_feather__WEBPACK_IMPORTED_MODULE_4__["FeatherModule"].pick(icons), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot(), angular_archwizard__WEBPACK_IMPORTED_MODULE_8__["ArchwizardModule"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_10__["NgxSkeletonLoaderModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=changepassword-changepassword-module-es5.js.map