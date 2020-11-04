function arrayDiff(a : number[], b : string) : number[] {
  const ans = a.filter((number) => {
    return !b.includes(number.toString())
  })
  return ans
}
