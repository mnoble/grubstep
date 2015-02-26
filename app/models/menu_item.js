import DS from "ember-data";

export default DS.Model.extend({
  name: DS.attr("string"),
  description: DS.attr("string"),
  price: DS.attr("string"),
  restaurant: DS.belongsTo("restaurant")
});