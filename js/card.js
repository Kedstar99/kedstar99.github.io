$(function(){

    $('.show').on('click',function(){
        var closest_reveal = $(this)[0].closest('.card').children[2];
        closest_reveal.style.height="100%"
    });
    
    $('.card-reveal .close').on('click',function(){
        var closest_reveal = $(this)[0].parentElement.parentElement;
        closest_reveal.style.height="0px"
    });
});
