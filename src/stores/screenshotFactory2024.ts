import { addImages } from './imageUtils';


export const getScreenshots = () : string[] => {

  const screenshots: any[] = [];
  let gifGlob, pngGlob;

  gifGlob = import.meta.glob('@/assets/2023/1/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2023/1/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2023/2/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2023/2/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2023/3/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2023/3/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2023/4/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2023/4/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2023/5/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2023/5/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2023/6/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2023/6/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2023/7/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2023/7/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2023/8/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2023/8/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2023/9/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2023/9/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2023/10/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2023/10/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2023/11/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2023/11/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2023/12/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2023/12/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2023/13/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2023/13/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2023/14/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2023/14/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2023/15/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2023/15/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2023/16/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2023/16/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2023/17/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2023/17/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2023/18/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2023/18/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2023/19/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2023/19/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2023/20/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2023/20*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2023/21/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2023/21/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2023/22/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2023/22/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2023/23/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2023/23/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2023/24/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2023/24/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob('@/assets/2023/25/*.gif', { eager: true });
  pngGlob = import.meta.glob('@/assets/2023/25/*.png', { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

/*
  console.log('screenshots');
  console.log(screenshots);
*/
  return screenshots;
}

