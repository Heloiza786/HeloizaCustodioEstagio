import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Resumo Profissional- tempo de estagio",
  description: "Resumo do desenvolvimento pessoal e profissoonal durante o tempo de estagio.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guias', link: '/boas-praticas' },
    ],

    sidebar: [
      {
        text: 'Menu',
        items: [
          { text: 'Introdução', link: '/boas-praticas' },
          { text: 'Projetos Realizados', link: '/github' },
          { text: 'AutoAvaliação', link: '/teste' },
         // { text: 'TDD', link: '/tdd' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/pstgorg' }
    ],
    outline: {
      level: [2, 3],
    }
  }
})
