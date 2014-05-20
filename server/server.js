Meteor.publish('pets', function() {
  return Pets.find({});
});
