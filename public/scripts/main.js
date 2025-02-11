
// Scrolly.
// $('.scrolly').scrolly();

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

// ** Breakpoints **
breakpoints({
    xlarge: ['1141px', '1680px'],
    large: ['981px', '1140px'],
    medium: ['737px', '980px'],
    small: ['481px', '736px'],
    xsmall: ['321px', '480px'],
    xxsmall: [null, '320px']
});

// ** Lottie Animation **
const animationElement = document.getElementById('title-animation');

animationElement.addEventListener("click", function (evt) {
    let element = evt.currentTarget
    element.pause()
    element.seek(0)
    element.play()
})

// ** lazy loding images **
const imageLoadingDivs = document.querySelectorAll(".image-loading")
imageLoadingDivs.forEach(div => {
    const img = div.querySelector("img")

    function loaded() {
        div.classList.add("image-loaded")
    }

    if (img.complete) {
        loaded()
    } else {
        img.addEventListener("load", loaded)
    }
})

// ** fun facts button **
let funFacts = [
    "I can recite the first 103 digits of π.",
    "I love dogs and all their funny expressions.",
    "I sometimes memorize stuff for absolutely no reason.",
    "Enthusiastic, Dedicated, Jovial, Optimistic, Positive, Special. That's my motto.",
    "I believe native app development is the future.",
    "I'm learning Japanese, I have memorized around 300 Kanji so far.",
    "I can solve the Rubik's cube (up to 7x7), the Megaminx and others."
];

document.getElementById("fun-fact-select").addEventListener("click", function (event) {
    let funFactTxt = document.getElementById("fun-fact")
    let funFactBtn = event.currentTarget

    const idx = Math.floor(Math.random() * funFacts.length);
    funFactTxt.textContent = funFacts[idx]

    funFactBtn.setAttribute("disabled", true)
    funFactBtn.classList.add("disabled")

    setTimeout(function () {
        funFactTxt.textContent = ":)"
        funFactBtn.setAttribute("disabled", false)
        funFactBtn.classList.remove("disabled")
    }, 5000)
})

// ** nav content **
navContents = document.querySelectorAll(".r-nav-content")
navSelects = document.querySelectorAll(".r-nav-select")
navContents.forEach(e => {
    e.style.display = "none"
})
// $("#r-nav-3").show()
navSelects.forEach(navSelect => {
    navSelect.classList.remove("selected")
    let navContentId = `r-nav-${navSelect.getAttribute("target")}`
    navSelect.addEventListener("click", function () {
        navContents.forEach(navContent => {
            if (navContent.id === navContentId) {
                navContent.style.display = "block"
            } else {
                navContent.style.display = "none"
            }
        })
        navSelects.forEach(n => {
            if (n===navSelect) n.classList.add("selected")
            else n.classList.remove("selected")
        })
    })
})

// ** project content **
document.querySelectorAll(".r-project-show").forEach(element => {
    const projContent = document.getElementById(`r-project-view-${element.getAttribute("target")}`)
    element.addEventListener("click", function () {
        projContent.style.display = "block"
    })
})

document.querySelectorAll(".r-project-close").forEach(element => {
    const projContent = document.getElementById(`r-project-view-${element.getAttribute("target")}`)
    element.addEventListener("click", function () {
        projContent.style.display = "none"
    })
})

// ** Play initial animations on page load **
// $window.on('load', function () {
const body = document.querySelector("body")
window.setTimeout(function () {
    body.classList.remove("is-preload")
}, 100);
// });

// ** scrolling **
document.querySelectorAll(".scrolly").forEach(element => {
    const scrollTarget = document.getElementById(element.getAttribute("scroll-target"))
    element.addEventListener("click", function () {
        scrollTarget.scrollIntoView({
            behavior: "smooth",
            block: "start",
        })
    })
})