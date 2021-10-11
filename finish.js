import { map } from "./map.js";
import { isCorrect } from "./render.js";

export const isFinish = () => {
  for (let row = 0; row < map.length; row++) {
    for (let col = 0; col < map[0].length; col++) {
      if (map[row][col] === 3 && !isCorrect(row, col)) {
        return false;
      }
    }
  }
  return true;
};

document.getElementsByClassName("restart")[0].onclick = () => {
  location.reload();
};
