Meteor.subscribe('abouts');

Template.about.helpers({
    abouts: function() {
        return Session.equals("currentLang", "ukr") ? About.findOne().ukrainian : About.findOne().english;
    }
});

