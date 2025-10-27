const commentsTemplate = document.querySelector('#comments')
  .content
  .querySelector('.social__comment');
const commentsBlock = document.querySelector('.social__comments');
const commentShownCount = document.querySelector('.social__comment-shown-count');
const commentTotalCount = document.querySelector('.social__comment-total-count');

document.querySelector('.social__comment-count').classList.add('hidden');
document.querySelector('.social__comments-loader').classList.add('hidden');

const renderComments = (commentsList) => {
  commentsBlock.replaceChildren();
  const commentsListFragment = document.createDocumentFragment();
  let counter = 0;

  commentsList.forEach(({avatar, name, message}) => {

    const commentsElement = commentsTemplate.cloneNode(true);
    const author = commentsElement.querySelector('.social__picture');

    author.src = avatar;
    author.alt = name;
    commentsElement.querySelector('.social__text').textContent = message;

    commentsListFragment.appendChild(commentsElement);
    counter++;
  });

  commentsBlock.appendChild(commentsListFragment);

  commentShownCount.textContent = counter;
  commentTotalCount.textContent = counter;

};

export {renderComments};
