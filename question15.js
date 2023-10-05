"use strict";
// Invite some people to come dinner
let guestlist = [
    "Sahar",
    "Amna",
    "Rabia",
];
// step 1. Print the person who can't make it.
let guestHowCantMakeIt = "Amna";
console.log('${guestHowCantMakeIt} cant make it to Dinner');
// step 2. Replace the name of guest who cant make it.
let newGuest = "Noor";
let indexOfguestHowCantMakeIt = guestlist.indexOf(guestHowCantMakeIt);
// console.log(indexOfguestHowCantMakeIt)
if (indexOfguestHowCantMakeIt !== -1) {
    guestlist[indexOfguestHowCantMakeIt] = newGuest;
}
// console.log(guestlist[1])
// step 3. Print a second step of invitation message.
console.log("second step of invitation message");
guestlist.forEach((guest) => {
    console.log('Dear $ {guest}, you are invited to dinner');
});
