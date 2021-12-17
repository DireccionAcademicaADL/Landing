$(document).ready(function (){

    // Smooth Scroll
    
        $("a").click(function (){
            var gato = this.hash
    
            $("html, body").animate(
                {
                    scrollTop: $(gato).offset().top - 70
                },
                1000
            )
    
    
        })
    
    })