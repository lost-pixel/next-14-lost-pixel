import { CustomProjectConfig } from "lost-pixel";

export const config: CustomProjectConfig = {
  pageShots: {
    pages: [{ path: "/", name: "landing" }],
    baseUrl: "http://172.17.0.1:3000",
  },
  lostPixelProjectId: "clu8akz1i7hxri60exxc8mmoc",
  apiKey: process.env.LOST_PIXEL_API_KEY,
};
