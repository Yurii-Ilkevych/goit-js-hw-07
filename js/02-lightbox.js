import { galleryItems } from './gallery-items.js';
// Change code below this line
const options = {
    captionPosition: "bottom",
    captionDelay: 250,
    captionsData: "alt",
}

const galleryEl = document.querySelector(".gallery");

const galleryMurkup = createGalleryitems(galleryItems);

galleryEl.insertAdjacentHTML("beforeend", galleryMurkup);

const gallery = new SimpleLightbox('.gallery a', options)

function createGalleryitems(image){
return image.map(({preview, original, description}) => {
return `<li class="gallery__item">
<a class="gallery__link" href="${original}">
   <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>`

}).join("")
};