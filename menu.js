const menuButton = document.querySelector(".menu_button");
const menu = document.querySelector(".menu");
let openMenu = false;
menuButton.addEventListener("click", toggleMenu);
function toggleMenu() {
    if (!openMenu) {
        menuButton.classList.add("close");
        menu.classList.add("open");
        
        openMenu = true;
    } else {
        menuButton.classList.remove("close");
        menu.classList.remove("open");

        openMenu = false;
    }
}