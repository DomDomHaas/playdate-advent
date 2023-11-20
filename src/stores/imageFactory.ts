import seedrandom from 'seedrandom';

const addImages = (array: string[], gifGlob: any, pngGlob: any|null) => {
  let entries: [string, object][] = Object.entries(gifGlob);
  const gifUrls: string[] = entries.map(([key, value]) => value.default);

  let pngUrls: string[] = [];

  if (pngGlob) {
    entries = Object.entries(pngGlob);
    pngUrls = entries.map(([key, value]) => value.default);
  }

  array.push([...gifUrls, ...pngUrls]);
};

export const getScreenshots = () => {

  const screenshots: any[] = [];
  let gifGlob, pngGlob;

  gifGlob = import.meta.glob('@/assets/1/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/1/*.png', { eager: true });
  addImages(screenshots, gifGlob, pngGlob);

  gifGlob = import.meta.glob('@/assets/2/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2/*.png', { eager: true });
  addImages(screenshots, gifGlob, pngGlob);

  gifGlob = import.meta.glob('@/assets/3/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/3/*.png', { eager: true });
  addImages(screenshots, gifGlob, pngGlob);

  gifGlob = import.meta.glob('@/assets/4/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/4/*.png', { eager: true });
  addImages(screenshots, gifGlob, pngGlob);

  gifGlob = import.meta.glob('@/assets/5/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/5/*.png', { eager: true });
  addImages(screenshots, gifGlob, pngGlob);

  gifGlob = import.meta.glob('@/assets/6/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/6/*.png', { eager: true });
  addImages(screenshots, gifGlob, pngGlob);

  gifGlob = import.meta.glob('@/assets/7/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/7/*.png', { eager: true });
  addImages(screenshots, gifGlob, pngGlob);

  gifGlob = import.meta.glob('@/assets/8/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/8/*.png', { eager: true });
  addImages(screenshots, gifGlob, pngGlob);

  gifGlob = import.meta.glob('@/assets/9/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/9/*.png', { eager: true });
  addImages(screenshots, gifGlob, pngGlob);

  gifGlob = import.meta.glob('@/assets/10/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/10/*.png', { eager: true });
  addImages(screenshots, gifGlob, pngGlob);

  gifGlob = import.meta.glob('@/assets/11/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/11/*.png', { eager: true });
  addImages(screenshots, gifGlob, pngGlob);

  gifGlob = import.meta.glob('@/assets/12/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/12/*.png', { eager: true });
  addImages(screenshots, gifGlob, pngGlob);

  gifGlob = import.meta.glob('@/assets/13/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/13/*.png', { eager: true });
  addImages(screenshots, gifGlob, pngGlob);

  gifGlob = import.meta.glob('@/assets/14/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/14/*.png', { eager: true });
  addImages(screenshots, gifGlob, pngGlob);

  gifGlob = import.meta.glob('@/assets/15/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/15/*.png', { eager: true });
  addImages(screenshots, gifGlob, pngGlob);

  gifGlob = import.meta.glob('@/assets/16/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/16/*.png', { eager: true });
  addImages(screenshots, gifGlob, pngGlob);

  gifGlob = import.meta.glob('@/assets/17/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/17/*.png', { eager: true });
  addImages(screenshots, gifGlob, pngGlob);

  gifGlob = import.meta.glob('@/assets/18/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/18/*.png', { eager: true });
  addImages(screenshots, gifGlob, pngGlob);

  gifGlob = import.meta.glob('@/assets/19/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/19/*.png', { eager: true });
  addImages(screenshots, gifGlob, pngGlob);

  gifGlob = import.meta.glob('@/assets/20/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/20*.png', { eager: true });
  addImages(screenshots, gifGlob, pngGlob);

  gifGlob = import.meta.glob('@/assets/21/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/21/*.png', { eager: true });
  addImages(screenshots, gifGlob, pngGlob);

  gifGlob = import.meta.glob('@/assets/22/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/22/*.png', { eager: true });
  addImages(screenshots, gifGlob, pngGlob);

  gifGlob = import.meta.glob('@/assets/23/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/23/*.png', { eager: true });
  addImages(screenshots, gifGlob, pngGlob);

  gifGlob = import.meta.glob('@/assets/24/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/24/*.png', { eager: true });
  addImages(screenshots, gifGlob, pngGlob);

/*
  gifGlob = import.meta.glob('@/assets/25/!*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/25/!*.png', { eager: true });
  addImages(screenshots, gifGlob, pngGlob);
*/

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

export const getGiftIndecies = (ammount: number, max: number) => {
  const indecies = [];

  for (let i = 0; i < ammount; i++) {
    const randomIndex = randomInt(0, max);
    indecies.push(randomIndex);
  }

  return indecies;
}

export const getGifts = () => {
  const gifts: any[] = [];

  const pngGlob = import.meta.glob('@/assets/calendar/*.png', { eager: true });
  addImages(gifts, pngGlob, null);

  return gifts[0];
}

export const getCards = () => {
  const cards: any[] = [];

  const pngGlob = import.meta.glob('@/assets/cards/*.png', { eager: true });
  addImages(cards, pngGlob, null);

  return cards[0];
}

export const getIcons = () => {
  const icons: any[] = [];

  const pngGlob = import.meta.glob('@/assets/icons/*.png', { eager: true });
  addImages(icons, pngGlob, null);

  return icons[0];
}
