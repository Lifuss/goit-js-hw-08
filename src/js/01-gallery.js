// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
  galleryList: document.querySelector('.gallery'),
};

function renderMarkup(items) {
  refs.galleryList.innerHTML = items.map(createMarkup).join('');
}

function createMarkup({ preview, description, original }) {
  return `<li class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img class="gallery__image" src=${preview} alt='${description}' />
  </a>`;
}

renderMarkup(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
console.log(galleryItems);
