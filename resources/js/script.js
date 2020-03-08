$(document).ready(function () {
    $('.js--section-features').waypoint(function(direction){
        if (direction === 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '70px;'
    });
    
    
    $('.js--nav-icon').click(function() {
            var nav = $('.js--main-nav');
            var icon = $('.js--nav-icon ion-icon');
    
            nav.slideToggle(200);
      
        });

});