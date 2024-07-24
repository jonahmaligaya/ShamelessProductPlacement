const downloadPopup = document.querySelector("#shih_zoo_download_popup");
const blurrableSection = document.querySelector("#blurrable_section");

function openDownloadPopup() {
    downloadPopup.classList.add("open_popup");
    blurrableSection.classList.add("blur");
    menuButton.classList.add("menu_button_blur");
}
function closeDownloadPopup() {
    downloadPopup.classList.remove("open_popup");
    blurrableSection.classList.remove("blur");
    menuButton.classList.remove("menu_button_blur");
}