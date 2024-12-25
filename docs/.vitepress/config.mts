import { default as core } from "../shuttle-core/sidebar";
import { default as esb } from "../shuttle-esb/sidebar";
import { default as recall } from "../shuttle-recall/sidebar";
import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Shuttle",
  description: "Shuttle Documentation (pre-v20)",
  base: "/pendel-pre-v20",
  lang: "en-US",
  head: [["link", { rel: "shortcut icon", href: "/favicon.ico" }]],
  themeConfig: {
    siteTitle: "Shuttle (pre-v20)",
    search: {
      provider: "local"
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/Shuttle/pendel-pre-v20" },
      { icon: "discord", link: "https://discord.gg/J2suHcy2x8" },
    ],
    logo: "/logo.svg",
    footer: {
      copyright: `Copyright © 2013-${new Date().getFullYear()} Eben Roux`,
    },
    nav: [
      {
        text: "Latest Documentation",
        link: "https://pendel.co.za",
      },
      {
        text: "Core",
        activeMatch: `^/shuttle-core/`,
        link: "/shuttle-core/index",
      },
      {
        text: "Service Bus",
        activeMatch: `^/shuttle-esb/`,
        link: "/shuttle-esb/index",
      },
      {
        text: "Event Sourcing",
        activeMatch: `^/shuttle-recall/`,
        link: "/shuttle-recall/index",
      },
    ],
    sidebar: {
      ...esb,
      ...core,
      ...recall,
    },
  },
});