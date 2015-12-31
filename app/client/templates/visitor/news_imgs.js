Meteor.subscribe('news_images');

Template.news_imgs.helpers({
    news_imgs: function(){
        return NewsImages.find();
    },
    
    img_item: function(id){
        return NewsImages.findOne({_id: id});
    }
});


Template.news_imgs.onRendered(function(){
    
    var pictures = this.findAll('.news_body_item_img_item');
    var bigPictures = [];
    
    for (var i = 0; i < pictures.length; i++){
        
        bigPictures[i] = new OpeningElement ({
                clickElemOpen: pictures[i].id,
                elementToOpen: 'newsItemBig_' + pictures[i].id.split("_")[1], 
                openingDirection: 'center',
                directionPrefics: 'move_to_'
        });
    };
    return bigPictures;
});