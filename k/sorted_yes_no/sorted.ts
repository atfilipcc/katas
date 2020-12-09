export function isSortedAndHow(array:number[]): string {
  const sortedAsc = [...array].sort((a,b) => a - b);
  const sortedDesc = [...array].sort((a, b) => b - a);
  if (array.every((val, i) => val === sortedAsc[i])) return 'yes, ascending';
  if (array.every((val, i) => val === sortedDesc[i])) return 'yes, descending';
  return 'no';
}

console.log(isSortedAndHow([1, 2, 3]))
console.log(isSortedAndHow([1, 3, 2]))
console.log(isSortedAndHow([3, 2, 1]))
console.log(isSortedAndHow([1, 1, 1]))
