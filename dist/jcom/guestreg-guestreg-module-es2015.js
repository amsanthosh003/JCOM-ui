(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["guestreg-guestreg-module"],{

/***/ "77kb":
/*!*********************************************!*\
  !*** ./src/app/guestreg/guestreg.module.ts ***!
  \*********************************************/
/*! exports provided: GuestregModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestregModule", function() { return GuestregModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _guestreg_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guestreg-routing.module */ "hot/");
/* harmony import */ var _guestreg_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guestreg.component */ "8Jv8");
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-feather */ "8mtn");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "lDzL");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var angular_archwizard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-archwizard */ "mkVx");
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-skeleton-loader */ "xJkR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var angular_feather_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-feather/icons */ "q7zL");
















const icons = {
    Facebook: angular_feather_icons__WEBPACK_IMPORTED_MODULE_12__["Facebook"],
    Twitter: angular_feather_icons__WEBPACK_IMPORTED_MODULE_12__["Twitter"],
    Github: angular_feather_icons__WEBPACK_IMPORTED_MODULE_12__["Github"], Gitlab: angular_feather_icons__WEBPACK_IMPORTED_MODULE_12__["Gitlab"], User: angular_feather_icons__WEBPACK_IMPORTED_MODULE_12__["User"], Key: angular_feather_icons__WEBPACK_IMPORTED_MODULE_12__["Key"], UserCheck: angular_feather_icons__WEBPACK_IMPORTED_MODULE_12__["UserCheck"], Mail: angular_feather_icons__WEBPACK_IMPORTED_MODULE_12__["Mail"], Users: angular_feather_icons__WEBPACK_IMPORTED_MODULE_12__["Users"], Phone: angular_feather_icons__WEBPACK_IMPORTED_MODULE_12__["Phone"], Globe: angular_feather_icons__WEBPACK_IMPORTED_MODULE_12__["Globe"],
    Crosshair: angular_feather_icons__WEBPACK_IMPORTED_MODULE_12__["Crosshair"], Flag: angular_feather_icons__WEBPACK_IMPORTED_MODULE_12__["Flag"], Lock: angular_feather_icons__WEBPACK_IMPORTED_MODULE_12__["Lock"], Award: angular_feather_icons__WEBPACK_IMPORTED_MODULE_12__["Award"], Briefcase: angular_feather_icons__WEBPACK_IMPORTED_MODULE_12__["Briefcase"], Smartphone: angular_feather_icons__WEBPACK_IMPORTED_MODULE_12__["Smartphone"], UserPlus: angular_feather_icons__WEBPACK_IMPORTED_MODULE_12__["UserPlus"],
    Airplay: angular_feather_icons__WEBPACK_IMPORTED_MODULE_12__["Airplay"], Link2: angular_feather_icons__WEBPACK_IMPORTED_MODULE_12__["Link2"],
    Columns: angular_feather_icons__WEBPACK_IMPORTED_MODULE_12__["Columns"],
    CreditCard: angular_feather_icons__WEBPACK_IMPORTED_MODULE_12__["CreditCard"],
    Calendar: angular_feather_icons__WEBPACK_IMPORTED_MODULE_12__["Calendar"],
    MoreHorizontal: angular_feather_icons__WEBPACK_IMPORTED_MODULE_12__["MoreHorizontal"],
    MapPin: angular_feather_icons__WEBPACK_IMPORTED_MODULE_12__["MapPin"]
};
class GuestregModule {
}
GuestregModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GuestregModule });
GuestregModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GuestregModule_Factory(t) { return new (t || GuestregModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _guestreg_routing_module__WEBPACK_IMPORTED_MODULE_2__["GuestregRoutingModule"],
            angular_feather__WEBPACK_IMPORTED_MODULE_4__["FeatherModule"].pick(icons),
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot(), angular_archwizard__WEBPACK_IMPORTED_MODULE_8__["ArchwizardModule"],
            ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_9__["NgxSkeletonLoaderModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__["NgSelectModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GuestregModule, { declarations: [_guestreg_component__WEBPACK_IMPORTED_MODULE_3__["GuestregComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _guestreg_routing_module__WEBPACK_IMPORTED_MODULE_2__["GuestregRoutingModule"], angular_feather__WEBPACK_IMPORTED_MODULE_4__["FeatherModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"], angular_archwizard__WEBPACK_IMPORTED_MODULE_8__["ArchwizardModule"],
        ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_9__["NgxSkeletonLoaderModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__["NgSelectModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GuestregModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_guestreg_component__WEBPACK_IMPORTED_MODULE_3__["GuestregComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _guestreg_routing_module__WEBPACK_IMPORTED_MODULE_2__["GuestregRoutingModule"],
                    angular_feather__WEBPACK_IMPORTED_MODULE_4__["FeatherModule"].pick(icons),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot(), angular_archwizard__WEBPACK_IMPORTED_MODULE_8__["ArchwizardModule"],
                    ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_9__["NgxSkeletonLoaderModule"],
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__["NgSelectModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "8Jv8":
/*!************************************************!*\
  !*** ./src/app/guestreg/guestreg.component.ts ***!
  \************************************************/
/*! exports provided: GuestregComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestregComponent", function() { return GuestregComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "lDzL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/request.service */ "CzMn");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-skeleton-loader */ "xJkR");
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-feather */ "8mtn");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");


















function GuestregComponent_ngx_datatable_23_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const row_r14 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r14.date, " ");
} }
function GuestregComponent_ngx_datatable_23_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r15 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r15.guest_name);
} }
function GuestregComponent_ngx_datatable_23_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const row_r18 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r18.email_id, " ");
} }
function GuestregComponent_ngx_datatable_23_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const row_r19 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r19.city, " ");
} }
function GuestregComponent_ngx_datatable_23_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const row_r20 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r20.business_category, " ");
} }
function GuestregComponent_ngx_datatable_23_ng_template_13_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", row_r21.status, " ");
} }
function GuestregComponent_ngx_datatable_23_ng_template_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", row_r21.status, " ");
} }
function GuestregComponent_ngx_datatable_23_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GuestregComponent_ngx_datatable_23_ng_template_13_div_0_Template, 2, 1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GuestregComponent_ngx_datatable_23_ng_template_13_div_1_Template, 2, 1, "div", 34);
} if (rf & 2) {
    const row_r21 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", row_r21.status == "Present");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", row_r21.status == "Absent");
} }
function GuestregComponent_ngx_datatable_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-datatable", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ngx-datatable-column", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GuestregComponent_ngx_datatable_23_ng_template_3_Template, 1, 1, "ng-template", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ngx-datatable-column", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GuestregComponent_ngx_datatable_23_ng_template_5_Template, 3, 1, "ng-template", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ngx-datatable-column", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, GuestregComponent_ngx_datatable_23_ng_template_7_Template, 1, 1, "ng-template", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ngx-datatable-column", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, GuestregComponent_ngx_datatable_23_ng_template_9_Template, 1, 1, "ng-template", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ngx-datatable-column", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, GuestregComponent_ngx_datatable_23_ng_template_11_Template, 1, 1, "ng-template", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ngx-datatable-column", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, GuestregComponent_ngx_datatable_23_ng_template_13_Template, 2, 2, "ng-template", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx_r0.Guests)("loadingIndicator", ctx_r0.loadingIndicator)("headerHeight", 50)("footerHeight", 50)("limit", 8)("scrollbarH", ctx_r0.scrollBarHorizontal)("reorderable", ctx_r0.reorderable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 250);
} }
const _c0 = function () { return { "border-radius": "4px", height: "60px", width: "100%", "opacity": 0.6, "background-color": "##b9b8b8", border: "1px solid white" }; };
function GuestregComponent_ngx_skeleton_loader_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-skeleton-loader", 37);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function () { return { "border-radius": "4px", height: "30px", width: "100%", "opacity": 0.6, "background-color": "##b9b8b8", border: "1px solid white" }; };
function GuestregComponent_ngx_skeleton_loader_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-skeleton-loader", 38);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
} }
function GuestregComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Guest Registeration");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GuestregComponent_ng_template_28_Template_button_click_7_listener() { const modal_r26 = ctx.$implicit; return modal_r26.dismiss(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function GuestregComponent_ng_template_28_Template_form_ngSubmit_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.onAddRowSave(ctx_r28.register); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i-feather", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Mobile No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i-feather", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " E-mail ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i-feather", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "City ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i-feather", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Business Category ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i-feather", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "ng-select", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Type :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " \u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "JCI");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Non-JCI");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "CONFIRM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r4.register);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r4.designations);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r4.register.valid);
} }
function GuestregComponent_ng_template_30_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r33 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r33.username);
} }
function GuestregComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Connect Pending History");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GuestregComponent_ng_template_30_Template_button_click_7_listener() { const modal_r30 = ctx.$implicit; return modal_r30.dismiss(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ngx-datatable", 73, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("select", function GuestregComponent_ng_template_30_Template_ngx_datatable_select_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r37.onSelect($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "ngx-datatable-column", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ngx-datatable-column", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, GuestregComponent_ng_template_30_ng_template_16_Template, 3, 1, "ng-template", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "ngx-datatable-column", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx_r6.Customers)("loadingIndicator", ctx_r6.loadingIndicator)("headerHeight", 60)("limit", 10)("scrollbarH", ctx_r6.scrollBarHorizontal)("reorderable", ctx_r6.reorderable)("selected", ctx_r6.selected)("selectionType", "checkbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 200);
} }
class GuestregComponent {
    constructor(fb, modalService, toastr, request) {
        this.fb = fb;
        this.modalService = modalService;
        this.toastr = toastr;
        this.request = request;
        this.loader = true;
        this.rows = [];
        this.scrollBarHorizontal = window.innerWidth < 1200;
        this.newUserImg = 'assets/images/users/user-2.png';
        this.data = [];
        this.filteredData = [];
        this.loadingIndicator = true;
        this.isRowSelected = false;
        this.reorderable = true;
        this.selected = [];
        this.columns = [
            { name: 'username' },
            { name: 'phone' },
            { name: 'email' },
            { name: 'password' }
        ];
        this.genders = [
            { id: '1', value: 'male' },
            { id: '2', value: 'female' },
        ];
        this.countries = [
            { id: '1', name: 'India' },
        ];
        this.meetings = [
            { id: '1', value: 'Live' },
            { id: '2', value: 'Virtual' },
            { id: '3', value: 'Virtual International' },
            { id: '4', value: 'Association' },
        ];
        this.connects = [
            { id: '1', value: 'JCI' },
            { id: '2', value: 'Non-JCI' },
        ];
        this.connectssts = [
            { id: '1', value: 'Self Connect' },
            { id: '2', value: 'Within JCI-JCOM' },
        ];
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
        this.memberid = this.currentUserSubject.value[0];
        window.onresize = () => {
            this.scrollBarHorizontal = window.innerWidth < 1200;
        };
    }
    selectInput1(event) {
        let selected = event.target.value;
        if (selected == "1") {
            this.isdisable = true;
        }
        else {
            this.isdisable = false;
        }
    }
    ngOnInit() {
        this.viewdata();
        this.designation();
        this.register = this.fb.group({
            m_id: this.memberid.m_id,
            guest_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            mobile_no: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)],],
            guest_city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            business_category: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    // fetch data
    fetch(cb) {
        this.request.fetchguestById(this.memberid.m_id).subscribe((response) => {
            console.log(this.memberid.m_id);
            console.log(response);
            cb(response);
            this.loader = false;
        }, (error) => {
            console.log(error);
        });
    }
    // business fetch
    designation() {
        this.request.fetchbusiness().subscribe((response) => {
            this.designations = response;
            // console.log(this.designations);
        }, (error) => {
            console.log(error);
        });
    }
    // fetch2(cb) {
    //   this.request.fetchbusinessById().subscribe((response) => {
    //    console.log(response);
    //             cb(response);
    //             this.loader=false;
    //   }, (error) => {
    //     console.log(error);
    //   });
    // }
    openhistory(content) {
        this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title',
            size: 'lg',
        });
    }
    pendinghistory(content) {
        this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title',
            size: 'lg',
        });
    }
    // add new record
    addRow(content) {
        this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title',
            size: 'lg',
        });
        this.register.patchValue({
            id: this.getId(10, 100),
            img: this.newUserImg,
        });
    }
    // edit record
    editRow(row, rowIndex, content) {
        this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title',
            size: 'lg',
        });
        this.request.fetchuserById(row._id).subscribe((response) => {
            this.editcustmergroup = response[0];
            console.log(response);
            this.custmernamevalue = this.editcustmergroup.username;
            this.custmerphonevalue = this.editcustmergroup.phone;
            this.custmeremailvalue = this.editcustmergroup.email;
            this.custmerpasswordvalue = this.editcustmergroup.password;
            this.custmerdesignationvalue = this.editcustmergroup.Designation;
            this.IdValue = this.editcustmergroup._id;
            //   this.editForm = this.formBuilder.group({
            //     CountryName2:[this.CountryValue, Validators.required],
            //     Countrycode2:[this.CountrycodeValue, Validators.required]
            // });
            // console.log(this.editForm.value);
            this.editForm.setValue({
                username: this.custmernamevalue,
                phone: this.custmerphonevalue,
                email: this.custmeremailvalue,
                password: this.custmerpasswordvalue,
                Designation: this.custmerdesignationvalue,
            });
            this.selectedRowData = row;
        });
    }
    // delete single row
    deleteSingleRow(row) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: 'Are you sure?',
            showCancelButton: true,
            confirmButtonColor: '#8963ff',
            cancelButtonColor: '#fb7823',
            confirmButtonText: 'Yes',
        }).then((result) => {
            if (result.value) {
                this.deleteRecord(row);
                this.deleteRecordSuccess(1);
            }
        });
    }
    deleteRecord(row) {
        console.log("row", row._id);
        this.request.deleteuser(row._id).subscribe((response) => {
            console.log(response);
            this.viewdata();
        }, (error) => {
            console.log(error);
        });
    }
    arrayRemove(array, id) {
        return array.filter(function (element) {
            return element.id !== id;
        });
    }
    // save add new record
    onAddRowSave(form) {
        console.log(form.value);
        this.request.addguest(form.value).subscribe((res) => {
            if (res[0].status == 'success') {
                console.log(res);
                console.log("saved", res[0].status);
                form.reset();
                this.modalService.dismissAll();
                this.viewdata();
                this.addRecordSuccess();
            }
            else if (res[0].status == 'error') {
                console.log("res", res);
                form.reset();
                this.modalService.dismissAll();
            }
        }, (error) => {
            console.log("error", error);
            form.reset();
            this.modalService.dismissAll();
        });
    }
    viewdata() {
        this.fetch((data) => {
            this.data = data;
            // this.filteredData = data;
            this.Guests = data;
            console.log(this.Guests);
            // this.filteredData=data;
            setTimeout(() => {
                this.loadingIndicator = false;
            }, 500);
        });
    }
    // business category
    // viewdata2(){
    //   this.fetch2((data) => {
    //     this.data = data;
    //     // this.filteredData = data;
    //     this.Categorys=data;
    //     console.log(this.Categorys);
    //     // this.filteredData=data;
    //     setTimeout(() => {
    //       this.loadingIndicator = false;
    //     }, 500);
    //   });
    // }
    // save record on edit
    onEditSave(form) {
        const edata = {
            username: form.value.username,
            phone: form.value.phone,
            email: form.value.email,
            password: form.value.password,
            Designation: form.value.Designation
        };
        this.request.updateuser(this.IdValue, edata).subscribe((res) => {
            if (res.status == 'success') {
                this.modalService.dismissAll();
                this.viewdata();
                this.editRecordSuccess();
                return true;
            }
            else if (res.status == 'error') {
                this.modalService.dismissAll();
            }
        }, (error) => {
            console.log(error);
            this.modalService.dismissAll();
        });
    }
    // filter table data
    filterDatatable(event) {
        // get the value of the key pressed and make it lowercase
        const val = event.target.value.toLowerCase();
        // get the amount of columns in the table
        const colsAmt = this.columns.length;
        // get the key names of each column in the dataset
        const keys = Object.keys(this.filteredData[0]);
        // console.log("keys",""+keys);
        // assign filtered matches to the active datatable
        this.Guests = this.filteredData.filter(function (item) {
            // iterate through each row's column data
            for (let i = 0; i < colsAmt; i++) {
                // check for a match
                if (item[keys[i]].toString().toLowerCase().indexOf(val) !== -1 ||
                    !val) {
                    return true;
                }
            }
        });
        // whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    }
    // get random id
    getId(min, max) {
        // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    addRecordSuccess() {
        this.toastr.success('Add Record Successfully', '');
    }
    editRecordSuccess() {
        this.toastr.success('Edit Record Successfully', '');
    }
    deleteRecordSuccess(count) {
        this.toastr.error(count + ' Records Deleted Successfully', '');
    }
}
GuestregComponent.ɵfac = function GuestregComponent_Factory(t) { return new (t || GuestregComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_request_service__WEBPACK_IMPORTED_MODULE_6__["RequestService"])); };
GuestregComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GuestregComponent, selectors: [["app-guestreg"]], viewQuery: function GuestregComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.table2 = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])], decls: 32, vars: 3, consts: [[1, "main-content"], [1, "section-body", 2, "margin-top", "20px"], [1, "row", "clearfix"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "p-10", 2, "margin-right", "20px", "margin-left", "20px"], [1, "row"], [1, "col-lg-12"], [1, "row", "m-0"], [1, "col-lg-3", "p-0"], [1, "ngxTableHeader"], [1, "table-title"], [1, "header-buttons-left"], [1, "icon-button-demo", "buttons"], [1, "btn", "btn-icon", "icon-left", "btn-success", 3, "click"], [1, "fas", "fa-plus"], ["class", "material", "columnMode", "force", "rowHeight", "auto", 3, "rows", "loadingIndicator", "headerHeight", "footerHeight", "limit", "scrollbarH", "reorderable", 4, "ngIf"], ["id", "tit", 2, "width", "100%"], ["count", "1", 3, "theme", 4, "ngIf"], [1, "skle", 2, "width", "100%"], ["count", "10", "appearance", "line", 3, "theme", 4, "ngIf"], ["regRecord", ""], ["pendingRecord", ""], ["columnMode", "force", "rowHeight", "auto", 1, "material", 3, "rows", "loadingIndicator", "headerHeight", "footerHeight", "limit", "scrollbarH", "reorderable"], ["table", ""], ["name", "Date"], ["ngx-datatable-cell-template", ""], ["name", "Name", 3, "width"], ["name", "Email", 3, "width"], ["name", "City"], ["name", "Category"], ["name", "Status"], [1, "name-col-style"], ["class", "badge-outline col-green", 4, "ngIf"], ["class", "badge-outline col-red", 4, "ngIf"], [1, "badge-outline", "col-green"], [1, "badge-outline", "col-red"], ["count", "1", 3, "theme"], ["count", "10", "appearance", "line", 3, "theme"], [1, "modal-header", "editRowModal"], ["id", "modal-basic-title", 1, "modal-title"], [1, "table-modal-header"], ["src", "assets/images/JCOM logo 4.jpg", "alt", "avatar"], [1, "modal-about"], [1, "font-weight-bold", "p-t-10", "font-17"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "material-icons"], [1, "modal-body"], [1, "register-form", 2, "margin-top", "50px", "border-color", "rgb(20, 20, 20)", "border", "black", 3, "formGroup", "ngSubmit"], [1, "row", 2, "margin-left", "20px", "margin-right", "20px", "border", "black"], [1, "col-md-6"], [1, "form-group", "position-relative"], [1, "text-danger"], ["name", "user", 1, "login-icons", 2, "color", "rgb(63, 89, 241)"], ["type", "text", "formControlName", "guest_name", "placeholder", "Name", "required", "", 1, "form-control", "pl-5"], ["name", "phone", 1, "login-icons", 2, "color", "rgb(63, 89, 241)"], ["type", "text", "formControlName", "mobile_no", "placeholder", "Mobile No ", "required", "", 1, "form-control", "pl-5"], ["name", "mail", 1, "login-icons", 2, "color", "rgb(63, 89, 241)"], ["type", "email", "formControlName", "email_id", "placeholder", "Email", "required", "", 1, "form-control", "pl-5"], ["name", "map-pin", 1, "login-icons", 2, "color", "rgb(63, 89, 241)"], ["type", "text", "formControlName", "guest_city", "placeholder", "City", "required", "", 1, "form-control", "pl-5"], ["name", "Briefcase", 1, "login-icons", 2, "color", "rgb(63, 89, 241)"], ["bindLabel", "category", "bindValue", "id", "formControlName", "business_category", "required", "", 3, "items"], [1, "col-md-12"], ["id", "df", 2, "height", "50px"], [1, "form-check", "form-check-inline"], ["type", "radio", "formControlName", "type", "name", "inlineRadioOptions", "id", "inlineRadio1", "value", "option1", 1, "form-check-input"], ["for", "inlineRadio1", 1, "form-check-label"], ["type", "radio", "formControlName", "type", "name", "inlineRadioOptions", "id", "inlineRadio2", "value", "option2", 1, "form-check-input"], ["for", "inlineRadio2", 1, "form-check-label"], [1, "col-md-12", 2, "text-align", "center"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["columnMode", "force", "rowHeight", "auto", 1, "material", 3, "rows", "loadingIndicator", "headerHeight", "limit", "scrollbarH", "reorderable", "selected", "selectionType", "select"], ["name", "Type"]], template: function GuestregComponent_Template(rf, ctx) { if (rf & 1) {
        const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Registration History");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GuestregComponent_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29); return ctx.addRow(_r3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, GuestregComponent_ngx_datatable_23_Template, 14, 9, "ngx-datatable", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, GuestregComponent_ngx_skeleton_loader_25_Template, 1, 2, "ngx-skeleton-loader", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, GuestregComponent_ngx_skeleton_loader_27_Template, 1, 2, "ngx-skeleton-loader", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, GuestregComponent_ng_template_28_Template, 75, 3, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, GuestregComponent_ng_template_30_Template, 18, 9, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loader);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DataTableColumnCellDirective"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_9__["NgxSkeletonLoaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], angular_feather__WEBPACK_IMPORTED_MODULE_10__["FeatherComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RadioControlValueAccessor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJndWVzdHJlZy5jb21wb25lbnQuc2FzcyJ9 */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GuestregComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-guestreg',
                templateUrl: './guestreg.component.html',
                styleUrls: ['./guestreg.component.sass'],
                providers: [ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }, { type: _services_request_service__WEBPACK_IMPORTED_MODULE_6__["RequestService"] }]; }, { table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"], { static: false }]
        }], table2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"], { static: false }]
        }] }); })();


/***/ }),

/***/ "hot/":
/*!*****************************************************!*\
  !*** ./src/app/guestreg/guestreg-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: GuestregRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestregRoutingModule", function() { return GuestregRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _guestreg_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guestreg.component */ "8Jv8");





const routes = [{ path: '', component: _guestreg_component__WEBPACK_IMPORTED_MODULE_2__["GuestregComponent"] }];
class GuestregRoutingModule {
}
GuestregRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GuestregRoutingModule });
GuestregRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GuestregRoutingModule_Factory(t) { return new (t || GuestregRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GuestregRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GuestregRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=guestreg-guestreg-module-es2015.js.map