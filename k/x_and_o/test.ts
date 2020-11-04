export function xo (str: string) {
  let oCount : number = 0;
  let xCount : number = 0;
  for (let i = 0; i < str.length; i++) {
    const iValue = str[i].toLowerCase();
    if (iValue === 'x') xCount++;
    if (iValue === 'o') oCount++;
  }
  return oCount === xCount;
}

console.log(xo('xxoOo'))
