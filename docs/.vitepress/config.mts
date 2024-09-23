import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/',
  title: "TWMS Style Guide",
  description: "Frameworks and Mental Models to answer 80% of the questions",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Entry Point', link: '/getting-started' },
        ]
      },
      {
        text: 'Style Guide',
        items: [
          { text: 'Colors', link: '/colors' },
          { text: 'Typography', link: '/typography' },
          { text: 'Assets', link: '/assets' },
          { text: "Guidelines", link: '/guideline' }
        ]
      },
      {
        text: 'Contact',
        items: [
          { text: 'Contact', link: '/contact' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  vite: {
    css: {
      preprocessorOptions: {
        css: {
          additionalData: `@import './styles/theme.css';`
        }
      }
    }
  }
})
