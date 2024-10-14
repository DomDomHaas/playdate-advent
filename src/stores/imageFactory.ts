import { addImages, randomInt, sortASC } from './imageUtils';

export const getScreenshots = async (year: string) => {
  let screenShotImports;

  if (year === '2023') {
    screenShotImports = await import('./iconFactory2023');
  }

  if (year === '2024') {
    screenShotImports = await import('./iconFactory2024');
  }

  return screenShotImports?.getScreenshots();
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
