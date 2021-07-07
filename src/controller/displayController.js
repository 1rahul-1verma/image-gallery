import { imgInfo } from "../resources/imageInfo.js" ;
import { updateGallery } from "../controller/galleryController.js";

function updateDisplay(indx) {
    updateDisplayCaption(indx);
    updateDisplayImage(indx);
}

function updateDisplayImage(indx) {
    let displayImage = document.querySelector("#display-image");
    displayImage.src = imgInfo[indx].src;
}

function updateDisplayCaption(indx) {
    let displayCaption = document.querySelector("#display-caption");
    displayCaption.textContent = imgInfo[indx].caption;
}

function inputCaption() {
    let displayCaption = document.querySelector("#display-caption");
    updateDisplayImage("here in display controller");
    displayCaption.addEventListener("input", () => {
        console.log("here");
        
        let selectedIndx = document.querySelector('[data-selected="selected"').dataset.index;
        imgInfo[selectedIndx].caption = displayCaption.innerText;
        updateGallery();
    });
}

export { updateDisplay, inputCaption };