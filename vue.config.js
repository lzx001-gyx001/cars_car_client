module.exports = {

    css: {
        loaderOptions: {
            scss: {
                prependData: `@import "./src/styles/main.scss";`
            }
        }
    },
    lintOnSave: false,
}