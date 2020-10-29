const countOccurrences = (arr : string[], val : string) : number => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

export function duplicateEncode(word: string) : string {
  let finalString : string = '';
  const wordArr = word.toLowerCase().split('');
  for (let i = 0; i < word.length; i++) {
    countOccurrences(wordArr, word[i].toLowerCase()) > 1 ? finalString += ')' : finalString += '('
    }
    return finalString;
}

console.log(duplicateEncode('recede'))
