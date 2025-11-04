const COMMENTS_STEP = 5;

const commentsTemplate = document.querySelector('#comments')
  .content
  .querySelector('.social__comment');
const commentsBlock = document.querySelector('.social__comments');
const commentShownCount = document.querySelector('.social__comment-shown-count');
const commentTotalCount = document.querySelector('.social__comment-total-count');
const socialCommentsLoaderButton = document.querySelector('.social__comments-loader');
let commentsCount = 0;


const showMoreComments = () => {

  const newCount = Math.min(commentsCount + COMMENTS_STEP, commentsBlock.children.length);

  for (let i = commentsCount; i < newCount; i++) {
    commentsBlock.children[i].classList.remove('hidden');
  }

  commentsCount = newCount;
  commentShownCount.textContent = commentsCount;

  if (newCount === commentsBlock.children.length) {
    removeComments();
  }
};


const renderComments = (commentsList) => {
  commentsBlock.replaceChildren();
  const commentsListFragment = document.createDocumentFragment();

  commentsList.forEach(({avatar, name, message}, index) => {

    const commentsElement = commentsTemplate.cloneNode(true);
    const author = commentsElement.querySelector('.social__picture');

    if (index >= COMMENTS_STEP) {
      commentsElement.classList.add('hidden');
    }

    author.src = avatar;
    author.alt = name;
    commentsElement.querySelector('.social__text').textContent = message;

    commentsListFragment.appendChild(commentsElement);
  });

  commentsBlock.appendChild(commentsListFragment);
  commentTotalCount.textContent = commentsList.length;
  commentShownCount.textContent = COMMENTS_STEP;

  socialCommentsLoaderButton.classList.remove('hidden');
  socialCommentsLoaderButton.addEventListener ('click', showMoreComments);

  showMoreComments();

};

function removeComments () {
  commentsCount = 0;
  socialCommentsLoaderButton.classList.add('hidden');
  socialCommentsLoaderButton.removeEventListener('click', showMoreComments);
}

export {renderComments, removeComments};
