(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~accepted-accepted-module~advance-table-advance-table-module~cancel-cancel-module~completed-c~4ca9fd98"], {
    /***/
    "5eHb":
    /*!*********************************************************************!*\
      !*** ./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js ***!
      \*********************************************************************/

    /*! exports provided: BasePortalHost, ComponentPortal, DefaultGlobalConfig, DefaultNoAnimationsGlobalConfig, DefaultNoComponentGlobalConfig, Overlay, OverlayContainer, OverlayRef, TOAST_CONFIG, Toast, ToastContainerDirective, ToastContainerModule, ToastInjector, ToastNoAnimation, ToastNoAnimationModule, ToastPackage, ToastRef, ToastrComponentlessModule, ToastrModule, ToastrService */

    /***/
    function eHb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BasePortalHost", function () {
        return BasePortalHost;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComponentPortal", function () {
        return ComponentPortal;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultGlobalConfig", function () {
        return DefaultGlobalConfig;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultNoAnimationsGlobalConfig", function () {
        return DefaultNoAnimationsGlobalConfig;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultNoComponentGlobalConfig", function () {
        return DefaultNoComponentGlobalConfig;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Overlay", function () {
        return Overlay;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OverlayContainer", function () {
        return OverlayContainer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OverlayRef", function () {
        return OverlayRef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TOAST_CONFIG", function () {
        return TOAST_CONFIG;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Toast", function () {
        return Toast;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastContainerDirective", function () {
        return ToastContainerDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastContainerModule", function () {
        return ToastContainerModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastInjector", function () {
        return ToastInjector;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastNoAnimation", function () {
        return ToastNoAnimation;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastNoAnimationModule", function () {
        return ToastNoAnimationModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastPackage", function () {
        return ToastPackage;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastRef", function () {
        return ToastRef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastrComponentlessModule", function () {
        return ToastrComponentlessModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastrModule", function () {
        return ToastrModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastrService", function () {
        return ToastrService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = ["toast-component", ""];

      function Toast_button_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Toast_button_0_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.remove();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function Toast_div_1_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("[", ctx_r7.duplicatesCount + 1, "]");
        }
      }

      function Toast_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Toast_div_1_ng_container_2_Template, 2, 1, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.options.titleClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.duplicatesCount);
        }
      }

      function Toast_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 7);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r2.options.messageClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r2.message, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      }

      function Toast_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r3.options.messageClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r3.message);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.message, " ");
        }
      }

      function Toast_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r4.width + "%");
        }
      }

      function ToastNoAnimation_button_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToastNoAnimation_button_0_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.remove();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ToastNoAnimation_div_1_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("[", ctx_r7.duplicatesCount + 1, "]");
        }
      }

      function ToastNoAnimation_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ToastNoAnimation_div_1_ng_container_2_Template, 2, 1, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.options.titleClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.duplicatesCount);
        }
      }

      function ToastNoAnimation_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 7);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r2.options.messageClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r2.message, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      }

      function ToastNoAnimation_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r3.options.messageClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r3.message);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.message, " ");
        }
      }

      function ToastNoAnimation_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r4.width + "%");
        }
      }

      var ToastContainerDirective = /*#__PURE__*/function () {
        function ToastContainerDirective(el) {
          _classCallCheck(this, ToastContainerDirective);

          this.el = el;
        }

        _createClass(ToastContainerDirective, [{
          key: "getContainerElement",
          value: function getContainerElement() {
            return this.el.nativeElement;
          }
        }]);

        return ToastContainerDirective;
      }();

      ToastContainerDirective.ɵfac = function ToastContainerDirective_Factory(t) {
        return new (t || ToastContainerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      ToastContainerDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: ToastContainerDirective,
        selectors: [["", "toastContainer", ""]],
        exportAs: ["toastContainer"]
      });

      ToastContainerDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastContainerDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[toastContainer]',
            exportAs: 'toastContainer'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, null);
      })();

      var ToastContainerModule = function ToastContainerModule() {
        _classCallCheck(this, ToastContainerModule);
      };

      ToastContainerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ToastContainerModule
      });
      ToastContainerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ToastContainerModule_Factory(t) {
          return new (t || ToastContainerModule)();
        }
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ToastContainerModule, {
          declarations: [ToastContainerDirective],
          exports: [ToastContainerDirective]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastContainerModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [ToastContainerDirective],
            exports: [ToastContainerDirective]
          }]
        }], null, null);
      })();
      /**
       * Everything a toast needs to launch
       */


      var ToastPackage = /*#__PURE__*/function () {
        function ToastPackage(toastId, config, message, title, toastType, toastRef) {
          var _this = this;

          _classCallCheck(this, ToastPackage);

          this.toastId = toastId;
          this.config = config;
          this.message = message;
          this.title = title;
          this.toastType = toastType;
          this.toastRef = toastRef;
          this._onTap = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this._onAction = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.toastRef.afterClosed().subscribe(function () {
            _this._onAction.complete();

            _this._onTap.complete();
          });
        }
        /** Fired on click */


        _createClass(ToastPackage, [{
          key: "triggerTap",
          value: function triggerTap() {
            this._onTap.next();

            if (this.config.tapToDismiss) {
              this._onTap.complete();
            }
          }
        }, {
          key: "onTap",
          value: function onTap() {
            return this._onTap.asObservable();
          }
          /** available for use in custom toast */

        }, {
          key: "triggerAction",
          value: function triggerAction(action) {
            this._onAction.next(action);
          }
        }, {
          key: "onAction",
          value: function onAction() {
            return this._onAction.asObservable();
          }
        }]);

        return ToastPackage;
      }();

      var DefaultNoComponentGlobalConfig = {
        maxOpened: 0,
        autoDismiss: false,
        newestOnTop: true,
        preventDuplicates: false,
        countDuplicates: false,
        resetTimeoutOnDuplicate: false,
        includeTitleDuplicates: false,
        iconClasses: {
          error: 'toast-error',
          info: 'toast-info',
          success: 'toast-success',
          warning: 'toast-warning'
        },
        // Individual
        closeButton: false,
        disableTimeOut: false,
        timeOut: 5000,
        extendedTimeOut: 1000,
        enableHtml: false,
        progressBar: false,
        toastClass: 'ngx-toastr',
        positionClass: 'toast-top-right',
        titleClass: 'toast-title',
        messageClass: 'toast-message',
        easing: 'ease-in',
        easeTime: 300,
        tapToDismiss: true,
        onActivateTick: false,
        progressAnimation: 'decreasing'
      };
      var TOAST_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('ToastConfig');
      /**
       * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
       */

      var ComponentPortal = /*#__PURE__*/function () {
        function ComponentPortal(component, injector) {
          _classCallCheck(this, ComponentPortal);

          this.component = component;
          this.injector = injector;
        }
        /** Attach this portal to a host. */


        _createClass(ComponentPortal, [{
          key: "attach",
          value: function attach(host, newestOnTop) {
            this._attachedHost = host;
            return host.attach(this, newestOnTop);
          }
          /** Detach this portal from its host */

        }, {
          key: "detach",
          value: function detach() {
            var host = this._attachedHost;

            if (host) {
              this._attachedHost = undefined;
              return host.detach();
            }
          }
          /** Whether this portal is attached to a host. */

        }, {
          key: "isAttached",
          get: function get() {
            return this._attachedHost != null;
          }
          /**
           * Sets the PortalHost reference without performing `attach()`. This is used directly by
           * the PortalHost when it is performing an `attach()` or `detach()`.
           */

        }, {
          key: "setAttachedHost",
          value: function setAttachedHost(host) {
            this._attachedHost = host;
          }
        }]);

        return ComponentPortal;
      }();
      /**
       * Partial implementation of PortalHost that only deals with attaching a
       * ComponentPortal
       */


      var BasePortalHost = /*#__PURE__*/function () {
        function BasePortalHost() {
          _classCallCheck(this, BasePortalHost);
        }

        _createClass(BasePortalHost, [{
          key: "attach",
          value: function attach(portal, newestOnTop) {
            this._attachedPortal = portal;
            return this.attachComponentPortal(portal, newestOnTop);
          }
        }, {
          key: "detach",
          value: function detach() {
            if (this._attachedPortal) {
              this._attachedPortal.setAttachedHost();
            }

            this._attachedPortal = undefined;

            if (this._disposeFn) {
              this._disposeFn();

              this._disposeFn = undefined;
            }
          }
        }, {
          key: "setDisposeFn",
          value: function setDisposeFn(fn) {
            this._disposeFn = fn;
          }
        }]);

        return BasePortalHost;
      }();
      /**
       * A PortalHost for attaching portals to an arbitrary DOM element outside of the Angular
       * application context.
       *
       * This is the only part of the portal core that directly touches the DOM.
       */


      var DomPortalHost = /*#__PURE__*/function (_BasePortalHost) {
        _inherits(DomPortalHost, _BasePortalHost);

        var _super = _createSuper(DomPortalHost);

        function DomPortalHost(_hostDomElement, _componentFactoryResolver, _appRef) {
          var _this2;

          _classCallCheck(this, DomPortalHost);

          _this2 = _super.call(this);
          _this2._hostDomElement = _hostDomElement;
          _this2._componentFactoryResolver = _componentFactoryResolver;
          _this2._appRef = _appRef;
          return _this2;
        }
        /**
         * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
         * @param portal Portal to be attached
         */


        _createClass(DomPortalHost, [{
          key: "attachComponentPortal",
          value: function attachComponentPortal(portal, newestOnTop) {
            var _this3 = this;

            var componentFactory = this._componentFactoryResolver.resolveComponentFactory(portal.component);

            var componentRef; // If the portal specifies a ViewContainerRef, we will use that as the attachment point
            // for the component (in terms of Angular's component tree, not rendering).
            // When the ViewContainerRef is missing, we use the factory to create the component directly
            // and then manually attach the ChangeDetector for that component to the application (which
            // happens automatically when using a ViewContainer).

            componentRef = componentFactory.create(portal.injector); // When creating a component outside of a ViewContainer, we need to manually register
            // its ChangeDetector with the application. This API is unfortunately not yet published
            // in Angular core. The change detector must also be deregistered when the component
            // is destroyed to prevent memory leaks.

            this._appRef.attachView(componentRef.hostView);

            this.setDisposeFn(function () {
              _this3._appRef.detachView(componentRef.hostView);

              componentRef.destroy();
            }); // At this point the component has been instantiated, so we move it to the location in the DOM
            // where we want it to be rendered.

            if (newestOnTop) {
              this._hostDomElement.insertBefore(this._getComponentRootNode(componentRef), this._hostDomElement.firstChild);
            } else {
              this._hostDomElement.appendChild(this._getComponentRootNode(componentRef));
            }

            return componentRef;
          }
          /** Gets the root HTMLElement for an instantiated component. */

        }, {
          key: "_getComponentRootNode",
          value: function _getComponentRootNode(componentRef) {
            return componentRef.hostView.rootNodes[0];
          }
        }]);

        return DomPortalHost;
      }(BasePortalHost);
      /** Container inside which all toasts will render. */


      var OverlayContainer = /*#__PURE__*/function () {
        function OverlayContainer(_document) {
          _classCallCheck(this, OverlayContainer);

          this._document = _document;
        }

        _createClass(OverlayContainer, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this._containerElement && this._containerElement.parentNode) {
              this._containerElement.parentNode.removeChild(this._containerElement);
            }
          }
          /**
           * This method returns the overlay container element. It will lazily
           * create the element the first time  it is called to facilitate using
           * the container in non-browser environments.
           * @returns the container element
           */

        }, {
          key: "getContainerElement",
          value: function getContainerElement() {
            if (!this._containerElement) {
              this._createContainer();
            }

            return this._containerElement;
          }
          /**
           * Create the overlay container element, which is simply a div
           * with the 'cdk-overlay-container' class on the document body.
           */

        }, {
          key: "_createContainer",
          value: function _createContainer() {
            var container = this._document.createElement('div');

            container.classList.add('overlay-container');

            this._document.body.appendChild(container);

            this._containerElement = container;
          }
        }]);

        return OverlayContainer;
      }();

      OverlayContainer.ɵfac = function OverlayContainer_Factory(t) {
        return new (t || OverlayContainer)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]));
      };

      OverlayContainer.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function OverlayContainer_Factory() {
          return new OverlayContainer(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]));
        },
        token: OverlayContainer,
        providedIn: "root"
      });

      OverlayContainer.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OverlayContainer, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
            }]
          }];
        }, null);
      })();
      /**
       * Reference to an overlay that has been created with the Overlay service.
       * Used to manipulate or dispose of said overlay.
       */


      var OverlayRef = /*#__PURE__*/function () {
        function OverlayRef(_portalHost) {
          _classCallCheck(this, OverlayRef);

          this._portalHost = _portalHost;
        }

        _createClass(OverlayRef, [{
          key: "attach",
          value: function attach(portal) {
            var newestOnTop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            return this._portalHost.attach(portal, newestOnTop);
          }
          /**
           * Detaches an overlay from a portal.
           * @returns Resolves when the overlay has been detached.
           */

        }, {
          key: "detach",
          value: function detach() {
            return this._portalHost.detach();
          }
        }]);

        return OverlayRef;
      }();
      /* tslint:disable:no-non-null-assertion */

      /**
       * Service to create Overlays. Overlays are dynamically added pieces of floating UI, meant to be
       * used as a low-level building building block for other components. Dialogs, tooltips, menus,
       * selects, etc. can all be built using overlays. The service should primarily be used by authors
       * of re-usable components rather than developers building end-user applications.
       *
       * An overlay *is* a PortalHost, so any kind of Portal can be loaded into one.
       */


      var Overlay = /*#__PURE__*/function () {
        function Overlay(_overlayContainer, _componentFactoryResolver, _appRef, _document) {
          _classCallCheck(this, Overlay);

          this._overlayContainer = _overlayContainer;
          this._componentFactoryResolver = _componentFactoryResolver;
          this._appRef = _appRef;
          this._document = _document; // Namespace panes by overlay container

          this._paneElements = new Map();
        }
        /**
         * Creates an overlay.
         * @returns A reference to the created overlay.
         */


        _createClass(Overlay, [{
          key: "create",
          value: function create(positionClass, overlayContainer) {
            // get existing pane if possible
            return this._createOverlayRef(this.getPaneElement(positionClass, overlayContainer));
          }
        }, {
          key: "getPaneElement",
          value: function getPaneElement() {
            var positionClass = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            var overlayContainer = arguments.length > 1 ? arguments[1] : undefined;

            if (!this._paneElements.get(overlayContainer)) {
              this._paneElements.set(overlayContainer, {});
            }

            if (!this._paneElements.get(overlayContainer)[positionClass]) {
              this._paneElements.get(overlayContainer)[positionClass] = this._createPaneElement(positionClass, overlayContainer);
            }

            return this._paneElements.get(overlayContainer)[positionClass];
          }
          /**
           * Creates the DOM element for an overlay and appends it to the overlay container.
           * @returns Newly-created pane element
           */

        }, {
          key: "_createPaneElement",
          value: function _createPaneElement(positionClass, overlayContainer) {
            var pane = this._document.createElement('div');

            pane.id = 'toast-container';
            pane.classList.add(positionClass);
            pane.classList.add('toast-container');

            if (!overlayContainer) {
              this._overlayContainer.getContainerElement().appendChild(pane);
            } else {
              overlayContainer.getContainerElement().appendChild(pane);
            }

            return pane;
          }
          /**
           * Create a DomPortalHost into which the overlay content can be loaded.
           * @param pane The DOM element to turn into a portal host.
           * @returns A portal host for the given DOM element.
           */

        }, {
          key: "_createPortalHost",
          value: function _createPortalHost(pane) {
            return new DomPortalHost(pane, this._componentFactoryResolver, this._appRef);
          }
          /**
           * Creates an OverlayRef for an overlay in the given DOM element.
           * @param pane DOM element for the overlay
           */

        }, {
          key: "_createOverlayRef",
          value: function _createOverlayRef(pane) {
            return new OverlayRef(this._createPortalHost(pane));
          }
        }]);

        return Overlay;
      }();

      Overlay.ɵfac = function Overlay_Factory(t) {
        return new (t || Overlay)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](OverlayContainer), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]));
      };

      Overlay.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function Overlay_Factory() {
          return new Overlay(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(OverlayContainer), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]));
        },
        token: Overlay,
        providedIn: "root"
      });

      Overlay.ctorParameters = function () {
        return [{
          type: OverlayContainer
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Overlay, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: OverlayContainer
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
            }]
          }];
        }, null);
      })();
      /**
       * Reference to a toast opened via the Toastr service.
       */


      var ToastRef = /*#__PURE__*/function () {
        function ToastRef(_overlayRef) {
          _classCallCheck(this, ToastRef);

          this._overlayRef = _overlayRef;
          /** Count of duplicates of this toast */

          this.duplicatesCount = 0;
          /** Subject for notifying the user that the toast has finished closing. */

          this._afterClosed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          /** triggered when toast is activated */

          this._activate = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          /** notifies the toast that it should close before the timeout */

          this._manualClose = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          /** notifies the toast that it should reset the timeouts */

          this._resetTimeout = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          /** notifies the toast that it should count a duplicate toast */

          this._countDuplicate = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        }

        _createClass(ToastRef, [{
          key: "manualClose",
          value: function manualClose() {
            this._manualClose.next();

            this._manualClose.complete();
          }
        }, {
          key: "manualClosed",
          value: function manualClosed() {
            return this._manualClose.asObservable();
          }
        }, {
          key: "timeoutReset",
          value: function timeoutReset() {
            return this._resetTimeout.asObservable();
          }
        }, {
          key: "countDuplicate",
          value: function countDuplicate() {
            return this._countDuplicate.asObservable();
          }
          /**
           * Close the toast.
           */

        }, {
          key: "close",
          value: function close() {
            this._overlayRef.detach();

            this._afterClosed.next();

            this._manualClose.next();

            this._afterClosed.complete();

            this._manualClose.complete();

            this._activate.complete();

            this._resetTimeout.complete();

            this._countDuplicate.complete();
          }
          /** Gets an observable that is notified when the toast is finished closing. */

        }, {
          key: "afterClosed",
          value: function afterClosed() {
            return this._afterClosed.asObservable();
          }
        }, {
          key: "isInactive",
          value: function isInactive() {
            return this._activate.isStopped;
          }
        }, {
          key: "activate",
          value: function activate() {
            this._activate.next();

            this._activate.complete();
          }
          /** Gets an observable that is notified when the toast has started opening. */

        }, {
          key: "afterActivate",
          value: function afterActivate() {
            return this._activate.asObservable();
          }
          /** Reset the toast timouts and count duplicates */

        }, {
          key: "onDuplicate",
          value: function onDuplicate(resetTimeout, countDuplicate) {
            if (resetTimeout) {
              this._resetTimeout.next();
            }

            if (countDuplicate) {
              this._countDuplicate.next(++this.duplicatesCount);
            }
          }
        }]);

        return ToastRef;
      }();
      /** Custom injector type specifically for instantiating components with a toast. */


      var ToastInjector = /*#__PURE__*/function () {
        function ToastInjector(_toastPackage, _parentInjector) {
          _classCallCheck(this, ToastInjector);

          this._toastPackage = _toastPackage;
          this._parentInjector = _parentInjector;
        }

        _createClass(ToastInjector, [{
          key: "get",
          value: function get(token, notFoundValue, flags) {
            if (token === ToastPackage) {
              return this._toastPackage;
            }

            return this._parentInjector.get(token, notFoundValue, flags);
          }
        }]);

        return ToastInjector;
      }();

      var ToastrService = /*#__PURE__*/function () {
        function ToastrService(token, overlay, _injector, sanitizer, ngZone) {
          _classCallCheck(this, ToastrService);

          this.overlay = overlay;
          this._injector = _injector;
          this.sanitizer = sanitizer;
          this.ngZone = ngZone;
          this.currentlyActive = 0;
          this.toasts = [];
          this.index = 0;
          this.toastrConfig = Object.assign(Object.assign({}, token["default"]), token.config);

          if (token.config.iconClasses) {
            this.toastrConfig.iconClasses = Object.assign(Object.assign({}, token["default"].iconClasses), token.config.iconClasses);
          }
        }
        /** show toast */


        _createClass(ToastrService, [{
          key: "show",
          value: function show(message, title) {
            var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
            return this._preBuildNotification(type, message, title, this.applyConfig(override));
          }
          /** show successful toast */

        }, {
          key: "success",
          value: function success(message, title) {
            var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            var type = this.toastrConfig.iconClasses.success || '';
            return this._preBuildNotification(type, message, title, this.applyConfig(override));
          }
          /** show error toast */

        }, {
          key: "error",
          value: function error(message, title) {
            var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            var type = this.toastrConfig.iconClasses.error || '';
            return this._preBuildNotification(type, message, title, this.applyConfig(override));
          }
          /** show info toast */

        }, {
          key: "info",
          value: function info(message, title) {
            var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            var type = this.toastrConfig.iconClasses.info || '';
            return this._preBuildNotification(type, message, title, this.applyConfig(override));
          }
          /** show warning toast */

        }, {
          key: "warning",
          value: function warning(message, title) {
            var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            var type = this.toastrConfig.iconClasses.warning || '';
            return this._preBuildNotification(type, message, title, this.applyConfig(override));
          }
          /**
           * Remove all or a single toast by id
           */

        }, {
          key: "clear",
          value: function clear(toastId) {
            // Call every toastRef manualClose function
            var _iterator = _createForOfIteratorHelper(this.toasts),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var toast = _step.value;

                if (toastId !== undefined) {
                  if (toast.toastId === toastId) {
                    toast.toastRef.manualClose();
                    return;
                  }
                } else {
                  toast.toastRef.manualClose();
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
          /**
           * Remove and destroy a single toast by id
           */

        }, {
          key: "remove",
          value: function remove(toastId) {
            var found = this._findToast(toastId);

            if (!found) {
              return false;
            }

            found.activeToast.toastRef.close();
            this.toasts.splice(found.index, 1);
            this.currentlyActive = this.currentlyActive - 1;

            if (!this.toastrConfig.maxOpened || !this.toasts.length) {
              return false;
            }

            if (this.currentlyActive < this.toastrConfig.maxOpened && this.toasts[this.currentlyActive]) {
              var p = this.toasts[this.currentlyActive].toastRef;

              if (!p.isInactive()) {
                this.currentlyActive = this.currentlyActive + 1;
                p.activate();
              }
            }

            return true;
          }
          /**
           * Determines if toast message is already shown
           */

        }, {
          key: "findDuplicate",
          value: function findDuplicate() {
            var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
            var resetOnDuplicate = arguments.length > 2 ? arguments[2] : undefined;
            var countDuplicates = arguments.length > 3 ? arguments[3] : undefined;
            var includeTitleDuplicates = this.toastrConfig.includeTitleDuplicates;

            var _iterator2 = _createForOfIteratorHelper(this.toasts),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var toast = _step2.value;
                var hasDuplicateTitle = includeTitleDuplicates && toast.title === title;

                if ((!includeTitleDuplicates || hasDuplicateTitle) && toast.message === message) {
                  toast.toastRef.onDuplicate(resetOnDuplicate, countDuplicates);
                  return toast;
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            return null;
          }
          /** create a clone of global config and apply individual settings */

        }, {
          key: "applyConfig",
          value: function applyConfig() {
            var override = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return Object.assign(Object.assign({}, this.toastrConfig), override);
          }
          /**
           * Find toast object by id
           */

        }, {
          key: "_findToast",
          value: function _findToast(toastId) {
            for (var i = 0; i < this.toasts.length; i++) {
              if (this.toasts[i].toastId === toastId) {
                return {
                  index: i,
                  activeToast: this.toasts[i]
                };
              }
            }

            return null;
          }
          /**
           * Determines the need to run inside angular's zone then builds the toast
           */

        }, {
          key: "_preBuildNotification",
          value: function _preBuildNotification(toastType, message, title, config) {
            var _this4 = this;

            if (config.onActivateTick) {
              return this.ngZone.run(function () {
                return _this4._buildNotification(toastType, message, title, config);
              });
            }

            return this._buildNotification(toastType, message, title, config);
          }
          /**
           * Creates and attaches toast data to component
           * returns the active toast, or in case preventDuplicates is enabled the original/non-duplicate active toast.
           */

        }, {
          key: "_buildNotification",
          value: function _buildNotification(toastType, message, title, config) {
            if (!config.toastComponent) {
              throw new Error('toastComponent required');
            } // max opened and auto dismiss = true
            // if timeout = 0 resetting it would result in setting this.hideTime = Date.now(). Hence, we only want to reset timeout if there is
            // a timeout at all


            var duplicate = this.findDuplicate(title, message, this.toastrConfig.resetTimeoutOnDuplicate && config.timeOut > 0, this.toastrConfig.countDuplicates);

            if ((this.toastrConfig.includeTitleDuplicates && title || message) && this.toastrConfig.preventDuplicates && duplicate !== null) {
              return duplicate;
            }

            this.previousToastMessage = message;
            var keepInactive = false;

            if (this.toastrConfig.maxOpened && this.currentlyActive >= this.toastrConfig.maxOpened) {
              keepInactive = true;

              if (this.toastrConfig.autoDismiss) {
                this.clear(this.toasts[0].toastId);
              }
            }

            var overlayRef = this.overlay.create(config.positionClass, this.overlayContainer);
            this.index = this.index + 1;
            var sanitizedMessage = message;

            if (message && config.enableHtml) {
              sanitizedMessage = this.sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].HTML, message);
            }

            var toastRef = new ToastRef(overlayRef);
            var toastPackage = new ToastPackage(this.index, config, sanitizedMessage, title, toastType, toastRef);
            var toastInjector = new ToastInjector(toastPackage, this._injector);
            var component = new ComponentPortal(config.toastComponent, toastInjector);
            var portal = overlayRef.attach(component, this.toastrConfig.newestOnTop);
            toastRef.componentInstance = portal.instance;
            var ins = {
              toastId: this.index,
              title: title || '',
              message: message || '',
              toastRef: toastRef,
              onShown: toastRef.afterActivate(),
              onHidden: toastRef.afterClosed(),
              onTap: toastPackage.onTap(),
              onAction: toastPackage.onAction(),
              portal: portal
            };

            if (!keepInactive) {
              this.currentlyActive = this.currentlyActive + 1;
              setTimeout(function () {
                ins.toastRef.activate();
              });
            }

            this.toasts.push(ins);
            return ins;
          }
        }]);

        return ToastrService;
      }();

      ToastrService.ɵfac = function ToastrService_Factory(t) {
        return new (t || ToastrService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](TOAST_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
      };

      ToastrService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function ToastrService_Factory() {
          return new ToastrService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(TOAST_CONFIG), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(Overlay), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["INJECTOR"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
        },
        token: ToastrService,
        providedIn: "root"
      });

      ToastrService.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [TOAST_CONFIG]
          }]
        }, {
          type: Overlay
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastrService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [TOAST_CONFIG]
            }]
          }, {
            type: Overlay
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }];
        }, null);
      })();

      var Toast = /*#__PURE__*/function () {
        function Toast(toastrService, toastPackage, ngZone) {
          var _this5 = this;

          _classCallCheck(this, Toast);

          this.toastrService = toastrService;
          this.toastPackage = toastPackage;
          this.ngZone = ngZone;
          /** width of progress bar */

          this.width = -1;
          /** a combination of toast type and options.toastClass */

          this.toastClasses = '';
          /** controls animation */

          this.state = {
            value: 'inactive',
            params: {
              easeTime: this.toastPackage.config.easeTime,
              easing: 'ease-in'
            }
          };
          this.message = toastPackage.message;
          this.title = toastPackage.title;
          this.options = toastPackage.config;
          this.originalTimeout = toastPackage.config.timeOut;
          this.toastClasses = "".concat(toastPackage.toastType, " ").concat(toastPackage.config.toastClass);
          this.sub = toastPackage.toastRef.afterActivate().subscribe(function () {
            _this5.activateToast();
          });
          this.sub1 = toastPackage.toastRef.manualClosed().subscribe(function () {
            _this5.remove();
          });
          this.sub2 = toastPackage.toastRef.timeoutReset().subscribe(function () {
            _this5.resetTimeout();
          });
          this.sub3 = toastPackage.toastRef.countDuplicate().subscribe(function (count) {
            _this5.duplicatesCount = count;
          });
        }
        /** hides component when waiting to be displayed */


        _createClass(Toast, [{
          key: "displayStyle",
          get: function get() {
            if (this.state.value === 'inactive') {
              return 'none';
            }

            return;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.sub.unsubscribe();
            this.sub1.unsubscribe();
            this.sub2.unsubscribe();
            this.sub3.unsubscribe();
            clearInterval(this.intervalId);
            clearTimeout(this.timeout);
          }
          /**
           * activates toast and sets timeout
           */

        }, {
          key: "activateToast",
          value: function activateToast() {
            var _this6 = this;

            this.state = Object.assign(Object.assign({}, this.state), {
              value: 'active'
            });

            if (!(this.options.disableTimeOut === true || this.options.disableTimeOut === 'timeOut') && this.options.timeOut) {
              this.outsideTimeout(function () {
                return _this6.remove();
              }, this.options.timeOut);
              this.hideTime = new Date().getTime() + this.options.timeOut;

              if (this.options.progressBar) {
                this.outsideInterval(function () {
                  return _this6.updateProgress();
                }, 10);
              }
            }
          }
          /**
           * updates progress bar width
           */

        }, {
          key: "updateProgress",
          value: function updateProgress() {
            if (this.width === 0 || this.width === 100 || !this.options.timeOut) {
              return;
            }

            var now = new Date().getTime();
            var remaining = this.hideTime - now;
            this.width = remaining / this.options.timeOut * 100;

            if (this.options.progressAnimation === 'increasing') {
              this.width = 100 - this.width;
            }

            if (this.width <= 0) {
              this.width = 0;
            }

            if (this.width >= 100) {
              this.width = 100;
            }
          }
        }, {
          key: "resetTimeout",
          value: function resetTimeout() {
            var _this7 = this;

            clearTimeout(this.timeout);
            clearInterval(this.intervalId);
            this.state = Object.assign(Object.assign({}, this.state), {
              value: 'active'
            });
            this.outsideTimeout(function () {
              return _this7.remove();
            }, this.originalTimeout);
            this.options.timeOut = this.originalTimeout;
            this.hideTime = new Date().getTime() + (this.options.timeOut || 0);
            this.width = -1;

            if (this.options.progressBar) {
              this.outsideInterval(function () {
                return _this7.updateProgress();
              }, 10);
            }
          }
          /**
           * tells toastrService to remove this toast after animation time
           */

        }, {
          key: "remove",
          value: function remove() {
            var _this8 = this;

            if (this.state.value === 'removed') {
              return;
            }

            clearTimeout(this.timeout);
            this.state = Object.assign(Object.assign({}, this.state), {
              value: 'removed'
            });
            this.outsideTimeout(function () {
              return _this8.toastrService.remove(_this8.toastPackage.toastId);
            }, +this.toastPackage.config.easeTime);
          }
        }, {
          key: "tapToast",
          value: function tapToast() {
            if (this.state.value === 'removed') {
              return;
            }

            this.toastPackage.triggerTap();

            if (this.options.tapToDismiss) {
              this.remove();
            }
          }
        }, {
          key: "stickAround",
          value: function stickAround() {
            if (this.state.value === 'removed') {
              return;
            }

            clearTimeout(this.timeout);
            this.options.timeOut = 0;
            this.hideTime = 0; // disable progressBar

            clearInterval(this.intervalId);
            this.width = 0;
          }
        }, {
          key: "delayedHideToast",
          value: function delayedHideToast() {
            var _this9 = this;

            if (this.options.disableTimeOut === true || this.options.disableTimeOut === 'extendedTimeOut' || this.options.extendedTimeOut === 0 || this.state.value === 'removed') {
              return;
            }

            this.outsideTimeout(function () {
              return _this9.remove();
            }, this.options.extendedTimeOut);
            this.options.timeOut = this.options.extendedTimeOut;
            this.hideTime = new Date().getTime() + (this.options.timeOut || 0);
            this.width = -1;

            if (this.options.progressBar) {
              this.outsideInterval(function () {
                return _this9.updateProgress();
              }, 10);
            }
          }
        }, {
          key: "outsideTimeout",
          value: function outsideTimeout(func, timeout) {
            var _this10 = this;

            if (this.ngZone) {
              this.ngZone.runOutsideAngular(function () {
                return _this10.timeout = setTimeout(function () {
                  return _this10.runInsideAngular(func);
                }, timeout);
              });
            } else {
              this.timeout = setTimeout(function () {
                return func();
              }, timeout);
            }
          }
        }, {
          key: "outsideInterval",
          value: function outsideInterval(func, timeout) {
            var _this11 = this;

            if (this.ngZone) {
              this.ngZone.runOutsideAngular(function () {
                return _this11.intervalId = setInterval(function () {
                  return _this11.runInsideAngular(func);
                }, timeout);
              });
            } else {
              this.intervalId = setInterval(function () {
                return func();
              }, timeout);
            }
          }
        }, {
          key: "runInsideAngular",
          value: function runInsideAngular(func) {
            if (this.ngZone) {
              this.ngZone.run(function () {
                return func();
              });
            } else {
              func();
            }
          }
        }]);

        return Toast;
      }();

      Toast.ɵfac = function Toast_Factory(t) {
        return new (t || Toast)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ToastPackage), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
      };

      Toast.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: Toast,
        selectors: [["", "toast-component", ""]],
        hostVars: 5,
        hostBindings: function Toast_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Toast_click_HostBindingHandler() {
              return ctx.tapToast();
            })("mouseenter", function Toast_mouseenter_HostBindingHandler() {
              return ctx.stickAround();
            })("mouseleave", function Toast_mouseleave_HostBindingHandler() {
              return ctx.delayedHideToast();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsyntheticHostProperty"]("@flyInOut", ctx.state);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.toastClasses);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.displayStyle);
          }
        },
        attrs: _c0,
        decls: 5,
        vars: 5,
        consts: [["class", "toast-close-button", "aria-label", "Close", 3, "click", 4, "ngIf"], [3, "class", 4, "ngIf"], ["role", "alertdialog", "aria-live", "polite", 3, "class", "innerHTML", 4, "ngIf"], ["role", "alertdialog", "aria-live", "polite", 3, "class", 4, "ngIf"], [4, "ngIf"], ["aria-label", "Close", 1, "toast-close-button", 3, "click"], ["aria-hidden", "true"], ["role", "alertdialog", "aria-live", "polite", 3, "innerHTML"], ["role", "alertdialog", "aria-live", "polite"], [1, "toast-progress"]],
        template: function Toast_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Toast_button_0_Template, 3, 0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Toast_div_1_Template, 3, 5, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Toast_div_2_Template, 1, 3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Toast_div_3_Template, 2, 4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, Toast_div_4_Template, 2, 2, "div", 4);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.options.closeButton);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message && ctx.options.enableHtml);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message && !ctx.options.enableHtml);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.options.progressBar);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
        encapsulation: 2,
        data: {
          animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('flyInOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 0
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 1
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('removed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 0
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('inactive => active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('{{ easeTime }}ms {{ easing }}')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('active => removed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('{{ easeTime }}ms {{ easing }}'))])]
        }
      });

      Toast.ctorParameters = function () {
        return [{
          type: ToastrService
        }, {
          type: ToastPackage
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      };

      Toast.propDecorators = {
        toastClasses: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class']
        }],
        state: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['@flyInOut']
        }],
        displayStyle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['style.display']
        }],
        tapToast: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['click']
        }],
        stickAround: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mouseenter']
        }],
        delayedHideToast: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mouseleave']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Toast, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: '[toast-component]',
            template: "\n  <button *ngIf=\"options.closeButton\" (click)=\"remove()\" class=\"toast-close-button\" aria-label=\"Close\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n  <div *ngIf=\"title\" [class]=\"options.titleClass\" [attr.aria-label]=\"title\">\n    {{ title }} <ng-container *ngIf=\"duplicatesCount\">[{{ duplicatesCount + 1 }}]</ng-container>\n  </div>\n  <div *ngIf=\"message && options.enableHtml\" role=\"alertdialog\" aria-live=\"polite\"\n    [class]=\"options.messageClass\" [innerHTML]=\"message\">\n  </div>\n  <div *ngIf=\"message && !options.enableHtml\" role=\"alertdialog\" aria-live=\"polite\"\n    [class]=\"options.messageClass\" [attr.aria-label]=\"message\">\n    {{ message }}\n  </div>\n  <div *ngIf=\"options.progressBar\">\n    <div class=\"toast-progress\" [style.width]=\"width + '%'\"></div>\n  </div>\n  ",
            animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('flyInOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
              opacity: 0
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
              opacity: 1
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('removed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
              opacity: 0
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('inactive => active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('{{ easeTime }}ms {{ easing }}')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('active => removed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('{{ easeTime }}ms {{ easing }}'))])],
            preserveWhitespaces: false
          }]
        }], function () {
          return [{
            type: ToastrService
          }, {
            type: ToastPackage
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }];
        }, {
          toastClasses: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
          }],
          state: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['@flyInOut']
          }],
          displayStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.display']
          }],
          tapToast: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
          }],
          stickAround: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseenter']
          }],
          delayedHideToast: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseleave']
          }]
        });
      })();

      var DefaultGlobalConfig = Object.assign(Object.assign({}, DefaultNoComponentGlobalConfig), {
        toastComponent: Toast
      });

      var ToastrModule = /*#__PURE__*/function () {
        function ToastrModule() {
          _classCallCheck(this, ToastrModule);
        }

        _createClass(ToastrModule, null, [{
          key: "forRoot",
          value: function forRoot() {
            var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return {
              ngModule: ToastrModule,
              providers: [{
                provide: TOAST_CONFIG,
                useValue: {
                  "default": DefaultGlobalConfig,
                  config: config
                }
              }]
            };
          }
        }]);

        return ToastrModule;
      }();

      ToastrModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ToastrModule
      });
      ToastrModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ToastrModule_Factory(t) {
          return new (t || ToastrModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ToastrModule, {
          declarations: function declarations() {
            return [Toast];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]];
          },
          exports: function exports() {
            return [Toast];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastrModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
            declarations: [Toast],
            exports: [Toast],
            entryComponents: [Toast]
          }]
        }], null, null);
      })();

      var ToastrComponentlessModule = /*#__PURE__*/function () {
        function ToastrComponentlessModule() {
          _classCallCheck(this, ToastrComponentlessModule);
        }

        _createClass(ToastrComponentlessModule, null, [{
          key: "forRoot",
          value: function forRoot() {
            var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return {
              ngModule: ToastrModule,
              providers: [{
                provide: TOAST_CONFIG,
                useValue: {
                  "default": DefaultNoComponentGlobalConfig,
                  config: config
                }
              }]
            };
          }
        }]);

        return ToastrComponentlessModule;
      }();

      ToastrComponentlessModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ToastrComponentlessModule
      });
      ToastrComponentlessModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ToastrComponentlessModule_Factory(t) {
          return new (t || ToastrComponentlessModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ToastrComponentlessModule, {
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastrComponentlessModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]]
          }]
        }], null, null);
      })();

      var ToastNoAnimation = /*#__PURE__*/function () {
        function ToastNoAnimation(toastrService, toastPackage, appRef) {
          var _this12 = this;

          _classCallCheck(this, ToastNoAnimation);

          this.toastrService = toastrService;
          this.toastPackage = toastPackage;
          this.appRef = appRef;
          /** width of progress bar */

          this.width = -1;
          /** a combination of toast type and options.toastClass */

          this.toastClasses = '';
          /** controls animation */

          this.state = 'inactive';
          this.message = toastPackage.message;
          this.title = toastPackage.title;
          this.options = toastPackage.config;
          this.originalTimeout = toastPackage.config.timeOut;
          this.toastClasses = "".concat(toastPackage.toastType, " ").concat(toastPackage.config.toastClass);
          this.sub = toastPackage.toastRef.afterActivate().subscribe(function () {
            _this12.activateToast();
          });
          this.sub1 = toastPackage.toastRef.manualClosed().subscribe(function () {
            _this12.remove();
          });
          this.sub2 = toastPackage.toastRef.timeoutReset().subscribe(function () {
            _this12.resetTimeout();
          });
          this.sub3 = toastPackage.toastRef.countDuplicate().subscribe(function (count) {
            _this12.duplicatesCount = count;
          });
        }
        /** hides component when waiting to be displayed */


        _createClass(ToastNoAnimation, [{
          key: "displayStyle",
          get: function get() {
            if (this.state === 'inactive') {
              return 'none';
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.sub.unsubscribe();
            this.sub1.unsubscribe();
            this.sub2.unsubscribe();
            this.sub3.unsubscribe();
            clearInterval(this.intervalId);
            clearTimeout(this.timeout);
          }
          /**
           * activates toast and sets timeout
           */

        }, {
          key: "activateToast",
          value: function activateToast() {
            var _this13 = this;

            this.state = 'active';

            if (!(this.options.disableTimeOut === true || this.options.disableTimeOut === 'timeOut') && this.options.timeOut) {
              this.timeout = setTimeout(function () {
                _this13.remove();
              }, this.options.timeOut);
              this.hideTime = new Date().getTime() + this.options.timeOut;

              if (this.options.progressBar) {
                this.intervalId = setInterval(function () {
                  return _this13.updateProgress();
                }, 10);
              }
            }

            if (this.options.onActivateTick) {
              this.appRef.tick();
            }
          }
          /**
           * updates progress bar width
           */

        }, {
          key: "updateProgress",
          value: function updateProgress() {
            if (this.width === 0 || this.width === 100 || !this.options.timeOut) {
              return;
            }

            var now = new Date().getTime();
            var remaining = this.hideTime - now;
            this.width = remaining / this.options.timeOut * 100;

            if (this.options.progressAnimation === 'increasing') {
              this.width = 100 - this.width;
            }

            if (this.width <= 0) {
              this.width = 0;
            }

            if (this.width >= 100) {
              this.width = 100;
            }
          }
        }, {
          key: "resetTimeout",
          value: function resetTimeout() {
            var _this14 = this;

            clearTimeout(this.timeout);
            clearInterval(this.intervalId);
            this.state = 'active';
            this.options.timeOut = this.originalTimeout;
            this.timeout = setTimeout(function () {
              return _this14.remove();
            }, this.originalTimeout);
            this.hideTime = new Date().getTime() + (this.originalTimeout || 0);
            this.width = -1;

            if (this.options.progressBar) {
              this.intervalId = setInterval(function () {
                return _this14.updateProgress();
              }, 10);
            }
          }
          /**
           * tells toastrService to remove this toast after animation time
           */

        }, {
          key: "remove",
          value: function remove() {
            var _this15 = this;

            if (this.state === 'removed') {
              return;
            }

            clearTimeout(this.timeout);
            this.state = 'removed';
            this.timeout = setTimeout(function () {
              return _this15.toastrService.remove(_this15.toastPackage.toastId);
            });
          }
        }, {
          key: "tapToast",
          value: function tapToast() {
            if (this.state === 'removed') {
              return;
            }

            this.toastPackage.triggerTap();

            if (this.options.tapToDismiss) {
              this.remove();
            }
          }
        }, {
          key: "stickAround",
          value: function stickAround() {
            if (this.state === 'removed') {
              return;
            }

            clearTimeout(this.timeout);
            this.options.timeOut = 0;
            this.hideTime = 0; // disable progressBar

            clearInterval(this.intervalId);
            this.width = 0;
          }
        }, {
          key: "delayedHideToast",
          value: function delayedHideToast() {
            var _this16 = this;

            if (this.options.disableTimeOut === true || this.options.disableTimeOut === 'extendedTimeOut' || this.options.extendedTimeOut === 0 || this.state === 'removed') {
              return;
            }

            this.timeout = setTimeout(function () {
              return _this16.remove();
            }, this.options.extendedTimeOut);
            this.options.timeOut = this.options.extendedTimeOut;
            this.hideTime = new Date().getTime() + (this.options.timeOut || 0);
            this.width = -1;

            if (this.options.progressBar) {
              this.intervalId = setInterval(function () {
                return _this16.updateProgress();
              }, 10);
            }
          }
        }]);

        return ToastNoAnimation;
      }();

      ToastNoAnimation.ɵfac = function ToastNoAnimation_Factory(t) {
        return new (t || ToastNoAnimation)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ToastPackage), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]));
      };

      ToastNoAnimation.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ToastNoAnimation,
        selectors: [["", "toast-component", ""]],
        hostVars: 4,
        hostBindings: function ToastNoAnimation_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToastNoAnimation_click_HostBindingHandler() {
              return ctx.tapToast();
            })("mouseenter", function ToastNoAnimation_mouseenter_HostBindingHandler() {
              return ctx.stickAround();
            })("mouseleave", function ToastNoAnimation_mouseleave_HostBindingHandler() {
              return ctx.delayedHideToast();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.toastClasses);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.displayStyle);
          }
        },
        attrs: _c0,
        decls: 5,
        vars: 5,
        consts: [["class", "toast-close-button", "aria-label", "Close", 3, "click", 4, "ngIf"], [3, "class", 4, "ngIf"], ["role", "alert", "aria-live", "polite", 3, "class", "innerHTML", 4, "ngIf"], ["role", "alert", "aria-live", "polite", 3, "class", 4, "ngIf"], [4, "ngIf"], ["aria-label", "Close", 1, "toast-close-button", 3, "click"], ["aria-hidden", "true"], ["role", "alert", "aria-live", "polite", 3, "innerHTML"], ["role", "alert", "aria-live", "polite"], [1, "toast-progress"]],
        template: function ToastNoAnimation_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ToastNoAnimation_button_0_Template, 3, 0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ToastNoAnimation_div_1_Template, 3, 5, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ToastNoAnimation_div_2_Template, 1, 3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ToastNoAnimation_div_3_Template, 2, 4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ToastNoAnimation_div_4_Template, 2, 2, "div", 4);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.options.closeButton);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message && ctx.options.enableHtml);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message && !ctx.options.enableHtml);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.options.progressBar);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
        encapsulation: 2
      });

      ToastNoAnimation.ctorParameters = function () {
        return [{
          type: ToastrService
        }, {
          type: ToastPackage
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]
        }];
      };

      ToastNoAnimation.propDecorators = {
        toastClasses: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class']
        }],
        displayStyle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['style.display']
        }],
        tapToast: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['click']
        }],
        stickAround: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mouseenter']
        }],
        delayedHideToast: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mouseleave']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastNoAnimation, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: '[toast-component]',
            template: "\n  <button *ngIf=\"options.closeButton\" (click)=\"remove()\" class=\"toast-close-button\" aria-label=\"Close\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n  <div *ngIf=\"title\" [class]=\"options.titleClass\" [attr.aria-label]=\"title\">\n    {{ title }} <ng-container *ngIf=\"duplicatesCount\">[{{ duplicatesCount + 1 }}]</ng-container>\n  </div>\n  <div *ngIf=\"message && options.enableHtml\" role=\"alert\" aria-live=\"polite\"\n    [class]=\"options.messageClass\" [innerHTML]=\"message\">\n  </div>\n  <div *ngIf=\"message && !options.enableHtml\" role=\"alert\" aria-live=\"polite\"\n    [class]=\"options.messageClass\" [attr.aria-label]=\"message\">\n    {{ message }}\n  </div>\n  <div *ngIf=\"options.progressBar\">\n    <div class=\"toast-progress\" [style.width]=\"width + '%'\"></div>\n  </div>\n  "
          }]
        }], function () {
          return [{
            type: ToastrService
          }, {
            type: ToastPackage
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]
          }];
        }, {
          toastClasses: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
          }],
          displayStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.display']
          }],
          tapToast: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
          }],
          stickAround: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseenter']
          }],
          delayedHideToast: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseleave']
          }]
        });
      })();

      var DefaultNoAnimationsGlobalConfig = Object.assign(Object.assign({}, DefaultNoComponentGlobalConfig), {
        toastComponent: ToastNoAnimation
      });

      var ToastNoAnimationModule = /*#__PURE__*/function () {
        function ToastNoAnimationModule() {
          _classCallCheck(this, ToastNoAnimationModule);
        }

        _createClass(ToastNoAnimationModule, null, [{
          key: "forRoot",
          value: function forRoot() {
            var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return {
              ngModule: ToastNoAnimationModule,
              providers: [{
                provide: TOAST_CONFIG,
                useValue: {
                  "default": DefaultNoAnimationsGlobalConfig,
                  config: config
                }
              }]
            };
          }
        }]);

        return ToastNoAnimationModule;
      }();

      ToastNoAnimationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ToastNoAnimationModule
      });
      ToastNoAnimationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ToastNoAnimationModule_Factory(t) {
          return new (t || ToastNoAnimationModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ToastNoAnimationModule, {
          declarations: function declarations() {
            return [ToastNoAnimation];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]];
          },
          exports: function exports() {
            return [ToastNoAnimation];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastNoAnimationModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
            declarations: [ToastNoAnimation],
            exports: [ToastNoAnimation],
            entryComponents: [ToastNoAnimation]
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ngx-toastr.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=default~accepted-accepted-module~advance-table-advance-table-module~cancel-cancel-module~completed-c~4ca9fd98-es5.js.map