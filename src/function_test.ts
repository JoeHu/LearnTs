
function add(x:number, y:number): number {
	return x + y;
}

let myAdd = function(x: number, y: number): number {
	return x + y;
}

let myAdd2: (x: number, y: number) => number = function(x: number, y: number): number {
	return x + y;
}

// inference types

let myAdd3 = function(x: number, y: number): number {
	return x + y;
}

let myadd4 = (x: number, y: number) => x + y;

let myAdd5: (baseValue: number, increment: number) => number = function(x, y) {
	return x + y;
}


// default parameters and rest parameters

// function buildName(firstName: string, lastName?: string) {
// 	if (lastName) 
// 		return firstName + " " + lastName;
// 	else
// 		return firstName;
// }

function buildName(firstName: string, ...restOfName: string[]) {
	return firstName + " " + restOfName.join(" ");
}

let buildNameFun:(firstName: string, ...restOfName: string[]) => string = buildName;

// this

let deck = {
	suits: ["hearts", "spades", "clubs", "diamonds"],
	cards: Array(52),
	createCardPicker: function() {
		return ()=> {
			let pickedCard = Math.floor(Math.random() * 52);
			let pickedSuit = Math.floor(pickedCard / 13);
			console.log(pickedCard, pickedSuit);
			return {suit: this.suits[pickedSuit], card: pickedCard % 13};
		}
	}
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
