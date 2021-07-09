import { Display } from "./display.js";
import { Gallery } from "./gallery.js";

class View {
    constructor(galleryImageChange, displayCaptionChange, getSelectedObject) {
        this.gallery = new Gallery(galleryImageChange.bind(this), 
                                    this.updateDisplay.bind(this), 
                                    getSelectedObject.bind(this));
        this.display = new Display(displayCaptionChange.bind(this), 
                                    this.updateGallery.bind(this), 
                                    getSelectedObject.bind(this));
    }

    init(galleryImageList, selectedImageIndx) {
        this.gallery.init(galleryImageList, selectedImageIndx, this.galleryImageChange);
        this.display.init(galleryImageList, selectedImageIndx);
    }

    updateDisplay() {
        this.display.updateDisplayView();
    }

    updateGallery() {
        this.gallery.updateGalleryView();
    }
}

export { View };