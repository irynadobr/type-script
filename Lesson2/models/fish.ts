import {IAnimal} from '../interface/animal';
export class Fish implements IAnimal {
    typeOfMovement: string;
    constructor(typeOfMovement: string) {
        this.typeOfMovement = typeOfMovement;
                }
    animalInformation():string  {
        return `fish ${this.typeOfMovement} `
}

}
