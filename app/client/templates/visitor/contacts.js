
Template.contacts.helpers({
    contacts: function (){
        return Contacts.findOne();
    }
})