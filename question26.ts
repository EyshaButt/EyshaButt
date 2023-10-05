const color_Message = (color: string) => {
    if (color === "green") {
      console.log("Congrats! you earned 5 points!");
    }
  };
  color_Message("green");
  color_Message("red");
  
  const colorMessageWithIfElse = (color: string) => {
    color === "green"
      ? console.log("Congrats! you earned 5 points!")
      : console.log("Congrats! you earned 10 points!");
  };
  colorMessageWithIfElse("green");
  colorMessageWithIfElse("red");