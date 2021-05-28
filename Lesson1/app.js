"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var shape_1 = require("./shape");
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(a, b, c, heightSidesTringle) {
        var _this = _super.call(this) || this;
        _this.a = a;
        _this.b = b;
        _this.c = c;
        _this.heightSidesTringle = heightSidesTringle;
        return _this;
    }
    Triangle.prototype.perimeter = function () {
        return this.a + this.b + this.c;
    };
    Triangle.prototype.area = function () {
        return this.a * this.heightSidesTringle / 2;
    };
    return Triangle;
}(shape_1.Shape));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(a, b) {
        var _this = _super.call(this) || this;
        _this.a = a;
        _this.b = b;
        return _this;
    }
    Rectangle.prototype.perimeter = function () {
        return 2 * (this.a + this.b);
    };
    Rectangle.prototype.area = function () {
        return this.a * this.b;
    };
    return Rectangle;
}(shape_1.Shape));
var triangle1 = new Triangle(10, 15, 20, 5);
var triangle2 = new Triangle(7, 25, 10, 9);
var rectangle1 = new Rectangle(10, 30);
var rectangle2 = new Rectangle(5, 2);
var arreyFigures = [triangle1, triangle2, rectangle1, rectangle2];
for (var _i = 0, arreyFigures_1 = arreyFigures; _i < arreyFigures_1.length; _i++) {
    var figure = arreyFigures_1[_i];
    console.log('---------------------------------------------');
    console.log(figure.getName() + ": perimeter: " + figure.perimeter() + ", area: " + figure.area());
}
arreyFigures.forEach(function (figure) {
    console.log(figure.getName() + ": perimeter: " + figure.perimeter() + ", area: " + figure.area());
    ;
});
