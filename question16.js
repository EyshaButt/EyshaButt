"use strict";
// guest list array
let guest1 = "hina";
let guest2 = "sara";
let guest3 = "zara";
let guest4 = "rida";
let guest5 = "miral";
// array declare square bracket []
// value seperate ,e.g value1 ,value2 ,value3
let guestsArray = ["guest1 ", "guest2", "guest3", "guest4"];
//////////////////////0           1         2          3
let numbersArray = [1, 2, 3, 4, 5, 6];
// print value
console.log("guest1", guestsArray[0]); // guest1
console.log("guest3", guestsArray[2]); // guest3
console.log(numbersArray[2]); //3 
// pop
console.log("Pop Method");
const removeGuest = guestsArray.pop();
console.log(removeGuest);
console.log("Array length", guestsArray.length);
// push
console.log("Push Method");
const arrayLength = guestsArray.push("guest5");
console.log("~file: class3.ts:29 ~ arrayLength:", arrayLength);
console.log("~file: class3.ts:29 ~ guestsArray:", guestsArray);
