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
    var hamburger_options = $(".hamburger-options");
    var hamburger_wrapper = $(".hamburger-wrapper");
    var inputText = $(".inputText");
    var hamburger_main = $(".hamburger-main");
    var navToggle = $("#nav-toggle");
    var tableContainer = $(".time-table-container");
    var isMenuOn = false;

    navToggle.click(function(){
        hamburger.toggleClass("menu-on","menu-off");
        hamburger.toggleClass("hamburger-border");
        $(this).toggleClass("active");

        isMenuOn = !isMenuOn;
        tableContainer.animate({ left:(isMenuOn) ? "12%" : "0"}, 400);
        if (hamburger_main.hasClass("options-off")) {
            hamburger_options.toggleClass("options-off", "options-on");
            hamburger_main.toggleClass("options-off", "options-on");
        }
    });

    //settings button click
    $(".fa-cog").click(function(){
        $(".fa-cog").toggleClass("options-button-active", "options-button-inactive");
        hamburger_options.toggleClass("options-off", "options-on");
        hamburger_main.toggleClass("options-off", "options-on");
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
        $(".hamburger-options").css("color", "#fafafa");
        hamburger_wrapper.css("border", "solid 1px #212121");
        hamburger_wrapper.css("background-color", "#383838");
        $(".hamburger-border").css("border", "solid 1px #212121");
        inputText.css("background-color", "#616161");
        inputText.css("color", "#fafafa");
        inputText.css("border", "solid 1px #212121");
        $(".glyphicon-search").css("color", "#c3c3c3");
        $(".bootstrap-switch").css("background-color", "#616161");
    };

    var lightTheme = function(){
        $("body").css("background-color","#fafafa");
        $(".topTimeTable").toggleClass("topTimeTable-background-dark", "topTimeTable-background-light");
        $(".hamburger").css("background-color","#efefef");
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
        $(".hamburger-options").css("color", "#009688");
        hamburger_wrapper.css("border", "solid 1px #e3e3e3");
        hamburger_wrapper.css("background-color", "#fafafa");
        $(".hamburger-border").css("border", "solid 1px #e3e3e3");
        inputText.css("background-color", "#fafafa");
        inputText.css("color", "#555");
        inputText.css("border", "solid 1px #ccc");
        $(".glyphicon-search").css("color", "#9A9A9A");
        $(".bootstrap-switch").css("background-color", "#eee");
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
        $(".Wed").text((english) ? "Wed" : "Wo");
        $(".Thu").text((english) ? "Thu" : "Do");
        $(".Fri").text((english) ? "Fri" : "Vr");
    };

    textSwitch.on('switchChange.bootstrapSwitch', function(){
        switchLanguage(isDutch);
        isDutch = !isDutch;
    });

    var date = new Date('2016-04-04T00:00:00+05:30');
    var currentWeek = 15;
    var week = $(".h2");
    var dateString = $(".h5");
    var weekInfo = $("div.week-info");

    //previous week glyphicon click
    $("#prevTimeTable").click(function(){
        if(currentWeek > 1){
            weekInfo.hide("slide", { direction: "left" }, 100);
            weekInfo.show("slide", { direction: "right" }, 100);
            week.text("Week " + (--currentWeek));
            date.setDate(date.getDate()-7);
            dateString.text("  (" + (date.getDate() + 1) + " - " + (date.getMonth() + 1) + " - " + date.getFullYear() + ")");

            generateClasses();
        }
    });

    //highlight zoekresultaat
    var searchbar = $("div.search-bar input[type='text']");
    searchbar.on('input', function() {
        var subject = $("div.subject p");
        subject.each(function(i){
            var searchVal = searchbar.val();
            this.style.color = (subject.eq(i).text().indexOf(searchVal) >= 0 && searchVal.length != 0) ? "yellow" : "#fafafa";
        });
    });

    //next week glyphicon click
    $("#nextTimeTable").click(function(){
        if(currentWeek > 1 && currentWeek <= 18) {
            weekInfo.hide("slide", {direction: "right"}, 100);
            weekInfo.show("slide", {direction: "left"}, 100);
            week.text("Week " + (++currentWeek));
            date.setDate(date.getDate() + 7);
            dateString.text("  (" + (date.getDate() + 1) + " - " + (date.getMonth() + 1) + " - " + date.getFullYear() + ")");
            generateClasses();
        }
    });

    var randomNumbers = function () {
        var array = [];
        for (var i = 0; i < 25; i++) {
            var num = array.push(Math.floor(Math.random() * 50) + 1);
            if (array.indexOf(num) < 0) {
                array.push(num);
            }
        }
        return array;
    };

    var fillTimeTable = function (array) {
        var arr = ["<div class='subject class2'><p>gdp(zw)</p><p>R1_3.10</p></div>"
            , "<div class='subject class1'><p>vsa41(beer)</p><p>P1.03</p></div>"
            , "<div class='subject class1'><p>jcf41 (haml)</p><p>P1.03</p></div>"];
        for (var i = 0; i < array.length; i++) {
            $(".boxBorder:eq(" + array[i] + ")").html(arr[Math.floor(Math.random() * 2)]);
        }
    };

    var generateClasses = function () {
        //generate random classes in the time-table
        var array = randomNumbers();
        for (var i = 0; i < array.length; i++) {
            $("div.subject:eq(" + array[i] + ")").remove();
        }
        fillTimeTable(randomNumbers());
    };
});
