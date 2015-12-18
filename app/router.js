import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('logout');
  this.route('links', {path: '/'}, function() {
    this.route('new', {path: '/links/new'});
  });
});

export default Router;
