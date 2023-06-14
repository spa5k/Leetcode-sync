var isRobotBounded = function (instructions) {
  let x = 0;
  let y = 0;
  let dx = 0;
  let dy = 1;

  for (let direction of instructions) {
    if (direction === "R") {
      let temp = dx;
      dx = dy;
      dy = -temp;
    } else if (direction === "L") {
      let temp = dy;
      dy = dx;
      dx = -temp;
    } else {
      x = x + dx;
      y = y + dy;
    }
  }
  return (!x && !y) || dy !== 1;
};