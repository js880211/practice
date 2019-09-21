 $(document).ready(function(){
        $("#song").append('<iframe src="https://www.youtube.com/embed/'+"o6wtDPVkKqI"+'?rel=0&autoplay=0"frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
        $(".nav-link").hover(function(){
            $(this).addClass("text-white")
            $(this).parent().addClass("bg-danger")
        },
                            function(){
            $(this).removeClass("text-white")
            $(this).parent().removeClass("bg-danger")
        })
        
    })
