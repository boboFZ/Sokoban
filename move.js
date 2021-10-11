import { map, correct } from "./map.js";
import { render } from "./render.js";
import { isFinish } from "./finish.js";
document.onkeydown = (e) => {
  move(e.key);
};
export const finishPage = document.getElementsByClassName("background")[0];
const manPosition = () => {
  for (let row = 0; row < map.length; row++) {
    for (let col = 0; col < map[0].length; col++) {
      if (map[row][col] === 1) {
        return {
          row,
          col,
        };
      }
    }
  }
};

function move(direction) {
  const p1 = manPosition();
  if (canMove(p1.row, p1.col, direction)) {
    render();
    if (isFinish()) {
      finishPage.style.display = "block";
    }
  }
}

function canMove(row, col, direction) {
  switch (direction) {
    case "ArrowUp":
      if (map[row - 1][col] === 2) {
        return false;
      } else if (map[row - 1][col] === 0) {
        enchangeNext({ row, col }, { row: row - 1, col });
        return true;
      } else if (map[row - 1][col] === 3) {
        if (map[row - 2][col] === 0 && !isFixed(row - 1, col)) {
          enchangeNextAndNext(
            { row, col },
            { row: row - 1, col },
            { row: row - 2, col }
          );
          return true;
        } else {
          return false;
        }
      }
    case "ArrowDown":
      if (map[row + 1][col] === 2) {
        return false;
      } else if (map[row + 1][col] === 0) {
        enchangeNext({ row, col }, { row: row + 1, col });
        return true;
      } else if (map[row + 1][col] === 3) {
        if (map[row + 2][col] === 0 && !isFixed(row + 1, col)) {
          enchangeNextAndNext(
            { row, col },
            { row: row + 1, col },
            { row: row + 2, col }
          );
          return true;
        } else {
          return false;
        }
      }
    case "ArrowLeft":
      if (map[row][col - 1] === 2) {
        return false;
      } else if (map[row][col - 1] === 0) {
        enchangeNext({ row, col }, { row, col: col - 1 });
        return true;
      } else if (map[row][col - 1] === 3) {
        if (map[row][col - 2] === 0 && !isFixed(row, col - 1)) {
          enchangeNextAndNext(
            { row, col },
            { row, col: col - 1 },
            { row, col: col - 2 }
          );
          return true;
        } else {
          return false;
        }
      }
    case "ArrowRight":
      if (map[row][col + 1] === 2) {
        return false;
      } else if (map[row][col + 1] === 0) {
        enchangeNext({ row, col }, { row, col: col + 1 });
        return true;
      } else if (map[row][col + 1] === 3) {
        if (map[row][col + 2] === 0 && !isFixed(row, col + 1)) {
          enchangeNextAndNext(
            { row, col },
            { row, col: col + 1 },
            { row, col: col + 2 }
          );
          return true;
        } else {
          return false;
        }
      }
    default:
      return false;
  }
}

function enchangeNext(p1, p2) {
  const temp = map[p1.row][p1.col];
  map[p1.row][p1.col] = map[p2.row][p2.col];
  map[p2.row][p2.col] = temp;
}

function enchangeNextAndNext(p1, p2, p3) {
  enchangeNext(p2, p3);
  enchangeNext(p1, p2);
}

function isFixed(row, col) {
  return (
    correct.find((item) => item.row === row && item.col === col)?.fixed === true
  );
}
