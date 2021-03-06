module.exports = {
  src: {
    root    : 'src/',
    templates    : 'src/templates',
    templatesData: 'src/templates/data',
    sass    : 'src/sass/',
    sassGen : 'src/sass/generated',
    js      : 'src/js/',
    vendors : 'src/js/vendors/',
    svg     : 'src/img/svg/',
    img     : 'src/img/',
    icons   : 'src/icons',
    helpers : 'gulp/helpers/',
    // path to svg sources for sprite:svg task
    iconsSvg: 'src/icons'    
  },
  nodeModuls: {
    fafree: 'node_modules/@fortawesome/fontawesome-free/',
    lbImages: 'node_modules/lightbox2/src/'
  },
  dest: {
    root    : 'build/',
    css     : 'build/css/',
    html    : 'build/',
    js      : 'build/js/',
    vendors : 'build/js/vendors/',
    img     : 'build/img/'
  },
  errorHandler: require('./util/handle-errors')
};