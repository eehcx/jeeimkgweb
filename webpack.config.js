module.exports = {
    // ...otras configuraciones de Webpack

    module: {
        rules: [
            // ...otras reglas de carga de archivos

            // Regla para compilar archivos SCSS
            {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
};