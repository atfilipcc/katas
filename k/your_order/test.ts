export function order(words:string):any{
  const wordsArray = words.split(' ');
  const newArr = wordsArray.sort((a,b) : any => {
    let numA = Number(a.match(/[1-9]/))
    let numB = Number(b.match(/[1-9]/))
    return <number> numA - <number> numB
  })
  return newArr.join(' ');
}

console.log(order('is2 Thi1s T4est 3a'))
