import { galleryItems } from './gallery-items.js';
// Change code below this line
const options = {
    captionPosition: "bottom",
    captionDelay: 250,
    captionSelector: "self"
}

const galleryEl = document.querySelector(".gallery");

galleryEl.addEventListener("click", selectImage)

const galleryMurkup = createGalleryitems(galleryItems)

galleryEl.insertAdjacentHTML("beforeend", galleryMurkup)

const gallery = new SimpleLightbox('.gallery a', options);

console.log(gallery.options)

gallery.refresh()

function createGalleryitems(image){
return image.map(({preview, original, description}) => {
return `<li class="gallery__item">
<a class="gallery__link" href="${original}">
   <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>`

}).join("")
}

galleryEl.onclick = function() {
            return false  }

function selectImage(event) {
const isOnClass = event.target.classList.contains("gallery__image")
    if(!isOnClass) {
        return;
    }
     const largeImage = event.target.closest(".gallery__link").href;

     

gallery.on('changed.simplelightbox', function (e) {
    console.log(this.textContent)

});


gallery.on('shown.simplelightbox', function () {
    console.log(this.firstElementChild)


    
})}

