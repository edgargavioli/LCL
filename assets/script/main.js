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

function toggleMenu() {
    mobile_menu.classList.toggle("menu_on");
    list.classList.toggle("ativa");
}

buttonMenu.addEventListener("click", () => {
        toggleMenu();
})

buttonCloseMenu.addEventListener("click", () => {
        toggleMenu();
})

const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    })
})