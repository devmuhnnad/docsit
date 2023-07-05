/* 
  This is the configuration file for DocsIt.
*/

/** @type {import('.docsit/types/config').Config} */
const config = {
  title: "Flutter Bond",
  tagline: "The Flutter Framework That Bonds Your App Together",
  favicon: "img/favicon.ico",

  theme: {
    navbar: {
      title: "Flutter Bond",
      logo: {
        alt: "My Site Logo",
        src: "/img/logo.svg",
      },
      items: [
        {
          to: "docs/intro",
          label: "Tutorial",
        },
        {
          to: "https://github.com/onestudio-co/flutter-bond",
          label: "GitHub",
          newTab: true,
        },
      ],
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} Flutter Bond.`,
    },
  },
};

export default config;
