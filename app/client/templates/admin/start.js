Template.start.events({
    'click #reg-btn-submit' : function(e, template) {
        var username = template.find('#login-username').value;
        var password1 = template.find('#login-password1').value;
        var password2 = template.find('#login-password2').value;
        
        if(Meteor.users.find().count() == 0){ 
            if(password1 === password2){
                Accounts.createUser({ username: username, password : password1 }, function(err){
                    if (err) {
                        alert("Щось пішло не так. Давай ще раз спробуємо");
                    } else {
                        alert("Вітаю, адміністратора створено! Гарно запам'ятай пароля");
                    }
                });
            }
            else{
                alert("Паролі не співпадають");
            };
            
            Router.go('login');
        }
        else {
            alert("Перепрошую, але ми вже маємо адміністратора.");
        }
        return false;
    }
  });