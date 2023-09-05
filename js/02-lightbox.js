'use strict';

import { galleryItems } from './gallery-items.js';

const imgContainer = document.querySelector('.gallery');
const galleryMarkup = createMarkup(galleryItems);

imgContainer.innerHTML = galleryMarkup;

function createMarkup(galleryData) {
  return galleryData
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`;
    })
    .join('');
}

const modal = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
