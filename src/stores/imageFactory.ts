const addImages = (array: string[], gifGlob: any, pngGlob: any) => {
  let entries = Object.entries(gifGlob);
  const gifUrls = entries.map(([key, value]) => value.default);

  entries = Object.entries(pngGlob);
  const pngUrls = entries.map(([key, value]) => value.default);

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
