Meteor.subscribe('contacts');

Template.admin_contacts.helpers({
    contacts: function (){
        return Contacts.findOne();
    }
})