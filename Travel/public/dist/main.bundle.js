webpackJsonp([1],{

/***/ "../../../../../../node_modules/angular2-cookie/core.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * angular2-cookie - Implementation of Angular 1.x $cookies service to Angular 2
 * @version v1.2.6
 * @link https://github.com/salemdar/angular2-cookie#readme
 * @license MIT
 */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var services_1 = __webpack_require__("../../../../../../node_modules/angular2-cookie/services.js");
__export(__webpack_require__("../../../../../../node_modules/angular2-cookie/services.js"));
exports.ANGULAR2_COOKIE_PROVIDERS = [
    { provide: services_1.CookieOptions, useClass: services_1.BaseCookieOptions },
    { provide: services_1.CookieService, useFactory: cookieServiceFactory, deps: [services_1.CookieOptions] }
];
function cookieServiceFactory(options) {
    return new services_1.CookieService(options);
}
exports.cookieServiceFactory = cookieServiceFactory;



/***/ }),

/***/ "../../../../../../node_modules/angular2-cookie/services.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * angular2-cookie - Implementation of Angular 1.x $cookies service to Angular 2
 * @version v1.2.6
 * @link https://github.com/salemdar/angular2-cookie#readme
 * @license MIT
 */

var base_cookie_options_1 = __webpack_require__("../../../../../../node_modules/angular2-cookie/services/base-cookie-options.js");
exports.BaseCookieOptions = base_cookie_options_1.BaseCookieOptions;
exports.CookieOptions = base_cookie_options_1.CookieOptions;
var cookies_service_1 = __webpack_require__("../../../../../../node_modules/angular2-cookie/services/cookies.service.js");
exports.CookieService = cookies_service_1.CookieService;



/***/ }),

/***/ "../../../../../../node_modules/angular2-cookie/services/base-cookie-options.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * angular2-cookie - Implementation of Angular 1.x $cookies service to Angular 2
 * @version v1.2.6
 * @link https://github.com/salemdar/angular2-cookie#readme
 * @license MIT
 */

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var common_1 = __webpack_require__("../../../common/@angular/common.es5.js");
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
/** @private */
var CookieOptions = (function () {
    function CookieOptions(_a) {
        var _b = _a === void 0 ? {} : _a, path = _b.path, domain = _b.domain, expires = _b.expires, secure = _b.secure;
        this.path = this.isPresent(path) ? path : null;
        this.domain = this.isPresent(domain) ? domain : null;
        this.expires = this.isPresent(expires) ? expires : null;
        this.secure = this.isPresent(secure) ? secure : false;
    }
    CookieOptions.prototype.merge = function (options) {
        return new CookieOptions({
            path: this.isPresent(options) && this.isPresent(options.path) ? options.path : this.path,
            domain: this.isPresent(options) && this.isPresent(options.domain) ? options.domain :
                this.domain,
            expires: this.isPresent(options) && this.isPresent(options.expires) ? options.expires :
                this.expires,
            secure: this.isPresent(options) && this.isPresent(options.secure) ? options.secure :
                this.secure,
        });
    };
    CookieOptions.prototype.isPresent = function (obj) {
        return obj !== undefined && obj !== null;
    };
    return CookieOptions;
}());
exports.CookieOptions = CookieOptions;
/** @private */
var BaseCookieOptions = (function (_super) {
    __extends(BaseCookieOptions, _super);
    function BaseCookieOptions(baseHref) {
        _super.call(this, { path: baseHref || '/' });
        this.baseHref = baseHref;
    }
    BaseCookieOptions = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Optional()),
        __param(0, core_1.Inject(common_1.APP_BASE_HREF)), 
        __metadata('design:paramtypes', [String])
    ], BaseCookieOptions);
    return BaseCookieOptions;
}(CookieOptions));
exports.BaseCookieOptions = BaseCookieOptions;



/***/ }),

