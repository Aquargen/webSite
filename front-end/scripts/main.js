$(document).ready(function() {

//smooth scroll on main menu to correspondive section

    $('body').scrollspy({target: ".navbar", offset: 50});

    $(".navbar a, .scroll-btn a, #play").on('click', function(e) {

            e.preventDefault();
            var hash = $(this).data("target");

            $('html, body').animate({
                scrollTop: $(hash).offset().top - 100
            }, 800, function(){
                window.location.hash = hash;
            });

    });

// add class to navbar on scroll event
    $(window).scroll(function() {
        if($(window).scrollTop() > 150) {
            $(".navbar").addClass("scrolled");
            $(".cd-top").addClass("cd-visible");
        } else {
            $(".navbar").removeClass("scrolled");
            $(".cd-top").removeClass("cd-visible");
        }
    });
    // check if page is refreshed and no scrolling event has happened - to add / remove class scrolled on navbar
    if($(window).scrollTop() == 0) {
        $(".navbar").removeClass("scrolled");
        $(".cd-top").removeClass("cd-visible");
    } else {
        $(".navbar").addClass("scrolled");
        $(".cd-top").addClass("cd-visible");
    }

    $(".cd-top").on("click", function(e) {
        e.preventDefault();
        var buttonToTop = $(this).data("target");

        $('html, body').animate({
            scrollTop: $(buttonToTop).offset().top
        }, 800, function(){
            window.location.buttonToTop = buttonToTop;
        });

    })

    $(".flex-centered .btn").on("click", function() {

        var target = $(this).data("target");
        var wrapper = $(".chart-wrapper");
        $(".btn").removeClass("active");
        $(this).addClass("active");
        wrapper.attr("id", "");
        wrapper.attr("id", target);
    })

});
