"use strict";
exports.__esModule = true;
exports.Cat = void 0;
var Cat = /** @class */ (function () {
    function Cat(typeOfMovement, whatSays) {
        this.typeOfMovement = typeOfMovement;
        this.whatSays = whatSays;
    }
    Cat.prototype.animalInformation = function () {
        return "cat " + this.typeOfMovement + " and " + this.whatSays;
    };
    return Cat;
}());
exports.Cat = Cat;
