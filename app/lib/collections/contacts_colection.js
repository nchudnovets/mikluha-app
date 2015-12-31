ContactsTextSchema = new SimpleSchema({
    
    "contacts_article_body_top": {
        type: String,
        label: "Країна, місто",
        optional: false,
        
        autoform: {
            afFieldInput: {
                type: 'summernote',
                class: 'editor',
                settings: {
                    toolbar: [
                            ['style', ['bold', 'italic', 'underline', 'clear']],
                            ['fontsize', ['fontsize']],
                            ['color', ['color']],
                            ['insert', ['link']]
                    ],
                    height: 100
                }
            }
        }
    },
    
    "contacts_article_body_bottom": {
        type: String,
        label: "Ім'я, телефон",
        optional: false,
        
        autoform: {
            afFieldInput: {
                type: 'summernote',
                class: 'editor',
                settings: {
                    toolbar: [
                            ['style', ['bold', 'italic', 'underline', 'clear']],
                            ['fontsize', ['fontsize']],
                            ['color', ['color']],
                            ['insert', ['link']]
                    ],
                    height: 100
                }
            }
        }
    }
});

ContactsSchema = new SimpleSchema({
    "ukrainian": {
        type: ContactsTextSchema,
        label: "Ukrainian",
        optional: false
    },
    
    "english": {
        type: ContactsTextSchema,
        label: "English",
        optional: false
    }
})


Contacts = new Mongo.Collection( 'contacts' );
Contacts.attachSchema( ContactsSchema );
