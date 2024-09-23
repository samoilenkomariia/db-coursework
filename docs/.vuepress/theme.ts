import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://vuepress-theme-hope-docs-demo.netlify.app",

  iconAssets: "fontawesome-with-brands",

  editLink: false,
  // Замінити на назву свого репозиторія
  repo: "samoilenkomariia/db-coursework",

  docsDir: "docs",
  // navbar
  navbar,

  // sidebar
  sidebar,

  // Підставити рік та Ваше імʼя
  footer: "ECL 2.0 Licensed | Copyright © 2024 Mariia Samoilenko ",

  displayFooter: true,

  plugins: 
  {
  
    // All features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
    },
  },
});
