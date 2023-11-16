// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "BNB Optimistic Rollup",
  tagline: "opBNB",
  url: "https://docs.bnbchain.org",
  baseUrl: "/opbnb-docs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
   trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "bnb-chain", // Usually your GitHub org/user name.
  projectName: "opbnb-docs", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/bnb-chain/opbnb-docs/blob/main",
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem" // Derived from docusaurus-theme-openapi
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://www.bnbchain.org/en/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      })
    ]
  ],

  themes: [ "docusaurus-theme-openapi-docs"],

  themeConfig:

    /** @type {import('@docusaurus/preset-classic').ThemeConfig } */
    ({
      docs: {
        sidebar: {
          hideable: true,
        }
      },
      algolia: {
        // The application ID provided by Algolia
        appId: '3LF005YNGZ',
  
        // Public API key: it is safe to commit it
        apiKey: 'dbc11ec6638f9c767ef6ed2856871f58',
  
        indexName: 'bnbchain',
  
        // Optional: see doc section below
        // contextualSearch: true,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'https://docs.bnbchain.org/',
  
      },
      navbar: {
        title: "BNB Optimistic Rollup",
        logo: {
          alt: "BNB Optimistic Rollup",
          src: "img/logo.svg"
        },
        items: [
          {
            link: {type: 'doc', id: 'build-on-opbnb/getting-started'},
            label: "Getting Started",
            position: "left",
            to: "/docs/build-on-opbnb/getting-started",
          },
          {
            link: {type: 'doc', id: '/core-concepts'},
            label: "Core Concepts",
            position: "left",
            to: "/docs/core-concepts/need-for-opbnb",
          },
          {
            link: {type: 'doc', id: '/docs/tutorials/running-a-local-node'},
            label: "Tutorials",
            position: "left",
            to: "/docs/tutorials/running-a-local-node",
          },
          {
            link: {type: 'doc', id: 'openbnb-faq'},
            label: "FAQs",
            position: "left",
            to: "/docs/faq/opbnb-faq",
          },
          {
            href: 'https://github.com/bnb-chain/opbnb-docs',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["ruby", "csharp", "php"]
      }
    }),

  
};

module.exports = config;
