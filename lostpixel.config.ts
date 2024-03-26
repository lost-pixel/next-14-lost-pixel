import { CustomProjectConfig } from "lost-pixel";

export const config: CustomProjectConfig = {
  pageShots: {
    pages: [],
    pagesJsonUrl: "./lost-pixel-pages.json",
    baseUrl: "http://172.17.0.1:3000",
    breakpoints: [640, 1024],
  },
  lostPixelProjectId: "clu8akz1i7hxri60exxc8mmoc",
  apiKey: process.env.LOST_PIXEL_API_KEY,
};
