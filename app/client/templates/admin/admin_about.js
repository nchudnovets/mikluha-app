Meteor.subscribe('abouts');

Template.admin_about.helpers({
    abouts: function() {
        return About.findOne();
    }
});

