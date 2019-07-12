module.exports = {
    /*
     ** Headers of the page
     */
    head: {
        title: 'my-website',
        meta: [
            { charset: 'utf-8' },
            { "http-equiv": 'Content-Type', content: 'text/html; charset=utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'language', content: 'de' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
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
    }
}