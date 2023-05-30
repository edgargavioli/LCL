const buttonMenu = document.getElementById("botaoMenu");
const list = document.getElementById("nav-list");

buttonMenu.addEventListener("click", () => {
    if(list.className == "ativa"){
        list.classList.remove("ativa")
    }else{
        list.classList.add("ativa")
    }
})
