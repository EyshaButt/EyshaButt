// Invite some people to come dinner

let guestlist: Array<string> = [
    "Sahar",
 "Amna",
"Rabia",
]

// step 1. Print the person who can't make it.

let guestHowCantMakeIt: string = "Amna"
console.log('${guestHowCantMakeIt} cant make it to Dinner')

// step 2. Replace the name of guest who cant make it.

let newGuest: string = "Noor"

let indexOfguestHowCantMakeIt: number = guestlist.indexOf(guestHowCantMakeIt)

// console.log(indexOfguestHowCantMakeIt)

if (indexOfguestHowCantMakeIt !== -1)
{
    guestlist[indexOfguestHowCantMakeIt] = newGuest
}

// console.log(guestlist[1])

// step 3. Print a second step of invitation message.

console.log("second step of invitation message")
guestlist.forEach((guest: string)=>

{
    console.log('Dear $ {guest}, you are invited to dinner')
})

