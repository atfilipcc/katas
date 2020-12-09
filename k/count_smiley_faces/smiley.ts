//return the total number of smiling faces in the array
export function countSmileys(arr: string[]) {
let smileys = 0;
const valid = {
  eyes: [';', ':'],
  nose: ['-', '~'],
  smile: [')', 'D'],
}
for (let i = 0; i < arr.length; i++) {
  const item = arr[i];
  if (valid.eyes.includes(item[0])) {
    if (valid.smile.includes(item[1])) {
      smileys++;
      } else if (valid.nose.includes(item[1])) {
          if (valid.smile.includes(item[2])) {
            smileys++
        }
      }
    }
  }
  return smileys;
}

console.log(countSmileys([':D',':~)',';~D',':)']));
