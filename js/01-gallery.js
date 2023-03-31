import { galleryItems } from './gallery-items.js';



// Change code below this line




const galleryEl = document.querySelector(".gallery");
galleryEl.onclick = function() {
    return false };

galleryEl.addEventListener("click", selectImage);

const galleryMurkup = createGalleryitems(galleryItems);

galleryEl.insertAdjacentHTML("beforeend", galleryMurkup);

function createGalleryitems(image){
return image.map(({preview, original, description}) => {
return `<li class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</li>`

}).join("")
};


function selectImage(event) {
    if(event.target.nodeName !== "IMG") {
        return
    }
const largeImage = event.target.dataset.source;

createMurkap(largeImage);
};



function createMurkap(largeImage) {
    const instance = basicLightbox.create(`<img src="${largeImage}" >`)
    instance.show(window.addEventListener("keydown", clouseImageModal));

    function clouseImageModal(event) {
        console.log(event)
        if(event.code === "Escape"){
            
               instance.close()
               window.removeEventListener("keydown", clouseImageModal)
           }
        }
    
}



