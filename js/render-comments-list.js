const commentsTemplate = document.querySelector('#comments')
  .content
  .querySelector('.social__comment');
const commentsBlock = document.querySelector('.social__comments');
const commentShownCount = document.querySelector('.social__comment-shown-count');
const commentTotalCount = document.querySelector('.social__comment-total-count');

const renderComments = (commentsList) => {
  commentsBlock.replaceChildren();
  const commentsListFragment = document.createDocumentFragment();
  let allCommentsCounter = 0;

  commentsList.forEach(({avatar, name, message}) => {

    const commentsElement = commentsTemplate.cloneNode(true);
    const author = commentsElement.querySelector('.social__picture');

    commentsElement.classList.add('hidden');

    author.src = avatar;
    author.alt = name;
    commentsElement.querySelector('.social__text').textContent = message;

    commentsListFragment.appendChild(commentsElement);
    allCommentsCounter++;
  });

  commentsBlock.appendChild(commentsListFragment);
  commentTotalCount.textContent = allCommentsCounter;

};

const showComment = (commentCount) => {

  for (let i = 0; i < commentCount; i++) {
    commentsBlock.children[i].classList.remove('hidden');
  }
  commentShownCount.textContent = commentCount;
};


function showComments (commentsCount) {

  if (commentsBlock.children.length >= 5) {
    if (commentsCount < commentsBlock.children.length) {
      showComment (commentsCount);

    } else {
      const lastElementCount = commentsCount - commentsBlock.children.length;

      if (lastElementCount < 5) {
        commentsCount = commentsCount - lastElementCount;
        showComment (commentsCount);

      }

    }
  } else {
    showComment (commentsBlock.children.length);
  }
}


export {renderComments, showComments};
