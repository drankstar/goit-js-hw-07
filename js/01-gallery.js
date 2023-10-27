import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

const listImg = galleryItems
  .map(
    (img) => `<li class="gallery__item">
     <a class="gallery__link" href=${img.original}> 
      <img
        class="gallery__image"
        src=${img.preview}
        data-source=${img.original}
        alt="${img.description}"
        />
     </a>
  </li> 
  `
  )
  .join("");

gallery.insertAdjacentHTML("afterbegin", listImg);
gallery.addEventListener("click", handelClick);
function handelClick(event) {
  if (event.target.nodeName === "IMG") {
    event.preventDefault();
    const src = event.target.dataset.source;
    const alt = event.target.getAttribute("alt");
    basicLightbox
      .create(
        `
    <img src=${src} alt=${alt} />
    `
      )
      .show();
  }
}
