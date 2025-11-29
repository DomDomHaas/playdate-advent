import { addImages, randomInt, sortASC } from './imageUtils';

export const getScreenshots = async (year: string) => {

  let screenShotImports;

  if (year === '2023') {
    screenShotImports = await import('./screenshotFactory2023');
  }

  if (year === '2024') {
    screenShotImports = await import('./screenshotFactory2024');
  }

  if (year === '2025') {
    screenShotImports = await import('./screenshotFactory2025');
  }

  return screenShotImports?.getScreenshots();
}

export const getIcons = async (year: string) => {
  let iconsImports;

  if (year === '2023') {
    iconsImports = await import('./iconFactory2023');
  }

  if (year === '2024') {
    iconsImports = await import('./iconFactory2024');
  }

  if (year === '2025') {
    iconsImports = await import('./iconFactory2025');
  }

  return iconsImports?.getIcons();
}

export const getCards = async (year: string) => {
  let cardImports;

  if (year === '2023') {
    cardImports = await import('./cardFactory2023');
  }

  if (year === '2024') {
    cardImports = await import('./cardFactory2024');
  }

  if (year === '2025') {
    cardImports = await import('./cardFactory2025');
  }

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
