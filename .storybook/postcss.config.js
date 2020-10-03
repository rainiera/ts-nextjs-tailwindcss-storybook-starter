const purgecss = [
  '@fullhuman/postcss-purgecss',
  {
    content: ['./components/**/*.js', './pages/**/*.ts', './pages/**/*.tsx'],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
  },
]

module.exports = require('../postcss.config.js')
