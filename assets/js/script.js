$(document).ready(function () {
  $("a").on('click', function (event) {
    event.preventDefault();
    var hash = this.hash;

    $('html').animate({
      scrollTop: $(hash).offset().top 
    }, 1000)
  });
});
