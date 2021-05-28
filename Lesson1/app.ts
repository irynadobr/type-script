import {Shape} from "./shape";

class Triangle extends Shape {
    a: number;
    b: number;
    c: number;
    heightSidesTringle: number


    constructor(a: number, b: number, c: number, heightSidesTringle: number) {
        super();
        this.a = a;
        this.b = b;
        this.c = c;
        this.heightSidesTringle = heightSidesTringle;
    }
    perimeter(): number {
        return this.a + this.b + this.c
    }
    area(): number {
        return this.a * this.heightSidesTringle / 2
    }
}

class Rectangle extends Shape {
    a: number;
    b: number;
    constructor(a: number, b: number) {
        super();
        this.a = a;
        this.b = b;
    }
    perimeter(): number {
        return 2 * (this.a + this.b)
    }
    area(): number {
        return this.a * this.b
    }
}

let triangle1 = new Triangle(10, 15, 20, 5);
let triangle2 = new Triangle(7, 25, 10, 9);
let rectangle1 = new Rectangle(10, 30);
let rectangle2 = new Rectangle(5, 2);


let arreyFigures = [triangle1, triangle2, rectangle1, rectangle2];
for (let figure of arreyFigures) {
    console.log('---------------------------------------------');
    console.log(`${figure.getName()}: perimeter: ${figure.perimeter()}, area: ${figure.area()}`);
}

arreyFigures.forEach(figure => {
    console.log(`${figure.getName()}: perimeter: ${figure.perimeter()}, area: ${figure.area()}`);;
})