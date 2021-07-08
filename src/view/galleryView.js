import { imgInfo } from "../resources/imageInfo.js"
import { truncateUtil } from "../utils/truncateUtil.js";
import { eventGallery } from "../controller/galleryController.js";

function updateGallery(indx) {
    let curSelected = document.querySelector(`#item${indx}`);
    let prevSelected = document.querySelector('[data-selected = selected]');
    prevSelected.dataset.selected = "not-selected";
    curSelected.dataset.selected = "selected";
}

function updateGalleryCaption(indx) {
    let galleryCaption = document.querySelector(`#caption${indx}`);
    galleryCaption.innerHTML = imgInfo[indx].caption;
    truncateUtil(galleryCaption);
}

function createGalleryView() {
    let galleryDiv = document.querySelector("#image-gallery");
    galleryDiv.innerHTML = '';
    imgInfo.forEach((element, indx) => {
        // creating wrapper div for thumbnail and caption...
        let wrapperDiv = document.createElement('div');
        wrapperDiv.classList.add("images");
        wrapperDiv.id = `item${indx}`;
        wrapperDiv.draggable = true;
        wrapperDiv.tabIndex = "0";
        wrapperDiv.dataset.index = indx;
        wrapperDiv.dataset.type = "gallery";
        wrapperDiv.dataset.dragging = false;
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
        wrapperDiv.appendChild(captionDiv);

        // adding wrapperDiv to galleryDIv...
        galleryDiv.appendChild(wrapperDiv);

        // truncate caption in gallery...
        truncateUtil(captionDiv);
    });
}

function eventGalleryView() {
    let galleryDiv = document.querySelector("#image-gallery");
    // Click event on Gallery...
    galleryDiv.addEventListener("click", (e) => {
        let indx = e.path[1].dataset.index;
        eventGallery(indx);
    });

    // Tab-Enter on gallery items using keyboard...
    galleryDiv.addEventListener("keydown", (e) => {
        let indx = e.path[0].dataset.index;
        if(e.path[0].classList.value === "images" && e.key === "Enter")
        eventGallery(indx);
    });

    // Drag gallery elements...
    let draggableElements = galleryDiv.querySelectorAll("[draggable=true]");
    draggableElements.forEach(draggable => {
        draggable.addEventListener('dragstart', () => {
            draggable.dataset.dragging = true;
          })
        
          draggable.addEventListener('dragend', () => {
            draggable.dataset.dragging = false;
          })
    });

    // Drop draggable element in the the container...
    galleryDiv.addEventListener("dragover", (e) => {
        e.preventDefault();
        const nextDraggable = getNextDraggle(galleryDiv, e.clientY);
        const draggable = galleryDiv.querySelector('[data-dragging = true]');
        if (nextDraggable == null) {
            galleryDiv.appendChild(draggable);
        } else {
            galleryDiv.insertBefore(draggable, nextDraggable);
        }
    });
}

// Function that gives element before which the draggable div is to be inserted...
function getNextDraggle(container, y) {
    const draggableElements = [...container.querySelectorAll('[data-type = gallery]:not([data-dragging = true])')];
    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
        } else {
        return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
  }

export { createGalleryView, eventGalleryView, updateGallery, updateGalleryCaption };