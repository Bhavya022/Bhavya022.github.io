$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $(".navbar").addClass("sticky");
        } else {
            $(".navbar").removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $(".scroll-up-btn").addClass("show");
        } else {
            $(".scroll-up-btn").removeClass("show");
        }
    });

    // slide-up script
    $(".scroll-up-btn").click(function () {
        $("html").animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $("html").css("scrollBehavior", "auto");
    });

    $(".navbar .menu li a").click(function () {
        // applying again smooth scroll on menu items click
        $("html").css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $(".menu-btn").click(function () {
        $(".navbar .menu").toggleClass("active");
        $(".menu-btn i").toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Back-End Developer", "Coder", "Problem Solver"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });

    var typed = new Typed(".typing-2", {
        strings: ["Back-End Developer", "Coder", "Problem Solver", "UI Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });

    // owl carousel script
    $(".carousel").owlCarousel({
        margin: 20,
        loop: false,
        autoplay: false,   //for carousel effect turn it true
        autoplayTimeOut: 2000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            600: {
                items: 2,
                nav: false,
            },
            1000: {
                items: 2,
                nav: false,
            },
        },
    });
});

let resume=document.getElementById("res1")
resume.addEventListener("click",()=>{
    console.log("Hello")
    window.open("https://drive.google.com/file/d/1a5Q7nJGDmqI7JP7olVVRjFxbmAhAvWht/view?usp=share_link")
})

function HandleDownload(){
    console.log("hello")
}
HandleDownload()


let resume2=document.getElementById("Resume2")
resume2.addEventListener("click",()=>{
    window.open("https://drive.google.com/file/d/1a5Q7nJGDmqI7JP7olVVRjFxbmAhAvWht/view?usp=share_link")
})

// GitHubCalendar(".calendar", "akarshabhardwaj");

// // or enable responsive functionality:
// GitHubCalendar(".calendar", "akarshabhardwaj", { responsive: true });

// // Use a proxy
// GitHubCalendar(".calendar", "akarshabhardwaj", {
//    proxy (username) {
//      return fetch(`https://your-proxy.com/github?user=${username}`)
//    }
// }).then(r => r.text())

 GitHubCalendar(".calendar", "Bhavya022");
// // or enable responsive functionality
 GitHubCalendar(".calendar", "Bhavya022", { responsive: true });
//<div class="js-calendar-graph mx-md-2 mx-3 d-flex flex-column flex-items-end flex-xl-items-center overflow-hidden pt-1 is-graph-loading graph-canvas ContributionCalendar height-full text-center" data-graph-url="/users/akarshabhardwaj/contributions" data-url="/akarshabhardwaj" data-from="2022-02-27 00:00:00 UTC" data-to="2023-02-27 23:59:59 UTC" data-org>
console.log("hello i am Bhavya");