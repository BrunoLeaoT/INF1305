(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-todo-details-todo-details-module"],{

/***/ "./src/app/pages/todo-details/todo-details.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/todo-details/todo-details.module.ts ***!
  \***********************************************************/
/*! exports provided: TodoDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoDetailsPageModule", function() { return TodoDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _todo_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todo-details.page */ "./src/app/pages/todo-details/todo-details.page.ts");







var routes = [
    {
        path: '',
        component: _todo_details_page__WEBPACK_IMPORTED_MODULE_6__["TodoDetailsPage"]
    }
];
var TodoDetailsPageModule = /** @class */ (function () {
    function TodoDetailsPageModule() {
    }
    TodoDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_todo_details_page__WEBPACK_IMPORTED_MODULE_6__["TodoDetailsPage"]]
        })
    ], TodoDetailsPageModule);
    return TodoDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/todo-details/todo-details.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/todo-details/todo-details.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>todoDetails</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/todo-details/todo-details.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/todo-details/todo-details.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RvZG8tZGV0YWlscy90b2RvLWRldGFpbHMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/todo-details/todo-details.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/todo-details/todo-details.page.ts ***!
  \*********************************************************/
/*! exports provided: TodoDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoDetailsPage", function() { return TodoDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TodoDetailsPage = /** @class */ (function () {
    function TodoDetailsPage() {
    }
    TodoDetailsPage.prototype.ngOnInit = function () {
    };
    TodoDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todo-details',
            template: __webpack_require__(/*! ./todo-details.page.html */ "./src/app/pages/todo-details/todo-details.page.html"),
            styles: [__webpack_require__(/*! ./todo-details.page.scss */ "./src/app/pages/todo-details/todo-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TodoDetailsPage);
    return TodoDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-todo-details-todo-details-module.js.map