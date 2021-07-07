import { imgInfo } from "../resources/imageInfo.js" ;

function updateDisplay(indx) {
    updateDisplayCaption(indx);
    updateDisplayImage(indx);
}

function updateDisplayImage(indx) {
    console.log(indx);
    let displayImage = document.querySelector("#display-image");
    displayImage.src = imgInfo[indx].src;
}

function updateDisplayCaption(indx) {
    let displayCaption = document.querySelector("#display-caption");
    displayCaption.textContent = imgInfo[indx].caption;
}


export { updateDisplay };