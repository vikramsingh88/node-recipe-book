webpackJsonp([1],{

/***/ "../../../../../src/app/shopping-list/shopping-edit/shopping-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input.ng-invalid.ng-touched {\r\n  border: 1px solid red;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shopping-list/shopping-edit/shopping-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <form #f=\"ngForm\" (ngSubmit)=\"onItemAdd()\">\n      <div class=\"row\">\n        <div class=\"col-sm-5 form-group\">\n          <label for=\"name\">Name</label>\n          <input type=\"text\" id=\"name\" class=\"form-control\" ngModel name=\"name\" required>\n        </div>\n        <div class=\"col-sm-2 form-group\">\n          <label for=\"amount\">Amount</label>\n          <input type=\"number\" id=\"amount\" class=\"form-control\" ngModel name=\"amount\" required pattern=\"^[1-9]+[0-9]*$\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <button [disabled]=\"!f.valid\" class=\"btn btn-success\" type=\"submit\">{{editMode ? 'Update' : 'Add'}}</button>\n          <button class=\"btn btn-danger\" type=\"button\" (click)=\"onDelete()\" *ngIf=\"editMode\">Delete</button>\n          <button class=\"btn btn-primary\" type=\"button\" (click)=\"onClear()\">Clear</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shopping-list/shopping-edit/shopping-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_ingredient_model__ = __webpack_require__("../../../../../src/app/shared/ingredient.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shopping_list_service__ = __webpack_require__("../../../../../src/app/shopping-list/shopping-list.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShoppingEditComponent = (function () {
    function ShoppingEditComponent(shoppingListService) {
        this.shoppingListService = shoppingListService;
        this.editMode = false;
    }
    ShoppingEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editSubscription = this.shoppingListService.itemmEditStarted.subscribe(function (index) {
            _this.editItemIndex = index;
            _this.editMode = true;
            _this.editedItem = _this.shoppingListService.getIngredient(index);
            _this.shoppingListForm.setValue({
                name: _this.editedItem.name,
                amount: _this.editedItem.amount
            });
        });
    };
    ShoppingEditComponent.prototype.onItemAdd = function () {
        if (this.editMode) {
            this.shoppingListService.updateIngredient(this.editItemIndex, new __WEBPACK_IMPORTED_MODULE_2__shared_ingredient_model__["a" /* Ingredient */](this.shoppingListForm.value.name, this.shoppingListForm.value.amount));
        }
        else {
            this.shoppingListService.addIngredient(new __WEBPACK_IMPORTED_MODULE_2__shared_ingredient_model__["a" /* Ingredient */](this.shoppingListForm.value.name, this.shoppingListForm.value.amount));
        }
        this.editMode = false;
        this.shoppingListForm.reset();
    };
    ShoppingEditComponent.prototype.onClear = function () {
        this.editMode = false;
        this.shoppingListForm.reset();
    };
    ShoppingEditComponent.prototype.onDelete = function () {
        this.shoppingListService.deleteIngredient(this.editItemIndex);
        this.onClear();
    };
    ShoppingEditComponent.prototype.ngOnDestroy = function () {
        this.editSubscription.unsubscribe();
    };
    return ShoppingEditComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], ShoppingEditComponent.prototype, "shoppingListForm", void 0);
ShoppingEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Component */])({
        selector: 'app-shopping-edit',
        template: __webpack_require__("../../../../../src/app/shopping-list/shopping-edit/shopping-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shopping-list/shopping-edit/shopping-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shopping_list_service__["a" /* ShoppingListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shopping_list_service__["a" /* ShoppingListService */]) === "function" && _b || Object])
], ShoppingEditComponent);

var _a, _b;
//# sourceMappingURL=shopping-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/shopping-list/shopping-list-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shopping_list_component__ = __webpack_require__("../../../../../src/app/shopping-list/shopping-list.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingListRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__shopping_list_component__["a" /* ShoppingListComponent */] }
];
var ShoppingListRoutingModule = (function () {
    function ShoppingListRoutingModule() {
    }
    return ShoppingListRoutingModule;
}());
ShoppingListRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(appRoutes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], ShoppingListRoutingModule);

//# sourceMappingURL=shopping-list-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/shopping-list/shopping-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shopping-list/shopping-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-10\">\n    <app-shopping-edit></app-shopping-edit>\n    <hr>\n    <ul class=\"list-group\">\n      <a class=\"list-group-item\" style=\"cursor: pointer\" *ngFor=\"let ingredient of ingredients; let i = index\" (click)=\"onEditItem(i)\">\n        {{ingredient.name}} ({{ingredient.amount}})\n      </a>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shopping-list/shopping-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shopping_list_service__ = __webpack_require__("../../../../../src/app/shopping-list/shopping-list.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShoppingListComponent = (function () {
    function ShoppingListComponent(shoppingListService) {
        this.shoppingListService = shoppingListService;
        this.ingredients = [];
    }
    ShoppingListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ingredients = this.shoppingListService.getIngredients();
        this.ingredientSubscription = this.shoppingListService.ingredientAdded.subscribe(function () {
            _this.ingredients = _this.shoppingListService.getIngredients();
        });
    };
    ShoppingListComponent.prototype.ngOnDestroy = function () {
        this.ingredientSubscription.unsubscribe();
    };
    ShoppingListComponent.prototype.onEditItem = function (index) {
        this.shoppingListService.itemmEditStarted.next(index);
    };
    return ShoppingListComponent;
}());
ShoppingListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Component */])({
        selector: 'app-shopping-list',
        template: __webpack_require__("../../../../../src/app/shopping-list/shopping-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shopping-list/shopping-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shopping_list_service__["a" /* ShoppingListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shopping_list_service__["a" /* ShoppingListService */]) === "function" && _a || Object])
], ShoppingListComponent);

var _a;
//# sourceMappingURL=shopping-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/shopping-list/shopping-list.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shopping_list_component__ = __webpack_require__("../../../../../src/app/shopping-list/shopping-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shopping_edit_shopping_edit_component__ = __webpack_require__("../../../../../src/app/shopping-list/shopping-edit/shopping-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shopping_list_routing_module__ = __webpack_require__("../../../../../src/app/shopping-list/shopping-list-routing.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingListModule", function() { return ShoppingListModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ShoppingListModule = (function () {
    function ShoppingListModule() {
    }
    return ShoppingListModule;
}());
ShoppingListModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__shopping_list_component__["a" /* ShoppingListComponent */],
            __WEBPACK_IMPORTED_MODULE_4__shopping_edit_shopping_edit_component__["a" /* ShoppingEditComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["h" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__shopping_list_routing_module__["a" /* ShoppingListRoutingModule */]
        ]
    })
], ShoppingListModule);

//# sourceMappingURL=shopping-list.module.js.map

/***/ })

});
//# sourceMappingURL=1.chunk.js.map