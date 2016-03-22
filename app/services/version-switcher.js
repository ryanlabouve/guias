import Ember from 'ember';

export default Ember.Service.extend({

  versions: ['v1.10.0', 'v1.11.0', 'v1.12.0', 'v1.13.0', 'v2.0.0', 'v2.1.0', 'v2.2.0', 'v2.3.0', 'v2.4.0'],
  sortedVersions: Ember.computed.sort('versions', function(a,b) {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    }

    return 0;
  }),
  selected: Ember.computed('versions.[]', {
    get() {
      return this.get('versions.lastObject');
    },
    set(key, version) {
      return version;
    }
  })
});
