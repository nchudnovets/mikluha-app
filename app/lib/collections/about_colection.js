AboutTextSchema = new SimpleSchema({
    "about_article_head": {
        type: String,
        label: "Заголовок про Миклуху",
        optional: false
    },
    
    "about_article_body": {
        type: String,
        label: "Текст про Миклуху",
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
                    height: 200
                }
            }
        }
    },
    
    "about_standart_body": {
        type: String,
        label: "Текст про стандарт породи",
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
                    height: 200
                }
            }
        }
    }
});

AboutSchema = new SimpleSchema({
    "ukrainian": {
        type: AboutTextSchema,
        label: "Ukrainian"
    },
    
    "english": {
        type: AboutTextSchema,
        label: "English"
    }
});

About = new Mongo.Collection( 'about' );

About.attachSchema( AboutSchema );


