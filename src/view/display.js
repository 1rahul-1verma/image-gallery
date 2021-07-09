class Display {

    constructor(displayCaptionChange, galleryCaptionChange, getSelectedObject) {
        this.displayCaptionChange = displayCaptionChange;
        this.galleryCaptionChange = galleryCaptionChange;
        this.getSelectedObject = getSelectedObject;
    }

    init(galleryImageList, selectedImageIndx) {
        this.galleryImageList = galleryImageList;
        this.selectedImageIndx = selectedImageIndx;
        this.createDisplayView();
        this.createDisplayCaptionEvent();
    }

    createDisplayView() {
        let display = document.querySelector("#image-display");
        display.innerHTML = '';

        let { caption, src } = this.galleryImageList[this.selectedImageIndx];

        let displayImage = this.createDisplayImage(src);
        let displayCaption = this.createDisplayCaption(caption);

        display.appendChild(displayImage);
        display.appendChild(displayCaption);
        return ;
    }

    createDisplayImage(displayImageSrc) {
        let displayImage = document.createElement('img');
        displayImage.src = displayImageSrc;
        displayImage.id = "display-image";
        return displayImage;
    }

    createDisplayCaption(displayImageCaption) {
        let displayCaption = document.createElement('div');
        displayCaption.innerHTML = displayImageCaption;
        displayCaption.contentEditable = "true";
        displayCaption.id = "display-caption";
        displayCaption.classList.add("image-display-caption");
        return displayCaption;
    }

    createDisplayCaptionEvent() {
        let displayCaption = document.querySelector("#display-caption");
        displayCaption.addEventListener("input", () => {
            this.displayCaptionChange(displayCaption.innerText);
            this.galleryCaptionChange();
        });
    }

    updateDisplayView() {
        let selectedObject = this.getSelectedObject();
        if(!selectedObject) return ;
        let { caption, src, index } = selectedObject;

        // Updating display image...
        let displayImg = document.querySelector("#display-image");
        displayImg.src = src;

        // Updating display caption...
        let displayCaption = document.querySelector("#display-caption");
        displayCaption.innerHTML = caption;
    }
}

export { Display };