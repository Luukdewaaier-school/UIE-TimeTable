$(function(){
    var menu = false;
    var hamburger = $(".hamburger");
    $("#nav-toggle").click(function(){
        hamburger.toggleClass("menu-on","menu-off");
        hamburger.toggleClass("hamburger-border");
        $(this).toggleClass("active");
    });
});
