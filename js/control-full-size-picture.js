import {isEscapeKey} from './util.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureCancelButton = document.querySelector('.big-picture__cancel');
const bodyClass = document.querySelector('body');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeFullSizePicture();
  }
};

function openFullSizePicture () {
  bigPicture.classList.remove('hidden');
  bodyClass.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydown);

  bigPictureCancelButton.addEventListener('click', () => {
    closeFullSizePicture();
  });

}

function closeFullSizePicture () {
  bigPicture.classList.add('hidden');
  bodyClass.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
}

export {openFullSizePicture};
