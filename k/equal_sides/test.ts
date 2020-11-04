export function findEvenIndex(arr: number[]): number {
  for (let i = 0; i <= arr.length; i++) {
    const arrLeft = arr.slice(0, i);
    const arrRight = arr.slice(i + 1, arr.length)
    const sum = arrLeft.reduce((a, b) => a + b, 0) == arrRight.reduce((a, b) => a + b, 0);
    if (sum) {
      return i;
    }
  }
  return -1;
}

console.log(findEvenIndex([8, 0]));
