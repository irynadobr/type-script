import {IAnimal} from "../interface/animal";
export class Cat implements IAnimal {

    typeOfMovement: string;
    whatSays: string;
    constructor(typeOfMovement: string, whatSays: string) {
       this.typeOfMovement = typeOfMovement;
        this.whatSays = whatSays;
    }

    animalInformation():string  {
        return `cat ${this.typeOfMovement} and ${this.whatSays}`
    }
}