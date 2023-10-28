import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

const listImg = galleryItems
  .map(
    (img) => `<li class="gallery__item">
    <a class="gallery__link" href=${img.original}>
       <img class="gallery__image" src=${img.preview} alt="${img.description}"  />
    </a>
 </li>`
  )
  .join("");

gallery.insertAdjacentHTML("afterbegin", listImg);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
