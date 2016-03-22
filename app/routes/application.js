import Ember from 'ember';

export default Ember.Route.extend({
  pouchdb: Ember.inject.service(),

  model() {
    // let guide = this.store.createRecord('guide', {
    //   language: 'en',
    //   version: '2.3.0',
    //   text: "testing"
    // });

    return Ember.RSVP.hash({
      toc: this.get('pouchdb.allDocs').then(docs => docs.findBy('type', 'toc')),
      index: this.get('pouchdb.allDocs').then(docs => docs.findBy('guide', 'index')),
      docs: this.get('pouchdb.allDocs')
    });
  }
});
