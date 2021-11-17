$(function() {

    $("[data-toggle='tooltip']").tooltip(); //shows extra information.


    $(".titulo").on("click", function() { //change the  color of the title
        $(this).css("color", "red");
    }, );

});