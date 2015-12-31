
Template.index.events({
    "click #fallingFrame": function (event) {
      
        var paintDown = {
            frame: document.getElementById('fallingFrame'),
            nail: document.getElementById('nail'),
            narrow: document.getElementById('mikluhaNarrow'),
            navigationButtons: document.getElementsByClassName('micklukha_navigation_container')[0],
            micluckhaLogo: document.getElementsByClassName('micklukha_logo_container')[0]
        };
        
        var fallDown = function (){
            paintDown.frame.classList.add('falling');
            paintDown.narrow.classList.add('non_display');
            paintDown.nail.classList.add('non_visible');
            paintDown.navigationButtons.style.transform = 'scale(1, 1)';
            paintDown.micluckhaLogo.style.transform = 'scale(1, 1)';
            
            setTimeout(function(){paintDown.frame.classList.add('non_display');}, 1000);
        };
        
        fallDown();
    }
});