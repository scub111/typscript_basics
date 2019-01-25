"use strict";
console.log('---Beginning---');
function add(x, y) {
    return x + y;
}
var myAdd = function (x, y) {
    return x + y;
};
console.log(add(1, 2));
console.log(myAdd(3, 5));
console.log('---Function Types---');
var myAdd2 = function (x, y) {
    return x + y;
};
console.log(myAdd2(2, 4));
var myAdd3 = function (x, y) {
    return x + y;
};
console.log(myAdd3(2, 4));
var myAdd4 = function (x, y) {
    return x + y;
};
console.log(myAdd4(2, 4));
console.log('---Optional and Default parameters---');
function buildName(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
var result5 = buildName("Bob");
console.log(result5);
var result6 = buildName("Bob", "Stinger");
console.log(result6);
function buildName2(firstName, lastName) {
    if (lastName === void 0) { lastName = "Default"; }
    return firstName + " " + lastName;
}
var result7 = buildName2("Bob");
console.log(result7);
function buildName3(firstName, lastName) {
    if (firstName === void 0) { firstName = "Scub"; }
    return firstName + " " + lastName;
}
var result8 = buildName3(undefined, "Bob");
console.log(result8);
console.log('---Rest parameters---');
function buildName4(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join('; ');
}
var result9 = buildName4('a', 'b', 'c', 'd');
console.log(result9);
console.log('---This---');
var deck = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickerCard = Math.floor(Math.random() * 52);
            var pickerSuit = Math.floor(pickerCard / 13);
            return { suit: _this.suits[pickerSuit], card: pickerCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickerCard = cardPicker();
//console.log(`suit: ${cardPicker.suit}, card: ${cardPicker.card}`);
console.log("suit: " + pickerCard.suit + ", card: " + pickerCard.card);
var Handler = /** @class */ (function () {
    function Handler() {
        this.info = '';
    }
    Handler.prototype.onClickBad = function (e) {
        this.info = e.eventPhase.toString();
    };
    return Handler;
}());
var h = new Handler();
console.log('---Overloads---');
var suits = ['hearts', 'spades', 'clubs', 'diamonds'];
function pickCard(x) {
    if (typeof x == 'object') {
        return Math.floor(Math.random() * x.length);
    }
    else if (typeof x == 'number') {
        var pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
var myDeck = [{ suit: 'diamond', card: 2 }, { suit: 'spades', card: 3 }, { suit: 'clubs', card: 7 }];
var pickedCard1 = myDeck[pickCard(myDeck)];
console.log("suit: " + pickedCard1.suit + ", card: " + pickedCard1.card);
var pickedCard2 = pickCard(15);
console.log("suit: " + pickedCard2.suit + ", card: " + pickedCard2.card);
