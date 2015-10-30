Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    waitOn: function() { return Meteor.subscribe('releases'); }

});
Router.route('/', {name: 'releasesList'});
Router.route('/releases/:_id', {
    name: 'releasePage',
    data: function() { return Releases.findOne(this.params._id); }

});

Router.route('/new', {name: 'newRelease'});
Router.onBeforeAction('dataNotFound', {only: 'releasePage'});