
Template.gallery_sliders.helpers({
    galleryHorizontal: function() {
        return GalleryImagesHor.find();
    },
    
    galleryVertical: function() {
        return GalleryImagesVert.find();
    }
});



Template.gallery_sliders.onRendered(function(){
    
    var full_pic_landscape = new GalleryFullPicture ({
        clickElemOpen: 'previewLandscape',
        elementToOpen: 'paranja', 
        openingDirection: 'center',
        directionPrefics: 'move_to_',
        picMode: 'landscape',
        next_btn: '.next_btn'
    });
    
    var full_pic_portrait = new GalleryFullPicture ({
        clickElemOpen: 'previewPortrait',
        elementToOpen: 'paranja', 
        openingDirection: 'center',
        directionPrefics: 'move_to_',
        picMode: 'portrait',
        next_btn: '.next_btn'
    });
    
    
    var sliderNodes = document.getElementsByClassName('slider'),
        sliders = [];
    
    for (var sl = 0; sl < sliderNodes.length; sl++){
        sliders[sl] = new Slider({  slider_container: 'slider_' + (sl + 1),
                                    imgs_container: '.imgs_container',
                                    next_btn: '.next_btn',
                                    prev_btn: '.prev_btn',
                                    imgeClass: 'gallery_body_item_full_img'
                                });
    };
    
    return sliders;
});