import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  mountain: DS.attr('string'),
  difficulty: DS.attr('string'),
  rating: DS.attr('integer')
});
