$(function () {

    $("a").click(function(event){
        if (this.hash !== "") {
          event.preventDefault();
    
          var ir_a = this.hash;
    
          $("html, body").animate({
            scrollTop: $(ir_a).offset().top
          }, 800, function(){
            window.location.hash = ir_a;
          });
        }
      });
});