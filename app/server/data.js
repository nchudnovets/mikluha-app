Meteor.startup(function() {
    
    if (About.find().count() == 0) {
        var about = {
            ukrainian: {
                about_article_head: "Тест текст",
                about_article_body: "Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст",
                about_standart_body: "Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст",
            },
            english: {
                about_article_head: "Test text",
                about_article_body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore",
                about_standart_body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore",
                
            }
        };
        
        About.insert(about);
    };
    
    
    
    if (News.find().count() == 0) {
        var news = [{
            ukrainian: {
                news_article_head: "Тест текст",
                news_article_body: "Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст",
               },
            english: {
                news_article_head: "Test text",
                news_article_body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore",
            } //,
            // files: [{file_name: "11.jpg"},
            //         {file_name: "21.jpg"}]
        },
        {
            ukrainian: {
                news_article_head: "Тест текст",
                news_article_body: "Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст",
               },
            english: {
                news_article_head: "Test text",
                news_article_body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore",
                } //,
            // files: [{file_name: "1.jpg"},
            //         {file_name: "2.jpg"}]
            
        }];
        
        for (var i = 0; i < news.length; i++){
            News.insert(news[i]);
        }
    };
    
    if (Contacts.find().count() == 0) {
        var contacts = {
            "ukrainian": {
                "contacts_article_body_top": "<p>УКРАЇНА</p><p>м.КИЇВ</p>",
                "contacts_article_body_bottom": "<p>АНТОН</p><p>555 555 55 55</p>"
               },
            "english": {
                "contacts_article_body_top": "<p>UKRAINE</p><p>KYIV</p>",
                "contacts_article_body_bottom": "<p>ANTON</p><p>555 555 55 55</p>"
                }
        };
        
        Contacts.insert(contacts);
        
    };
    
});

