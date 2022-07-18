// 变量声明
var _a;
var a = 1;
// function f() {
// 	var message = "Hello, world";
// 	return message;
// }
function f() {
    var a = 10;
    return function g() {
        var b = a + 1;
        return b;
    };
}
var g = f();
// console.log(g());
// console.log(g());
// for (var i = 0; i < 10; i++) {
// 	console.log(i);
// }
for (var i = 0; i < 10; i++) {
    setTimeout(function () {
        // console.log(i);
    }, i * 100);
}
// let 声明的变量只在let命令所在的代码块内有效，可以在声明之前使用。
var hello = "hello";
// console.log(hello);
// function ff(condition, x) {
// 	if (condition) {
// 		let x = 100;
// 		return x;
// 	}
// 	return x;
// }
// ff(true, 0);
// ff(false, 0);
function theCityThatAlwaysSleeps() {
    var getCity;
    if (true) {
        var city_1 = "Seattle";
        getCity = function () {
            return city_1;
        };
    }
    return getCity();
}
// declare a constant
var numLivesForCat = 9;
var kitty = {
    name: "Aurora",
    numLives: numLivesForCat
};
// let  vs const
// let a: number = 1;
// let b: number = 2;
// a = b;
// 解构
var input = [1, 2];
var first = input[0], second = input[1];
console.log(first);
console.log(second);
// let first = input[0];
// let second = input[1];
_a = [second, first], first = _a[0], second = _a[1];
function funcFirst(_a) {
    var first = _a[0], second = _a[1];
    console.log(first);
    console.log(second);
}
funcFirst(input);
var _b = [1, 2, 3, 4], first1 = _b[0], rest = _b.slice(1);
console.log(first1);
console.log(rest);
// object literal
var o = {
    ao: "hello",
    bo: "world,",
    co: "bar"
};
var ao = o.ao, bo = o.bo, co = o.co;
// attribute renaming
var newnamea = o.ao, newnameb = o.bo, newnamec = o.co;
console.log(newnamea);
