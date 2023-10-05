// Step 1 arrays

const current_users: string[] = ["Eysha", "Amna", "Noor", "Hina", "Zara", "Sara"] 

const new_users: string[] = ["Era", "amna", "asma", "zara", "ali"]

// Step 2 function

function checkUserNames(current_users: string[], new_users: string[]) :void

{
    const lowercasedCurrentUsers = current_users.map(user => user.toLowerCase())
for (const newUser of new_users) {
    const lowercasedNewUser = newUser.toLowerCase();
    if (lowercasedCurrentUsers.includes(lowercasedNewUser)){
        console.log(`Username "${newUser}" is alreagy taken. Please enter a new username`)
    } else {
        console.log(`Username "${newUser}" is available.`)
    }
}

// console.log(current_users)
// Test the function

checkUserNames(current_users, new_users)



}






