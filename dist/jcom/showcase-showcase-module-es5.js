(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["showcase-showcase-module"], {
    /***/
    "0ter":
    /*!************************************************!*\
      !*** ./src/app/showcase/showcase.component.ts ***!
      \************************************************/

    /*! exports provided: ShowcaseComponent */

    /***/
    function ter(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShowcaseComponent", function () {
        return ShowcaseComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "lDzL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _services_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/request.service */
      "CzMn");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-skeleton-loader */
      "xJkR");
      /* harmony import */


      var angular_feather__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! angular-feather */
      "8mtn");

      function ShowcaseComponent_ngx_datatable_31_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var row_r9 = ctx.row;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r9.date, " ");
        }
      }

      function ShowcaseComponent_ngx_datatable_31_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r10 = ctx.row;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r10.title);
        }
      }

      function ShowcaseComponent_ngx_datatable_31_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var row_r13 = ctx.row;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r13.mode, " ");
        }
      }

      function ShowcaseComponent_ngx_datatable_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-datatable", 29, 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ngx-datatable-column", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ShowcaseComponent_ngx_datatable_31_ng_template_3_Template, 1, 1, "ng-template", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ngx-datatable-column", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ShowcaseComponent_ngx_datatable_31_ng_template_5_Template, 3, 1, "ng-template", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ngx-datatable-column", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ShowcaseComponent_ngx_datatable_31_ng_template_7_Template, 1, 1, "ng-template", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx_r0.Showcases)("loadingIndicator", ctx_r0.loadingIndicator)("headerHeight", 50)("footerHeight", 50)("limit", 10)("scrollbarH", ctx_r0.scrollBarHorizontal)("reorderable", ctx_r0.reorderable);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 200);
        }
      }

      var _c0 = function _c0() {
        return {
          "border-radius": "4px",
          height: "60px",
          width: "100%",
          "opacity": 0.6,
          "background-color": "##b9b8b8",
          border: "1px solid white"
        };
      };

      function ShowcaseComponent_ngx_skeleton_loader_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-skeleton-loader", 36);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      }

      var _c1 = function _c1() {
        return {
          "border-radius": "4px",
          height: "30px",
          width: "100%",
          "opacity": 0.6,
          "background-color": "##b9b8b8",
          border: "1px solid white"
        };
      };

      function ShowcaseComponent_ngx_skeleton_loader_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-skeleton-loader", 37);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
        }
      }

      function ShowcaseComponent_ng_template_36_option_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var mode_r16 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", mode_r16.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", mode_r16.value, " ");
        }
      }

      function ShowcaseComponent_ng_template_36_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Add Showcase ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowcaseComponent_ng_template_36_Template_button_click_7_listener() {
            var modal_r14 = ctx.$implicit;
            return modal_r14.dismiss();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ShowcaseComponent_ng_template_36_Template_form_ngSubmit_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r18.onAddRowSave(ctx_r18.register);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i-feather", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i-feather", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Mode");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i-feather", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "select", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ShowcaseComponent_ng_template_36_Template_select_change_35_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r20.selectInput1($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "option", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, ShowcaseComponent_ng_template_36_option_37_Template, 2, 2, "option", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "SAVE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r4.register);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.modes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r4.register.valid);
        }
      }

      var ShowcaseComponent = /*#__PURE__*/function () {
        function ShowcaseComponent(fb, modalService, toastr, request) {
          var _this = this;

          _classCallCheck(this, ShowcaseComponent);

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
          this.columns = [{
            name: 'username'
          }, {
            name: 'phone'
          }, {
            name: 'email'
          }, {
            name: 'password'
          }];
          this.genders = [{
            id: '1',
            value: 'male'
          }, {
            id: '2',
            value: 'female'
          }];
          this.countries = [{
            id: '1',
            name: 'India'
          }];
          this.meetings = [{
            id: '1',
            value: 'Live'
          }, {
            id: '2',
            value: 'Virtual'
          }, {
            id: '3',
            value: 'Virtual International'
          }, {
            id: '4',
            value: 'Association'
          }];
          this.connects = [{
            id: '1',
            value: 'JCOM'
          }, {
            id: '2',
            value: 'JCI'
          }, {
            id: '3',
            value: 'Non-JCI'
          }];
          this.connectssts = [{
            id: '1',
            value: 'Self Connect'
          }, {
            id: '2',
            value: 'Within JCI-JCOM'
          }];
          this.modes = [{
            id: 'Social Media',
            value: 'Social Media'
          }, {
            id: 'Live Meeting',
            value: 'Live  Meeting'
          }, {
            id: 'JCOM Conference',
            value: 'JCOM Conference'
          }, {
            id: 'Whatsapp Group',
            value: 'Whatsapp Group'
          }, {
            id: 'Facebook',
            value: 'Facebook'
          }];
          this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
          this.currentUser = this.currentUserSubject.asObservable();
          this.memberid = this.currentUserSubject.value[0];

          window.onresize = function () {
            _this.scrollBarHorizontal = window.innerWidth < 1200;
          };
        }

        _createClass(ShowcaseComponent, [{
          key: "selectInput1",
          value: function selectInput1(event) {
            var selected = event.target.value;

            if (selected == "1") {
              this.isdisable = true;
            } else {
              this.isdisable = false;
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.viewdata();
            this.register = this.fb.group({
              m_id: this.memberid.m_id,
              date: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              mode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
            });
          }
        }, {
          key: "viewdata",
          value: function viewdata() {
            var _this2 = this;

            this.fetch(function (data) {
              _this2.data = data;
              _this2.Showcases = data;
              _this2.filteredData = data;
              setTimeout(function () {
                _this2.loadingIndicator = false;
              }, 500);
            });
          } // fetch data

        }, {
          key: "fetch",
          value: function fetch(cb) {
            var _this3 = this;

            this.request.fetchshowcaseById(this.memberid.m_id).subscribe(function (response) {
              console.log(response);
              cb(response);
              _this3.loader = false;
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "openhistory",
          value: function openhistory(content) {
            this.modalService.open(content, {
              ariaLabelledBy: 'modal-basic-title',
              size: 'lg'
            });
          }
        }, {
          key: "pendinghistory",
          value: function pendinghistory(content) {
            this.modalService.open(content, {
              ariaLabelledBy: 'modal-basic-title',
              size: 'lg'
            });
          } // add new record

        }, {
          key: "addRow",
          value: function addRow(content) {
            this.modalService.open(content, {
              ariaLabelledBy: 'modal-basic-title',
              size: 'lg'
            });
            this.register.patchValue({
              id: this.getId(10, 100),
              img: this.newUserImg
            });
          }
        }, {
          key: "arrayRemove",
          value: function arrayRemove(array, id) {
            return array.filter(function (element) {
              return element.id !== id;
            });
          } // save add new record

        }, {
          key: "onAddRowSave",
          value: function onAddRowSave(form) {
            var _this4 = this;

            console.log(form.value);
            this.request.addshowcase(form.value).subscribe(function (res) {
              console.log("added");

              if (res[0].status == 'success') {
                console.log("statusssss");
                console.log(res);
                form.reset();

                _this4.modalService.dismissAll();

                _this4.viewdata();

                _this4.addRecordSuccess();
              } else if (res[0].status == 'error') {
                console.log("res", res);
                form.reset();

                _this4.modalService.dismissAll();
              }
            }, function (error) {
              console.log("error", error);
              form.reset();

              _this4.modalService.dismissAll();
            });
          } // save record on edit

        }, {
          key: "onEditSave",
          value: function onEditSave(form) {
            var _this5 = this;

            var edata = {
              username: form.value.username,
              phone: form.value.phone,
              email: form.value.email,
              password: form.value.password,
              Designation: form.value.Designation
            };
            this.request.updateuser(this.IdValue, edata).subscribe(function (res) {
              if (res.status == 'success') {
                _this5.modalService.dismissAll();

                _this5.viewdata();

                _this5.editRecordSuccess();

                return true;
              } else if (res.status == 'error') {
                _this5.modalService.dismissAll();
              }
            }, function (error) {
              console.log(error);

              _this5.modalService.dismissAll();
            });
          } // filter table data

        }, {
          key: "filterDatatable",
          value: function filterDatatable(event) {
            // get the value of the key pressed and make it lowercase
            var val = event.target.value.toLowerCase(); // get the amount of columns in the table
            // const colsAmt = this.columns.length;

            var colsAmt = 2; // get the key names of each column in the dataset

            var keys = Object.keys(this.filteredData[0]); // console.log("keys",""+keys);
            // assign filtered matches to the active datatable

            this.Showcases = this.filteredData.filter(function (item) {
              // iterate through each row's column data
              for (var i = 0; i < colsAmt; i++) {
                // check for a match
                console.log("keys", item[keys[i]].toString().toLowerCase().indexOf(val));
                console.log("keyindex", keys[i]);

                if (item[keys[i]].toString().toLowerCase().indexOf(val) !== -1 || !val) {
                  return true;
                }
              }
            }); // whenever the filter changes, always go back to the first page

            this.table.offset = 0;
          } // get random id

        }, {
          key: "getId",
          value: function getId(min, max) {
            // min and max included
            return Math.floor(Math.random() * (max - min + 1) + min);
          }
        }, {
          key: "addRecordSuccess",
          value: function addRecordSuccess() {
            this.toastr.success('Add Record Successfully', '');
          }
        }, {
          key: "editRecordSuccess",
          value: function editRecordSuccess() {
            this.toastr.success('Edit Record Successfully', '');
          }
        }, {
          key: "deleteRecordSuccess",
          value: function deleteRecordSuccess(count) {
            this.toastr.error(count + ' Records Deleted Successfully', '');
          }
        }]);

        return ShowcaseComponent;
      }();

      ShowcaseComponent.ɵfac = function ShowcaseComponent_Factory(t) {
        return new (t || ShowcaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_request_service__WEBPACK_IMPORTED_MODULE_5__["RequestService"]));
      };

      ShowcaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ShowcaseComponent,
        selectors: [["app-showcase"]],
        viewQuery: function ShowcaseComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"], 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"], 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.table2 = _t.first);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])],
        decls: 38,
        vars: 3,
        consts: [[1, "main-content"], [1, "section-body", 2, "margin-top", "20px"], [1, "row", "clearfix"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "p-10", 2, "margin-right", "20px", "margin-left", "20px"], [1, "row"], [1, "col-lg-12"], [1, "row", "m-0"], [1, "col-lg-2", "p-0"], [1, "ngxTableHeader"], [1, "table-title"], [1, "col-lg-6", "p-0"], [1, "header-buttons-left"], [1, "icon-button-demo", "buttons"], [1, "btn", "btn-icon", "icon-left", "btn-success", 3, "click"], [1, "fas", "fa-plus"], [1, "col-lg-4", "p-0"], [1, "ngxTableHeader", 2, "display", "flex", "justify-content", "flex-end"], [1, "table-search-area"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Search", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], ["class", "material", "columnMode", "force", "rowHeight", "auto", 3, "rows", "loadingIndicator", "headerHeight", "footerHeight", "limit", "scrollbarH", "reorderable", 4, "ngIf"], ["id", "tit", 2, "width", "100%"], ["count", "1", 3, "theme", 4, "ngIf"], [1, "skle", 2, "width", "100%"], ["count", "10", "appearance", "line", 3, "theme", 4, "ngIf"], ["addRecord", ""], ["columnMode", "force", "rowHeight", "auto", 1, "material", 3, "rows", "loadingIndicator", "headerHeight", "footerHeight", "limit", "scrollbarH", "reorderable"], ["table", ""], ["name", "Date"], ["ngx-datatable-cell-template", ""], ["name", "Title", 3, "width"], ["name", "Mode"], [1, "name-col-style"], ["count", "1", 3, "theme"], ["count", "10", "appearance", "line", 3, "theme"], [1, "modal-header", "editRowModal"], ["id", "modal-basic-title", 1, "modal-title"], [1, "table-modal-header"], ["src", "assets/images/JCOM logo 4.jpg", "alt", "avatar"], [1, "modal-about"], [1, "font-weight-bold", "p-t-10", "font-17"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "material-icons"], [1, "modal-body"], [1, "register-form", 2, "margin-top", "50px", "border-color", "rgb(20, 20, 20)", "border", "rgb(197, 55, 55)", 3, "formGroup", "ngSubmit"], [1, "row", 2, "margin-left", "50px", "margin-right", "50px", "border", "black"], [1, "col-md-12"], [1, "form-group", "position-relative"], [1, "text-danger"], ["name", "calendar", 1, "login-icons", 2, "color", "rgb(63, 89, 241)"], ["type", "date", "formControlName", "date", "placeholder", "date", "required", "", 1, "form-control", "pl-5"], ["name", "more-horizontal", 1, "login-icons", 2, "color", "rgb(63, 89, 241)"], ["type", "text", "formControlName", "title", "placeholder", "Enter the title ", "required", "", 1, "form-control", "pl-5"], ["name", "airplay", 1, "login-icons", 2, "color", "rgb(63, 89, 241)"], ["formControlName", "mode", "required", "", 1, "form-control", "pl-5", 3, "change"], ["value", "", "selected", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-md-12", 2, "text-align", "center"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [3, "value"]],
        template: function ShowcaseComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "ShowCase");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowcaseComponent_Template_button_click_19_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

              var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37);

              return ctx.addRow(_r3);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Add ShowCase");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "i", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ShowcaseComponent_Template_input_keyup_29_listener($event) {
              return ctx.filterDatatable($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ShowcaseComponent_ngx_datatable_31_Template, 8, 8, "ngx-datatable", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ShowcaseComponent_ngx_skeleton_loader_33_Template, 1, 2, "ngx-skeleton-loader", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ShowcaseComponent_ngx_skeleton_loader_35_Template, 1, 2, "ngx-skeleton-loader", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, ShowcaseComponent_ng_template_36_Template, 45, 3, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loader);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loader);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loader);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DataTableColumnCellDirective"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_8__["NgxSkeletonLoaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], angular_feather__WEBPACK_IMPORTED_MODULE_9__["FeatherComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG93Y2FzZS5jb21wb25lbnQuc2FzcyJ9 */"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowcaseComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-showcase',
            templateUrl: './showcase.component.html',
            styleUrls: ['./showcase.component.sass'],
            providers: [ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]]
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
          }, {
            type: _services_request_service__WEBPACK_IMPORTED_MODULE_5__["RequestService"]
          }];
        }, {
          table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"], {
              "static": false
            }]
          }],
          table2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"], {
              "static": false
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "36IL":
    /*!*****************************************************!*\
      !*** ./src/app/showcase/showcase-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: ShowcaseRoutingModule */

    /***/
    function IL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShowcaseRoutingModule", function () {
        return ShowcaseRoutingModule;
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


      var _showcase_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./showcase.component */
      "0ter");

      var routes = [{
        path: '',
        component: _showcase_component__WEBPACK_IMPORTED_MODULE_2__["ShowcaseComponent"]
      }];

      var ShowcaseRoutingModule = function ShowcaseRoutingModule() {
        _classCallCheck(this, ShowcaseRoutingModule);
      };

      ShowcaseRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ShowcaseRoutingModule
      });
      ShowcaseRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ShowcaseRoutingModule_Factory(t) {
          return new (t || ShowcaseRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ShowcaseRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowcaseRoutingModule, [{
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
    "Zah/":
    /*!*********************************************!*\
      !*** ./src/app/showcase/showcase.module.ts ***!
      \*********************************************/

    /*! exports provided: ShowcaseModule */

    /***/
    function Zah(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShowcaseModule", function () {
        return ShowcaseModule;
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


      var _showcase_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./showcase-routing.module */
      "36IL");
      /* harmony import */


      var _showcase_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./showcase.component */
      "0ter");
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


      var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-skeleton-loader */
      "xJkR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var angular_feather_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! angular-feather/icons */
      "q7zL"); // import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
      // import { MatSelectSearchModule, } from 'mat-select-search';


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
        Columns: angular_feather_icons__WEBPACK_IMPORTED_MODULE_11__["Columns"],
        CreditCard: angular_feather_icons__WEBPACK_IMPORTED_MODULE_11__["CreditCard"],
        Calendar: angular_feather_icons__WEBPACK_IMPORTED_MODULE_11__["Calendar"],
        MoreHorizontal: angular_feather_icons__WEBPACK_IMPORTED_MODULE_11__["MoreHorizontal"]
      };

      var ShowcaseModule = function ShowcaseModule() {
        _classCallCheck(this, ShowcaseModule);
      };

      ShowcaseModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ShowcaseModule
      });
      ShowcaseModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ShowcaseModule_Factory(t) {
          return new (t || ShowcaseModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _showcase_routing_module__WEBPACK_IMPORTED_MODULE_2__["ShowcaseRoutingModule"], angular_feather__WEBPACK_IMPORTED_MODULE_4__["FeatherModule"].pick(icons), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot(), angular_archwizard__WEBPACK_IMPORTED_MODULE_8__["ArchwizardModule"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_9__["NgxSkeletonLoaderModule"] // NgxMatSelectSearchModule,
        // MatSelectSearchModule
        ]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ShowcaseModule, {
          declarations: [_showcase_component__WEBPACK_IMPORTED_MODULE_3__["ShowcaseComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _showcase_routing_module__WEBPACK_IMPORTED_MODULE_2__["ShowcaseRoutingModule"], angular_feather__WEBPACK_IMPORTED_MODULE_4__["FeatherModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"], angular_archwizard__WEBPACK_IMPORTED_MODULE_8__["ArchwizardModule"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_9__["NgxSkeletonLoaderModule"] // NgxMatSelectSearchModule,
          // MatSelectSearchModule
          ]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowcaseModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_showcase_component__WEBPACK_IMPORTED_MODULE_3__["ShowcaseComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _showcase_routing_module__WEBPACK_IMPORTED_MODULE_2__["ShowcaseRoutingModule"], angular_feather__WEBPACK_IMPORTED_MODULE_4__["FeatherModule"].pick(icons), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot(), angular_archwizard__WEBPACK_IMPORTED_MODULE_8__["ArchwizardModule"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_9__["NgxSkeletonLoaderModule"] // NgxMatSelectSearchModule,
            // MatSelectSearchModule
            ]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=showcase-showcase-module-es5.js.map