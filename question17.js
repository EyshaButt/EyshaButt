"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guestList = ["Mubbara", "Hamna", "Asad", "Iqra", "Arsi"];
guestList.map((name) => {
    console.log(`Hi ${name}, I am inviting you today on dinner at my Home`);
});
console.log(`Mubbara can't come on dinner`);
guestList = ["Komal", "Hamna", "Asad", "Iqra", "Arsi"];
guestList.map((nam) => {
    console.log(`Hi ${name}, I am inviting you today on dinner at my Home`);
});
console.log(`Bigger list for  dinner`);
guestList.unshift("Mubbara");
guestList.splice(3, 0, "Larry");
guestList = guestList.concat("Zari");
guestList.map((name) => {
    console.log(`Hi ${name}, I am inviting you today on dinner at my Home`);
});
console.log(`and you have space for only two guests.`);
console.log(`Sorry, ${guestList.pop()} can't make it to dinner.`);
console.log(`Sorry, ${guestList.pop()} can't make it to dinner.`);
console.log(`Sorry, ${guestList.pop()} can't make it to dinner.`);
console.log(`Sorry, ${guestList.pop()} can't make it to dinner.`);
console.log(`Sorry, ${guestList.pop()} can't make it to dinner.`);
console.log(`Sorry, ${guestList.pop()} can't make it to dinner.`);
guestList.map((name) => {
    console.log(`Hi ${name}, you are still inviting on dinner at my Home`);
});
guestList.pop();
guestList.pop();
guestList.map((name) => {
    console.log(`Hi ${name}, you are still inviting on dinner at my Home`);
});