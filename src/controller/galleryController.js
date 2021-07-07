import { modelSelect, unselectAll } from "../model/model.js";
import { createGalleryView } from "../view/galleryView.js";
import { createDisplayView } from "../view/displayView.js";

// function that act as callback function for event Listeners in view.. 
function eventGallery(indx) {
    //interaction with model..
    unselectAll();
    modelSelect(indx);

    //interaction with view..
    createDisplayView();
    createGalleryView();
}

export { eventGallery };