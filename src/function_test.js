function add(x, y) {
    return x + y;
}
var myAdd = function (x, y) {
    return x + y;
};
var myAdd2 = function (x, y) {
    return x + y;
};
// inference types
var myAdd3 = function (x, y) {
    return x + y;
};
var myadd4 = function (x, y) { return x + y; };
var myAdd5 = function (x, y) {
    return x + y;
};
// default parameters and rest parameters
// function buildName(firstName: string, lastName?: string) {
// 	if (lastName) 
// 		return firstName + " " + lastName;
// 	else
// 		return firstName;
// }
function buildName(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
var buildNameFun = buildName;
// this
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        return ()=> {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker(deck);
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
