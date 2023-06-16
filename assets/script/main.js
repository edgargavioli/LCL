const buttonMenu = document.getElementById("botaoMenu");
const list = document.getElementById("nav-list");

buttonMenu.addEventListener("click", () => {
    if(list.className == "ativa"){
        list.classList.remove("ativa")
    }else{
        list.classList.add("ativa")
    }
})

const inputCarrossel1 = document.getElementById("input1")
const inputCarrossel2 = document.getElementById("input2")
const inputCarrossel3 = document.getElementById("input3")
const inputCarrossel4 = document.getElementById("input4")