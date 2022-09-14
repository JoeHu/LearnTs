"use strict";
// // 变量声明
// var a = 1;
// // function f() {
// // 	var message = "Hello, world";
// // 	return message;
// // }
// function f() {
// 	var a = 10;
// 	return function g() {
// 		var b = a + 1;
// 		return b;
// 	}
// }
// var g = f();
// // console.log(g());
// // console.log(g());
// // for (var i = 0; i < 10; i++) {
// // 	console.log(i);
// // }
// for (let i = 0; i < 10; i++) {
// 	setTimeout(() => {
// 		// console.log(i);
// 	}, i * 100);
// }
// // let 声明的变量只在let命令所在的代码块内有效，可以在声明之前使用。
// let hello = "hello";
// // console.log(hello);
// // function ff(condition, x) {
// // 	if (condition) {
// // 		let x = 100;
// // 		return x;
// // 	}
// // 	return x;
// // }
// // ff(true, 0);
// // ff(false, 0);
// function theCityThatAlwaysSleeps() {
// 	let getCity;
// 	if (true) {
// 		let city = "Seattle";
// 		getCity = function() {
// 			return city;
// 		}
// 	}
// 	return getCity();
// }
// // declare a constant
// const numLivesForCat = 9;
// const kitty = {
// 	name: "Aurora",
// 	numLives: numLivesForCat,
// };
// // let  vs const
// // let a: number = 1;
// // let b: number = 2;
// // a = b;
// // 解构
// let input: [number, number] = [1, 2];
// let [first, second] = input;
// console.log(first);
// console.log(second);
// // let first = input[0];
// // let second = input[1];
// [first, second] = [second, first];
// function funcFirst([first, second]: [number, number]) {
// 	console.log(first);
// 	console.log(second);
// }
// funcFirst(input);
// let [first1, ...rest] = [1, 2, 3, 4];
// console.log(first1);
// console.log(rest);
// // object literal
// let o = {
// 	ao: "hello",
// 	bo: "world,",
// 	co: "bar",
// };
// // let { ao, bo, co } = o;
// // attribute renaming
// // let { ao: newnamea, bo: newnameb, co: newnamec } = o;
// // console.log(newnamea);
// let newnamea = o.ao;
// let newnameb = o.bo;
// let newnamec = o.co;
// console.log(newnamea);
// console.log(newnameb);
// console.log(newnamec);
// let {ao, bo, co} :{ao: string, bo: string, co: string} = o;
// // default value
// function keepWholeObject(wholeObject: {a: string, b?: number}){
// 	let {a, b = 100} = wholeObject;
// }
// // 函数声明
// // type C = { a: string, b?: number };
// // function fd({a, b}: C): void {
// // 	console.log(a);
// // 	console.log(b);
// // }
// // function fd({a, b} = {a: "", b: 0}): void {
// // 	console.log(a);
// // 	console.log(b);
// // }
// function fd({a, b = 0} = {a: ""}): void {
// 	console.log(a);
// 	console.log(b);
// }
// // 展开
let first = [1, 2];
let second = [3, 4];
let bothPlus = [0, ...first, ...second, 5];
console.log(bothPlus);
let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = Object.assign(Object.assign({}, defaults), { food: "rich" });
console.log(search);
// 展开限制 仅包含 自身的可枚举属性 会丢失方法
class C {
    constructor() {
        this.p = 12;
    }
    m() {
        console.log(this.p);
    }
}
let c = new C();
let clone = Object.assign({}, c);
clone.p;
c.m();
// clone.m();
