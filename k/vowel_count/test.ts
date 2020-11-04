export class Kata {
  static getCount(str: string) {
    const vowels : string[] = ['a', 'e', 'i', 'o', 'u']
    let counter : number = 0;
    for(let i : number = 0; i < str.length;i++) {
      if (vowels.indexOf(str[i]) > -1) {
        counter++
      }
    }
    return counter;
  }
}

const kata = Kata;
console.log(kata.getCount('you had me at hello'));
