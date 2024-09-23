import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/twms-style-guide",
  title: "TWMS Style Guide",
  description: "Frameworks and Mental Models to answer 80% of the questions ",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
     
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Entry Point', link: '/getting-started' },
          // { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'Style Guide',
        items: [
          { text: 'Colors', link: '/colors' },
          { text: 'Typography', link: '/typography' },
          { text: 'Assets', link: '/assets' },
          { text: "Guidelines", link: '/guideline'}


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
 
