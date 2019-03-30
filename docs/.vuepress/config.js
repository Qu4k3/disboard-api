module.exports = {
    title: 'Disboard',
    description: 'Disboard Project & API Documentation',
    base: "/",
    themeConfig: {
        logo: 'https://cdn.discordapp.com/attachments/503303753705848838/561619188687568916/jibril_square.jpg',
        repo: 'Qu4k3/disboard-api',
        repoLabel: 'Github',
        docsRepo: 'Qu4k3/disboard-api',
        docsDir: 'docs',
        docsBranch: 'master',
        editLinks: false,
        editLinkText: 'Hacer una modificación',
        nav: [
            { text: 'Website', link: '/web.html' },
            { text: 'API', link: '/api.html' },
            { text: 'Bot', link: '/bot.html' },
          ],
        sidebar: {
            '/': [
                '',
                'api',
                'web',
                'bot'
            ]
        },
        displayAllHeaders: true
    },
    head: [
        ['link', { rel: "icon", href: "/favicon.ico" }]
      ]
  }