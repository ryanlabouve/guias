import Ember from 'ember';

export default Ember.Route.extend({
  pouchdb: Ember.inject.service(),
  versionSwitcher: Ember.inject.service(),

  model({ version, section, guide }) {
    return this.get('pouchdb.allDocs').then(docs => {
      if (guide === "index") { guide = "index.html" }

      return docs
        .filterBy('version', version)
        .filterBy('section', section)
        .findBy('guide', guide);
    })
  },

  afterModel(model) {
    this.set('versionSwitcher.selected', model.version);
  }
});
