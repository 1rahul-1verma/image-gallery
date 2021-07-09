const imgInfo = [
    {
      caption: "You can not see a sleeping cat and feel tense.",
      src: "src/resources/Images/cat.jpeg",
      index: 0
    },
    {
      caption: "For it is when calm clouds gather that thunder is made",
      src: "src/resources/Images/cloud.jpeg",
      index: 1
    },
    {
      caption: "A horse doesn't care how much you know how much you care.",
      src: "src/resources/Images/bike.jpeg",
      index: 2
    },
  
    {
      caption: "Technology is best when it brings people together.",
      src: "src/resources/Images/tech.jpeg",
      index: 3
    },

    {
      caption: "The cure for anything is salt water: sweat, tears or the sea.",
      src: "src/resources/Images/sea.jpeg",
      index: 4
    },
  ];

class Model {
    constructor() {
        this.galleryImages = imgInfo;
        this.selectedImage = 0;
    }

    getGalleryImages(){
        return this.galleryImages;
    }

    getSelectedImage() {
        return this.selectedImage;
    }

    getSelectedObject() {
        return this.galleryImages[this.selectedImage];
    }

    setSelectedImage(indx) {
        this.selectedImage = indx;
    }

    setSelectedCaption(caption) {
        imgInfo[this.selectedImage].caption = caption;
    }
}

export { Model };