import { mapHeight, mapWidth, map, correct } from "./map.js";
const wrapper = document.getElementsByClassName("wrapper")[0];
wrapper.style.height = mapHeight + "px";
wrapper.style.width = mapWidth + "px";

render();
export function render() {
  wrapper.innerHTML = "";
  for (let row = 0; row < map.length; row++) {
    for (let col = 0; col < map[0].length; col++) {
      const value = map[row][col];
      const div = document.createElement("div");
      if (value === 0) {
        if (!isCorrect(row, col)) {
          continue;
        } else {
          div.className = "box green";
        }
      } else if (value === 1) {
        div.className = "box man";
      } else if (value === 2) {
        div.className = "box wall";
      } else {
        if (isCorrect(row, col)) {
          div.className = "box box1";
        } else {
          div.className = "box box2";
        }
      }
      div.style.left = col * 50 + "px";
      div.style.top = row * 50 + "px";
      wrapper.appendChild(div);
    }
  }
}

export function isCorrect(row, col) {
  return (
    correct.find((item) => item.row === row && item.col === col) !== undefined
  );
}
