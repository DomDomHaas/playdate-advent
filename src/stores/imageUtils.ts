import seedrandom from 'seedrandom';

export const addImages = (gifGlob: any, pngGlob: any|null) => {
  let array: string[] = [];
  let entries: [string, object][] = Object.entries(gifGlob);
  const gifUrls: string[] = entries.map(([key, value]) => value.default);

  let pngUrls: string[] = [];

  if (pngGlob) {
    entries = Object.entries(pngGlob);
    pngUrls = entries.map(([key, value]) => value.default);
  }

  array = [...gifUrls, ...pngUrls];

  array.sort(sortASC);

  return array;
};

const prng = seedrandom('playdate-advent');

export function randomInt(min: number, max: number) {
  const random = prng();
  const r = Math.floor(random * 10);

  if (r > max) {
    return max;
  }
  if (r < min) {
    return min;
  }

  return r;
}

export const sortASC = (a: string , b: string) => {
  const aNumber = getFileNumber(a);
  const bNumber = getFileNumber(b);

  return aNumber < bNumber ? -1 : 1;
}

export const sortDESC = (a: string , b: string) => {
  const aNumber = getFileNumber(a);
  const bNumber = getFileNumber(b);

  return aNumber < bNumber ? 1 : -1;
}

const getFileNumber = (filePath: string) => {
  const splits = filePath.split('=');
  const fileNameWitHash = splits[splits.length - 1];
  const numberStr = fileNameWitHash.split('-')[0];
  // const numberStr = fileName.split('.')[0];

  return Number.parseInt(numberStr, 10);
}


