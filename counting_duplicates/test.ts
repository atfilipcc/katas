export function duplicateCount(text: string): number{
  let duplicates : string[] = [];
  let items: string[] = []
  for (let i = 0; i < text.length; i++) {
    const item = text[i].toLowerCase();
    if (items.indexOf(item) > -1 && duplicates.indexOf(item) === -1) {
      items = [...items, item];
      duplicates = [...duplicates, item]
    } else {
      items = [...items, item];
    }
  }
  return duplicates.length;
}

console.log(duplicateCount('Indivisibility'))
