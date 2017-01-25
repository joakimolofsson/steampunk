$(document).ready(function() {
    

    
    $('.navHome').on('click', function(){
        
        $('.homeGrid').animate({
            top: '20%'
        }, 500)
        
        $('.galleryGrid').animate({
            left: '-200%'
        }, 500)
        
        $('.machineGrid').animate({
            top: '150%'
        }, 500)
        setTimeout(function() {
            $('.machineGrid').css({"display" : "none"})}, 500);
        
        $('.aboutGrid').animate({
            right: '-200%'
        }, 500)
        setTimeout(function() {
            $('.aboutGrid').css({"display" : "none"})}, 500);
        
    })//navHomeClick    
    
    
    
    $('.navGallery').on('click', function(){
        
        $('.galleryGrid').animate({
            left: '0%'
        }, 500)
        
        $('.homeGrid').animate({
            top: '-200%'
        }, 500)
        
        $('.machineGrid').animate({
            top: '150%'
        }, 500)
        setTimeout(function() {
            $('.machineGrid').css({"display" : "none"})}, 500);
        
        $('.aboutGrid').animate({
            right: '-200%'
        }, 500)
        setTimeout(function() {
            $('.aboutGrid').css({"display" : "none"})}, 500);
        
    })//navGalleryClick
    
    
    
    $('.navMachine').on('click', function(){
                
        $('.machineGrid').css({ display: 'block'}).animate({
            top: '20%'
        }, 500)
        
        $('.homeGrid').animate({
            top: '-200%'
        }, 500)
        
        $('.galleryGrid').animate({
            left: '-200%'
        }, 500)
        
        $('.aboutGrid').animate({
            right: '-200%'
        }, 500)
        setTimeout(function() {
            $('.aboutGrid').css({"display" : "none"})}, 500);
    })//navAboutClick
    
    
    
    $('.navAbout').on('click', function(){
        
        $('.aboutGrid').css({ display: 'block'}).animate({
            right: '0%',
        }, 500)
        
        $('.homeGrid').animate({
            top: '-200%'
        }, 500)
        
        $('.galleryGrid').animate({
            left: '-200%'
        }, 500)
        
        $('.machineGrid').animate({
            top: '150%'
        }, 500)
        setTimeout(function() {
            $('.machineGrid').css({"display" : "none"})}, 500);
        
    });//navAboutClick
    
    
  
    

    $('.dropDown').on('click', function(){
        
        if($('.mobilNav').css('top') === '-136px') {
            $('.mobilNav').css({
            top: '0px'
            });
        }
        else if($('.mobilNav').css('top') === '0px') {
            $('.mobilNav').css({
            top: '-136px'
            });
        }
 
    });
  
    
    
   

    $('.scrollHome').on('click', function() {
    
        $().scrollToAnimation('#scrollHome');
    });
    
    
    $('.scrollGallery').on('click', function() {
        
        $().scrollToAnimation('#scrollGallery');
    });
    
    
    $('.scrollMachine').on('click', function() {
    
        $().scrollToAnimation('#scrollMachine');
    });
    
    
    $('.scrollAbout').on('click', function() {
    
        $().scrollToAnimation('#scrollAbout');
    });

    
    
    
    
});//ready