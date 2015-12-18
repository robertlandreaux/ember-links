import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  
  actions: {
    login() {
      let identification = this.get('controller.email');
      let password = this.get('controller.password');
      this.get('session').authenticate('authenticator:oauth2', identification, password).then(() => {
        this.transitionTo('links.new');
      });
    }
  }
});
