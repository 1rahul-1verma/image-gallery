import { createDisplayView } from "./displayView.js";
import { createGalleryView, eventGalleryView } from "./galleryView.js";

function view() {
    createDisplayView();
    createGalleryView();
    eventGalleryView();
}

export { view };