/***/ "../../../../../../node_modules/angular2-cookie/services/cookies.service.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * angular2-cookie - Implementation of Angular 1.x $cookies service to Angular 2
 * @version v1.2.6
 * @link https://github.com/salemdar/angular2-cookie#readme
 * @license MIT
 */

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var base_cookie_options_1 = __webpack_require__("../../../../../../node_modules/angular2-cookie/services/base-cookie-options.js");
var CookieService = (function () {
    function CookieService(_defaultOptions) {
        this._defaultOptions = _defaultOptions;
    }
    Object.defineProperty(CookieService.prototype, "cookieString", {
        get: function () {
            return document.cookie || '';
        },
        set: function (val) {
            document.cookie = val;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @name CookieService#get
     *
     * @description
     * Returns the value of given cookie key.
     *
     * @param {string} key Id to use for lookup.
     * @returns {string} Raw cookie value.
     */
    CookieService.prototype.get = function (key) {
        return this._cookieReader()[key];
    };
    /**
     * @name CookieService#getObject
     *
     * @description
     * Returns the deserialized value of given cookie key.
     *
     * @param {string} key Id to use for lookup.
     * @returns {Object} Deserialized cookie value.
     */
    CookieService.prototype.getObject = function (key) {
        var value = this.get(key);
        return value ? JSON.parse(value) : value;
    };
    /**
     * @name CookieService#getAll
     *
     * @description
     * Returns a key value object with all the cookies.
     *
     * @returns {Object} All cookies
     */
    CookieService.prototype.getAll = function () {
        return this._cookieReader();
    };
    /**
     * @name CookieService#put
     *
     * @description
     * Sets a value for given cookie key.
     *
     * @param {string} key Id for the `value`.
     * @param {string} value Raw value to be stored.
     * @param {CookieOptionsArgs} options (Optional) Options object.
     */
    CookieService.prototype.put = function (key, value, options) {
        this._cookieWriter()(key, value, options);
    };
    /**
     * @name CookieService#putObject
     *
     * @description
     * Serializes and sets a value for given cookie key.
     *
     * @param {string} key Id for the `value`.
     * @param {Object} value Value to be stored.
     * @param {CookieOptionsArgs} options (Optional) Options object.
     */
    CookieService.prototype.putObject = function (key, value, options) {
        this.put(key, JSON.stringify(value), options);
    };
    /**
     * @name CookieService#remove
     *
     * @description
     * Remove given cookie.
     *
     * @param {string} key Id of the key-value pair to delete.
     * @param {CookieOptionsArgs} options (Optional) Options object.
     */
    CookieService.prototype.remove = function (key, options) {
        this._cookieWriter()(key, undefined, options);
    };
    /**
     * @name CookieService#removeAll
     *
     * @description
     * Remove all cookies.
     */
    CookieService.prototype.removeAll = function () {
        var _this = this;
        var cookies = this.getAll();
        Object.keys(cookies).forEach(function (key) {
            _this.remove(key);
        });
    };
    CookieService.prototype._cookieReader = function () {
        var lastCookies = {};
        var lastCookieString = '';
        var that = this;
        var cookieArray, cookie, i, index, name;
        var currentCookieString = this.cookieString;
        if (currentCookieString !== lastCookieString) {
            lastCookieString = currentCookieString;
            cookieArray = lastCookieString.split('; ');
            lastCookies = {};
            for (i = 0; i < cookieArray.length; i++) {
                cookie = cookieArray[i];
                index = cookie.indexOf('=');
                if (index > 0) {
                    name = that._safeDecodeURIComponent(cookie.substring(0, index));
                    // the first value that is seen for a cookie is the most
                    // specific one.  values for the same cookie name that
                    // follow are for less specific paths.
                    if (this.isBlank(lastCookies[name])) {
                        lastCookies[name] = that._safeDecodeURIComponent(cookie.substring(index + 1));
                    }
                }
            }
        }
        return lastCookies;
    };
    CookieService.prototype._cookieWriter = function () {
        var that = this;
        return function (name, value, options) {
            that.cookieString = that._buildCookieString(name, value, options);
        };
    };
    CookieService.prototype._safeDecodeURIComponent = function (str) {
        try {
            return decodeURIComponent(str);
        }
        catch (e) {
            return str;
        }
    };
    CookieService.prototype._buildCookieString = function (name, value, options) {
        var cookiePath = '/';
        var path, expires;
        var defaultOpts = this._defaultOptions || new base_cookie_options_1.CookieOptions({ path: cookiePath });
        var opts = this._mergeOptions(defaultOpts, options);
        expires = opts.expires;
        if (this.isBlank(value)) {
            expires = 'Thu, 01 Jan 1970 00:00:00 GMT';
            value = '';
        }
        if (this.isString(expires)) {
            expires = new Date(expires);
        }
        var str = encodeURIComponent(name) + '=' + encodeURIComponent(value);
        str += opts.path ? ';path=' + opts.path : '';
        str += opts.domain ? ';domain=' + opts.domain : '';
        str += expires ? ';expires=' + expires.toUTCString() : '';
        str += opts.secure ? ';secure' : '';
        // per http://www.ietf.org/rfc/rfc2109.txt browser must allow at minimum:
        // - 300 cookies
        // - 20 cookies per unique domain
        // - 4096 bytes per cookie
        var cookieLength = str.length + 1;
        if (cookieLength > 4096) {
            console.log("Cookie '" + name + "' possibly not set or overflowed because it was too \n      large (" + cookieLength + " > 4096 bytes)!");
        }
        return str;
    };
    CookieService.prototype._mergeOptions = function (defaultOpts, providedOpts) {
        var newOpts = defaultOpts;
        if (this.isPresent(providedOpts)) {
            return newOpts.merge(new base_cookie_options_1.CookieOptions(providedOpts));
        }
        return newOpts;
    };
    CookieService.prototype.isBlank = function (obj) {
        return obj === undefined || obj === null;
    };
    CookieService.prototype.isPresent = function (obj) {
        return obj !== undefined && obj !== null;
    };
    CookieService.prototype.isString = function (obj) {
        return typeof obj === 'string';
    };
    CookieService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Optional()), 
        __metadata('design:paramtypes', [base_cookie_options_1.CookieOptions])
    ], CookieService);
    return CookieService;
}());
exports.CookieService = CookieService;



