"use strict";
// // 基础类型
// // bool
// let isDone: boolean = false;
// //number
// let dec: number = 6;
// let hex: number = 0xf00d;
// let oct: number = 0o744;
// let binary: number = 0b1010101;
// //string
// let u_name: string = "huxiaozhou";
// u_name = "huxiaozhou Hello World";
// let age: number = 30;
// let sentence: string = `my name is ${u_name}, I'm ${age} years old`;
// console.log(sentence);
// let sentence1: string = "my name is " + u_name + ", I'm " + age + " years old.";
// console.log(sentence1)
// // array
// // let list: number[] =[1, 2, 3];
// let list: Array<number> = [3, 4, 5];
// let array: Array<string> = ["name", "age"];
// // tuple
// let x:[string, number];
// x = ['hello', 1];
// console.log(x[0].substring(1));
// console.log(x[1].toString());
// x[0] = 'world';
// // enum
// enum Color {Red, Green, Blue}
// let c: Color = Color.Green;
// console.log(c);
// let c1: Color = 1;
// console.log(c1);
// // any
// let notSure: any = 4;
// notSure = "maybe a string instead";
// notSure = false;
// // void
// function warnUser(): void {
// 	console.log("This is my warning message");
// }
// let unusable: void = undefined;
// // null and undefined
// let u: undefined = undefined;
// let n: null = null;
// // never
// function error(message: string): never {
// 	throw new Error(message);
// }
// function fail() {
// 	return error("Something failed");
// }
// // return never must have unreachable end point
// function infiniteLoop(): never {
// 	while (true) {
// 	}
// }
// // assert
// let someValue: any = "this is a string";
// let strLength: number = (<string>someValue).length;
// let strLength1: number = (someValue as string).length;
