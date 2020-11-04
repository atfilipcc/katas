function solution(str : string) : string {
  let newString : string = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      newString += ' ';
    }
    newString += str[i]
  }
  return newString;
}
