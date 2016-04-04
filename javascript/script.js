$(function(){

    var colorSwitch = $("#switch-offColor");
    colorSwitch.bootstrapSwitch();
    var textSwitch = $("#switch-offText");
    textSwitch.bootstrapSwitch();

    var isLight = true;
    var isDutch = false;

    $(".jumbotron").addClass("topTimeTable-background-light");

    var menu = false;
    var hamburger = $(".hamburger");
    var navToggle = $("#nav-toggle");
    var tableContainer = $(".time-table-container");
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
        $(".class1").css("background-color", "#004d40");
        $(".class2").css("background-color", "#00695c");
        $(".subject p").css("color", "#fafafa");
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
        $(".class1").css("background-color", "#009688");
        $(".class2").css("background-color", "#4db6ac");
        $(".subject p").css("color", "#b2dfdb");


    };

    //set theme
    colorSwitch.on('switchChange.bootstrapSwitch', function(){
        (isLight) ? darkTheme() : lightTheme();
        isLight = !isLight;
    });

    //set language, set parameter english to true / false
    var switchLanguage = function(english){
        $("div.search-bar input[type='text']").attr("placeholder", (english) ? "Search" : "Zoek");
        $("div.compare-bar input[type='text']").attr("placeholder", (english) ? "Compare" : "Vergelijk");
        $(".notifications h4").text((english) ? "Notifications" : "Wijzigingen");
        $(".modal-title").text((english) ? "Settings" : "Instellingen");
        $("label[for='switch-offColor']").text((english) ? "Dark theme" : "Donker thema");
        $("label[for='switch-offText']").text((english) ? "Set language to Dutch" : "Zet taal naar Nederlands");
        $("label.default-class").text((english) ? "Default classes" : "Standaard ingestelde klassen");
        $("input[type='text'].default-class1").attr("placeholder", (english) ? "Default class 1" : "Standaard klas 1");
        $("input[type='text'].default-class2").attr("placeholder", (english) ? "Default class 2" : "Standaard klas 2");
        $(".close-modal").text((english) ? "Close" : "Sluit");
        $("span.notification").text((english) ? "Monday (28-05) - No school" : "Maandag (28-05) - Geen school");
        $(".Mon").text((english) ? "Mon" : "Ma");
        $(".Tue").text((english) ? "Tue" : "Di");
        $(".Wed").text((english) ? "Wed" : "Woe");
        $(".Thu").text((english) ? "Thu" : "Do");
        $(".Fri").text((english) ? "Fri" : "Vr");
    };

    textSwitch.on('switchChange.bootstrapSwitch', function(){
        switchLanguage(isDutch);
        isDutch = !isDutch;
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
