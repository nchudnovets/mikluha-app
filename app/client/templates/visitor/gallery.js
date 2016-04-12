
Template.gallery.helpers({
    gallery_first_Horizontal_img: function() {
        // return GalleryImagesHor.findOne();
        var id = GalleryHor.findOne().file_id
        console.log(id);
        return GalleryImagesHor.findOne({_id: id});
    },
    
    gallery_first_Vertical_img: function() {
        var id = GalleryVert.findOne().file_id
        return GalleryImagesVert.findOne({_id: id});
    },
});
