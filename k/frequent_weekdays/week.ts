interface IWeekMap {
  [key: string]: number
}


export function leapYear(year: number) {
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

export function getMax(object : IWeekMap) {
  return Object.keys(object).filter(x => {
       return object[x] == Math.max.apply(null, Object.values(object));
  })
};

export function mostFrequentDays(year: number): any {
const weekdaysMap : IWeekMap = {'Monday': 0, 'Tuesday': 0,'Wednesday':0, 'Thursday':0, 'Friday':0 , 'Saturday':0, 'Sunday':0}
  const firstDay = new Date(`January, 1, ${year} 00:00:01`).getDay() - 1;
  const leapValue = leapYear(year) ? 0 : 1
  for (let index = firstDay; index <= 365 + firstDay - leapValue; index++) {
    const nameOfDay = Object.keys(weekdaysMap)[(index%7 + 7) % 7]
    weekdaysMap[nameOfDay]++
  }
  const sorted = getMax(weekdaysMap)
  return sorted;
}


console.log(mostFrequentDays(2185))
console.log(mostFrequentDays(2016))
console.log(mostFrequentDays(1986))
console.log(mostFrequentDays(1968))

// [ 'Saturday' ]
// [ 'Friday', 'Saturday' ]
// [ 'Wednesday' ]
// [ 'Monday', 'Tuesday' ]
