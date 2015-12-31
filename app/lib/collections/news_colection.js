var newsImageStore = new FS.Store.GridFS("news_images", {path: "/imgs/news"});

NewsImages = new FS.Collection("news_images", {
    stores: [newsImageStore],
        filter: {
            allow: {
            contentTypes: ['image/*']
    }
}
});

NewsImgSchema = new SimpleSchema({
    "file_id": {
        type: String,
        label: "файл",
        optional: true,
        
        autoform: {
               afFieldInput: {
                    type: 'fileUpload',
                    collection: 'NewsImages'
               }
          }
    }
});

NewsTextSchema = new SimpleSchema({
    "news_article_head": {
        type: String,
        label: "Заголовок новини",
        optional: false
    },
    
    "news_article_body": {
        type: String,
        label: "Текст новини",
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

NewsSchema = new SimpleSchema ({
    "ukrainian": {
        type: NewsTextSchema,
        label: "Ukrainian"
    },
    
    "english": {
        type: NewsTextSchema,
        label: "English"
    },
    
    "files": {
        type: [NewsImgSchema],
        label: "Photos",
        optional: true
    },
    
    "created": {
        type: Date,
        label: "Date news item added",
        autoform: {
            type: 'hidden'
        },
        
        autoValue: function() {
          if ( this.isInsert ) {
            return new Date;
          } 
        }
    }
})

News = new Mongo.Collection( 'news' );

News.attachSchema( NewsSchema );
