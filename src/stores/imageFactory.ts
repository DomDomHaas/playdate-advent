import seedrandom from 'seedrandom';

const addImages = (gifGlob: any, pngGlob: any|null) => {
  let array: string[] = [];
  let entries: [string, object][] = Object.entries(gifGlob);
  const gifUrls: string[] = entries.map(([key, value]) => value.default);

  let pngUrls: string[] = [];

  if (pngGlob) {
    entries = Object.entries(pngGlob);
    pngUrls = entries.map(([key, value]) => value.default);
  }

  array = [...gifUrls, ...pngUrls];
  return array;
};

export const getScreenshots = () => {

  const screenshots: any[] = [];
  let gifGlob, pngGlob;

  gifGlob = import.meta.glob('@/assets/1/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/1/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/3/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/3/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/4/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/4/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/5/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/5/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/6/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/6/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/7/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/7/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/8/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/8/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/9/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/9/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/10/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/10/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/11/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/11/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/12/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/12/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/13/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/13/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/14/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/14/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/15/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/15/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/16/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/16/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/17/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/17/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/18/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/18/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/19/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/19/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/20/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/20*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/21/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/21/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/22/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/22/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/23/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/23/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/24/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/24/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

/*
  gifGlob = import.meta.glob('@/assets/25/!*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/25/!*.png', { eager: true });
  addImages(screenshots, gifGlob, pngGlob);
*/

  console.log('screenshots');
  console.log(screenshots);
  return screenshots;
}

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

const sortASC = (a: string , b: string) => {
  const aNumber = getFileNumber(a);
  const bNumber = getFileNumber(b);

  return aNumber < bNumber ? -1 : 1;
}

const sortDESC = (a: string , b: string) => {
  const aNumber = getFileNumber(a);
  const bNumber = getFileNumber(b);

  return aNumber < bNumber ? 1 : -1;
}

export const getGiftIndecies = (amount: number, max: number) => {
  const indecies = [];

  for (let i = 0; i < amount; i++) {
    const randomIndex = randomInt(0, max);
    indecies.push(randomIndex);
  }

  return indecies;
}

export const getGifts = () => {

  const pngGlob = import.meta.glob('@/assets/calendar/*.png', { eager: true });
  const gifts: any[] = addImages(pngGlob, null);

  gifts.sort(sortASC);
  console.log('gifts');
  console.log(gifts);

  return gifts;
}

const getFileNumber = (filePath: string) => {
  const splits = filePath.split('=');
  const fileNameWitHash = splits[splits.length - 1];
  const numberStr = fileNameWitHash.split('-')[0];
  // const numberStr = fileName.split('.')[0];

  return Number.parseInt(numberStr, 10);
}

export const getCards = () => {

  const pngGlob = import.meta.glob('@/assets/cards/*', { eager: true });
  const cards: any[] = addImages(pngGlob, null);

  cards.sort(sortASC);

  console.log('sorted cards');
  console.log(cards);

  return cards;
}


export const getIcons = () => {

  const pngGlob = import.meta.glob('@/assets/icons/*', { eager: true });
  const icons: string[] = addImages(pngGlob, null);

  icons.sort(sortASC);

  console.log('sorted icons');
  console.log(icons);

  return icons;
}
