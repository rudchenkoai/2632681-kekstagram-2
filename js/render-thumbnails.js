const renderThumbnails = (picturesList) => {

  const picturesBlock = document.querySelector('.pictures');
  const picturesTemplate = document.querySelector('#picture')
    .content
    .querySelector('.picture');
  const picturesListFragment = document.createDocumentFragment();

  picturesList.forEach(({url, description, likes, comments}) => {
    const picturesElement = picturesTemplate.cloneNode(true);
    const image = picturesElement.querySelector('.picture__img');

    image.src = url;
    image.alt = description;
    picturesElement.querySelector('.picture__likes').textContent = likes;
    picturesElement.querySelector('.picture__comments').textContent = comments.length;
    picturesListFragment.appendChild(picturesElement);
  });

  picturesBlock.appendChild(picturesListFragment);

};

export {renderThumbnails};
