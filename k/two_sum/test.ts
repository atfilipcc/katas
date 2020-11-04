function twoSum(numbers : number[], target : number) {
  let potentialNumber = [];
  for (let i = 0; i < numbers.length; i++) {
    potentialNumber = [numbers[i], i];
    for (let j = i+1; j < numbers.length; j++) {
      if (potentialNumber[0] + numbers[j] === target) {
        return [potentialNumber[1], j];
      }
    }
  }
}
