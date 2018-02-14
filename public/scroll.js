$(document).ready(function() {
    $(".main").onepage_scroll({
        sectionContainer: "section",
        easing: "ease-in-out",
        animationTime: 500,
        pagination: true,
        loop: false,
        responsiveFallback: 600,
        direction: "vertical",
        keyboard: true
        
    });

    $(".user-button").on('click', function(){
        $(".main").moveTo(2);
    });

    $(".trainer-button").on('click', function(){
        $(".main").moveTo(3);
    });
});