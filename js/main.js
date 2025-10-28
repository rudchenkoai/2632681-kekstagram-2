import {createPosts} from './data.js';
import {renderThumbnails} from './render-thumbnails.js';
import './render-full-size-image.js';

const posts = createPosts();
renderThumbnails(posts);


