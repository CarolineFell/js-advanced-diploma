export function calcTileType(index, boardSize) {
  const topLeft = 0; // begins with 0
  const topRight = boardSize - 1; // 4 - 1 = 3
  const bottomLeft = boardSize * (boardSize - 1); // 4 * (4 - 1) = 12
  const bottomRight = boardSize ** 2 - 1; // 4 ** 2 - 1 = 15

  // boardSize = 4 --> (4x4)
  // 0  1  2  3 
  // 4  5  6  7
  // 8  9  10 11
  // 12 13 14 15

  if (index === topLeft) {
    return 'top-left';
  } else if (index === topRight) {
    return 'top-right';
  } else if (index === bottomLeft) {
    return 'bottom-left';
  } else if (index === bottomRight) {
    return 'bottom-right';
  } else if (index > topLeft && index < topRight) { // 1 || 2
    return 'top';
  } else if (index > bottomLeft && index < bottomRight) { // 13 || 14
    return 'bottom';
  } else if (index % boardSize === 0) { // 4 % 4 === 0 || 8 % 4 === 0
    return 'left';
  } else if ((index + 1) % boardSize === 0) { // (7 + 1) % 4 === 0 || (11 + 1) % 4 === 0
    return 'right';
  } else { // 5 || 6 || 9 || 10
    return 'center';
  }
}

export function calcHealthLevel(health) {
  if (health < 15) {
    return 'critical';
  }

  if (health < 50) {
    return 'normal';
  }

  return 'high';
}