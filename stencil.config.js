exports.config = {
  bundles: [
    { components: ['progress-bar', 'my-slider'] }
  ],
  collections: [
    { name: '@stencil/router' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
