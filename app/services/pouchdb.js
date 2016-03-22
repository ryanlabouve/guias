import Ember from 'ember';
import DS from 'ember-data';
import PouchDB from 'pouchdb';
import config from 'guias/config/environment';

const { assert, isEmpty } = Ember;

function createDb() {
  let localDb = config.emberPouch.localDb;

  assert('emberPouch.localDb must be set', !isEmpty(localDb));

  let db = new PouchDB(localDb);

  if (config.emberPouch.remoteDb) {
    let remoteDb = new PouchDB(config.emberPouch.remoteDb);

    db.replicate.from(remoteDb, {
      live: true,
      retry: true
    }, function(what) {
      console.log(what);
    });
  }

  return db;
}

export default Ember.Service.extend({
  init() {
    this._super(...arguments);
    this.set('db', createDb());
  },

  allDocs: Ember.computed(function() {
    return new DS.PromiseArray({
      promise: this.get('db').allDocs({ include_docs: true }).then(r => r.rows.map(r => r.doc))
    });
  })
});
