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

/***/ "../../../../../src/app/addtopic/addtopic.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#red{\n    color : red;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/addtopic/addtopic.component.html":
/***/ (function(module, exports) {

module.exports = "<div class = \"formTopic\" class = \"container\">\n    <form #formTopic = 'ngForm'>\n      <label for=\"topic\">Topic:</label>\n      <input type=\"text\" name=\"content\" id = \"topic\" value=\"\" \n      required\n      minlength = 5\n      [(ngModel)] = 'newtopic.content' \n      #content = 'ngModel'>\n       <div *ngIf='content.errors && (content.touched || formTopic.submitted)'>\n          <small id = \"red\" *ngIf = \"content.errors?.required\">* Topic is required</small><br>\n          <small id = \"red\" *ngIf = \"content.errors?.minlength\">* Topic must be at least 5 characters long</small>\n      </div>\n\n       <label for=\"description\">Description:</label>\n      <input type=\"text\" name=\"description\" id = \"description\" value=\"\" \n      required\n      minlength = 5\n      [(ngModel)] = 'newtopic.description' \n      #description = 'ngModel'>\n       <div *ngIf='description.errors && (description.touched || formTopic.submitted)'>\n          <small id = \"red\" *ngIf = \"description.errors?.required\">* Description is required</small><br>\n          <small id = \"red\" *ngIf = \"description.errors?.minlength\">* Description must be at least 5 characters long</small>\n      </div>\n\n      <label for=\"category\">Category:</label>\n     <input type=\"text\" name=\"category\" id = \"category\" value=\"\" \n      required\n      minlength = 2\n      [(ngModel)] = 'newtopic.category' \n      #category = 'ngModel'>\n       <div *ngIf='category.errors && (category.touched || formTopic.submitted)'>\n          <small id = \"red\" *ngIf = \"category.errors?.required\">* Category is required</small><br>\n          <small id = \"red\" *ngIf = \"category.errors?.minlength\">* Category must be at least 2 characters long</small>\n      </div>\n\n      <div class = \"row\">\n         <button class = \"col s2 offset-s10\" type=\"submit\" [disabled] = \"!formTopic.form.valid\" (click) = \"create(formTopic)\" name=\"submit\" value=\"Add Topic\" class = \"waves-effect waves-light btn green\">Add Topic </button>\n      </div>\n    </form>\n  \n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/addtopic/addtopic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__ = __webpack_require__("../../../../../../node_modules/angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddtopicComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddtopicComponent = (function () {
    function AddtopicComponent(_cookieService, _httpService) {
        this._cookieService = _cookieService;
        this._httpService = _httpService;
        this.createtopic = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.newtopic = {
            content: '',
            description: '',
            category: ''
        };
    }
    AddtopicComponent.prototype.ngOnInit = function () {
        this.name = this._cookieService.get("key");
    };
    AddtopicComponent.prototype.create = function (form) {
        var _this = this;
        this._httpService.createTopic(this.newtopic, this.name)
            .then(function (data) { console.log(data); _this.createtopic.emit(); })
            .catch(function (err) { console.log(err); });
        form.resetForm();
    };
    return AddtopicComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], AddtopicComponent.prototype, "createtopic", void 0);
AddtopicComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-addtopic',
        template: __webpack_require__("../../../../../src/app/addtopic/addtopic.component.html"),
        styles: [__webpack_require__("../../../../../src/app/addtopic/addtopic.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */]) === "function" && _b || Object])
], AddtopicComponent);

var _a, _b;
//# sourceMappingURL=addtopic.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__userpage_userpage_component__ = __webpack_require__("../../../../../src/app/userpage/userpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__topicdetails_topicdetails_component__ = __webpack_require__("../../../../../src/app/topicdetails/topicdetails.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', pathMatch: 'full', redirectTo: '/login' },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'singleuser/:name', component: __WEBPACK_IMPORTED_MODULE_3__userpage_userpage_component__["a" /* UserpageComponent */] },
    { path: 'singletopic/:id', component: __WEBPACK_IMPORTED_MODULE_4__topicdetails_topicdetails_component__["a" /* TopicdetailsComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */] },
    { path: 'logout', redirectTo: 'login' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__["a" /* DashboardComponent */] }
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
exports.push([module.i, "p{\n    margin-left: 80%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n<a [routerLink] = \"['/dashboard']\"> Dashboard </a> |\n<a [routerLink] = \"['/logout']\" (click)=\"logout()\"> Logout </a>\n</p>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__ = __webpack_require__("../../../../../../node_modules/angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__);
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
    function AppComponent(_cookieService) {
        this._cookieService = _cookieService;
        this.title = 'app';
        this.key = this._cookieService.get("key");
    }
    AppComponent.prototype.logout = function () {
        console.log("The key is:", (this._cookieService.get("key")));
        this._cookieService.removeAll();
        console.log("The key is empty:", (this._cookieService.get("key")));
    };
    AppComponent.prototype.ngOnInit = function () {
        this.key = this._cookieService.get("key");
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"]) === "function" && _a || Object])
], AppComponent);

var _a;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__addtopic_addtopic_component__ = __webpack_require__("../../../../../src/app/addtopic/addtopic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__userpage_userpage_component__ = __webpack_require__("../../../../../src/app/userpage/userpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__topicdetails_topicdetails_component__ = __webpack_require__("../../../../../src/app/topicdetails/topicdetails.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_cookie_services_cookies_service__ = __webpack_require__("../../../../../../node_modules/angular2-cookie/services/cookies.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angular2_cookie_services_cookies_service__);
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
            __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_8__addtopic_addtopic_component__["a" /* AddtopicComponent */],
            __WEBPACK_IMPORTED_MODULE_9__userpage_userpage_component__["a" /* UserpageComponent */],
            __WEBPACK_IMPORTED_MODULE_10__topicdetails_topicdetails_component__["a" /* TopicdetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__login_login_component__["a" /* LoginComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_12_angular2_cookie_services_cookies_service__["CookieService"]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "\n<h3>Welcome, {{key}}!</h3>\n<div>\n  <table class = \"table table-bordered\">\n  <thead>\n    <th>Category</th>\n    <th>Topic</th>\n    <th>User Name</th>\n    <th>Posts</th>\n  </thead>\n  <tbody>\n    <tr *ngFor = \"let topic of topics\">\n      <td>{{topic.category}}</td>\n      <td><a [routerLink]=\"['/singletopic',topic._id]\">{{topic.content}}</a></td>\n      <td><a [routerLink]=\"['/singleuser',topic._user.username]\">{{topic._user.username}}</a></td>\n      <td>{{topic.posts.length}}</td>\n    </tr>\n  </tbody>\n</table>\n<br>\n<app-addtopic (createtopic) = \"updatetopics()\"></app-addtopic>\n</div>\n"

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
        this.topics = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.key = this._cookieService.get("key");
        if (this.key === undefined) {
            this.router.navigate(['/login']);
        }
        this._httpService.retrieveTopics()
            .then(function (data) { console.log("topics in dasboard", data); _this.topics = data; })
            .catch(function (err) { console.log("error in topics retrieval", err); });
    };
    DashboardComponent.prototype.updatetopics = function () {
        var _this = this;
        this._httpService.retrieveTopics()
            .then(function (data) { console.log("topics in dasboard", data); _this.topics = data; })
            .catch(function (err) { console.log(err); });
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
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
    }
    HttpService.prototype.retrieveAll = function () {
        return this._http.get("/items")
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    HttpService.prototype.createUser = function (user) {
        return this._http.post("/user", user)
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
    // deleteOne(id) {
    //   return this._http.put('/items/${id}')
    //   .map( data => data.json() )
    //   .toPromise();
    // }
    //Topic CRUD's
    HttpService.prototype.retrieveOneTopic = function (id) {
        return this._http.get("/topic/" + id)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    HttpService.prototype.retrieveTopics = function () {
        return this._http.get("/topic")
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    HttpService.prototype.createTopic = function (topic, name) {
        return this._http.post("/topic/" + name, topic)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    //Post CRUD:
    HttpService.prototype.createPost = function (post, name) {
        return this._http.post("/post/" + name, post)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    HttpService.prototype.downvote = function (post) {
        return this._http.post("/downvote", post)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    HttpService.prototype.upvote = function (post) {
        return this._http.post("/upvote", post)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    HttpService.prototype.createComment = function (comment, name) {
        return this._http.post("/comment/" + name, comment)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    //User CRUD
    HttpService.prototype.retrieveUser = function (name) {
        return this._http.get("/user/" + name)
            .map(function (data) { return data.json(); })
            .toPromise();
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
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  Please enter your name to join!\n</p>\n\n<form #loginForm = 'ngForm' (submit)='login(loginForm)'>\n<label for=\"username\">Username:</label>\n<input type=\"text\" name=\"username\" id = 'username' required minlength = '4' #username = 'ngModel' [(ngModel)]=\"user.username\"><br>\n<input type=\"submit\" class=\"waves-effect waves-light btn\" [disabled] = '!loginForm.valid'>\n</form>\n"

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
            username: ''
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (form) {
        this._httpService.createUser(this.user)
            .then(function (data) { console.log(data); })
            .catch(function (err) { console.log(err); });
        this._cookieService.put("key", this.user.username);
        console.log(this._cookieService.get("key"));
        this.router.navigate(['/dashboard']);
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

/***/ "../../../../../src/app/topicdetails/topicdetails.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".upvote, .downvote{\n   float: right;\n}\n\n#button{\n    margin-left : 85%;\n}\n\n#red{\n    color : red;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/topicdetails/topicdetails.component.html":
/***/ (function(module, exports) {

module.exports = "<div class =\"container\" *ngIf = \"currtopic\">\n\n<p><a>{{currtopic[0]?._user.username | json}}</a> posted a topic:</p>\n<p>Description: {{currtopic[0]?.description | json}}</p>\n<p>Post your answer here...</p>\n\n<form #postForm='ngForm' (submit)=\"addPost(postForm)\">\n\n<input type=\"text\" name=\"content\" [(ngModel)]=\"post.content\" required minlength= '5' #content ='ngModel'>\n<div *ngIf='content.errors && (content.touched || postForm.submitted)'>\n    <small id = \"red\" *ngIf = \"content.errors?.minlength\">* Post must be at least 5 characters long</small>\n</div>\n<input type=\"submit\" id = \"button\" class=\"waves-effect waves-light btn\" value =\"Post\" [disabled]=\"!postForm.valid\">\n</form>\n<hr>\n<div *ngFor = \"let post of currtopic[0].posts\">\n    <p>\n        <a [routerLink]=\"['/singleuser',post?._user?.username]\">{{post?._user?.username}}</a> : {{post?.content}}\n         <a (click) = \"downvote(post._id)\" class = \"downvote\">\n          <span class=\"glyphicon glyphicon-thumbs-down\"></span>  {{post.downvotes.length}}\n        </a>       \n        <a (click) = \"upvote(post._id)\" class = \"upvote\">\n          <span class=\"glyphicon glyphicon-thumbs-up\"></span>   {{post.upvotes.length}}\n        </a>\n    </p>\n    <div class = \"container\">\n        <div *ngFor = \"let comment of post.comments\">\n            <a [routerLink]=\"['/singleuser',comment?._user?.username]\">{{comment?._user?.username}}</a> : {{comment.content}}\n        </div>\n        <form #commentForm='ngForm' (submit)=\"addComment(commentForm, content.value, post._id)\">\n        <input type=\"text\" name=\"content\" minlength = '5' #content>\n        <div *ngIf='content.errors && (content.touched || commentForm.submitted)'>\n            <small id = \"red\" *ngIf = \"content.errors?.minlength\">* Comment must be at least 5 characters long</small>\n        </div>\n        <input type=\"submit\" id = \"button\" value =\"Comment\" class=\"waves-effect waves-light btn\" [disabled]=\"!commentForm.valid\">\n        </form>\n    \n    </div>\n</div>\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/topicdetails/topicdetails.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__ = __webpack_require__("../../../../../../node_modules/angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicdetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TopicdetailsComponent = (function () {
    function TopicdetailsComponent(_route, _cookieService, _httpService, router) {
        var _this = this;
        this._route = _route;
        this._cookieService = _cookieService;
        this._httpService = _httpService;
        this.router = router;
        this.post = { content: '', _topic: "" };
        this.comment = { content: '', _post: '' };
        this.votepost = {};
        this._route.params.subscribe(function (param) {
            _this.topic_id = param.id;
            _this.retrieveOneTopic(_this.topic_id);
        });
    }
    TopicdetailsComponent.prototype.retrieveOneTopic = function (topicid) {
        var _this = this;
        this._httpService.retrieveOneTopic(topicid)
            .then(function (data) {
            _this.currtopic = data;
            console.log("Topic:", _this.currtopic);
        })
            .catch(function (err) { console.log("err in retrieving one topic", err); });
    };
    TopicdetailsComponent.prototype.addPost = function (form) {
        this.post._topic = this.currtopic[0]._id;
        this._httpService.createPost(this.post, this._cookieService.get("key"))
            .then(function (data) { console.log("the new post:", data); })
            .catch(function (err) { console.log("Failed to add:", err); });
        form.resetForm();
    };
    TopicdetailsComponent.prototype.downvote = function (postid) {
        var _this = this;
        this.votepost = {
            postid: postid,
            user: this._cookieService.get("key")
        };
        this._httpService.downvote(this.votepost)
            .then(function (data) { console.log("the new post:", data); _this.retrieveOneTopic(_this.topic_id); })
            .catch(function (err) { console.log("Failed to add:", err); });
    };
    TopicdetailsComponent.prototype.upvote = function (postid) {
        var _this = this;
        this.votepost = {
            postid: postid,
            user: this._cookieService.get("key")
        };
        this._httpService.upvote(this.votepost)
            .then(function (data) { console.log("the new post:", data); _this.retrieveOneTopic(_this.topic_id); })
            .catch(function (err) { console.log("Failed to add:", err); });
    };
    TopicdetailsComponent.prototype.addComment = function (form, comment, postid) {
        var _this = this;
        this.comment.content = comment;
        this.comment._post = postid;
        console.log("comment from form", comment);
        console.log("add comment", this.comment);
        this._httpService.createComment(this.comment, this._cookieService.get("key"))
            .then(function (data) { console.log("the new comment:", data); _this.retrieveOneTopic(_this.topic_id); })
            .catch(function (err) { console.log("Failed to add:", err); });
        form.resetForm();
    };
    TopicdetailsComponent.prototype.ngOnInit = function () {
        this.key = this._cookieService.get("key");
        if (this.key === undefined) {
            this.router.navigate(['/login']);
        }
    };
    return TopicdetailsComponent;
}());
TopicdetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-topicdetails',
        template: __webpack_require__("../../../../../src/app/topicdetails/topicdetails.component.html"),
        styles: [__webpack_require__("../../../../../src/app/topicdetails/topicdetails.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object])
], TopicdetailsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=topicdetails.component.js.map

/***/ }),

/***/ "../../../../../src/app/userpage/userpage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/userpage/userpage.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class = \"container\" *ngIf = \"user\">\n  <h4>Username: {{user[0]?.username}}</h4>\n  <br>\n  <p>Posted...</p>\n  <div class = \"container\">\n   <p> {{user[0]?.topics.length}} Topics </p>\n   <p> {{user[0]?.posts.length}} Posts</p>\n   <p> {{user[0]?.comments.length}} Comment</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/userpage/userpage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__ = __webpack_require__("../../../../../../node_modules/angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserpageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserpageComponent = (function () {
    function UserpageComponent(_route, _cookieService, _httpService, router) {
        var _this = this;
        this._route = _route;
        this._cookieService = _cookieService;
        this._httpService = _httpService;
        this.router = router;
        this._route.params.subscribe(function (param) {
            console.log("Params user name", param.name);
            _this.username = param.name;
            _this.retrieveUser(_this.username);
        });
    }
    UserpageComponent.prototype.ngOnInit = function () {
    };
    UserpageComponent.prototype.retrieveUser = function (name) {
        var _this = this;
        this._httpService.retrieveUser(name)
            .then(function (data) { console.log("the user:", data); _this.user = data; })
            .catch(function (err) { console.log("Failed to retrieve user:", err); });
    };
    return UserpageComponent;
}());
UserpageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-userpage',
        template: __webpack_require__("../../../../../src/app/userpage/userpage.component.html"),
        styles: [__webpack_require__("../../../../../src/app/userpage/userpage.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object])
], UserpageComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=userpage.component.js.map

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