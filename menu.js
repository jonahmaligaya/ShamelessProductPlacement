const menuButton = document.querySelector(".menu_button");
const menu = document.querySelector(".menu");
const menuList = document.querySelector(".menu_list");
const content = document.querySelector(".content");
const html = document.querySelector("html");
const body = document.querySelector("body");
let openMenu = false;
menuButton.addEventListener("click", toggleMenu);
function toggleMenu() {
    if (!openMenu) {
        html.classList.add("unscrollable");
        body.classList.add("unscrollable");
        menuButton.classList.add("close");
        menu.classList.add("open");
        menuList.classList.add("open");
        content.classList.add("close");
        window.scrollTo({top: 0, behavior: 'smooth'});
        
        openMenu = true;
    } else {
        html.classList.remove("unscrollable");
        body.classList.remove("unscrollable");
        menuButton.classList.remove("close");
        menu.classList.remove("open");
        menuList.classList.remove("open");
        content.classList.remove("close");

        openMenu = false;
    }
}