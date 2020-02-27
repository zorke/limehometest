(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_properties_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/properties.service */ "./src/app/services/properties.service.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _hotel_card_hotel_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hotel-card/hotel-card.component */ "./src/app/hotel-card/hotel-card.component.ts");







function AppComponent_agm_marker_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "agm-marker", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("markerClick", function AppComponent_agm_marker_3_Template_agm_marker_markerClick_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onMarkerClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hotel_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", hotel_r2.latitude)("longitude", hotel_r2.longitude)("iconUrl", ctx_r0.selectedHotel && hotel_r2.id == ctx_r0.selectedHotel.id ? ctx_r0.selectedIcon : ctx_r0.notSelectedIcon);
} }
function AppComponent_app_hotel_card_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-hotel-card", 5);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hotel", ctx_r1.selectedHotel);
} }
class AppComponent {
    constructor(service) {
        this.service = service;
        this.title = 'limehome-app';
        this.latitude = 52;
        this.longitude = 8;
        this.mapHeight = window.innerHeight;
        this.hotels = [];
        this.selectedHotel = null;
        this.selectedIcon = {
            url: '../assets/markers/selected.png',
            scaledSize: {
                width: 50,
                height: 50
            }
        };
        this.notSelectedIcon = {
            url: '../assets/markers/notselected.png',
            scaledSize: {
                width: 30,
                height: 30
            }
        };
    }
    ngOnInit() {
        this.getHotels(this.latitude, this.longitude);
    }
    getHotels(latitude, longitude) {
        this.service.get(latitude, longitude, "hotel").subscribe(response => {
            // this.hotels = [];
            const results = response.results.filter(item => item.position);
            results.forEach(element => {
                if (!this.hotels.map(hotel => hotel.id).includes(element.id)) {
                    const hotel = {
                        id: element.id,
                        title: element.title,
                        vicinity: element.vicinity.replace("<br/>", " "),
                        description: `${element.distance} from the city center.`,
                        imageUrl: "https://limehome.imgix.net/properties/97/b37882b9-569b-4767-8421-0791ac1afd3c.jpg?w=640&h=448&fit=crop",
                        latitude: element.position[0],
                        longitude: element.position[1],
                        price: element.position[0]
                    };
                    this.hotels.push(hotel);
                }
            });
        });
    }
    onMapClick(event) {
        const longitude = event.coords.lng;
        const latitude = event.coords.lat;
        this.longitude = longitude;
        this.latitude = latitude;
        this.getHotels(latitude, longitude);
    }
    onMarkerClick(event) {
        const longitude = event.longitude;
        const latitude = event.latitude;
        const clickedHotel = this.hotels.find(hotel => hotel.latitude == latitude && hotel.longitude == longitude);
        this.selectedHotel = !this.selectedHotel ? clickedHotel : (this.selectedHotel.id == clickedHotel.id ? null : clickedHotel);
    }
    onMapReady(map) {
        map.addListener('dragend', () => {
            const latitude = map.center.lat();
            const longitude = map.center.lng();
            this.getHotels(latitude, longitude);
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_properties_service__WEBPACK_IMPORTED_MODULE_1__["PropertiesService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 8, consts: [[1, "container"], [3, "latitude", "longitude", "zoomControl", "minZoom", "mapClick", "mapReady"], [3, "latitude", "longitude", "iconUrl", "markerClick", 4, "ngFor", "ngForOf"], [3, "hotel", 4, "ngIf"], [3, "latitude", "longitude", "iconUrl", "markerClick"], [3, "hotel"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "agm-map", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mapClick", function AppComponent_Template_agm_map_mapClick_2_listener($event) { return ctx.onMapClick($event); })("mapReady", function AppComponent_Template_agm_map_mapReady_2_listener($event) { return ctx.onMapReady($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_agm_marker_3_Template, 1, 3, "agm-marker", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_app_hotel_card_4_Template, 1, 1, "app-hotel-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.mapHeight - 60, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.latitude)("longitude", ctx.longitude)("zoomControl", false)("minZoom", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.hotels);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedHotel);
    } }, directives: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"], _agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmMap"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmMarker"], _hotel_card_hotel_card_component__WEBPACK_IMPORTED_MODULE_5__["HotelCardComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUciLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGFnbS1tYXAge1xuICAgIGhlaWdodDogMTAwMHB4O1xufSAqL1xuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _services_properties_service__WEBPACK_IMPORTED_MODULE_1__["PropertiesService"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _constants_app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants/app.constants */ "./src/app/constants/app.constants.ts");
/* harmony import */ var _hotel_card_hotel_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hotel-card/hotel-card.component */ "./src/app/hotel-card/hotel-card.component.ts");
/* harmony import */ var _services_properties_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/properties.service */ "./src/app/services/properties.service.ts");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _services_properties_service__WEBPACK_IMPORTED_MODULE_8__["PropertiesService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_2__["AgmCoreModule"].forRoot({
                apiKey: _constants_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppConstants"].GOOGLE_MAP_API_KEY
            }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"],
        _hotel_card_hotel_card_component__WEBPACK_IMPORTED_MODULE_7__["HotelCardComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _agm_core__WEBPACK_IMPORTED_MODULE_2__["AgmCoreModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"],
                    _hotel_card_hotel_card_component__WEBPACK_IMPORTED_MODULE_7__["HotelCardComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _agm_core__WEBPACK_IMPORTED_MODULE_2__["AgmCoreModule"].forRoot({
                        apiKey: _constants_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppConstants"].GOOGLE_MAP_API_KEY
                    }),
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
                ],
                providers: [
                    _services_properties_service__WEBPACK_IMPORTED_MODULE_8__["PropertiesService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/constants/app.constants.ts":
/*!********************************************!*\
  !*** ./src/app/constants/app.constants.ts ***!
  \********************************************/
/*! exports provided: AppConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConstants", function() { return AppConstants; });
class AppConstants {
}
AppConstants.GOOGLE_MAP_API_KEY = "AIzaSyDMGzPdwgMsPi-DzsMMK9yGbhcWc9D0XTk";
AppConstants.HERE_API_KEY = "csDH0TO8mFfDCdS-xwcPcWNocv7d9bRGoF-8fXtWb10";
AppConstants.DEFAULT_LONGITUDE = 52.00;
AppConstants.DEFAULT_LATITUDE = 8.5;
AppConstants.MENU_HEIGHT = 60;


/***/ }),

/***/ "./src/app/hotel-card/hotel-card.component.ts":
/*!****************************************************!*\
  !*** ./src/app/hotel-card/hotel-card.component.ts ***!
  \****************************************************/
/*! exports provided: HotelCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelCardComponent", function() { return HotelCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



class HotelCardComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
HotelCardComponent.ɵfac = function HotelCardComponent_Factory(t) { return new (t || HotelCardComponent)(); };
HotelCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HotelCardComponent, selectors: [["app-hotel-card"]], inputs: { hotel: "hotel" }, decls: 17, vars: 10, consts: [[1, "container"], [1, "main-part"], [1, "image"], [3, "src"], [1, "informations"], [1, "description"], [1, "price"], [1, "btn"]], template: function HotelCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Book");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.hotel.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hotel.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hotel.vicinity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 5, ctx.hotel.description));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 7, ctx.hotel.price, "GBP"));
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]], styles: [".container[_ngcontent-%COMP%] {\n    background-color: white;\n    width: 90%;\n    max-width: 500px;\n    height: 150px;\n    padding: 15px;\n    position: fixed;\n    bottom: 0;\n}\n\n.main-part[_ngcontent-%COMP%] {\n    display: -webkit-box;\n    display: flex;\n}\n\n.image[_ngcontent-%COMP%] {\n    width: 50%;\n}\n\nimg[_ngcontent-%COMP%] {\n    height: 100px;\n}\n\n.informations[_ngcontent-%COMP%] {\n    width: 50%;\n}\n\nh1[_ngcontent-%COMP%] {\n    margin: 0;\n    font-size: 14px;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n.description[_ngcontent-%COMP%] {\n    font-size: 10px;\n    font-family: Arial, Helvetica, sans-serif;\n    color: grey;\n}\n\n.price[_ngcontent-%COMP%] {\n    font-size: 16px;\n    font-family: \"Arial Black\", Gadget, sans-serif;\n}\n\nbutton[_ngcontent-%COMP%] {\n    background-color: orange;\n    width: 100%;\n    height: 30px;\n    font-family: Arial, Helvetica, sans-serif;\n    color: white;\n    border: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG90ZWwtY2FyZC9ob3RlbC1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsYUFBYTtJQUNiLGVBQWU7SUFDZixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksU0FBUztJQUNULGVBQWU7SUFDZix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxlQUFlO0lBQ2YseUNBQXlDO0lBQ3pDLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZiw4Q0FBOEM7QUFDbEQ7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsV0FBVztJQUNYLFlBQVk7SUFDWix5Q0FBeUM7SUFDekMsWUFBWTtJQUNaLFNBQVM7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2hvdGVsLWNhcmQvaG90ZWwtY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwO1xufVxuXG4ubWFpbi1wYXJ0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uaW1hZ2Uge1xuICAgIHdpZHRoOiA1MCU7XG59XG5cbmltZyB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLmluZm9ybWF0aW9ucyB7XG4gICAgd2lkdGg6IDUwJTtcbn1cblxuaDEge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiBncmV5O1xufVxuXG4ucHJpY2Uge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LWZhbWlseTogXCJBcmlhbCBCbGFja1wiLCBHYWRnZXQsIHNhbnMtc2VyaWY7XG59XG5cbmJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzBweDtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAwO1xufVxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HotelCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hotel-card',
                templateUrl: './hotel-card.component.html',
                styleUrls: ['./hotel-card.component.css']
            }]
    }], function () { return []; }, { hotel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _constants_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/app.constants */ "./src/app/constants/app.constants.ts");



class MenuComponent {
    constructor() {
        this.height = _constants_app_constants__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].MENU_HEIGHT;
    }
    ngOnInit() {
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], decls: 9, vars: 0, consts: [[1, "menu"], ["_ngcontent-serverApp-c12", "", "fill", "green", "d", "M81.3093 26.2027C80.1537 26.2027 79.0637 26.0013 78.0525 25.5898C77.0413 25.1783 76.1614 24.6048 75.4085 23.8692C74.6687 23.1337 74.0778 22.245 73.6532 21.2205C73.2242 20.1873 73.0053 19.049 73.0053 17.8057V17.74C73.0053 16.5755 73.2023 15.4766 73.5831 14.4609C73.9727 13.4364 74.5199 12.5477 75.2247 11.7815C75.9251 11.0154 76.7611 10.4068 77.7154 9.97341C78.6785 9.53561 79.7466 9.31233 80.9066 9.31233C82.1935 9.31233 83.3229 9.54874 84.2991 10.0172C85.2665 10.4856 86.0763 11.1248 86.7198 11.9173C87.3677 12.7184 87.8492 13.6378 88.1731 14.6973C88.497 15.7568 88.6634 16.8644 88.6634 18.0246C88.6634 18.1866 88.6546 18.3573 88.6502 18.5324C88.6415 18.7119 88.624 18.8871 88.6021 19.0666H76.7042C76.9056 20.3975 77.444 21.4088 78.2932 22.1224C79.1425 22.8229 80.1624 23.1819 81.375 23.1819C82.2986 23.1819 83.0997 23.0199 83.765 22.6872C84.4435 22.3632 85.1045 21.8816 85.7568 21.2512L87.9367 23.1819C87.1619 24.1013 86.2339 24.8368 85.1658 25.3884C84.0846 25.9182 82.7976 26.2027 81.3093 26.2027ZM84.9863 16.5974C84.925 16.0063 84.7981 15.4503 84.5967 14.925C84.3954 14.3996 84.1196 13.9574 83.7694 13.5765C83.428 13.1956 83.0077 12.8979 82.5262 12.6703C82.0535 12.4426 81.5019 12.3288 80.8891 12.3288C79.7378 12.3288 78.7966 12.7228 78.0569 13.5065C77.3083 14.2901 76.8531 15.3234 76.6911 16.593H84.9863V16.5974ZM47.3273 9.6363H51.0656V12.1186C51.3326 11.7465 51.6128 11.4006 51.9192 11.0679C52.2256 10.7439 52.5802 10.4375 52.9786 10.1704C53.3725 9.89461 53.819 9.68446 54.318 9.53123C54.8171 9.378 55.3686 9.30357 55.9815 9.30357C57.1415 9.30357 58.1308 9.56188 58.9275 10.0872C59.7329 10.6126 60.3501 11.3131 60.7748 12.1799C61.427 11.3175 62.2062 10.6126 63.0904 10.0872C63.9878 9.56188 65.0428 9.30357 66.2728 9.30357C68.0544 9.30357 69.4552 9.83769 70.4576 10.9103C71.4688 11.9829 71.9635 13.5109 71.9635 15.4985V25.8394H68.2295V16.6543C68.2295 15.3715 67.945 14.3908 67.3759 13.721C66.7981 13.0424 66.0014 12.7097 64.9596 12.7097C63.944 12.7097 63.1167 13.0512 62.4732 13.7341C61.8341 14.4127 61.5102 15.4153 61.5102 16.7156V25.835H57.7718V16.6324C57.7718 15.3715 57.4873 14.3952 56.9139 13.7341C56.3404 13.0555 55.5437 12.7228 54.5019 12.7228C53.4688 12.7228 52.6284 13.0774 51.998 13.7954C51.3677 14.5047 51.0525 15.4985 51.0525 16.7593V25.8481H47.3142L47.3273 9.6363ZM41.1945 3.62528H45.2086V7.15397H41.1945V3.62528ZM41.3477 9.6363H45.086V25.8306H41.3477V9.6363ZM35.1449 3.44141H38.8832V25.8306H35.1449V3.44141Z"], ["_ngcontent-serverApp-c12", "", "fill", "green", "d", "M16.3745 11.0328C18.3618 8.00322 21.3341 5.66098 24.8842 4.47454C21.75 6.21699 19.233 8.85256 17.6352 12.0091L17.9329 11.9785H21.6887C24.6128 11.9785 27.0029 9.58807 27.0029 6.66355V1.34863H21.6843C18.7602 1.34863 16.3701 3.73903 16.3701 6.66355V11.0328H16.3745Z", "fill-rule", "evenodd"], ["_ngcontent-serverApp-c12", "", "fill", "grey", "d", "M147.62 17.2759C147.896 13.8086 150.286 11.1993 153.385 11.1993C156.97 11.1993 158.774 14.115 158.997 17.2759H147.62ZM147.62 18.6244H160.586C160.621 18.3836 160.621 18.2829 160.621 18.0771V18.0115C160.621 13.3839 157.828 9.82018 153.442 9.82018C149.218 9.82018 146.027 13.4408 146.027 17.9808V18.0465C146.027 22.9236 149.581 26.2071 153.683 26.2071C156.69 26.2071 158.564 24.9813 160.148 23.2651L159.111 22.3457C157.824 23.7291 156.169 24.8018 153.749 24.8018C150.689 24.7886 147.896 22.5208 147.62 18.6244ZM145.068 25.8306V16.3566C145.068 12.4295 142.766 9.82018 139.067 9.82018C136.125 9.82018 134.435 11.4444 133.42 13.1956C132.566 11.3875 130.876 9.82018 128.145 9.82018C125.352 9.82018 123.947 11.3569 122.931 12.9811V10.1879H121.439V25.8306H122.94V16.8163C122.94 13.6553 125.146 11.2036 127.939 11.2036C130.732 11.2036 132.509 13.2 132.509 16.4441V25.8306H134.011V16.7199C134.011 13.2219 136.313 11.2036 138.948 11.2036C141.829 11.2036 143.571 13.165 143.571 16.5448V25.8306H145.068ZM118.677 18.0684C118.677 21.7503 116.011 24.7886 112.299 24.7886C108.683 24.7886 105.864 21.7853 105.864 18.0115V17.9458C105.864 14.2639 108.53 11.2255 112.242 11.2255C115.857 11.2255 118.677 14.2288 118.677 18.0027V18.0684ZM120.296 18.0115V17.9458C120.296 13.559 116.926 9.82018 112.294 9.82018C107.637 9.82018 104.227 13.6247 104.227 18.0115V18.0771C104.227 22.4639 107.606 26.2027 112.233 26.2027C116.899 26.2027 120.296 22.3982 120.296 18.0115ZM103.404 25.8306V16.2602C103.404 12.5214 101.101 9.82018 97.144 9.82018C94.2986 9.82018 92.5389 11.2562 91.5058 13.0993V3.44141H90V25.8306H91.5058V16.7856C91.5058 13.5371 93.8609 11.2036 96.9295 11.2036C100.086 11.2036 101.898 13.3182 101.898 16.5448V25.8306H103.404Z", "fill-rule", "evenodd"], ["_ngcontent-serverApp-c12", "", "fill", "grey", "d", "M1.35547 17.2934H11.9795V27.9232H1.35547V17.2934ZM1.35547 1.34863H11.9795V11.9785H1.35547V1.34863ZM16.3744 17.2934H26.9985V27.9232H16.3744V17.2934Z"], ["xmlns", "http://www.w3.org/2000/svg", "height", "24", "viewBox", "0 0 24 24", "width", "24"], ["d", "M0 0h24v24H0z", "fill", "none"], ["d", "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".menu[_ngcontent-%COMP%] {\n    height: 60px;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n}\n\nsvg[_ngcontent-%COMP%] {\n    height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQix5QkFBOEI7WUFBOUIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnUge1xuICAgIGhlaWdodDogNjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5zdmcge1xuICAgIGhlaWdodDogMzBweDtcbn1cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/properties.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/properties.service.ts ***!
  \************************************************/
/*! exports provided: PropertiesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertiesService", function() { return PropertiesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _constants_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/app.constants */ "./src/app/constants/app.constants.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class PropertiesService {
    constructor(http) {
        this.http = http;
    }
    get(latitude, longitude, type) {
        return this.http.get(`https://places.sit.ls.hereapi.com/places/v1/autosuggest?at=${latitude},${longitude}&q=${type}&apiKey=${_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].HERE_API_KEY}`);
    }
}
PropertiesService.ɵfac = function PropertiesService_Factory(t) { return new (t || PropertiesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
PropertiesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PropertiesService, factory: PropertiesService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PropertiesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects\Limehome\heroku\limehometest\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map