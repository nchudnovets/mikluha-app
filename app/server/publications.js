Meteor.publish("abouts", function () {
    return About.find();
});

Meteor.publish("news", function () {
    return News.find();
});

Meteor.publish("news_images", function () {
   return NewsImages.find();
});

Meteor.publish("contacts", function () {
    return Contacts.find();
});

Meteor.publish("gallery_hor", function () {
   return GalleryHor.find();
});

Meteor.publish("gallery_images_hor", function () {
   return GalleryImagesHor.find();
});

Meteor.publish("gallery_vert", function () {
   return GalleryVert.find();
});

Meteor.publish("gallery_images_vert", function () {
   return GalleryImagesVert.find();
});


