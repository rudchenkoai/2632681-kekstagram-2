import {openFullSizePicture} from './control-full-size-picture.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img');
const bigPictureImgSetting = bigPictureImg.querySelector('img');
const bigPictureSocial = bigPicture.querySelector('.big-picture__social');
const bigPictureSocialCaption = bigPictureSocial.querySelector('.social__caption');
const bigPictureLikesCount = bigPictureSocial.querySelector('.likes-count');


const addThumbnailClickHandler = function (thumbnail, post, renderComments) {
  thumbnail.addEventListener('click', () => {
    openFullSizePicture();

    bigPictureImgSetting.src = thumbnail.src;
    bigPictureImgSetting.alt = thumbnail.alt;
    bigPictureSocialCaption.textContent = post.description;
    bigPictureLikesCount.textContent = post.likes;

    const commentsArray = post.comments;

    renderComments(commentsArray);
  }
  );
};

export {addThumbnailClickHandler};
