$(document).ready(function(){

    $(".card-img").hover(
        function(){$(this).animate({opacity: 0.1,}, 600);},
        function(){$(this).animate({opacity: 1.0,}, 600);
        });

    $(".card-img").hover(
        function(){$(".button-projects").css('visibility', 'visible');},
        function(){$(".button-projects").css('visibility', 'hidden');
        });

    $(".hello-container").hover (
        function(){$(this).css({backgroundColor: '#000000'},
        function(){$(this).css({backgroundColor: '#000000'},);
        });
})



// $(document).ready(function(){
    
//    $(".card-img").hover(
//        function() {$(this).stop().animate({opacity: 0.1,}, 600);},
//        function() {$(this).stop().animate({opcity: 1.0,}, 600);
//    });
//})


//
//$(document).ready(function(){
//    $(".card-img").hover(
//        function(){$(".card-img").css('visibility', 'hidden');},
//        function(){$(".button-projects").css('visibility', 'visible');},
//    );
//})