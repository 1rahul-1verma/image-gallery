import { modelSelect, unselectAll } from "../model/model.js";
import { updateGallery } from "../view/galleryView.js";
import { updateDisplay } from "../view/displayView.js";

// function that act as callback function for event Listeners in view.. 
function eventGallery(indx) {
    //interaction with model..
    unselectAll();
    modelSelect(indx);

    //interaction with view..
    updateDisplay(indx);
    updateGallery(indx);
}

export { eventGallery };