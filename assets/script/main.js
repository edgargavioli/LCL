const buttonMenu = document.getElementById("botaoMenu");
const buttonCloseMenu = document.getElementById("botaoClose");
const list = document.getElementById("menu");
const mobile_menu = document.getElementById("mobile_menu")

window.addEventListener("scroll", () => {
    if(scrollY > 50) {
        mobile_menu.classList.add("onScroll");
    }else{
        mobile_menu.classList.remove("onScroll");
    }
})

buttonMenu.addEventListener("click", () => {
    if(list.className == "ativa"){
        mobile_menu.classList.remove("menu_on");
        list.classList.remove("ativa")
    }else{
        mobile_menu.classList.add("menu_on");
        list.classList.add("ativa")
    }
})

buttonCloseMenu.addEventListener("click", () => {
    if(list.className == "ativa"){
        mobile_menu.classList.remove("menu_on");
        list.classList.remove("ativa")
    }else{
        mobile_menu.classList.add("menu_on");
        list.classList.add("ativa")
    }
})

const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    })
})