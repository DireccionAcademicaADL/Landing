$(document).ready(function () {

    // navbar
  
    $(window).on("scroll", function () {
      var wn = $(window).scrollTop();
      if (wn > 120) {
        $(".navbar").css("background", "green");
      }
      else {
        $(".navbar").css("background", "red");
      }
    });

});