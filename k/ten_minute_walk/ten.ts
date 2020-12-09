export function isValidWalk(walk: string[]) : boolean {
  interface OSignature {
    [key: string]: string
  }

  let arr = [...walk];
  const opposites : OSignature = {
    n: 's',
    s: 'n',
    w: 'e',
    e: 'w',
  }
  if (walk.length !== 10) return false;
  for (let i = arr.length; i >= 0; i--) {
    let item : string = arr[i]
    for (let j = arr.length - 1; j >= 0; j--) {
      if (opposites[item] == arr[j]) {
        arr.splice(i, 1, '0')
        arr.splice(j, 1, '0')
        break;
      }
    }
  }
  if (arr.every((value) => value === '0')) return true;
  return false;
}


console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])) // true
console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','w'])) // false
console.log(isValidWalk(['e','s','e','s','n','w','n','s','n','w'])) //true
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s'])); // false
console.log(isValidWalk(['w'])); // false
