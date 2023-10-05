const colorMessages = (color: string) => {
    if (color === "green") {
      console.log("Congrats! you earned 5 points!");
    }
  };
  colorMessages("green");
  colorMessages("red");
  
  const colorMessagesWithIfElse = (color: string) => {
    color === "green"
      ? console.log("Congrats! you earned 5 points!")
      : console.log("Congrats! you earned 10 points!");
  };
  colorMessagesWithIfElse("green");
  colorMessagesWithIfElse("red");
  
  const colorMessageChain = (color: string) => {
    color === "green"
      ? console.log("Congrats! you earned 5 points!")
      : color === "yellow"
      ? console.log("Congrats! you earned 10 points!")
      : color === "red" && console.log("Congrats! you earned 15 points!");
  };
  colorMessageChain("green");
  colorMessageChain("red");
  colorMessageChain("yellow");