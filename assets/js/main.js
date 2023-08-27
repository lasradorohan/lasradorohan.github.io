/*
	Photon by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {

    var $window = $(window),
        $body = $('body');

    // Breakpoints.
    breakpoints({
        xlarge: ['1141px', '1680px'],
        large: ['981px', '1140px'],
        medium: ['737px', '980px'],
        small: ['481px', '736px'],
        xsmall: ['321px', '480px'],
        xxsmall: [null, '320px']
    });

    // Play initial animations on page load.
    // $window.on('load', function () {
        window.setTimeout(function () {
            $body.removeClass('is-preload');
        }, 100);
    // });

    // Scrolly.
    $('.scrolly').scrolly();

    $(".r-nav-content").hide()
    // $("#r-nav-3").show()
    $(".r-nav-select")
        .removeClass("selected")
        .click(function () {
            $(".r-nav-content").hide()
            $("#r-nav-" + $(this).attr("target")).show()
            $(".r-nav-select")
                .removeClass("selected")
            $(this)
                .addClass("selected")
        }
    )

    funFacts = [
        "I can recite the first 103 digits of π.",
        "I love dogs and all their funny expressions.",
        "I sometimes memorize stuff for absolutely no reason.",
        "Enthusiastic, Dedicated, Jovial, Optimistic, Positive, Special. That's my motto.",
        "I believe native app development is the future.",
        "I'm learning Japanese, I have memorized around 300 Kanji so far.",
        "I can solve the Rubik's cube (up to 7x7), the Megaminx and others."
    ];



    $("#fun-fact-select").click(function (){
        var idx = Math.floor(Math.random() * funFacts.length)
        var randomFact = funFacts[idx];
        $("#fun-fact").text(randomFact)
        $("#fun-fact-select").attr("disabled", true).addClass("disabled")   
        setTimeout(function (){
            $("#fun-fact").text(":)")
            $("#fun-fact-select").attr("disabled", false).removeClass("disabled")
        }, 5000)
    
    })

    const animationElement = document.getElementById('title-animation');

    $(animationElement).bind("click", function() {
        animationElement.pause();
        animationElement.seek(0);
        animationElement.play();
    })
    //
    // let projectShow = function () {
    //     $(".r-project-head").hide()
    //     $("#r-project-head-" + $(this).attr("target")).show()
    //     $("#r-project-content-" + $(this).attr("target")).show()
    //     $(this)
    //         .addClass("primary")
    //         .text("close")
    //         .removeClass("fa-angle-down").addClass("fa-angle-up")
    //         .click(function () {
    //             $("#r-project-content-" + $(this).attr("target")).hide()
    //             $(".r-project-head").show()
    //             $(".r-project-show").text("More").removeClass("primary").click(projectShow)
    //         })
    // }
    //
    // $(".r-project-content").hide()
    // $(".r-project-show").click(projectShow)

    $(".r-project-show").click(function () {
        $("#r-project-view-" + $(this).attr("target")).css("display", "block")
    })
    $(".r-project-close").click(function () {
        $("#r-project-view-" + $(this).attr("target")).css("display", "none")
    })

    const imageLoadingDivs = document.querySelectorAll(".image-loading")
    imageLoadingDivs.forEach(div => {
        const img = div.querySelector("img")
        function loaded() {
            div.classList.add("image-loaded")
        }
        if(img.complete) {
            loaded()
        } else {
            img.addEventListener("load", loaded)
        }
    })


})(jQuery);