import { imgInfo } from "../resources/imageInfo.js"
import { truncateUtil } from "../utils/truncateUtil.js";
import { eventGallery } from "../controller/galleryController.js";

function createGalleryView() {
    let galleryDiv = document.querySelector("#image-gallery");
    galleryDiv.innerHTML = '';
    imgInfo.forEach((element, indx) => {
        // creating wrapper div for thumbnail and caption...
        let wrapperDiv = document.createElement('div');
        wrapperDiv.classList.add("images");
        wrapperDiv.id = `item${indx}`;
        wrapperDiv.dataset.index = indx;
        wrapperDiv.dataset.selected = element.selected ? "selected" : "not-Selected";

        // creating gallery thumbnail image...
        let img = document.createElement('img');
        img.src = element.src;
        img.classList.add("option-image");
        wrapperDiv.appendChild(img);

        //creating gallery caption...
        let captionDiv = document.createElement('div');
        captionDiv.classList.add("image-caption");
        captionDiv.id = `caption${indx}`;
        captionDiv.innerHTML = element.caption;
        truncateUtil(captionDiv);
        wrapperDiv.appendChild(captionDiv);

        // adding wrapperDiv to galleryDIv...
        galleryDiv.appendChild(wrapperDiv);
        
    });
}

function eventGalleryView() {
    let galleryDiv = document.querySelector("#image-gallery");
    galleryDiv.addEventListener("click", (e) => {
        let indx = e.path[1].dataset.index;
        eventGallery(indx);
    });
}

export { createGalleryView, eventGalleryView };