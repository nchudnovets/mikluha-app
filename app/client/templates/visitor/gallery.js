Meteor.subscribe('gallery_images_hor');
Meteor.subscribe('gallery_images_vert');

Template.gallery.helpers({
    gallery_first_Horizontal_img: function() {
        return GalleryImagesHor.findOne();
    },
    
    gallery_first_Vertical_img: function() {
        return GalleryImagesVert.findOne();
    },
});
