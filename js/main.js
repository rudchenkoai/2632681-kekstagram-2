import {renderThumbnails} from './render-thumbnails.js';
import './render-full-size-image.js';
import {initUploadModal} from './form-processing.js';
import {getData} from './api.js';
import {renderMessageErrorGetData} from './show-message.js';

initUploadModal();

getData()
  .then((image) => {
    renderThumbnails(image);
  }).catch(
    () => {
      renderMessageErrorGetData();
    }
  );


initUploadModal();

