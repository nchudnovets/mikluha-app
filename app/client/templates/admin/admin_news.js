Meteor.subscribe('news');
Meteor.subscribe('news_images');

Template.admin_news.helpers({
    news: function() {
        return News.find({}, {sort: {created: -1}});
    },
    
    onError: function () {
        return function (error) { alert("Щось не вийшло, спробуй ще раз!"); console.log(error); };
    },
    
    onSuccess: function () {
        return function (result) { return };
    },
    
    beforeRemove: function () {
        return function (collection, id) {
            var doc = collection.findOne(id);
            
            if (confirm('Ти впевнений, що хочеш видалити "' + doc.ukrainian.news_article_head + '"?')) {
                if(doc.files){
                    for(var i=0; i<doc.files.length; i++){
                        NewsImages.remove({_id: doc.files[i].file_id})
                    };
                }
                
                this.remove();
            }
        };
    }
});

