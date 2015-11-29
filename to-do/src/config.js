require.config({
  baseUrl: 'src',
  deps: ['main'],
  enforceDefine: true,
  paths: {
    'knockout':     '../external/knockout-3.4.0',
    'smokesignals': '../external/smokesignals'
  },
  // Use shim to load non-AMD scripts:
  shim: {
    'smokesignals': {
      exports: 'smokesignals',
      init: function() {
        console.log('Loaded: smokesignals');
      }
    }
  }
});

define();
