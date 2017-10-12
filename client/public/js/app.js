$(document).ready(function(){

    // Add smooth scrolling to homepage
    $(".homepage-link").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          window.location.hash = hash;
        });
      } 
    });

    // Dashboard navigation toggle
    $(function() {
        
            $('.hamburger-navigation-menu').click(function() {
                $( ".side-navigation").addClass( "open-side-navigation");
            });
        
            $('.close-button').click(function() {
                $( ".side-navigation").removeClass( "open-side-navigation");
            });
        
        });

  });