/***/ }),

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/add-traveller/add-traveller.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-traveller/add-traveller.component.html":
/***/ (function(module, exports) {

module.exports = "Inside traveller{{trip | json}} <br>\n  <ul *ngFor = \"let traveller of trip._travellers; let i = index\">\n    <li>{{traveller.email}}</li>\n  </ul>\n  <a class=\"waves-effect waves-light btn\" (click) = \"addTraveller()\">Add Traveller</a> <br><br>\n  <div *ngFor = \"let traveller of travellers; let i = index\">\n    <small>Traveller</small>\n    <input type=\"text\" value=\"\" id = \"email\"[(ngModel)] = 'travellers[i].email' name = \"email\">\n    <a class=\"waves-effect waves-light btn\" (click) = \"updateTrip()\">Add</a> <br><br>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/add-traveller/add-traveller.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTravellerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddTravellerComponent = (function () {
    function AddTravellerComponent(_httpService) {
        var _this = this;
        this._httpService = _httpService;
        this.trip = { _travellers: [] };
        this.travellers = [];
        this.subscription = _httpService.observedTrip.subscribe(function (updatedTrip) { _this.trip = updatedTrip; }, function (err) { }, function () { });
    }
    AddTravellerComponent.prototype.ngOnInit = function () {
    };
    AddTravellerComponent.prototype.updateTrip = function () {
        this.trip._travellers.push(this.travellers[0]);
        console.log("In update trip");
        this._httpService.updateTrip(this.trip);
        this.travellers = [];
    };
    AddTravellerComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AddTravellerComponent.prototype.addTraveller = function () {
        var person = new Traveller();
        this.travellers.push(person);
        // this.trip._travellers.push(person);
    };
    return AddTravellerComponent;
}());
AddTravellerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-traveller',
        template: __webpack_require__("../../../../../src/app/add-traveller/add-traveller.component.html"),
        styles: [__webpack_require__("../../../../../src/app/add-traveller/add-traveller.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === "function" && _a || Object])
], AddTravellerComponent);

