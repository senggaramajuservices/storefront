'use strict'

const { src, dest, parallel, watch } = require('gulp')
const browserSync = require('browser-sync').create()
const tailwindcss = require('tailwindcss')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const concatCss = require('gulp-concat-css')
const cleanCss = require('gulp-clean-css')
const sourcemaps = require('gulp-sourcemaps')

const html = () => {
  browserSync.init({
    server: './sample',
    port: 3375
  })
  watch('./src/*.css', css)
  watch('./sample/index.html', () => browserSync.reload)
}

const css = () => {
  return src('./src/*.css')
    .pipe(postcss([
      tailwindcss('./tailwind.js'),
      autoprefixer
    ]))
    .pipe(concatCss('utils.css'))
    .pipe(sourcemaps.write())
    .pipe(dest('./sample'))
    .pipe(browserSync.stream())
}

const dist = () => {
  return src('./sample/utils.css')
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(cleanCss({ compatibility: 'ie8' }))
    .pipe(sourcemaps.write('./'))
    .pipe(dest('./dist'))
}

exports.css = css
exports.dist = dist
exports.html = html
exports.default = parallel(html, css)
