Template.desk.events({
    'click #login-btn-submit' : function(e, template){
    
        var username = template.find('#login-username').value;
        var password = template.find('#login-password').value;
        
        
        Meteor.loginWithPassword(username, password, function(err){
            if (err){
               alert("Щось пішло не так. Давай ще раз спробуємо");
            }
        });
        Router.go('edit news');
            
            return false; 
    }
})