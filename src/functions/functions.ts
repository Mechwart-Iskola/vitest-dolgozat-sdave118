
//faktoriálist számol, ellenőrzi, hogy a bemenet negatív szám-e
export function factorial(n: number): number {
  if (n < 0) throw new Error("Factorial is not defined for negative numbers");
  return n === 0 ? 1 : n * factorial(n - 1);
}

//Egy adott mondatból megkeresi a leghosszabb szót, üres stringet add vissza ha érvénytelen
export function findLongestWord(sentence: string): string {
  const words = sentence.split(/\s+/).filter(word => word.length > 0);
  if (words.length === 0) return "";
  return words.reduce((longest, current) => current.length > longest.length ? current : longest, "");
}

//visszaadja a magánhangzók számát
export function countVowels(input: string): number {
  const vowels = input.match(/[aeiou]/gi);
  return vowels ? vowels.length : 0;
}

// ellenőrzi, hogy két objektum tartalmazza-e ugyanazokat a kulcs-érték párokat.
export function compareObjects(obj1: Record<string, any>, obj2: Record<string, any>): boolean {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  return keys1.every((key) => obj2.hasOwnProperty(key) && obj1[key] === obj2[key]);
}


// Ellenőrzi, hogy egy objektum minden kulcsa megtalálható-e egy másik objektumban ugyanazzal az értékkel.
//isSubset({ a: 1, b: 2 }, { a: 1, b: 2, c: 3 });  true
//isSubset({ a: 1, d: 4 }, { a: 1, b: 2, c: 3 });  false
export function isSubset(obj1: Record<string, any>, obj2: Record<string, any>): boolean {
  return Object.keys(obj1).every((key) => obj2.hasOwnProperty(key) && obj1[key] === obj2[key]);
}



// Két tömb közös objektumait adja vissza (kulcs-érték alapján azonos objektumokat).
//findCommonObjects(
//  [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }],
//  [{ id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' }]
//  );
// [{ id: 2, name: 'Bob' }] 
export function findCommonObjects(arr1: Record<string, any>[], arr2: Record<string, any>[]): Record<string, any>[] {
  return arr1.filter((obj1) => arr2.some((obj2) => compareObjects(obj1, obj2)));
}