const buttonMenu = document.getElementById("botaoMenu");
const list = document.getElementById("menu");
const mobile_menu = document.getElementById("mobile_menu")

buttonMenu.addEventListener("click", () => {
    if(list.className == "ativa"){
        list.classList.remove("ativa")
    }else{
        list.classList.add("ativa")
    }
})

const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    })
})