const maximum69Number = (num) => {
  let string = num.toString();
  for (let index = 0; index < string.length; index++) {
    const element = string[index];
    if (element === "6") {
      string = string.replace("6", "9");
      break;
    }
  }
  return parseInt(string);
};