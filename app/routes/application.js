import Ember from 'ember';

const {inject: { service }} = Ember;

export default Ember.Route.extend({
  pouchdb: service(),

  model() {
    return Ember.RSVP.hash({
      toc: this.get('pouchdb.allDocs').then(docs => docs.findBy('type', 'toc')),
      index: this.get('pouchdb.allDocs').then(docs => docs.findBy('guide', 'index')),
      docs: this.get('pouchdb.allDocs')
    });
  }
});
