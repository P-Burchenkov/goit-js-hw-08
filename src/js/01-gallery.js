// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const galleryListEl = document.querySelector('.gallery');

galleryListEl.innerHTML = makeGallery(galleryItems);
galleryListEl.addEventListener('click', onImgClick);

function makeGallery(params) {
  return params
    .map(param => {
      return `<li class="gallery__item">
          <a class="gallery__link" href="${param.original}">
           <img
              class="gallery__image"
              src="${param.preview}"              
              alt="${param.description}"
           />
          </a>
        </li>`;
    })
    .join('');
}
function onImgClick(event) {
  if (event.target.className !== 'gallery__image') {
    return;
  }
  event.preventDefault();
  const modal = new SimpleLightbox(`.gallery a`, {
    captionsData: 'alt',
    captionDelay: 250,
    scrollZoom: false,
  });
}

console.log(galleryItems);
