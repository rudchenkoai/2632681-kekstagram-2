const commentsTemplate = document.querySelector('#comments')
  .content
  .querySelector('.social__comment');
const commentsBlock = document.querySelector('.social__comments');
const commentShownCount = document.querySelector('.social__comment-shown-count');
const commentTotalCount = document.querySelector('.social__comment-total-count');

const renderComments = (commentsList) => {
  commentsBlock.replaceChildren();
  const commentsListFragment = document.createDocumentFragment();

  commentsList.forEach(({avatar, name, message}) => {

    const commentsElement = commentsTemplate.cloneNode(true);
    const author = commentsElement.querySelector('.social__picture');

    commentsElement.classList.add('hidden');

    author.src = avatar;
    author.alt = name;
    commentsElement.querySelector('.social__text').textContent = message;

    commentsListFragment.appendChild(commentsElement);
  });

  commentsBlock.appendChild(commentsListFragment);
  commentTotalCount.textContent = commentsBlock.children.length;

};

const showComment = (commentCount) => {

  for (let i = 0; i < commentCount; i++) {
    commentsBlock.children[i].classList.remove('hidden');
  }
  commentShownCount.textContent = commentCount;
};


function showComments (commentsCount) {

  const difference = commentsBlock.children.length - commentsCount;

  if (difference + 5 <= 5) {
    showComment (commentsBlock.children.length);
  } else {
    showComment (commentsCount);
  }
}


export {renderComments, showComments};
