"use strict";
const colorMessages = (color) => {
    if (color === "green") {
        console.log("Congrats! you earned 5 points!");
    }
};
colorMessages("green");
colorMessages("red");
const colorMessagesWithIfElse = (color) => {
    color === "green"
        ? console.log("Congrats! you earned 5 points!")
        : console.log("Congrats! you earned 10 points!");
};
colorMessagesWithIfElse("green");
colorMessagesWithIfElse("red");
const colorMessageChain = (color) => {
    color === "green"
        ? console.log("Congrats! you earned 5 points!")
        : color === "yellow"
            ? console.log("Congrats! you earned 10 points!")
            : color === "red" && console.log("Congrats! you earned 15 points!");
};
colorMessageChain("green");
colorMessageChain("red");
colorMessageChain("yellow");
