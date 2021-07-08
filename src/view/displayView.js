import { imgInfo } from "../resources/imageInfo.js"
import { updateGalleryCaption } from "./galleryView.js";

function createDisplayView() {
    let displayWrapper = document.querySelector("#image-display");
    displayWrapper.innerHTML = ''; // removing all child...
    let selectedImageList = imgInfo.filter(image => image.selected);
    let selectedImage = selectedImageList[0];

    // creating display image...
    let img = document.createElement('img');
    img.src = selectedImage.src;
    img.id = "display-image";
    displayWrapper.appendChild(img);

    // creating display caption...
    let imgCaption = document.createElement('div');
    imgCaption.innerHTML = selectedImage.caption;
    imgCaption.contentEditable = "true";
    imgCaption.id = "display-caption";
    imgCaption.classList.add("image-display-caption");
    displayWrapper.appendChild(imgCaption);
}

function updateDisplay(indx) {
    let displayImg = document.querySelector("#display-image");
    displayImg.src = imgInfo[indx].src;

    let displayCaption = document.querySelector("#display-caption");
    displayCaption.innerHTML = imgInfo[indx].caption;
}

function eventDisplayView() {
    let captionBox = document.querySelector("#display-caption");
    captionBox.addEventListener("input", () => {
        let curSelected = document.querySelector('[data-selected = selected]');
        let curSelectedIndx = curSelected.dataset.index;
        imgInfo[curSelectedIndx].caption = captionBox.innerText;
        updateGalleryCaption(curSelectedIndx);
    });
}

export { createDisplayView, eventDisplayView, updateDisplay };