
About.permit(['insert', 'update', 'remove']).ifLoggedIn().apply();
News.permit(['insert', 'update', 'remove']).ifLoggedIn().apply();
Contacts.permit(['insert', 'update', 'remove']).ifLoggedIn().apply();
GalleryHor.permit(['insert', 'update', 'remove']).ifLoggedIn().apply();
GalleryVert.permit(['insert', 'update', 'remove']).ifLoggedIn().apply();

NewsImages.allow({
    insert: function(userId, doc) {
        return true;
    },
    remove: function(userId, doc) {
        return true;
    },
    update: function(userId, doc, fieldNames, modifier) {
        return true;
    },
    download: function(userId) {
        return true;
    }
});

GalleryImagesHor.allow({
    insert: function(userId, doc) {
        return true;
    },
    remove: function(userId, doc) {
        return true;
    },
    update: function(userId, doc, fieldNames, modifier) {
        return true;
    },
    download: function(userId) {
        return true;
    }
});

GalleryImagesVert.allow({
    insert: function(userId, doc) {
        return true;
    },
    remove: function(userId, doc) {
        return true;
    },
    update: function(userId, doc, fieldNames, modifier) {
        return true;
    },
    download: function(userId) {
        return true;
    }
});
