import { addImages, randomInt, sortASC } from './imageUtils';

export const getScreenshots = async (year: string) => {
  const screenShotImports = await import(`./screenshotFactory${year}`);
  return screenShotImports?.getScreenshots();
}

export const getIcons = async (year: string) => {
  const iconsImports = await import(`./iconFactory${year}`);
  return iconsImports?.getIcons();
}

export const getCards = async (year: string) => {
  const cardImports = await import(`./cardFactory${year}`);
  return cardImports?.getCards();
}

export const getGifts = () => {

  const pngGlob = import.meta.glob('@/assets/calendar/*.png', { eager: true });
  const gifts: any[] = addImages(pngGlob, null);

  gifts.sort(sortASC);
/*
  console.log('gifts');
  console.log(gifts);
*/

  return gifts;
}

export const getGiftIndecies = (amount: number, max: number) => {
  const indecies = [];

  for (let i = 0; i < amount; i++) {
    const randomIndex = randomInt(0, max);
    indecies.push(randomIndex);
  }

  return indecies;
}
