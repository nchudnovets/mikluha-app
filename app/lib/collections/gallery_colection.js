var galleryImageStore = new FS.Store.GridFS("gallery_images", {path: "/imgs/gallery"});

GalleryImagesHor = new FS.Collection("gallery_images_hor", {
    stores: [galleryImageStore],
        filter: {
            allow: {
            contentTypes: ['image/*']
    }
}
});

GalleryHorImgSchema = new SimpleSchema({
    "file_id": {
        type: String,
        label: "Додати файл",
        optional: false,
        
        autoform: {
               afFieldInput: {
                    type: 'fileUpload',
                    collection: 'GalleryImagesHor'
                }
        }
    }
});


GalleryHor = new Meteor.Collection( 'gallery_hor' );
GalleryHor.attachSchema( GalleryHorImgSchema );


GalleryImagesVert = new FS.Collection("gallery_images_vert", {
    stores: [galleryImageStore],
        filter: {
            allow: {
            contentTypes: ['image/*']
    }
}
});

GalleryVertImgSchema = new SimpleSchema({
    "file_id": {
        type: String,
        label: "Додати файл",
        optional: false,
        
        autoform: {
               afFieldInput: {
                    type: 'fileUpload',
                    collection: 'GalleryImagesVert'
                }
        }
    }
});


GalleryVert = new Meteor.Collection( 'gallery_vert' );
GalleryVert.attachSchema( GalleryVertImgSchema );



Gallery = new Meteor.Collection( 'gallery' );

GallerySchema = new SimpleSchema({
    "file_name": {
        type: String,
        label: "Image file name",
        optional: false
    },

    "photo_type": {
        type: Boolean,                   // true is for horizontal type
        label: "Horyzontal or vertical",
        optional: false
    },
    
    "uploaded": {
        type: Date,
        label: "Date pic added",
        autoValue: function() {
          if ( this.isInsert ) {
            return new Date;
          } 
        }
    }
});

Gallery.attachSchema( GallerySchema );