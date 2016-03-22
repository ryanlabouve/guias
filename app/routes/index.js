import Ember from 'ember';

export default Ember.Route.extend({
  redirect() {
    this.transitionTo('guides', this.controllerFor('application').get('selected'));
  }
});
