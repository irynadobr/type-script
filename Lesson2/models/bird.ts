import {IAnimal} from "../interface/animal";
export class Bird implements IAnimal {

    typeOfMovement: string;
    whatSays: string;


    constructor(typeOfMovement: string, whatSays: string) {
        this.typeOfMovement = typeOfMovement;
        this.whatSays = whatSays;
    }

    animalInformation():string  {
        return `bird ${this.typeOfMovement} and says ${this.whatSays}`
    }
}