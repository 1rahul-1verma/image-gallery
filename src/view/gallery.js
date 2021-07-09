import { truncateUtil } from "../utils/truncateUtil.js";
import { nextDraggable } from "../utils/nextDraggable.js";

class Gallery {
    constructor(galleryImageChange, displayImageChange, getSelectedObject) {
        this.galleryImageChange = galleryImageChange;
        this.displayImageChange = displayImageChange;
        this.getSelectedObject = getSelectedObject;
    }

    init(galleryImageList, selectedImageIndx) {
        this.createGalleryView(galleryImageList, selectedImageIndx);
        this.createGalleryClickEvent();
        this.createGalleryKeyEvent();
        this.createGalleryDragEvent();
    }

    createGalleryView(galleryImageList, selectedImageIndx) {
        let gallery = document.querySelector("#image-gallery");
        gallery.innerHTML = '';

        galleryImageList.forEach((galleryImage, indx) => {
            let { caption, src } = galleryImage;
            let isSelected = (indx === selectedImageIndx);
            let galleryItem = this.createGalleryItem(caption, src, isSelected, indx);
            gallery.appendChild(galleryItem);

            let galleryItemCaption = document.querySelector(`#caption${indx}`);
            truncateUtil(galleryItemCaption);
        });
    }

    createGalleryItem(imageCaption, imageSrc, isSelected, indx) {
        let galleryItem = document.createElement('div');
        galleryItem.classList.add("images");
        galleryItem.id = `item${indx}`;
        galleryItem.draggable = true;
        galleryItem.tabIndex = "0";
        galleryItem.dataset.index = indx;
        galleryItem.dataset.type = "gallery";
        galleryItem.dataset.dragging = false;
        galleryItem.dataset.selected = isSelected;

        let galleryItemImage = this.createGalleryItemImage(imageSrc);
        let galleryItemCaption = this.createGalleryItemCaption(imageCaption, indx);

        galleryItem.appendChild(galleryItemImage);
        galleryItem.appendChild(galleryItemCaption);

        return galleryItem;
    }
    
    createGalleryItemImage(imageSrc) {
        let galleryItemImage = document.createElement('img');
        galleryItemImage.src = imageSrc;
        galleryItemImage.classList.add("option-image");
        return galleryItemImage;
    }

    createGalleryItemCaption(imageCaption, indx) {
        let galleryItemCaption = document.createElement('div');
        galleryItemCaption.classList.add("image-caption");
        galleryItemCaption.id = `caption${indx}`;
        galleryItemCaption.innerHTML = imageCaption;
        return galleryItemCaption;
    }

    createGalleryClickEvent() {
        let galleryItem = document.querySelector("#image-gallery");
        galleryItem.addEventListener("click", (e) => {
            let selectedItem;
            if(e.path[0].classList.value === "images"){
                selectedItem = e.path[0];
            } else {
                selectedItem = e.path[1];
            }
            if(!selectedItem) return;
            let selectedIndx = selectedItem.dataset.index;
            this.galleryImageChange(selectedIndx);
            this.updateGalleryView();
            this.displayImageChange();
        });
    }

    createGalleryKeyEvent() {
        let galleryItem = document.querySelector("#image-gallery");
        galleryItem.addEventListener("keydown", (e) => {
            let selectedItem;
            if(e.path[0].classList.value === "images"){
                selectedItem = e.path[0];
            } else {
                selectedItem = e.path[1];
            }
            if(!selectedItem) return;
            let selectedIndx = selectedItem.dataset.index;
            if(e.key === "Enter")
            this.galleryImageChange(selectedIndx);
            this.updateGalleryView(selectedIndx);
            this.displayImageChange(selectedIndx);
        });
    }

    createGalleryDragEvent() {
        let galleryDiv = document.querySelector("#image-gallery");

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
            const nextDraggableElement = nextDraggable(galleryDiv, e.clientY);
            const draggable = galleryDiv.querySelector('[data-dragging = true]');
            if (nextDraggable == null) {
                galleryDiv.appendChild(draggable);
            } else {
                galleryDiv.insertBefore(draggable, nextDraggableElement);
            }
        });
    }

    updateGalleryView() {
        let selectedObject = this.getSelectedObject();
        if(!selectedObject) return ;
        let { caption, src, index } = selectedObject;
        let curSelected = document.querySelector(`#item${index}`);
        let curSelectedCaption = curSelected.querySelector(`#caption${index}`);
        let prevSelected = document.querySelector('[data-selected = true]');
        
        // Update Selected state...
        prevSelected.dataset.selected = "false";
        curSelected.dataset.selected = "true";
        
        // Update Gallery Caption...
        curSelectedCaption.innerHTML = caption;
        truncateUtil(curSelectedCaption);
    }

}

export { Gallery };