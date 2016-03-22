import Ember from 'ember';

export default Ember.Controller.extend({
  versionSwitcher: Ember.inject.service(),
  versions: Ember.computed.alias('versionSwitcher.versions'),
  sortedVersions: Ember.computed.alias('versionSwitcher.sortedVersions'),
  selected: Ember.computed.alias('versionSwitcher.selected'),

  guides: Ember.computed.filterBy('model', 'type', 'guide'),
  toc: Ember.computed(function() {
    return this.get('model').findBy('type', 'toc');
  }),

  actions: {
    changeVersion(version) {
      this.set('selected', version);
      this.transitionToRoute('guides', version);
    }
  }
});
