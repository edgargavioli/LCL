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

const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });

    items[currentItem].classList.add("current-item");
  });
});