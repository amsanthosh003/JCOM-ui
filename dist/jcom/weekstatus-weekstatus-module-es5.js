(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["weekstatus-weekstatus-module"], {
    /***/
    "YEay":
    /*!*************************************************!*\
      !*** ./src/app/weekstatus/weekstatus.module.ts ***!
      \*************************************************/

    /*! exports provided: WeekstatusModule */

    /***/
    function YEay(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WeekstatusModule", function () {
        return WeekstatusModule;
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


      var _weekstatus_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./weekstatus-routing.module */
      "eZjR");
      /* harmony import */


      var _weekstatus_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./weekstatus.component */
      "B52j");

      var WeekstatusModule = function WeekstatusModule() {
        _classCallCheck(this, WeekstatusModule);
      };

      WeekstatusModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: WeekstatusModule
      });
      WeekstatusModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function WeekstatusModule_Factory(t) {
          return new (t || WeekstatusModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _weekstatus_routing_module__WEBPACK_IMPORTED_MODULE_2__["WeekstatusRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WeekstatusModule, {
          declarations: [_weekstatus_component__WEBPACK_IMPORTED_MODULE_3__["WeekstatusComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _weekstatus_routing_module__WEBPACK_IMPORTED_MODULE_2__["WeekstatusRoutingModule"]]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeekstatusModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_weekstatus_component__WEBPACK_IMPORTED_MODULE_3__["WeekstatusComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _weekstatus_routing_module__WEBPACK_IMPORTED_MODULE_2__["WeekstatusRoutingModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "eZjR":
    /*!*********************************************************!*\
      !*** ./src/app/weekstatus/weekstatus-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: WeekstatusRoutingModule */

    /***/
    function eZjR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WeekstatusRoutingModule", function () {
        return WeekstatusRoutingModule;
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


      var _weekstatus_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./weekstatus.component */
      "B52j");

      var routes = [{
        path: '',
        component: _weekstatus_component__WEBPACK_IMPORTED_MODULE_2__["WeekstatusComponent"],
        children: [{
          path: 'currentstatus',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | currentstatus-currentstatus-module */
            "currentstatus-currentstatus-module").then(__webpack_require__.bind(null,
            /*! ../currentstatus/currentstatus.module */
            "PKNF")).then(function (m) {
              return m.CurrentstatusModule;
            });
          }
        }]
      }];

      var WeekstatusRoutingModule = function WeekstatusRoutingModule() {
        _classCallCheck(this, WeekstatusRoutingModule);
      };

      WeekstatusRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: WeekstatusRoutingModule
      });
      WeekstatusRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function WeekstatusRoutingModule_Factory(t) {
          return new (t || WeekstatusRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WeekstatusRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeekstatusRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=weekstatus-weekstatus-module-es5.js.map