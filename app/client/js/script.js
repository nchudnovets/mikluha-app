// open additional elements on page like additional pages for about.html or bigger sized pictures
//variables below should be defined without Var keyword in order to be usable according to Meteor 

OpeningElement = function(config) {
//config = {clickElemOpen: id of element should be clicked, 
//          elementToOpen: id of element should be opened by click,
//          elementToShowOrHide: id of element should be hidden when elementToOpen opened (optional),
//          openingDirection: a part of classname responsible for opening, f.e 'move_to_left',
//          directionPrefics: a part of classname responsible for opening, f.e 'move_to_left'
// };    

    var config = config;
    var _self = this;
    
    this.clickElemOpen = document.getElementById(config.clickElemOpen);
    this.elementToOpen = document.getElementById(config.elementToOpen);
    this.closeItBtn = this.elementToOpen.querySelector('.close_it_button');
    this.elementToShowOrHide = document.getElementById(config.elementToShowOrHide) || false;
    
   
    this.openElem = function() {
        this.classList.add(config.directionPrefics +  config.openingDirection);
        this.style.display = 'block';
        window.scrollTo(0,0);
    };
    
    this.closeIt = function(){
        this.classList.remove(config.directionPrefics +  config.openingDirection);
        this.style.display = 'none';
    };
    
    this.hideIt = function(){
        this.style.visibility = 'hidden';
    };
    
    this.showIt = function(){
        this.style.visibility = 'visible';
    };
        
    this.clickElemOpen.addEventListener(
                            "click",
                            function(){
                                _self.openElem.apply(_self.elementToOpen,{});
                                if(_self.elementToShowOrHide){
                                    _self.hideIt.apply(_self.elementToShowOrHide, {});
                                };
                            }, 
                            false
                            );
                            
    this.closeItBtn.addEventListener(
                            "click",
                            function(){
                                _self.closeIt.apply(_self.elementToOpen,{});
                                if(_self.elementToShowOrHide){
                                    _self.showIt.apply(_self.elementToShowOrHide, {});
                                };
                            }, 
                            false
                            );
};    


GalleryFullPicture = function(config){
//config is the same as for OpeningElement, but with additional parameters:
//picMode: landscape or portrait,
//next_btn: querySelector of next button element if it is slider

    OpeningElement.apply(this, arguments);
    
    var _self = this,
        getFullPic = function(){
            if(config.picMode === 'landscape'){ return document.getElementById('fullPicsLandscape'); };
            if(config.picMode === 'portrait'){ return document.getElementById('fullPicsPortrait'); };
        };

    this.fullPic = getFullPic(),
    
    this.openElem = function() {
        this.classList.add(config.directionPrefics +  config.openingDirection);
        this.style.display = 'block';
        _self.fullPic.style.display = 'block';
        
        var next_btn = _self.fullPic.querySelector(config.next_btn);
        if (!next_btn){
            window.scrollTo(0,0);
        }
        else {
            next_btn.scrollIntoView(false);
        };
        
    };
    
    this.closeIt = function(){
        this.classList.remove(config.directionPrefics +  config.openingDirection);
        this.style.display = 'none';
        _self.fullPic.style.display = 'none';
        };
        
    this.closeItBtnFloating = function(){
        this.style.top = (_self.closeItBtn.parentElement.scrollTop + 5) + 'px';
    };
    
    this.elementToOpen.addEventListener(
                            "scroll",
                            function(){
                                _self.closeItBtnFloating.apply(_self.closeItBtn,{});
                            }, 
                            false
                            );
};





// Gallery slider

Slider = function(config){
//config = {  slider_container: class name of slider element,
//            imgs_container: querySelector of element contains images in slider,
//            next_btn: querySelector of next button element in slider,
//            prev_btn: querySelector of previous button element in slider,
//            imgeClass: class name of image elements in slider
//}
    
    var _self = this;
    
    var sliderNode = document.getElementById(config.slider_container),
        imgs_container = sliderNode.querySelector(config.imgs_container),
        next_btn = sliderNode.querySelector(config.next_btn),
        prev_btn = sliderNode.querySelector(config.prev_btn),
        images = sliderNode.getElementsByClassName(config.imgeClass),
        picCounter = 0;
        
        
        
    this.nextImg = function(){
        picCounter++;
        if (picCounter === images.length){
            picCounter = 0;
            images[0].style.marginLeft = '0';
        }
        else {
            images[0].style.marginLeft = -picCounter * 100 + '%';
        };
        
        
    }; 
    
    this.prevImg = function(){
        picCounter--;
        if (picCounter < 0){
            picCounter = images.length - 1;
            images[0].style.marginLeft = -(images.length-1) * 100 + '%';
        }
        else {
            images[0].style.marginLeft = -picCounter * 100 + '%';
        };
        
        
       
    }; 
    
    
    
    prev_btn.addEventListener(
                            "click",
                            function(){
                                _self.prevImg();
                            }, 
                            false
                            );
                            
    next_btn.addEventListener(
                            "click",
                            function(){
                                _self.nextImg();
                            }, 
                            false
                            );
    
};
