export const fakeBin = (x:string):string => {
  let finalString = '';
  for (let i = 0; i < x.length; i++) {
    if (parseInt(x[i], 0) >= 5) {
      finalString += '1';
    } else {
      finalString += '0';
    }
  }
  return finalString;
};

console.log(fakeBin('54589384938'));
