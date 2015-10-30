Meteor.publish('releases', function () {
    return Releases.find();
});