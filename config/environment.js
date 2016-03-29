/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'guias',
    environment: environment,
    baseURL: '/',
    locationType: 'mapped',
    historySupportMiddleware: true, // necessary for custom location type
    emberPouch: { localDb: 'ember-guides' },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.emberPouch.remoteDb = 'http://127.0.0.1:5984/ember-guides';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.emberPouch.remoteDb = 'https://therymnswerseesticaskere:e1a33ad1a2fded7aa758e5a067d32336797a5369@locks.cloudant.com/ember-guides';

    ENV.manifest = {
      enabled: true,
      appcacheFile: "/manifest.appcache",
      excludePaths: ['index.html'],
      includePaths: ['/'],
      network: ['*'],
      showCreateDate: true
    }
  }

  return ENV;
};
