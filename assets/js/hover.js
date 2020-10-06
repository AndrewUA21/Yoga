$( document ).ready(function(){
    $( ".btn__buy_now" ).hover(function(){
    $(this).parents(".shop__cart__item").children(".shop__cart__item__header").toggleClass('hover__red');
    });
});