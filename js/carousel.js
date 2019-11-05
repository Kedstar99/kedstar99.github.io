$(document).ready(function(){
    $('#carouselIndicators').carousel()

    // Enable Carousel Controls
    $(".carousel-control-prev").click(function(){
        $("#carouselIndicators").carousel("prev");
    });
    $(".carousel-control-next").click(function(){
        $("#carouselIndicators").carousel("next");
    });

});