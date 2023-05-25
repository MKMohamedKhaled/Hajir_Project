


const link_list = document.querySelector(".links-list");
const moile_toggle = document.querySelector(".mobile-nav-toggle");
const links = document.querySelector(".nav-item-link");
let nav_section = document.getElementsByClassName("nav-section")[0];
const media_match = window.matchMedia("(max-width: 650px)");


window.onscroll = function () {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        // if(window.innerWidth <= 650) {
        //     $(".nav-item-link").each(function () {
        //         $(this).css("color", "#000");
        //     })
        // }
        nav_section.style.backgroundColor = "#fff";
        $(".nav-item-link").each(function () {
            // $(this).css("color", "#6d97a5");
            $(this).css("color", "#000");
        })
        $("#logo-image").attr("src", "images/hajirlogoblue.png");
    }
    else {
        nav_section.style.backgroundColor = "transparent";
        $(".nav-item-link").each(function () {
            $(this).css("color", "#fff");
        })
        $("#logo-image").attr("src", "images/hajirlogo.png");
        
    }
}






moile_toggle.addEventListener('click', () => {
    const visibility = link_list.getAttribute("data-visible");
    if (visibility === "false") {
        link_list.setAttribute("data-visible", true);
        link_list.setAttribute("aria-expanded", true);
        moile_toggle.setAttribute("aria-expanded", true);
        $(".nav-item-link").each(function () {
            $(this).css("color", "#fff");
        })
    }
    else {
        link_list.setAttribute("data-visible", false);
        link_list.setAttribute("aria-expanded", false);
        moile_toggle.setAttribute("aria-expanded", false);
    }

})


// if (media_match.matches) {
//     // links.setAttribute("data-white",true);
//     console.log("match");
// }
// else {
//     // links.setAttrib    console.log("match")
//     console.log("Not match");

// }

// links.addEventListener("change", (e) => {
//     if(e.matches){
//         console.log("match");
//     }
//     else {
//         console.log("not match");

//     }
// });