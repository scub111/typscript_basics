"use strict";
console.log('---Beginning---');
function add(x, y) {
    return x + y;
}
const myAdd = function (x, y) {
    return x + y;
};
console.log(add(1, 2));
console.log(myAdd(3, 5));
console.log('---Function Types---');
let myAdd2 = function (x, y) {
    return x + y;
};
console.log(myAdd2(2, 4));
let myAdd3 = function (x, y) {
    return x + y;
};
console.log(myAdd3(2, 4));
let myAdd4 = function (x, y) {
    return x + y;
};
console.log(myAdd4(2, 4));
console.log('---Optional and Default parameters---');
function buildName(firstName, lastName) {
    if (lastName)
        return `${firstName} ${lastName}`;
    else
        return firstName;
}
const result5 = buildName("Bob");
console.log(result5);
const result6 = buildName("Bob", "Stinger");
console.log(result6);
function buildName2(firstName, lastName = "Default") {
    return `${firstName} ${lastName}`;
}
const result7 = buildName2("Bob");
console.log(result7);
function buildName3(firstName = "Scub", lastName) {
    return `${firstName} ${lastName}`;
}
const result8 = buildName3(undefined, "Bob");
console.log(result8);
console.log('---Rest parameters---');
function buildName4(firstName, ...restOfName) {
    return `${firstName} ${restOfName.join('; ')}`;
}
let result9 = buildName4('a', 'b', 'c', 'd');
console.log(result9);
console.log('---This---');
let deck = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: Array(52),
    createCardPicker: function () {
        return () => {
            let pickerCard = Math.floor(Math.random() * 52);
            let pickerSuit = Math.floor(pickerCard / 13);
            return { suit: this.suits[pickerSuit], card: pickerCard % 13 };
        };
    }
};
let cardPicker = deck.createCardPicker();
let pickerCard = cardPicker();
//console.log(`suit: ${cardPicker.suit}, card: ${cardPicker.card}`);
console.log(`suit: ${pickerCard.suit}, card: ${pickerCard.card}`);
class Handler {
    constructor() {
        this.info = '';
    }
    onClickBad(e) {
        this.info = e.eventPhase.toString();
    }
}
let h = new Handler();
console.log('---Overloads---');
let suits = ['hearts', 'spades', 'clubs', 'diamonds'];
function pickCard(x) {
    if (typeof x == 'object') {
        return Math.floor(Math.random() * x.length);
    }
    else if (typeof x == 'number') {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
let myDeck = [{ suit: 'diamond', card: 2 }, { suit: 'spades', card: 3 }, { suit: 'clubs', card: 7 }];
let pickedCard1 = myDeck[pickCard(myDeck)];
console.log(`suit: ${pickedCard1.suit}, card: ${pickedCard1.card}`);
let pickedCard2 = pickCard(15);
console.log(`suit: ${pickedCard2.suit}, card: ${pickedCard2.card}`);
