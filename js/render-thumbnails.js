import {renderFullSizePicture} from './render-full-size-image.js';

const picturesList = document.querySelector('.pictures');
const picturesTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const renderThumbnails = (pictures) => {

  const picturesFragment = document.createDocumentFragment();

  pictures.forEach((picture) => {
    const {url, description, likes, comments} = picture;
    const pictureElement = picturesTemplate.cloneNode(true);
    const image = pictureElement.querySelector('.picture__img');

    image.src = url;
    image.alt = description;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;

    pictureElement.addEventListener('click', () => {
      renderFullSizePicture(picture);
    });


    picturesFragment.appendChild(pictureElement);
  });

  picturesList.appendChild(picturesFragment);
};

export {renderThumbnails};

/*
const renderThumbnails = (pictures) => {
  const fragment = document.createDocumentFragment();

  pictures.forEach((picture) => {
    const {url, description, likes, comments} = picture;
    const pictureElement = pictureTemplate.cloneNode(true);
    // заполняем данные

    pictureElement.addEventListener('click', () => {
      openFullSizePicture(picture); // передали данные
    });

    fragment.appendChild(picturesElement);
  });

  picturesBlock.appendChild(fragment);
};

*/
