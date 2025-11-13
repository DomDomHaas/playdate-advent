import { addImages } from './imageUtils';


export const getScreenshots = () : string[] => {

  const screenshots: any[] = [];
  let gifGlob, pngGlob;

  gifGlob = import.meta.glob('@/assets/2025/1/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2025/1/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2025/2/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2025/2/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2025/3/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2025/3/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2025/4/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2025/4/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2025/5/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2025/5/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2025/6/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2025/6/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2025/7/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2025/7/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2025/8/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2025/8/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2025/9/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2025/9/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2025/10/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2025/10/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2025/11/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2025/11/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2025/12/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2025/12/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2025/13/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2025/13/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2025/14/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2025/14/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2025/15/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2025/15/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2025/16/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2025/16/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2025/17/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2025/17/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2025/18/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2025/18/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2025/19/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2025/19/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2025/20/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2025/20*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2025/21/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2025/21/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2025/22/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2025/22/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2025/23/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2025/23/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2025/24/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2025/24/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2025/25/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2025/25/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

/*
  console.log('screenshots');
  console.log(screenshots);
*/
  return screenshots;
}

