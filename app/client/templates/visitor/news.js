
Template.news.helpers({
    news: function(){
        return News.find({}, {sort: {created: -1}});
    }
});

