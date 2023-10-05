// List of animals with a common characteristic

const animals: string[] = ['cat', 'dog', 'sheep']


// Printing the names of each animal using a for of loop

console.log("List of animals")
for (const animal of animals){
    console.log(animal)
}

// Print a statment about a each animal
console.log("\nStatment about a each animal")
 for (const animal of animals) {
    if (animal === 'dog')
    {
        console.log(`A ${animal} is a great pet.`)
    }
    else if (animal === 'cat') {

        console.log(`A ${animal} would be a good companion at home`)
    }
    else if (animal === 'sheep')
    {
        console.log(`A ${animal} is an adorable pet that also give us milk`)
    }
 }

// Common charactristic
console.log("\nWhat these animals have in common:")
console.log("Any of these animals could be a great pet!")
