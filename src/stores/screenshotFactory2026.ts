import { addImages } from "./imageUtils";

export const getScreenshots = (): string[] => {
  const screenshots: any[] = [];
  let gifGlob, pngGlob;

  gifGlob = import.meta.glob("@/assets/2026/1/*.gif", { eager: true });
  pngGlob = import.meta.glob("@/assets/2026/1/*.png", { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob("@/assets/2026/2/*.gif", { eager: true });
  pngGlob = import.meta.glob("@/assets/2026/2/*.png", { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob("@/assets/2026/3/*.gif", { eager: true });
  pngGlob = import.meta.glob("@/assets/2026/3/*.png", { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob("@/assets/2026/5/*.gif", { eager: true });
  pngGlob = import.meta.glob("@/assets/2026/5/*.png", { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob("@/assets/2026/6/*.gif", { eager: true });
  pngGlob = import.meta.glob("@/assets/2026/6/*.png", { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob("@/assets/2026/9/*.gif", { eager: true });
  pngGlob = import.meta.glob("@/assets/2026/9/*.png", { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob("@/assets/2026/11/*.gif", { eager: true });
  pngGlob = import.meta.glob("@/assets/2026/11/*.png", { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob("@/assets/2026/12/*.gif", { eager: true });
  pngGlob = import.meta.glob("@/assets/2026/12/*.png", { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob("@/assets/2026/15/*.gif", { eager: true });
  pngGlob = import.meta.glob("@/assets/2026/15/*.png", { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob("@/assets/2026/17/*.gif", { eager: true });
  pngGlob = import.meta.glob("@/assets/2026/17/*.png", { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob("@/assets/2026/19/*.gif", { eager: true });
  pngGlob = import.meta.glob("@/assets/2026/19/*.png", { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob("@/assets/2026/20/*.gif", { eager: true });
  pngGlob = import.meta.glob("@/assets/2026/20*.png", { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob("@/assets/2026/21/*.gif", { eager: true });
  pngGlob = import.meta.glob("@/assets/2026/21/*.png", { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob("@/assets/2026/22/*.gif", { eager: true });
  pngGlob = import.meta.glob("@/assets/2026/22/*.png", { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob("@/assets/2026/23/*.gif", { eager: true });
  pngGlob = import.meta.glob("@/assets/2026/23/*.png", { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob("@/assets/2026/24/*.gif", { eager: true });
  pngGlob = import.meta.glob("@/assets/2026/24/*.png", { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  gifGlob = import.meta.glob("@/assets/2026/25/*.gif", { eager: true });
  pngGlob = import.meta.glob("@/assets/2026/25/*.png", { eager: true });
  screenshots.push([...addImages(gifGlob, pngGlob)]);

  /*
  console.log('screenshots');
  console.log(screenshots);
*/
  return screenshots;
};
