$(function(){
    var menu = false;
    var hamburger = $(".hamburger");
    $(".fa-bars").click(function(){
        hamburger.toggleClass("menu-on","menu-off");
        hamburger.toggleClass("hamburger-border");
    });
});
