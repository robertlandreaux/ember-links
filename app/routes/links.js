import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),

  model() {
    return this.store.findAll('link');
  },

  actions: {
    invalidateSession() {
      this.get('session').invalidate().then(() => {
        this.transitionTo('links');
      });
    }
  }
});
