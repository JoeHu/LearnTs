
// interface_test.ts

interface labelledObject {
	label: string;
}

function printLabel(labelledObj: labelledObject) {
	console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);

// optional properties
interface SquareConfig {
	color?: string;
	width?: number;
	[propName: string]: any;
}

function createSquare(config: SquareConfig): {color: string, area: number} {
	let newSquare = {color: "white", area: 100};
	if (config.color) {
		newSquare.color = config.color;
	}
	if (config.width) {
		newSquare.area = config.width * config.width;
	}
	return newSquare;
}


// let mySquare = createSquare({color: "black"});
// console.log(mySquare);

let mySquare = createSquare({colour: "black", width: 100});
console.log(mySquare);

// function types
interface SearchFunc {
	(source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(src: string, sub: string): boolean {
	let result = src.search(sub);
	return result > -1;
}

// indexable types
// interface StringArra

function calculateDaysBetweenDates(begin: number, end: number) {
	let date1 = new Date(begin);
	let date2 = new Date(end);
	let timeDiff = Math.abs(date2.getTime() - date1.getTime());
	let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
	return diffDays;
}

// 
interface StringArray {
	[index: number]: string;
}
let myArray: StringArray;
myArray = ["Bob", "Fred"];
let myStr: string = myArray[0];
console.log(myStr);
