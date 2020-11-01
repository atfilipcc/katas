export function meeting(s: string): string {
  const movedNames = s?.split(';');
  for (let i = 0; i < movedNames.length; i++) {
    const element = movedNames[i];
    const first = element.substr(0, element.indexOf(':')).toUpperCase();
    const last = element.substr(element.indexOf(':') +1).toUpperCase();
    movedNames[i] = `(${last}, ${first})`;
    }
  return movedNames.sort((a, b) : number => a.localeCompare(b)).join('')
}

console.log(meeting('Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn'))
