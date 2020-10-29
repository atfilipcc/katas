export function sumArray(array:number[]) : number {
  if (array !== null) {
    return array.length > 2 ? array.reduce((a, b) => a + b) - Math.min(...array) - Math.max(...array) : 0;
  } else return 0;
}

console.log(sumArray([]));
