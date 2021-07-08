import { createDisplayView, eventDisplayView } from "./displayView.js";
import { createGalleryView, eventGalleryView } from "./galleryView.js";

function view() {
    createDisplayView();
    eventDisplayView();
    
    createGalleryView();
    eventGalleryView();
}

export { view };