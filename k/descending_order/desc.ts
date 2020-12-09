export function descendingOrder(n: number) : number {
  return Number(n.toString()
  .split('')
  .map((i) => Number(i))
  .sort((a,b) => b - a)
  .join('')
  )
}

console.log(descendingOrder(993283928));
console.log(descendingOrder(123456789));
console.log(descendingOrder(1201));
