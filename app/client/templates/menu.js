Template.registerHelper('menu_items', function(){
        var menu_items = [
        {
            item_name_ukr: 'МИКЛУХА',
            item_name_eng: 'MIKLOUHO',
            item_link:'/about',
            item_class: 'menu_buttons-about_btn'
        },
        {
            item_name_ukr: 'НОВИНИ',
            item_name_eng: 'NEWS',
            item_link:'/news',
            item_class: 'menu_buttons-news_btn'
        },
        {
            item_name_ukr: 'ГАЛЕРЕЯ',
            item_name_eng: 'GALLERY',
            item_link:'/gallery',
            item_class: 'menu_buttons-gallery_btn'
        },
        {
            item_name_ukr: 'КОНТАКТИ',
            item_name_eng: 'CONTACTS',
            item_link:'/contacts',
            item_class: 'menu_buttons-contacts_btn'
        } 
    ];
    
    return menu_items;
});


Template.registerHelper("ukrainian", function(){
    return Session.equals("currentLang", "ukr");
});


Template.menu_langs.events({
    "click #ukr_btn": function (event) {
        Session.set("currentLang", "ukr");
    },
    
    "click #eng_btn": function (event) {
        Session.set("currentLang", "eng");
    }
});