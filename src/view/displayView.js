import { imgInfo } from "../resources/imageInfo.js"

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
    displayWrapper.appendChild(imgCaption);
}

function eventDisplayView() {

}

export { createDisplayView, eventDisplayView };