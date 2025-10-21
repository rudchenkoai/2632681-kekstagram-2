import {createPosts} from './data.js';

const picturesBlock = document.querySelector('.pictures');
const picturesTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const picturesList = createPosts();
const picturesListFragment = document.createDocumentFragment();

picturesList.forEach(({url,description,likes,comments}) => {
  const picturesElement = picturesTemplate.cloneNode(true);
  picturesElement.querySelector('.picture__img').src = url;
  picturesElement.querySelector('.picture__img').alt = description;
  picturesElement.querySelector('.picture__likes').textContent = likes;
  picturesElement.querySelector('.picture__comments').textContent = comments.length;
  picturesListFragment.appendChild(picturesElement);
});

picturesBlock.appendChild(picturesListFragment);
