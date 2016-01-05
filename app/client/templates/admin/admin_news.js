Meteor.subscribe('news');
Meteor.subscribe('news_images');

Template.admin_news.helpers({
    news: function() {
        return News.find({}, {sort: {created: -1}});
    },
    
    sessionAddNewsItemMode: function(){
        return Session.get('addNewsItemMode');
    }
});



Template.admin_news.events({
    "click .admin_add_news_item_btn": function(){
        Session.set('addNewsItemMode', true);
    },
    
    "click #addNewsItemConfirm, click #addNewsItemClose": function(){
        Session.set('addNewsItemMode', false);
    }
});

