import { imgInfo } from "../resources/imageInfo.js";

function unselectAll() {
    imgInfo.forEach( element => {
        element.selected = false;
    });
}

function modelSelect(indx) {
    imgInfo[indx].selected = true;
}

export { unselectAll, modelSelect };