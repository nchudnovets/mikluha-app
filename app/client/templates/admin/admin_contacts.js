
Template.admin_contacts.helpers({
    contacts: function (){
        return Contacts.findOne();
    }
})