$(document).ready(function(){

    $(".card-img-ctr").on("mouseenter", function()
        {$(this).find(".card-img").animate({opacity: 0.1,}, 600);
        $(this).find(".button-projects").css('visibility', 'visible');
        });

    $(".card-img-ctr").on("mouseleave", function()
        {$(this).find(".card-img").animate({opacity: 1.0,}, 600);
        $(this).find(".button-projects").css('visibility', 'hidden');
        });

    $(".hello-container").hover(
        function(){$(this).addClass("is-hovered");},
        function(){$(this).removeClass("is-hovered");
        });
    
    $(".hello-container").hover(
        function(){$(".hello-text").addClass("is-hovered");},
        function(){$(".hello-text").removeClass("is-hovered");
            });
    
    // Navbar border hidden when mobile menu opened
    $(".navbar-toggler").click(function(){
        $(this).parent('.navbar').addClass("is-clicked");
        $(this).parent('.navbar').removeClass("is-clicked");
            });
    
})
