import {createPosts} from './data.js';
import {renderThumbnails} from './render-thumbnails.js';
import './render-full-size-image.js';
import {openUploadModal} from './form-processing.js';

const posts = createPosts();
renderThumbnails(posts);
openUploadModal();

