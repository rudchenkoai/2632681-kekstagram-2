import {createPosts} from './data.js';
import {renderThumbnails} from './render-thumbnails.js';

const posts = createPosts();
renderThumbnails(posts);
