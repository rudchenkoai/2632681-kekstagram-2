import {createPosts} from './data.js';
import {renderThumbnails} from './render-thumbnails.js';
import {addThumbnailClickHandler} from './render-full-size-image.js';
import {renderComments} from './render-comments-list.js';

const posts = createPosts();
const thumbnails = renderThumbnails(posts);
const thumbnailsList = thumbnails.querySelectorAll('.picture__img');

for (let i = 0; i < thumbnailsList.length; i++) {
  addThumbnailClickHandler(thumbnailsList[i], posts[i], renderComments);
}


