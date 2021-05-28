"use strict";
exports.__esModule = true;
exports.Fish = void 0;
var Fish = /** @class */ (function () {
    function Fish(typeOfMovement) {
        this.typeOfMovement = typeOfMovement;
    }
    Fish.prototype.animalInformation = function () {
        return "fish " + this.typeOfMovement + " ";
    };
    return Fish;
}());
exports.Fish = Fish;
