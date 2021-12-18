alert("Bienvenidos")
$(document).ready(function(){
    $("h3").dblclick(function(){
      $(this).show('slow');
    });
});

    $("h3").click(function(){
      $(this).css({
      "color": "red"
    });
});