Meteor.subscribe('contacts');

Template.contacts.helpers({
    contacts: function (){
        return Contacts.findOne();
    }
})