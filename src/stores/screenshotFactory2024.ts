import { addImages } from './imageUtils';


export const getScreenshots = () : string[] => {

  const screenshots: any[] = [];
  let gifGlob, pngGlob;

  gifGlob = import.meta.glob('@/assets/2024/1/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2024/1/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2024/2/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2024/2/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2024/3/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2024/3/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2024/4/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2024/4/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2024/5/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2024/5/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2024/6/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2024/6/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2024/7/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2024/7/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2024/8/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2024/8/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2024/9/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2024/9/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2024/10/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2024/10/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2024/11/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2024/11/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2024/12/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2024/12/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2024/13/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2024/13/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2024/14/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2024/14/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2024/15/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2024/15/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2024/16/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2024/16/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2024/17/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2024/17/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2024/18/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2024/18/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2024/19/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2024/19/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2024/20/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2024/20*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2024/21/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2024/21/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2024/22/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2024/22/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2024/23/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2024/23/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2024/24/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2024/24/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2024/25/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2024/25/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

/*
  console.log('screenshots');
  console.log(screenshots);
*/
  return screenshots;
}

