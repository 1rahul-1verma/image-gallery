import { imgInfo } from "../resources/imageInfo.js";
import { truncateUtil } from "../utils/truncateUtil.js";
import { updateDisplay } from "../controller/displayController.js"

function updateGallery() {
    let imgGallery = document.querySelector("#image-gallery");
    let imgDiv = Array.from(imgGallery.childNodes)
    imgDiv = imgDiv.filter(child => {
        return child.nodeName === "DIV";
    });

    imgDiv.forEach( div => {
        let imgIndx = div.dataset.index;
        let imgId = div.id;
        let img = document.querySelector(`#${imgId}`);
        console.log(img.childNodes);
        img.childNodes[1].src = imgInfo[imgIndx].src;
        console.log(img.clientWidth, img.scrollWidth);
        img.childNodes[3].textContent = imgInfo[imgIndx].caption;
        if(img.clientWidth < img.scrollWidth){
            img.childNodes[3].textContent = truncateUtil(img, imgInfo[imgIndx].caption);
        } else {
            img.childNodes[3].textContent = imgInfo[imgIndx].caption;
        }
    });

}

function eventGallery() {
    let imgGallery = document.querySelector("#image-gallery");
    imgGallery.addEventListener("click", (e) => {
        let imgIndx = e.path[1].dataset.index;
        updateDisplay(imgIndx);
        let imgId = e.path[1].id;
        let curDiv = document.querySelector(`#${imgId}`);
        let preDiv = document.querySelector('[data-selected="selected"');
        preDiv.dataset.selected = "not-selected";
        curDiv.dataset.selected = "selected";
    });
}

export { updateGallery, eventGallery };