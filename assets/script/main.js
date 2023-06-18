const buttonMenu = document.getElementById("botaoMenu");
const buttonCloseMenu = document.getElementById("botaoClose");
const list = document.getElementById("menu");
const mobile_menu = document.getElementById("mobile_menu");

window.addEventListener("scroll", () => {
    if(scrollY > 50) {
        mobile_menu.classList.add("onScroll");
    }else{
        mobile_menu.classList.remove("onScroll");
    }
})
