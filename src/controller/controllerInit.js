import { createDisplayView } from "../view/displayView.js";
import { createGalleryView, eventGalleryView } from "../view/galleryView.js";

function controllerInit() {
    createDisplayView();
    createGalleryView();
    eventGalleryView();
}

export { controllerInit }; 