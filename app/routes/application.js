import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // let guide = this.store.createRecord('guide', {
    //   language: 'en',
    //   version: '2.3.0',
    //   text: "testing"
    // });

    return this.store.findAll('guide');
  }
});
