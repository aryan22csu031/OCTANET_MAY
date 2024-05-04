const menubtn = document.getElementById("menu-btn");
const navlinks = document.getElementById("nav-links");
const menubtnIcon = menubtn.querySelector("i");
menubtn.addEventListener("click",(e)=>{
    navlinks.classList.toggle("open");
    const isOpen = navlinks.classList.contains("open");
    menubtnIcon.setAttribute("class",isOpen?"ri-close-line":"ri-menu-line");
});

navlinks.addEventListener("click",(e)=>{
    navlinks.classList.remove("open");
    menubtnIcon.setAttribute("class","ri-menu-line");
});

const scrollRev = {
    distance:"50px",
    origin:"bottom",
    duration:1000,
};

ScrollReveal().reveal(".header-image img",{
    ...scrollRev,
    origin:"right",
});
ScrollReveal().reveal(".header-content h1",{
    ...scrollRev,
    delay:1000,
});
ScrollReveal().reveal(".header-content .section__description",{
    ...scrollRev,
    delay:1000,
});
ScrollReveal().reveal(".header-content .header-btn",{
    ...scrollRev,
    delay:1500,
});

ScrollReveal().reveal(".explore-image img",{
    ...scrollRev,
    origin:"left",
});
ScrollReveal().reveal(".explore-content .section__header",{
    ...scrollRev,
    delay:1000,
});
ScrollReveal().reveal(".explore-content .section__description",{
    ...scrollRev,
    delay:1000,
});
ScrollReveal().reveal(".explore-content .explore-btn",{
    ...scrollRev,
    delay:1500,
});

ScrollReveal().reveal(".banner-card",{
    ...scrollRev,
    interval:500,
});

ScrollReveal().reveal(".chef-image img",{
    ...scrollRev,
    origin:"right",
});
ScrollReveal().reveal(".chef-content .section__header",{
    ...scrollRev,
    delay:1000,
});
ScrollReveal().reveal(".chef-content .section__description",{
    ...scrollRev,
    delay:1000,
});
ScrollReveal().reveal(".chef-list li",{
    ...scrollRev,
    delay:1500,
    interval:500,
});

const swipe = new Swiper(".swipe",{
    loop:true,
    pagination:{
        el: ".swipe-pagination",
    },
})