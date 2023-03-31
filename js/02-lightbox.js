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
   <img loading="lazy" class="gallery__image lazyload" data-src="${preview}" alt="${description}" />
</a>
</li>`

}).join("")
};

if("loading" in HTMLImageElement.prototype) {
    const lazyImg = document.querySelectorAll("img[loading='lazy']");
    lazyImg.forEach(img => {
        img.src = img.dataset.src;
    });
    }else {
        const addScriptLibrary = document.createElement("script");
        addScriptLibrary.src = "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js";
        document.body.appendChild(addScriptLibrary)
    }