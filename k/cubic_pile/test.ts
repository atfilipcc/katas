
export function findNb(m: number): number {
  let n = 0;
  while (m > 0) {
    console.log(m)
    m -= Math.pow(n++, 3)
  }
  if (m === 0) return n
  return -1;
}

console.log(findNb(4183059834009))
