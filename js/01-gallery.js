'use strict';

import { galleryItems } from './gallery-items.js';

const imgContainer = document.querySelector('.gallery');
let preview = null;

const galleryMarkup = createMarkup(galleryItems);
imgContainer.innerHTML = galleryMarkup;

function createMarkup(galleryData) {
  return galleryData
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                    />
                </a>
            </div>
        `;
    })
    .join('');
}

function onClickImg(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') return;

  createBasicLightbox(event.target);
  openModal();
}

function createBasicLightbox(img) {
  preview = basicLightbox.create(`
        <img src="${img.getAttribute('data-source')}" width="800" height="600">
    `);
}

function openModal() {
  if (!preview) return;

  preview.show();
  window.addEventListener('keydown', closeOnEscPress);
}

function closeOnEscPress(event) {
  if (event.code === 'Escape' && preview) {
    preview.close();
    window.removeEventListener('keydown', closeOnEscPress);
  }
}

imgContainer.addEventListener('click', onClickImg);
