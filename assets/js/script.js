    //Smooth Scroll
    $('a').click(function(event){
        console.log(this,this.hash);
        if(this.hash !== ""){
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
            },800,function(){
              window.location.hash = hash
            })
          }
    })