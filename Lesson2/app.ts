// 1.написать интерфейс Animal который описывает:
//     -тип движения животного(плавает, ходит, бегает) типа стринг
// -что говорит тип стринг (Рыбы не разговаривают)
// и функцию которая возвращает информацию о животном
// создать три класса Cat, Bird, Fish и имплементировать для каждого интерфейс Animal

import {Cat} from './models/cat';
import {Bird} from './models/bird';
import {Fish} from './models/fish';

let cat = new Cat ('moving','meow');
let fish = new Fish('swimmig');
let bird = new Bird('flies','ko-ko');
console.log(cat.animalInformation());
console.log(fish.animalInformation());
console.log(bird.animalInformation());
