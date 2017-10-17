import Config from "../app/config";

export const environment = {
    production: true,

    // read from config.ts
    pageTitle: Config.pageTitle,
    homePageName: Config.homePageName,
    staticSharerUrl: Config.staticSharerUrl,
    apiUrl: Config.apiUrl,
    menuName: Config.menuName,
    facebookUrl: Config.facebookUrl,
    instagramUrl: Config.instagramUrl
};
