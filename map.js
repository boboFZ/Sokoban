export const map = [
  [0, 0, 2, 2, 2, 2, 2, 0, 0],
  [0, 0, 2, 0, 1, 0, 2, 0, 0],
  [0, 0, 2, 0, 3, 0, 2, 0, 0],
  [2, 2, 2, 0, 0, 0, 2, 2, 2],
  [2, 0, 0, 0, 3, 0, 0, 0, 2],
  [2, 0, 3, 3, 3, 3, 3, 0, 2],
  [2, 0, 0, 0, 3, 0, 0, 0, 2],
  [2, 2, 0, 3, 3, 3, 0, 2, 2],
  [0, 2, 0, 0, 0, 0, 0, 2, 0],
  [0, 2, 0, 0, 3, 0, 0, 2, 0],
  [0, 2, 0, 0, 0, 0, 0, 2, 0],
  [0, 2, 2, 2, 2, 2, 2, 2, 0],
];

export const correct = [
  { row: 3, col: 4 },
  { row: 4, col: 4, fixed: true },
  { row: 5, col: 2, fixed: true },
  { row: 5, col: 3, fixed: true },
  { row: 5, col: 4, fixed: true },
  { row: 5, col: 5, fixed: true },
  { row: 5, col: 6, fixed: true },
  { row: 6, col: 4, fixed: true },
  { row: 7, col: 4, fixed: true },
  { row: 8, col: 4 },
  { row: 9, col: 4, fixed: true },
  { row: 10, col: 4 },
];

export const mapHeight = map.length * 50;
export const mapWidth = map[0].length * 50;
