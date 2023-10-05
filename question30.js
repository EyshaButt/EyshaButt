"use strict";
let user_names = ["Arsi", "Jahan", "Zaib", "Admin", "Iqra"];
user_names.map((user) => {
    user == "Admin"
        ? console.log("Hello admin, would you like to see a status report?")
        : console.log("Hi " + user + ", thank you for logging in again");
});
