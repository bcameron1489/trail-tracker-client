import Ember from 'ember';

export default Ember.Route.extend({
  model (data) {
    return this.get('store').findAll('trail');
  }
});
