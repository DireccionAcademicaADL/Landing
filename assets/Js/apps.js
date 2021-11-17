$(function() {

    $("[data-toggle='tooltip']").tooltip(); //shows directions and extra information.


    $(".card-title").click(function() { // Refresh the appearance of the card content with a click
        $(".card-text").fadeToggle();
    });

    $(".somos").on("click", function() { //change the background color of the section with a click on the title
        $("#us").css("background-color", "#fbce37");
    }, );


});