const menuButton = document.querySelector(".menu_button");
const menu = document.querySelector(".menu");
const menuList = document.querySelector(".menu_list");
const consumer = document.querySelector(".consumer");
let openMenu = false;
menuButton.addEventListener("click", toggleMenu);
function toggleMenu() {
    if (!openMenu) {
        menuButton.classList.add("close");
        menu.classList.add("open");
        menuList.classList.add("open");
        consumer.classList.add("close");
        
        openMenu = true;
    } else {
        menuButton.classList.remove("close");
        menu.classList.remove("open");
        consumer.classList.remove("close");
        menuList.classList.remove("open");

        openMenu = false;
    }
}