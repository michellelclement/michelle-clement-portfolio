$(document).ready(function(){

    $(".card-img").hover(
        function(){$(this).animate({opacity: 0.1,}, 600);},
        function(){$(this).animate({opacity: 1.0,}, 600);
        });

    $(".card-img").hover(
        function(){$(".button-projects").css('visibility', 'visible');},
        function(){$(".button-projects").css('visibility', 'hidden');
        });

    $(".hello-container").hover(
        function(){$(this).addClass("is-hovered");},
        function(){$(this).removeClass("is-hovered");
        });

})




//$(".hello-container").hover (
//    function(){
//        $(this).css({'background-color':'#000000'}, "slow");
//    });