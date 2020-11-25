module.exports = {
    /*
     ** Headers of the page
     */
    head: {
        title: 'Manuel Gelsen',
        meta: [
            { charset: 'utf-8' },
            { "http-equiv": 'Content-Type', content: 'text/html; charset=utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'language', content: 'de' },
        ],
        link: [
            { rel: 'icon', type: 'image/png', sizes: "16x16", href: '/favicon-16x16.png' },
            { rel: 'icon', type: 'image/png', sizes: "32x32", href: '/favicon-32x32.png' },
            { rel: 'icon', type: 'image/png', sizes: "192x192", href: '/favicon-192x192.png' },
            { rel: 'icon', type: 'image/png', sizes: "512x512", href: '/favicon-512x512.png' }
        ],
        script: [
            { src: `https://polyfill.io/v3/polyfill.min.js?features=es6%2ces7`, body: true },
        ],
    },
    /*
     ** Customize the progress bar color
     */
    loading: { color: '#3B8070' },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** Run ESLint on save
         */
        extend(config, { isDev, isClient }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    },
    target: 'static',
    plugins: [{
            src: '~/plugins/serviceworkers-init.js',
            ssr: false
        },
        {
            src: '~/plugins/composition-api.js',
            ssr: false
        }
    ]
}