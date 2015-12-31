Template.about_additional.onRendered(function(){
    
    var pedigree = new OpeningElement ({
            clickElemOpen: 'rodov_btn',
            elementToOpen: 'pedigree_wrap',
            elementToShowOrHide: 'about_body_wrap',
            openingDirection: 'left',
            directionPrefics: 'move_to_'
        });
        
    var breedStandard = new OpeningElement ({
            clickElemOpen: 'standart_btn',
            elementToOpen: 'standart_container', 
            elementToShowOrHide: 'about_body_wrap',
            openingDirection: 'right',
            directionPrefics: 'move_to_'
        });
    return [pedigree, breedStandard];
});