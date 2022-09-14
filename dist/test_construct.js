"use strict";
class AnimalABS {
    constructor(name) {
        this.name = name;
    }
}
class Dog extends AnimalABS {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
    sayHello() {
        console.log("wang wang wang");
    }
}
let dog = new Dog('maomao', 3);
console.log(dog);
dog.sayHello();
