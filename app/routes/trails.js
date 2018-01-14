import Ember from 'ember';

export default Ember.Route.extend({
  model () {

    // what is store?
    console.log('store is ', this.get('store'))

    // what does findAll return?
    console.log('findAll is response is ', this.get('store').findAll('trail'))

    // does it reach the `we are here` now?
    console.log('we here now')

    return this.get('store').findAll('trail');
  },
});
