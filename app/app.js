
if (Meteor.isClient) {
    Session.set("currentLang", "ukr");
    
    Router.configure({
        action : function () {
            if (this.ready()) {
                this.render();
            }
        }
    });
    
    Router.route('/', {
        name: "home",
        layoutTemplate: 'main_layout',
        action: function(){
            this.render('index_');
        }
    });
    
    Router.route('/about', {
        name: "about",
        layoutTemplate: 'main_layout',
        action: function(){
            this.render('about');
        }
    });
    
    Router.route('/news', {
        name: "news",
        layoutTemplate: 'main_layout',
        action: function(){
            this.render('news');
        }
    });
    
    Router.route('/gallery', {
        name: "gallery",
        layoutTemplate: 'main_layout',
        action: function(){
            this.render('gallery');
        }
    });
    
    Router.route('/contacts', {
        name: "contacts",
        layoutTemplate: 'main_layout',
        action: function(){
            this.render('contacts');
        }
    });
    
    Router.route('/about_edit', {
        name: "edit about",
        layoutTemplate: 'admin_layout',
        action: function(){
            if( Meteor.userId() ){
                this.render('admin_about');
            }
            else{
                Router.go('login');
            };
        }
    });
    
    Router.route('/news_edit', {
        waitOn: function() {
            return [Meteor.subscribe('news_images')];
        },
        name: "edit news",
        layoutTemplate: 'admin_layout',
        action: function(){
            if( Meteor.userId() ){
                this.render('admin_news');
            }
            else{
                Router.go('login');
            };
        }
    });
    
    Router.route('/gallery_edit', {
        waitOn: function() {
            return [
                    Meteor.subscribe('gallery_images_hor'), 
                    Meteor.subscribe('gallery_images_vert')
                    ];
        },
        name: "edit gallery",
        layoutTemplate: 'admin_layout',
        action: function(){
            this.render('admin_gallery');
        }
    });
    
    Router.route('/contacts_edit', {
        name: "edit contacts",
        layoutTemplate: 'admin_layout',
        action: function(){
            this.render('admin_contacts');
        }
    });
    
    Router.route('/desk', {
        name: "login",
        layoutTemplate: 'desk',
        action: function(){
            this.render('desk');
        }
    });
    
    Router.route('/start', {
        name: "start",
        layoutTemplate: 'start',
        action: function(){
            this.render('start');
        }
    });
    
    Router.route('/blank', {
        name: "blank",
        layoutTemplate: 'blank',
        action: function(){
            this.render('blank');
        }
    });
    
    
    Router.onAfterAction(function() {
        var title = '';
    
        switch (this.route.path()) {
            case '/': title = 'Головна | Home'; break;
            case '/about': title = 'Про Миклуху | About Miklouho'; break;
            case '/news': title = 'Новини | News'; break;
            case '/gallery': title = 'Галерея | Miklouho'; break;
            case '/contacts': title = 'Контакти | Contacts'; break;
            default: title = 'Адміністратор'; break;
        }
    
        if (title) {
            document.title = title;
        }
    });
    
}