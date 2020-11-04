const dataReverse = (data : string[]) : number[] => {
  const  matches : RegExpMatchArray = data.join('').match(/[0-9]{8}/g)
  return matches ? matches.reverse().join('').split('').map(x => parseInt(x, 10)) : [];
}
