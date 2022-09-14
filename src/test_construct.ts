


abstract class AnimalABS {
	name: string;
	constructor(name: string) {
		this.name = name;
	}
	abstract sayHello(): void;
}

class Dog extends AnimalABS {
	age: number;
	constructor(name: string, age: number) {
		super(name);
		this.age = age;
	}

	sayHello(): void {
		console.log("wang wang wang");
	}
}

let dog = new Dog('maomao', 3);

console.log(dog);
dog.sayHello()