const opposites = {
  "NORTH": "SOUTH",
  "SOUTH": "NORTH",
  "WEST": "EAST",
  "EAST": "WEST"
}

export function dirReduc(arr: string[]): string[] {
  let i : number = arr.length - 1;
  for (i; i >= 0; i--) {
    for (let j = i - 1; j >= 1; j--) {
      if (opposites[arr[i]] == arr[j]) {
        let jIndex = arr.indexOf(arr[j]);
        let iIndex = arr.indexOf(arr[i])
        if (jIndex >= 0 && iIndex >= 0) {
          arr.splice(arr.indexOf(arr[i], 1))
          arr.splice(arr.indexOf(arr[j], 1))
          }
        }
      }
    }
    return arr;
}

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]))

// For hver retning i array
// Loop gjennom de resterende retningene for å se om det er en motsatt

