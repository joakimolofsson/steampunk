(function ( $ ) {
    
    var scrollTime = 1000;//Change this number to increase or decrease the scroll time/speed
    
    $.fn.scrollToAnimation = function(el) {
        
        $('body').animate({
            scrollTop: $(el).offset().top}, scrollTime);
        return this;
        
    };
 
}( jQuery ));

/*
>>>>>>>>>>>>INSTRUCTIONS<<<<<<<<<<<<

.scrollToAnimation();

Plugin example:
$('Your button').on('click', function() {
    $().scrollToAnimation('The element's class/id here);
});

*/