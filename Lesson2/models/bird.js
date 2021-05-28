"use strict";
exports.__esModule = true;
exports.Bird = void 0;
var Bird = /** @class */ (function () {
    function Bird(typeOfMovement, whatSays) {
        this.typeOfMovement = typeOfMovement;
        this.whatSays = whatSays;
    }
    Bird.prototype.animalInformation = function () {
        return "cat " + this.typeOfMovement + " and " + this.whatSays;
    };
    return Bird;
}());
exports.Bird = Bird;
