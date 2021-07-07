import { modelSelect, unselectAll } from "../model/model.js";
import { createGalleryView } from "../view/galleryView.js";
import { createDisplayView } from "../view/displayView.js";

function eventGallery(indx) {
    unselectAll();
    modelSelect(indx);
    createDisplayView();
    createGalleryView();
}

export { eventGallery };