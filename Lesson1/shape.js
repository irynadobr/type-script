"use strict";
exports.__esModule = true;
exports.Shape = void 0;
var Shape = /** @class */ (function () {
    function Shape() {
    }
    Shape.prototype.getName = function () {
        return this.constructor.name;
    };
    return Shape;
}());
exports.Shape = Shape;
// import {Shape} from "./shape";
//
// class Triangle extends Shape {
//
//     constructor(private a: number, private b: number, private c: number) {
//         super();
//
//     }
//
//     area(): number {
//         return this.a * this.b * this.c;
//     }
//
//     perimeter(): number {
//         return this.a + this.b + this.c;
//     }
//
//
// }
//
// class Rectangle extends Shape {
//
//     constructor(private a: number, private b: number) {
//         super();
//     }
//
//     area(): number {
//         return this.a * this.b
//     }
//
//     perimeter(): number {
//         return this.a + this.b
//     }
//
//
// }
//
// for (let x of [new Triangle(2, 3, 4), new Rectangle(2, 4), new Triangle(2, 3, 4)]) {
//     console.log(`${x.getName()}:\nperimeter: ${x.perimeter()}\narea: ${x.area()}`)
//     console.log()
//
// }
//
// const arr: Shape[] = [
//     new Triangle(2, 3, 4),
//     new Rectangle(2, 4),
//     new Triangle(2, 3, 4)
// ];
//
// arr.forEach(value => {
//     value.area()
//     value.perimeter()
// })
