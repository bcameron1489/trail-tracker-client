import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    console.log('we here now')
    return this.get('store').findAll('trail');
  },
});
