import gallery from "./gallery-items.js";
const galleryList = document.querySelector(".gallery");
const btnClose = document.querySelector(".lightbox__button");
const lightbox = document.querySelector(".lightbox");
const openedImg = document.querySelector(".lightbox__image");

function createGalleryItem(image) {
  const galleryItem = document.createElement("li");
  galleryItem.classList.add("gallery__item");

  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");
  galleryLink.setAttribute("href", image.original);

  const galleryImage = document.createElement("img");
  galleryImage.classList.add("gallery__image");
  galleryImage.setAttribute("src", image.preview);
  galleryImage.setAttribute("data-source", image.original);
  galleryImage.setAttribute("alt", image.description);

  galleryLink.appendChild(galleryImage);
  galleryItem.appendChild(galleryLink);

  return galleryItem;
}

function createGallery() {
  const layout = gallery.map(createGalleryItem);
  galleryList.append(...layout);
}

function onGalleryClick(event) {
  console.log("test");
  event.preventDefault();
  lightbox.classList.add("is-open");
  openedImg.setAttribute("src", event.target.dataset.source);
}

function closeModal() {
  lightbox.classList.remove("is-open");
}

createGallery();

galleryList.addEventListener("click", onGalleryClick);
btnClose.addEventListener("click", closeModal);
