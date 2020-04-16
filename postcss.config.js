const purgecss = {
  '@fullhuman/postcss-purgecss': {
    content: ['./components/**/*.js', './pages/**/*.ts', './pages/**/*.tsx'],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
  },
}

module.exports = {
  plugins: {
    'postcss-import': {},
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? purgecss : {}),
  },
}
