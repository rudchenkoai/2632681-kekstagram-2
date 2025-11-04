import {renderComments, removeComments} from './render-comments-list.js';
import {isEscapeKey} from './util.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const bigPictureSocial = bigPicture.querySelector('.big-picture__social');
const bigPictureSocialCaption = bigPictureSocial.querySelector('.social__caption');
const bigPictureLikesCount = bigPictureSocial.querySelector('.likes-count');
const bigPictureCancelButton = document.querySelector('.big-picture__cancel');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeFullSizePicture();
  }
};

const renderFullSizePicture = (post) => {

  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');

  bigPictureImg .src = post.url;
  bigPictureImg .alt = post.description;
  bigPictureSocialCaption.textContent = post.description;
  bigPictureLikesCount.textContent = post.likes;

  const comments = post.comments;

  renderComments(comments);

  document.addEventListener('keydown', onDocumentKeydown);

  bigPictureCancelButton.addEventListener('click', () => {
    closeFullSizePicture();
  });

};

function closeFullSizePicture () {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  removeComments();
}

export {renderFullSizePicture};
