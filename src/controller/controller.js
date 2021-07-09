import { View } from "../view/view.js";
import { Model } from "../model/model.js"
 
class Controller {
    constructor() {
        this.model = new Model();
        this.view = new View(this.gallerySelection.bind(this), 
                            this.gallerySelectedCaption.bind(this), 
                            this.getSelectedObject.bind(this));
        this.init();
    }

    init() {
        let galleryImagesList = this.model.getGalleryImages();
        let selectedImageIndx = this.model.getSelectedImage();
        this.view.init(galleryImagesList, selectedImageIndx);
    }

    gallerySelection(indx) {
        this.model.setSelectedImage(indx);
    }

    gallerySelectedCaption(caption) {
        this.model.setSelectedCaption(caption);
    }

    getSelectedObject() {
        return this.model.getSelectedObject();
    }

    getSelectedObject() {
        return this.model.getSelectedObject();
    }
};

export { Controller }; 