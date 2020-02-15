'use strict'

const devMode = process.env.NODE_ENV !== 'production'
const path = require('path')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const output = {
  library: '__storefrontComponents',
  libraryTarget: 'umd',
  path: path.resolve(__dirname, 'dist'),
  filename: `storefront-components.${(devMode ? 'tests' : 'min')}.js`
}

const webpackConfig = {
  mode: devMode ? 'development' : 'production',
  entry: path.resolve(__dirname, devMode ? '__tests__/server/main.js' : 'src/_all.js'),
  output,

  devServer: {
    contentBase: path.resolve(__dirname, '__tests__/server/public'),
    port: 3376,
    open: true
  },
  stats: {
    colors: true,
    children: false
  },
  devtool: 'source-map',
  performance: {
    hints: devMode ? false : 'warning',
    maxEntrypointSize: 500000,
    maxAssetSize: 500000
  },

  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin()
  ],

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            whitespace: devMode ? 'preserve' : 'condense'
          }
        }
      },

      {
        test: /\.s?css$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              minimize: !devMode,
              plugins: [
                require('autoprefixer')(),
                require('cssnano')({ preset: 'default' })
              ]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: [
                  path.resolve(__dirname, 'node_modules'),
                  path.resolve(__dirname, '../../'),
                  path.resolve(__dirname, '../../node_modules')
                ]
              }
            }
          }
        ]
      }
    ]
  },

  resolve: {
    alias: {
      '@ecomplus/storefront-twbs': path.resolve(
        __dirname,
        '../storefront-twbs/dist/storefront-twbs.bundle.min'
      ),
      '@ecomplus/storefront-components': __dirname,
      __: path.join(__dirname, '__tests__')
    }
  },

  externals: {
    jquery: {
      commonjs: 'jquery/dist/jquery.slim',
      commonjs2: 'jquery/dist/jquery.slim',
      root: '$'
    },
    'popper.js': {
      commonjs: 'popper.js',
      commonjs2: 'popper.js',
      root: 'Popper'
    }
  }
}

if (!devMode) {
  webpackConfig.externals.vue = {
    commonjs: 'vue',
    commonjs2: 'vue',
    root: 'Vue'
  }
  webpackConfig.externals['@ecomplus/storefront-twbs'] = {
    commonjs: '@ecomplus/storefront-twbs',
    commonjs2: '@ecomplus/storefront-twbs',
    root: '__storefrontTwbs'
  }
}

module.exports = devMode ? webpackConfig : [
  {
    ...webpackConfig,
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
      ...output,
      libraryTarget: 'var',
      filename: output.filename.replace('.min.js', '.var.min.js'),
      path: path.resolve(output.path, 'public')
    }
  },

  webpackConfig
]
