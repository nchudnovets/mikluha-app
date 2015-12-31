Meteor.subscribe('gallery_images_hor');
Meteor.subscribe('gallery_hor');
Meteor.subscribe('gallery_images_vert');
Meteor.subscribe('gallery_vert');

Template.admin_gallery.helpers({
    gallery_Horizontal: function() {
        return GalleryHor.find();
    },
    gallery_Horizontal_files: function() {
        return GalleryImagesHor.find();
    },
    gallery_Horizontal_files_item: function(id) {
        return GalleryImagesHor.findOne({_id: id});
    },
    gallery_Vertical: function() {
        return GalleryVert.find();
    },
    gallery_Vertical_files: function() {
        return GalleryImagesVert.find();
    },
    gallery_Vertical_files_item: function(id) {
        return GalleryImagesVert.findOne({_id: id});
    },
    
    onError: function () {
        return function (error) { alert("Щось не вийшло, спробуй ще раз!"); console.log(error); };
    },
    
    onSuccess: function () {
        return function (result) { return };
    },
    
    beforeRemoveHor: function () {
        return function (collection, id) {
            var doc = collection.findOne(id);
            if (confirm('Ти впевнений, що хочеш видалити цей файл ? ' )) {
                if( GalleryImagesHor.findOne({_id: doc.file_id}) ){
                    GalleryImagesHor.remove({_id: doc.file_id});
                };
                
                this.remove();
            }
        };
    },
    
    beforeRemoveVert: function () {
        return function (collection, id) {
            var doc = collection.findOne(id);
            if (confirm('Ти впевнений, що хочеш видалити цей файл ? ' )) {
                if( GalleryImagesVert.findOne({_id: doc.file_id}) ){
                    GalleryImagesVert.remove({_id: doc.file_id});
                };
                
                this.remove();
            }
        };
    }
    
});