import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Thought Machine',
  tagline: 'Random thoughts',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://lttviet.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'lttviet', // Usually your GitHub org/user name.
  projectName: 'lttviet.com', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        debug: true,
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          exclude: [
            'README.md', 'private/**',
          ]
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      hideOnScroll: true,
      title: 'Thought Machine',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tech',
          position: 'left',
          label: '⚡ Tech',
        },
        {
          type: 'docSidebar',
          sidebarId: 'books',
          position: 'left',
          label: '📖 Books',
        },
        {
          type: 'docSidebar',
          sidebarId: 'games',
          position: 'left',
          label: '🎮 Games',
        },
        {
          type: 'docSidebar',
          sidebarId: 'finance',
          position: 'left',
          label: '📈 Finance',
        },
        {
          href: 'https://github.com/lttviet/lttviet.com',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: [
        'bash',
        'powershell',
        'ini',
        'hcl'
      ]
    },
    algolia: {
      appId: '4R3IFQCE2A',
      apiKey: '2d33ff5a165f7a5ad823f1d664e5b618',
      indexName: 'lttviet',
    }
  } satisfies Preset.ThemeConfig,
  future: {
    experimental_faster: {
      swcJsLoader: true,
      swcJsMinimizer: true,
      swcHtmlMinimizer: true,
      lightningCssMinimizer: true,
      rspackBundler: true,
      mdxCrossCompilerCache: true,
    },
  }
};

export default config;
