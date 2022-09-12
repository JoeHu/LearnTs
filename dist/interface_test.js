"use strict";
// interface_test.ts
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
function createSquare(config) {
    let newSquare = { color: "white", area: 100 };
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
let mySquare = createSquare({ colour: "black", width: 100 });
console.log(mySquare);
let mySearch;
mySearch = function (src, sub) {
    let result = src.search(sub);
    return result > -1;
};
// indexable types
// interface StringArra
function calculateDaysBetweenDates(begin, end) {
    let date1 = new Date(begin);
    let date2 = new Date(end);
    let timeDiff = Math.abs(date2.getTime() - date1.getTime());
    let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return diffDays;
}
let myArray;
myArray = ["Bob", "Fred"];
let myStr = myArray[0];
console.log(myStr);
