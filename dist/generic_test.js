"use strict";
// function genericTest<T>(x: T): T {
// 	return x;
// }
// interface GenericTestInterface<T> {
// 	(x: T): T;
// }
// let genericTestInterface: GenericTestInterface<number> = genericTest;
// // generic class
// class GenericNumber<T> {
// 	zeroValue: T;
// 	add: (x: T, y: T) => T;
// }
// interface lengthwise {
// 	length: number;
// }
// function loggingIdentity<T extends lengthwise>(arg: T): T {
// 	console.log(arg.length);
// 	return arg;
// }
// function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
// 	return obj[key];
// }
// let x = { a: 1, b: 2, c: 3, d: 4 };
// getProperty(x, "a");
// // getProperty(x, "m");
// function create<T>(c: { new(a:number): T; }, para: number): T {
// 	return new c(para);
// }
// class SimpleClass {
// }
// class SimpleClassFactory<T> {
// 	constructor() {
// 	}
// 	create(c:{new(): T;}): T {
// 		return new c();
// 	}
// }
// new SimpleClassFactory<SimpleClass>().create(SimpleClass);
// class BeeKeeper {
// 	hasMask: boolean;
// }
// class ZooKeeper {
// 	name: string;
// }
// class Animal {
// 	numLegs: number;
// }
// class Bee extends Animal {
// 	keeper: BeeKeeper;
// }
// class Lion extends Animal {
// 	keeper: ZooKeeper;
// }
// function createInstance<A extends Animal>(c: new () => A): A {
// 	return new c();
// }
