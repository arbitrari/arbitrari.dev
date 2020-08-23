(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
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
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _pages_products_products_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pages/products/products.component */
      "./src/app/pages/products/products.component.ts");
      /* harmony import */


      var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pages/about/about.component */
      "./src/app/pages/about/about.component.ts");
      /* harmony import */


      var _pages_wip_wip_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./pages/wip/wip.component */
      "./src/app/pages/wip/wip.component.ts");

      var routes = [{
        path: '',
        component: _pages_wip_wip_component__WEBPACK_IMPORTED_MODULE_4__["WipComponent"]
      }, {
        path: 'products',
        component: _pages_products_products_component__WEBPACK_IMPORTED_MODULE_2__["ProductsComponent"]
      }, {
        path: 'about',
        component: _pages_about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/layout */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/list */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

      function AppComponent_button_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_button_12_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            return _r0.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppComponent_span_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span");
        }
      }

      var AppComponent = function AppComponent(breakpointObserver) {
        _classCallCheck(this, AppComponent);

        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
          return result.matches;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])());
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 17,
        vars: 15,
        consts: [[1, "sidenav-container"], ["fixedInViewport", "", 1, "sidenav", 3, "mode", "opened"], ["drawer", ""], ["color", "primary"], ["color", "primary", 1, "footer"], ["color", "primary", 1, "main"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click", 4, "ngIf"], [4, "ngIf"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click"], ["aria-label", "Side nav toggle icon"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mat-toolbar", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-nav-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-toolbar", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \xA9 2020 arbirary ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-sidenav-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-toolbar", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent_button_12_Template, 3, 0, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AppComponent_span_14_Template, 1, 0, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 7, ctx.isHandset$) ? "over" : "side")("opened", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 9, ctx.isHandset$) === false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, ctx.isHandset$) ? "dialog" : "navigation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 11, ctx.isHandset$));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 13, ctx.isHandset$));
          }
        },
        directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenav"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatNavList"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavContent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]],
        styles: [".sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  width: 200px;\n  background: #000000;\n  color: #ffffff;\n}\n\n.mat-toolbar.main[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n.mat-list-item[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n\nmat-toolbar.footer[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 300;\n}\n\n.active-route[_ngcontent-%COMP%] {\n  font-weight: 500;\n  background: rgb(var(--arbitrary-gray-rgb));\n}\n\nmat-sidenav-content[_ngcontent-%COMP%] {\n  background: black;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0Usd0JBQUE7RUFBQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsMENBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2lkZW5hdiB7XG4gIHdpZHRoOiAyMDBweDtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5tYXQtdG9vbGJhci5tYWluIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xufVxuXG4ubWF0LWxpc3QtaXRlbSB7XG4gICAgY29sb3I6ICNmZmZmZmY7XG59XG5cbm1hdC10b29sYmFyLmZvb3RlciB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5hY3RpdmUtcm91dGUge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgYmFja2dyb3VuZDogcmdiKHZhcigtLWFyYml0cmFyeS1ncmF5LXJnYikpO1xufVxuXG5tYXQtc2lkZW5hdi1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./pages/home/home.component */
      "./src/app/pages/home/home.component.ts");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
      /* harmony import */


      var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/layout */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/list */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/card */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
      /* harmony import */


      var _pages_products_products_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./pages/products/products.component */
      "./src/app/pages/products/products.component.ts");
      /* harmony import */


      var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./pages/about/about.component */
      "./src/app/pages/about/about.component.ts");
      /* harmony import */


      var _pages_wip_wip_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./pages/wip/wip.component */
      "./src/app/pages/wip/wip.component.ts");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _pages_products_products_component__WEBPACK_IMPORTED_MODULE_13__["ProductsComponent"], _pages_about_about_component__WEBPACK_IMPORTED_MODULE_14__["AboutComponent"], _pages_wip_wip_component__WEBPACK_IMPORTED_MODULE_15__["WipComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _pages_products_products_component__WEBPACK_IMPORTED_MODULE_13__["ProductsComponent"], _pages_about_about_component__WEBPACK_IMPORTED_MODULE_14__["AboutComponent"], _pages_wip_wip_component__WEBPACK_IMPORTED_MODULE_15__["WipComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/about/about.component.ts":
    /*!************************************************!*\
      !*** ./src/app/pages/about/about.component.ts ***!
      \************************************************/

    /*! exports provided: AboutComponent */

    /***/
    function srcAppPagesAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
        return AboutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var AboutComponent = /*#__PURE__*/function () {
        function AboutComponent() {
          _classCallCheck(this, AboutComponent);
        }

        _createClass(AboutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AboutComponent;
      }();

      AboutComponent.ɵfac = function AboutComponent_Factory(t) {
        return new (t || AboutComponent)();
      };

      AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AboutComponent,
        selectors: [["app-about"]],
        decls: 4,
        vars: 0,
        consts: [[1, "pattern-dots-md", "top-dots"]],
        template: function AboutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "about");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\nwe are a small team of passionate developers that strive to make awesome things.");
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-about',
            templateUrl: './about.component.html',
            styleUrls: ['./about.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/home/home.component.ts":
    /*!**********************************************!*\
      !*** ./src/app/pages/home/home.component.ts ***!
      \**********************************************/

    /*! exports provided: HomeComponent */

    /***/
    function srcAppPagesHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent() {
          _classCallCheck(this, HomeComponent);
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)();
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 3,
        vars: 0,
        consts: [[1, "pattern-dots-md", "top-dots"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "software dev");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/products/products.component.ts":
    /*!******************************************************!*\
      !*** ./src/app/pages/products/products.component.ts ***!
      \******************************************************/

    /*! exports provided: ProductsComponent */

    /***/
    function srcAppPagesProductsProductsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductsComponent", function () {
        return ProductsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/card */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");

      var ProductsComponent = /*#__PURE__*/function () {
        function ProductsComponent() {
          _classCallCheck(this, ProductsComponent);
        }

        _createClass(ProductsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProductsComponent;
      }();

      ProductsComponent.ɵfac = function ProductsComponent_Factory(t) {
        return new (t || ProductsComponent)();
      };

      ProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProductsComponent,
        selectors: [["app-products"]],
        decls: 19,
        vars: 0,
        consts: [[1, "pattern-dots-md", "top-dots"], [1, "product-card"]],
        template: function ProductsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "products");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "in production");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " testube ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " a simple web app that allows Tesla drivers to easily access fullscreen media in their cars while parked. Normally, doing this is a complicated process that is harder than it needs to be. Testube makes the process as easy as possible, ensuring you get to your media quickly. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "in development");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " copilot ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " a one-stop-shop for managing your tesla vehicle on any of your devices. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"]],
        styles: [".product-card[_ngcontent-%COMP%] {\n  max-width: 800px;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 40px;\n  line-height: 40px;\n  margin-top: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3QtY2FyZCB7XG4gICAgbWF4LXdpZHRoOiA4MDBweDtcbn1cblxuaDIge1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-products',
            templateUrl: './products.component.html',
            styleUrls: ['./products.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/wip/wip.component.ts":
    /*!********************************************!*\
      !*** ./src/app/pages/wip/wip.component.ts ***!
      \********************************************/

    /*! exports provided: WipComponent */

    /***/
    function srcAppPagesWipWipComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WipComponent", function () {
        return WipComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var WipComponent = /*#__PURE__*/function () {
        function WipComponent() {
          _classCallCheck(this, WipComponent);
        }

        _createClass(WipComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return WipComponent;
      }();

      WipComponent.ɵfac = function WipComponent_Factory(t) {
        return new (t || WipComponent)();
      };

      WipComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: WipComponent,
        selectors: [["app-wip"]],
        decls: 8,
        vars: 0,
        consts: [[1, "pattern-dots-md", "top-dots"]],
        template: function WipComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Under Construction");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "We are still ironing some things out...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dpcC93aXAuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WipComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-wip',
            templateUrl: './wip.component.html',
            styleUrls: ['./wip.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
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

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
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
      /*! /home/runner/work/ar.bitrary.dev/ar.bitrary.dev/src/main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map