module.exports = function (context, options) {
    return {
      module: {
        rules: [
          {
            test: /\.scss$/,
            exclude: /\.module\.scss$/,
            use: [
              require.resolve('style-loader'),
              {
                loader: require.resolve('css-loader'),
                options: {
                  importLoaders: 2,
                  sourceMap: false,
                },
              },
              require.resolve('sass-loader'),
            ],
          },
          {
            test: /\.module\.scss$/,
            use: [
              require.resolve('style-loader'),
              {
                loader: require.resolve('css-loader'),
                options: {
                  importLoaders: 2,
                  sourceMap: false,
                  modules: {
                    localIdentName: '[local]___[hash:base64:5]',
                  },
                },
              },
              require.resolve('sass-loader'),
            ],
          },
        ],
      },
    };
  };