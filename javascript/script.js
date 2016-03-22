$(function(){
    var menu = false;
    var hamburger = $(".hamburger");
    $("#nav-toggle").click(function(){
        hamburger.toggleClass("menu-on","menu-off");
        hamburger.toggleClass("hamburger-border");
        $(this).toggleClass("active");
    });

    $("td").click(function(){
        var data = getFormatedTableData("09:00 - 11:00", "pts4(beer)", "P2n_0.05")
        $(this).html("<div class='add-wrap'>" + data + "</div>");

    });

    var getFormatedTableData = function(time, teacher, location){
        return "<p class='add-para para-time'>" + time + "</p>" +
                "<p class='add-para'>" + teacher + "</p>" +
                "<p class='add-para'>" + location + "</p>";
    };

    /*// overlay plugin function
    $.fn.overlay = function() {

        return this.each(function(){

            /!*var $this = $(this);
            var left = $this.offset().left;
            var top = $this.offset().top;
            var width = $this.outerWidth();
            var height = $this.outerHeight();*!/

            $(this).wrap("<div style='width: 90%'></div>")
                .css('z-index', '2');

        });
    };


// apply to single element by id
    //$('#myBtn').overlay();

// apply to all elements of class overlay
    $('.overlay').overlay();*/
});
