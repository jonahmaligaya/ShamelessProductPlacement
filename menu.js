const menuButton = document.querySelector(".menu_button");
const menu = document.querySelector(".menu");
const menuList = document.querySelector(".menu_list");
const content = document.querySelector(".content");
let openMenu = false;
menuButton.addEventListener("click", toggleMenu);
function toggleMenu() {
    if (!openMenu) {
        menuButton.classList.add("close");
        menu.classList.add("open");
        menuList.classList.add("open");
        content.classList.add("close");
        
        openMenu = true;
    } else {
        menuButton.classList.remove("close");
        menu.classList.remove("open");
        menuList.classList.remove("open");
        content.classList.remove("close");

        openMenu = false;
    }
}