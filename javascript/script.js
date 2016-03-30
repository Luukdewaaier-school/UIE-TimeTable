$(function(){

    var colorSwitch = $("#switch-offColor");
    colorSwitch.bootstrapSwitch();

    $(".jumbotron").addClass("topTimeTable-background-light");

    var menu = false;
    var hamburger = $(".hamburger");
    var navToggle = $("#nav-toggle");
    var tableContainer = $(".time-table-container");
    var isLightTheme = true;
    var isMenuOn = false;

    navToggle.click(function(){
        hamburger.toggleClass("menu-on","menu-off");
        hamburger.toggleClass("hamburger-border");
        $(this).toggleClass("active");

        isMenuOn = !isMenuOn;
        tableContainer.animate({ left:(isMenuOn) ? "12%" : "0"}, 400);
    });

    //settings button click
    $(".fa-cog").click(function(){
        $("#settings").modal("show");
    });

    var darkTheme = function(){
        $("body").css("background-color","#212121");
        $(".topTimeTable").toggleClass("topTimeTable-background-dark", "topTimeTable-background-light");
        $(".hamburger").css("background-color","#424242");
        $(".boxBorder").css("border-color","#424242");
        $(".profile-name").css("color","#fafafa");
        $(".fa-cog").css("color","#b2dfdb");
        $(".notification-week").css("color","#b2dfdb");
        $(".notifications h4").css("color","#b2dfdb");
        $(".notification").css("color","#fafafa");
        $("center-h2").css("color","#b2dfdb");
    };

    var lightTheme = function(){
        $("body").css("background-color","#fafafa");
        $(".topTimeTable").toggleClass("topTimeTable-background-dark", "topTimeTable-background-light");
        $(".hamburger").css("background-color","#fafafa");
        $(".boxBorder").css("border-color","#e0e0e0");
        $(".profile-name").css("color","#009688");
        $(".fa-cog").css("color","#fafafa");
        $(".notification").css("color","#c3c3c3");
        $(".notification-week").css("color","#00bcd4");
        $(".notifications h4").css("color","#009688");
        $("center-h2").css("color","#fafafa");
    };

    //set theme

    colorSwitch.click(function(){
        (isLightTheme) ? darkTheme() : lightTheme();
        isLightTheme = !isLightTheme;
    });

    /*$("td").click(function(){
        var data = getFormatedTableData("09:00 - 11:00", "pts4(beer)", "P2n_0.05")
        $(this).html("<div class='add-wrap'>" + data + "</div>");

    });*/

    /*var getFormatedTableData = function(time, teacher, location){
        return "<p class='add-para para-time'>" + time + "</p>" +
                "<p class='add-para'>" + teacher + "</p>" +
                "<p class='add-para'>" + location + "</p>";
    };*/
});
