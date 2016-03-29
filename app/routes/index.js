import Ember from 'ember';

export default Ember.Route.extend({
  versionSwitcher: Ember.inject.service(),

  redirect() {
    this.transitionTo('guides', this.get('versionSwitcher.selected'));
  }
});
