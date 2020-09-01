import gallery from "./gallery-items.js";
const galleryList = document.querySelector(".gallery");

function htmlGeneration(obj) {
  return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${obj.original}"
  >
    <img
      class="gallery__image"
      src="${obj.preview}"
      data-source="${obj.original}"
      alt="${obj.description}"
    />
  </a>
</li>`;
}

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

createGallery();