var Traveller = (function () {
    function Traveller() {
        this.email = '';
    }
    return Traveller;
}());
var _a;
//# sourceMappingURL=add-traveller.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__plan_trip_plan_trip_component__ = __webpack_require__("../../../../../src/app/plan-trip/plan-trip.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_profile_user_profile_component__ = __webpack_require__("../../../../../src/app/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__plan_days_plan_days_component__ = __webpack_require__("../../../../../src/app/plan-days/plan-days.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__add_traveller_add_traveller_component__ = __webpack_require__("../../../../../src/app/add-traveller/add-traveller.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__search_view_search_view_component__ = __webpack_require__("../../../../../src/app/search-view/search-view.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', pathMatch: 'full', redirectTo: '/login' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__register_register_component__["a" /* RegisterComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'logout', redirectTo: 'login' },
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_9__search_view_search_view_component__["a" /* SearchViewComponent */] },
    { path: 'user', component: __WEBPACK_IMPORTED_MODULE_6__user_profile_user_profile_component__["a" /* UserProfileComponent */] },
    // { path: 'poll/:id', component: PollComponent },
    { path: 'createtrip', component: __WEBPACK_IMPORTED_MODULE_5__plan_trip_plan_trip_component__["a" /* PlanTripComponent */],
        children: [
            { path: 'planday', component: __WEBPACK_IMPORTED_MODULE_7__plan_days_plan_days_component__["a" /* PlanDaysComponent */] },
            { path: 'addtraveller', component: __WEBPACK_IMPORTED_MODULE_8__add_traveller_add_traveller_component__["a" /* AddTravellerComponent */] },
        ] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__["a" /* DashboardComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, " /* h3{\n    display: inline-block;\n    vertical-align: middle; \n    text-align: center;\n}  */\n\n/* a{\n    display: inline-block;\n    vertical-align: middle;\n     /* margin-left: 55%;  */\n/* } */\nul{\n    /* margin-left: 41%;  */\n}\n#header{\n    width: 100%;\n    height: 100px;\n    background-image: url(" + __webpack_require__("../../../../../src/app/back.jpg") + ")\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div id = \"header\">\n  <h3>Travel Frenzy</h3>  \n</div> -->\n<nav>\n  <div class=\"nav-wrapper\">\n    <a href=\"#\" class=\"brand-logo\">Trippr</a>\n    <ul class=\"right\" *ngIf = \"user\">\n      <li><a [routerLink] = \"['/search']\"><i class=\"material-icons\">search</i></a></li>\n      <li><a [routerLink] = \"['/createtrip']\"><i class=\"material-icons\">add</i></a></li>\n      <!-- <li><a href=\"badges.html\"><i class=\"material-icons\">view_module</i></a></li> -->\n      <li><a [routerLink] = \"['/user']\"><i class=\"material-icons prefix\">account_circle</i></a></li>\n    </ul>\n  </div>\n</nav>\n<!-- <p>\n<a [routerLink] = \"['/dashboard']\"> Dashboard </a> |\n<a [routerLink] = \"['/logout']\" (click)=\"logout()\"> Logout </a>\n</p> -->\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__ = __webpack_require__("../../../../../../node_modules/angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(_httpService, _cookieService, router) {
        this._httpService = _httpService;
        this._cookieService = _cookieService;
        this.router = router;
        this.title = 'app';
    }
    AppComponent.prototype.logout = function () {
        console.log("The user is:", (this._cookieService.get("user")));
        this._cookieService.removeAll();
        console.log("The user is empty:", (this._cookieService.get("user")));
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this._httpService.observedUser.subscribe(function (updatedUser) { _this.user = updatedUser; }, function (err) { }, function () { });
        // this.user = this._cookieService.get("user"); 
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__["CookieService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_cookie_services_cookies_service__ = __webpack_require__("../../../../../../node_modules/angular2-cookie/services/cookies.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__plan_trip_plan_trip_component__ = __webpack_require__("../../../../../src/app/plan-trip/plan-trip.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__user_profile_user_profile_component__ = __webpack_require__("../../../../../src/app/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__plan_days_plan_days_component__ = __webpack_require__("../../../../../src/app/plan-days/plan-days.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__add_traveller_add_traveller_component__ = __webpack_require__("../../../../../src/app/add-traveller/add-traveller.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__search_view_search_view_component__ = __webpack_require__("../../../../../src/app/search-view/search-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ng2_google_place_autocomplete__ = __webpack_require__("../../../../ng2-google-place-autocomplete/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_9__register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_11__plan_trip_plan_trip_component__["a" /* PlanTripComponent */],
            __WEBPACK_IMPORTED_MODULE_12__user_profile_user_profile_component__["a" /* UserProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_13__plan_days_plan_days_component__["a" /* PlanDaysComponent */],
            __WEBPACK_IMPORTED_MODULE_14__add_traveller_add_traveller_component__["a" /* AddTravellerComponent */],
            __WEBPACK_IMPORTED_MODULE_15__search_view_search_view_component__["a" /* SearchViewComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_17_ng2_google_place_autocomplete__["a" /* GooglePlaceModule */],
            // ReactiveFormsModule,
            __WEBPACK_IMPORTED_MODULE_16__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyCtce0KR-K3PAciXPYsNlTiMnyiRS4Rrmc'
            })
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_7_angular2_cookie_services_cookies_service__["CookieService"]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/back.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "back.095dc6e084cc461290bd.jpg";

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#header{\n    margin-left: 70%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = " <p id = \"header\"> \n<!-- <a [routerLink] = \"['/search']\"> Attractions </a>  |     \n<a [routerLink] = \"['/createtrip']\"> Plan a Trip </a>  | -->\n<!-- <a [routerLink] = \"['/dashboard']\"> Dashboard </a> | -->\n <a [routerLink] = \"['/logout']\" class =\"right\" (click)=\"logout()\"> Logout </a> \n</p>  \n\n{{trips | json}}\n\n<div class = \"container\">\n    \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__ = __webpack_require__("../../../../../../node_modules/angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = (function () {
    function DashboardComponent(_cookieService, _httpService, router) {
        this._cookieService = _cookieService;
        this._httpService = _httpService;
        this.router = router;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this._cookieService.get("user");
        this._httpService.updateUser(this.user);
        if (this.user === undefined) {
            this.router.navigate(['/login']);
        }
        this._httpService.retrieveTrips()
            .then(function (data) { console.log("Trips from db", data); _this.trips = data; })
            .catch(function (err) { console.log("Error retrieving trips"); });
    };
    DashboardComponent.prototype.logout = function () {
        console.log("The key is:", (this._cookieService.get("key")));
        this._cookieService.removeAll();
        this._httpService.updateUser(undefined);
        console.log("The key is empty:", (this._cookieService.get("key")));
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], DashboardComponent);

var _a, _b, _c;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HttpService = (function () {
    function HttpService(_http) {
        this._http = _http;
        this.observedTrip = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.observedUser = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](null);
    }
    HttpService.prototype.createUser = function (user) {
        return this._http.post("/user", user)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    HttpService.prototype.createTrip = function (trip) {
        return this._http.post("/trip", trip)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    HttpService.prototype.retrieveTrips = function () {
        return this._http.get("/trip")
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    HttpService.prototype.retrieveOneUser = function (user) {
        return this._http.post("/user/login", user)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    HttpService.prototype.create = function (item) {
        return this._http.post("/items", item)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    HttpService.prototype.retrieveOne = function (id) {
        return this._http.get("/items/" + id)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    HttpService.prototype.update = function (item, id) {
        return this._http.put("/items/" + id, item)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    HttpService.prototype.deleteOne = function (item, id) {
        return this._http.put('/items/${id}', item)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    HttpService.prototype.updateTrip = function (trip) {
        this.observedTrip.next(trip);
    };
    HttpService.prototype.updateUser = function (user) {
        this.observedUser.next(user);
    };
    return HttpService;
}());
HttpService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], HttpService);

var _a;
//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#red{\n    color : red;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class = \"container\">\n  <h5>\n  Login\n  </h5>\n  <form #loginForm = 'ngForm' (submit)='login(loginForm)'>\n    <p *ngIf = \"error\" id = \"red\">{{error | json}}</p>\n  <div class=\"form-group\">\n    <label for=\"email\">Email: </label>\n    <input type=\"email\" name=\"email\" class=\"form-control\"\n    required\n    pattern = \"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$\"\n    #email='ngModel'\n    [(ngModel)]=\"user.email\">\n    <div id=\"red\" *ngIf='email.errors && (email.touched || loginForm.submitted)'>\n      <small *ngIf='email.errors.required'>An email is required</small>\n      <small *ngIf='email.errors.pattern'>Please enter a valid email</small>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"pw\">Password: </label>\n    <input type=\"password\" name=\"pw\" class=\"form-control\"\n    required\n    minlength = \"3\"\n    [(ngModel)]=\"user.password\"\n    #pw = 'ngModel'>\n  </div>\n  <div id = \"red\" *ngIf = 'pw.errors && (pw.touched || loginForm.submitted)'>\n    <p *ngIf = 'pw.errors.required'>Password is required!</p>\n    <p *ngIf = 'pw.errors.minlength'>Minimum length is 3</p>\n  </div>\n  <button [disabled]=\"!loginForm.valid\" type=\"submit\" class=\"waves-effect waves-light btn\">Submit</button> <br><br>\n  <a [routerLink] = \"['/register']\">Not a user? Register..</a>\n</form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__ = __webpack_require__("../../../../../../node_modules/angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(_cookieService, _httpService, router) {
        this._cookieService = _cookieService;
        this._httpService = _httpService;
        this.router = router;
        this.user = {
            email: '',
            password: ''
        };
        this.error = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (form) {
        var _this = this;
        console.log("User front end", this.user);
        this._httpService.retrieveOneUser(this.user)
            .then(function (data) {
            console.log("User exists", data);
            if (!data) {
                _this.error = "Please register";
                form.resetForm();
            }
            else if (!data.login) {
                _this.error = data.message;
            }
            else if (data.login) {
                console.log("User exists  in login", data.user);
                _this._cookieService.put("user", data.user._id);
                _this._httpService.updateUser(data.user);
                // this._cookieService.get("user");
                _this.router.navigate(['/dashboard']);
            }
        })
            .catch(function (err) { console.log("Error", err); });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/plan-days/plan-days.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#red{\n    color : red;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/plan-days/plan-days.component.html":
/***/ (function(module, exports) {

module.exports = "<div class = \"row\">\n  <form class=\"col s12\" #tripForm = 'ngForm' (submit)='createTrip(tripForm)'>\n      <!-- {{trip | json}} <br> -->\n      <small id = \"red\" *ngIf ='dateerror'> {{ dateerror | json}} </small>\n      <div class=\"row\">\n        <div class=\"input-field col s6\">\n          <label for=\"start\" [ngClass]=\"{'active': trip?.start_date}\">Start Date:</label>\n          <input type=\"date\" id = \"start\" name = \"start_date\" class=\"datepicker\"\n            required\n            min = \"today | date:'shortDate'\"\n            [(ngModel)] = \"trip.start_date\"\n            #start_date = \"ngModel\"\n            (input) = \"calculatedays(start_date.value, end_date.value)\"\n          >\n          <div id=\"red\" *ngIf='start_date.errors && (start_date.touched || tripForm.submitted)'>\n            <small *ngIf='start_date.errors.required'>Date is required</small>\n          </div>\n        </div>\n        <div class=\"input-field col s6\">\n          <label for=\"end\" [ngClass]=\"{'active': trip?.end_date}\">End Date:</label>\n          <input type=\"date\" id = \"end\" name = \"end_date\" class=\"datepicker\"\n            required\n            [(ngModel)] = \"trip.end_date\"\n            #end_date = \"ngModel\"\n            (input) = \"calculatedays(start_date.value, end_date.value)\"\n          >\n          <div id=\"red\" *ngIf='end_date.errors && (end_date.touched || tripForm.submitted)'>\n            <small *ngIf='end_date.errors.required'>Date is required</small>\n          </div>\n        </div>\n      </div>\n    \n      <div class = \"row\">\n        <div class=\"input-field col s6\">\n          <label for=\"location\">Location:</label>\n          <input type=\"text\" name=\"location\" id = 'location' \n          required \n          [(ngModel)] = \"locationAuto\"\n          #location = 'ngModel'\n          [options]='options' \n          (setAddress) = \"getAddress($event)\"\n          (street_number) = 'street_number=$event'\n          (street)= 'street=$event'\n          (city)= 'city=$event'\n          (state)='state=$event'\n          (district)='district=$event'\n          (country)='country=$event'\n          (postal_code)='postal_code=$event'\n          (lat)='lat=$event' \n          (lng)='lng=$event' \n          (adr_address)='adr_address=$event' \n          (name)='name=$event' \n          (place_id)='place_id=$event' \n          (types)='types=$event' \n          (url)='url=$event'  \n          (utc_offset)='utc_offset=$event' \n          (vicinity)='vicinity=$event' \n          (photos)='photos=$event' \n          (airport)='airport=$event' \n          (CountryCodes)='CountryCodes=$event'\n           id=\"autocomplete\"\n          ng2-google-place-autocomplete/> \n         <br>\n          <div *ngIf = 'location.errors && (location.touched || tripForm.submitted)'>\n            <p id = \"red\" *ngIf = 'location.errors.required'>Location is required</p>\n          </div> \n        </div> \n        <div class=\"input-field col s6\">\n          <label for=\"num\">Number of Travellers:</label>\n          <input type=\"number\" name=\"num\" id = 'num'\n          required \n          [(ngModel)] = \"numTravellers\"\n          #num = 'ngModel'\n          (input) = \"addTravellers()\"\n          ><br>\n          <div *ngIf = 'num.errors && (num.touched || tripForm.submitted)'>\n            <small  id = \"red\" *ngIf = 'num.errors.required'>Number of travellers is required to share trip info.</small>\n          </div> \n        </div> \n      </div> \n      \n      <div *ngFor = \"let dayNote of trip._days; let i = index;\">\n        <small>Day {{i+1}}</small>\n           <textarea rows=\"60\" cols=\"8\" [(ngModel)] = 'trip._days[i].note' name = \"note\"></textarea>   \n        <!-- <input type=\"text\" name=\"note\" [value]=\"trip._days[i]\" [(ngModel)] = \"trip._days[i].note\">  -->\n      </div>\n      <hr *ngIf = \"trip._travellers.length > 0\">\n      <p *ngIf = \"trip._travellers.length > 0\">Travellers</p>\n      <div *ngFor = \"let traveller of trip._travellers; let i = index;\">\n        <small>Traveller {{i+1}}</small>\n           <textarea rows=\"60\" cols=\"8\" [(ngModel)] = 'trip._travellers[i].email' name = \"email\"></textarea>  \n          <!-- <p *ngIf = \"daysArr[i].note\">{{daysArr[i].note | json}}</p> -->    \n        <!-- <input type=\"text\" name=\"email\" [value]=\"trip._travellers[i].email\" [(ngModel)] = \"trip._travellers[i].email\">  -->\n      </div>\n      <button [disabled]=\"!tripForm.valid\" type=\"submit\" class=\"waves-effect waves-light btn\">Create Trip</button> <br><br>\n   </form>\n </div>"

/***/ }),

/***/ "../../../../../src/app/plan-days/plan-days.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__ = __webpack_require__("../../../../../../node_modules/angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanDaysComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlanDaysComponent = (function () {
    function PlanDaysComponent(_httpService, _cookieService, router) {
        this._httpService = _httpService;
        this._cookieService = _cookieService;
        this.router = router;
        this.trip = {
            _days: [],
            _travellers: [],
            _user: '',
            location: ''
        };
        this.days = 0;
        this.dateerror = '';
    }
    PlanDaysComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this._httpService.observedTrip.subscribe(function (updatedTrip) { _this.trip = updatedTrip; }, function (err) { }, function () { });
        this.user = this._cookieService.get("user");
        console.log("this.user in plan-days.ts", this._cookieService.get("user"));
        if (this.user === undefined) {
            this.router.navigate(['/login']);
        }
        this.today = Date.now();
    };
    PlanDaysComponent.prototype.calculatedays = function (start, end) {
        var date1 = Date.parse(start);
        var date2 = Date.parse(end);
        // var backDate = (date1-this.today)/(1000*60*60*24) + 1
        // if(backDate < 0){
        //   console.log("Here")
        //   this.dateerror = 'Plan a future trip'
        // }
        // else{
        //   this.dateerror = ''
        // }
        console.log((date1 - this.today) / (1000 * 60 * 60 * 24) + 1);
        this.days = (date2 - date1) / (1000 * 60 * 60 * 24) + 1;
        if (this.days <= 0) {
            this.dateerror = 'Please enter valid date';
        }
        else {
            if (this.trip._days.length > this.days) {
                this.trip._days.length = this.days;
            }
            else {
                for (var i = this.trip._days.length; i < this.days; i++) {
                    var day = new Day();
                    this.trip._days.push(day);
                    // this.daysArr.push("");
                }
            }
            this.dateerror = '';
        }
        console.log("Number of days", this.days);
    };
    PlanDaysComponent.prototype.updateTrip = function () {
        console.log("In update trip");
        this._httpService.updateTrip(this.trip);
    };
    PlanDaysComponent.prototype.addTravellers = function () {
        console.log("Number", this.numTravellers);
        if (this.numTravellers < 0) {
            this.numError = 'Please enter a valid number';
        }
        else {
            if (this.trip._travellers.length > this.numTravellers) {
                this.trip._travellers.length = this.numTravellers;
            }
            else {
                for (var i = this.trip._travellers.length; i < this.numTravellers; i++) {
                    var person = new Traveller();
                    this.trip._travellers.push(person);
                    // this.daysArr.push("");
                }
            }
            this.numError = '';
        }
    };
    PlanDaysComponent.prototype.createTrip = function (form) {
        var _this = this;
        this.trip._user = this.user;
        this.trip.location = this.locationAuto;
        console.log("Creating trip", this.trip);
        this._httpService.createTrip(this.trip)
            .then(function (data) { console.log("Added trip", data); _this.router.navigate(['/dashboard']); })
            .catch(function (err) { return console.log("Error while adding trip", err); });
    };
    PlanDaysComponent.prototype.getAddress = function (data) {
        console.log(data);
        this.locationAuto = data.name;
    };
    PlanDaysComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return PlanDaysComponent;
}());
PlanDaysComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-plan-days',
        template: __webpack_require__("../../../../../src/app/plan-days/plan-days.component.html"),
        styles: [__webpack_require__("../../../../../src/app/plan-days/plan-days.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__["CookieService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], PlanDaysComponent);

var Traveller = (function () {
    function Traveller() {
        this.email = '';
    }
    return Traveller;
}());
var Day = (function () {
    function Day() {
        this.note = '';
    }
    return Day;
}());
var _a, _b, _c;
//# sourceMappingURL=plan-days.component.js.map

/***/ }),

/***/ "../../../../../src/app/plan-trip/plan-trip.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#header{\n    margin-left: 80%;\n}\n\n#red{\n    color : red;\n}\n\n#box{\n    /* border: 2px solid black; */\n    padding: 10px;\n    /* margin: 10px; */\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/plan-trip/plan-trip.component.html":
/***/ (function(module, exports) {

module.exports = "<p id = \"header\">\n <a [routerLink] = \"['/dashboard']\"> Dashboard </a> | \n<a [routerLink] = \"['/logout']\" (click)=\"logout()\"> Logout </a>\n</p> \n\n<div class = \"container\" id = \"box\">\n  <h5>Planner</h5>\n  <app-plan-days></app-plan-days>  \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/plan-trip/plan-trip.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__ = __webpack_require__("../../../../../../node_modules/angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanTripComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlanTripComponent = (function () {
    function PlanTripComponent(_httpService, _cookieService, router) {
        this._httpService = _httpService;
        this._cookieService = _cookieService;
        this.router = router;
        this.trip = {
            start_date: Date,
            end_date: Date,
            _days: [],
            _travellers: [],
            location: '',
            _user: ''
        };
    }
    PlanTripComponent.prototype.ngOnInit = function () {
        this._httpService.updateTrip(this.trip);
        this.user = this._cookieService.get("user");
        if (this.user === undefined) {
            this.router.navigate(['/login']);
        }
    };
    PlanTripComponent.prototype.logout = function () {
        console.log("The user is:", (this._cookieService.get("user")));
        this._cookieService.removeAll();
        this._httpService.updateUser(undefined);
        console.log("The user is empty:", (this._cookieService.get("user")));
    };
    return PlanTripComponent;
}());
PlanTripComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-plan-trip',
        template: __webpack_require__("../../../../../src/app/plan-trip/plan-trip.component.html"),
        styles: [__webpack_require__("../../../../../src/app/plan-trip/plan-trip.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__["CookieService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], PlanTripComponent);

var _a, _b, _c;
//# sourceMappingURL=plan-trip.component.js.map

/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#red{\n    color : red;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class = \"container\">  \n  <h5>\n  Register\n</h5>\n<form #regForm = 'ngForm' (submit)='register(regForm)'>\n<p *ngIf = \"error\" id = \"red\">{{error | json}}  <a [routerLink] = \"['/login']\">Click here to login</a></p>\n<label for=\"username\">Username:</label>\n<input type=\"text\" name=\"username\" id = 'username' required minlength = '3' #username = 'ngModel' [(ngModel)]=\"newuser.username\"><br>\n<div id = \"red\" *ngIf = 'username.errors && (username.touched || regForm.submitted)'>\n    <p *ngIf = 'username.errors.required'>Username is required!</p>\n    <p *ngIf = 'username.errors.minlength'>Minimum length is 3</p>\n  </div>\n<div class=\"form-group\">\n    <label for=\"email\">Email: </label>\n    <input type=\"email\" name=\"email\" class=\"form-control\"\n    required\n    pattern = \"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$\"\n    #email='ngModel'\n    [(ngModel)]=\"newuser.email\">\n    <div id=\"red\" *ngIf='email.errors && (email.touched || regForm.submitted)'>\n      <p *ngIf='email.errors.required'>An email is required</p>\n      <p *ngIf='email.errors.pattern'>Please enter a valid email</p>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"pw\">Password: </label>\n    <input type=\"password\" name=\"pw\" class=\"form-control\"\n    required\n    minlength = \"3\"\n    [(ngModel)]=\"newuser.password\"\n    #pw = 'ngModel'>\n  </div>\n  <div id = \"red\" *ngIf = 'pw.errors && (pw.touched || regForm.submitted)'>\n    <p *ngIf = 'pw.errors.required'>Password is required!</p>\n    <p *ngIf = 'pw.errors.minlength'>Minimum length is 3</p>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"cpw\">Confirm password: </label>\n    <input type=\"password\" name=\"cpw\" class=\"form-control\"\n    [(ngModel)]=\"newuser.confirmpw\"\n    #cpw='ngModel'>\n  </div>\n  <div id = \"red\" *ngIf = 'pw.value !== cpw.value && (cpw.touched || regForm.submitted)'>\n    <p>Passwords do not match!</p>\n  </div>\n  <button [disabled]=\"!regForm.valid || cpw.value!==pw.value\" type=\"submit\" class=\"waves-effect waves-light btn\">Submit</button>\n</form>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__ = __webpack_require__("../../../../../../node_modules/angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(_cookieService, _httpService, router) {
        this._cookieService = _cookieService;
        this._httpService = _httpService;
        this.router = router;
        this.newuser = {
            username: '',
            email: '',
            password: '',
            confirmpw: ''
        };
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function (form) {
        var _this = this;
        this.user = {
            username: this.newuser.username,
            email: this.newuser.email,
            password: this.newuser.password
        };
        this._httpService.createUser(this.user)
            .then(function (data) {
            console.log("Data when trying to create user", data);
            if (!data.register) {
                _this.error = data.message;
                form.resetForm();
            }
            else {
                console.log(data.register);
                _this._cookieService.put("user", data.user._id);
                _this._httpService.updateUser(data.user);
                _this.router.navigate(['/dashboard']);
            }
        })
            .catch(function (err) { console.log("Error creating user", err); });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/search-view/search-view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\n    height: 300px;\n    margin: 200px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search-view/search-view.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class = \"container\">\n   <agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n    <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n  </agm-map> \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/search-view/search-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchViewComponent = (function () {
    function SearchViewComponent() {
        this.lat = 37.7749;
        this.lng = -122.4194;
    }
    SearchViewComponent.prototype.ngOnInit = function () {
    };
    return SearchViewComponent;
}());
SearchViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-search-view',
        template: __webpack_require__("../../../../../src/app/search-view/search-view.component.html"),
        styles: [__webpack_require__("../../../../../src/app/search-view/search-view.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SearchViewComponent);

//# sourceMappingURL=search-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/user-profile/user-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-profile/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  user-profile works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/user-profile/user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserProfileComponent = (function () {
    function UserProfileComponent() {
    }
    UserProfileComponent.prototype.ngOnInit = function () {
    };
    return UserProfileComponent;
}());
UserProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-profile',
        template: __webpack_require__("../../../../../src/app/user-profile/user-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user-profile/user-profile.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UserProfileComponent);

//# sourceMappingURL=user-profile.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map