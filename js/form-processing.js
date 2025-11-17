import {isEscapeKey} from './util.js';
import {getHashtagsError, checkHashtags} from './check-hashtags.js';
import {getDescriptionError, checkDescription} from './check-description.js';
import {scalingImage, exitScaling} from './scaling-image.js';
import {onApplyEffect, resetFilter} from './apply-effect-image.js';

const uploadForm = document.querySelector ('.img-upload__form');
const pageBody = document.body;

const uploadFile = uploadForm.querySelector ('#upload-file');
const imgUploadOverlay = uploadForm.querySelector ('.img-upload__overlay');
const cancelButton = imgUploadOverlay.querySelector ('.img-upload__cancel');

const textHashtags = uploadForm.querySelector ('.text__hashtags');
const textDescription = uploadForm.querySelector ('.text__description');

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  errorTextParent:'img-upload__field-wrapper',
});

const onCancelButtonClick = () => {
  closeUploadModal();
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)
     && !evt.target.classList.contains('text__hashtags')
     && !evt.target.classList.contains('text__description')
  ) {
    evt.preventDefault();
    closeUploadModal();
  }
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
  if (pristine.validate()) {
    uploadForm.submit();
  }
};


const onOpenUploadModal = () => {
  imgUploadOverlay.classList.remove('hidden');
  pageBody.classList.add('modal-open');
  cancelButton.addEventListener('click', onCancelButtonClick);
  document.addEventListener('keydown', onDocumentKeydown);
  uploadForm.addEventListener('submit', onFormSubmit);
  uploadForm.addEventListener('change', onApplyEffect);
  scalingImage();
};


const initUploadModal = () => {
  uploadForm.addEventListener('change', () => {
    onOpenUploadModal();
  });
};

function closeUploadModal () {
  imgUploadOverlay.classList.add('hidden');
  pageBody.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  cancelButton.removeEventListener('click', onCancelButtonClick);
  uploadForm.removeEventListener('submit', onFormSubmit);
  uploadFile.value = '';
  textHashtags.textContent = '';
  textDescription.textContent = '';
  uploadForm.reset();
  pristine.reset();
  exitScaling();
  resetFilter();
}


pristine.addValidator(textHashtags, checkHashtags, getHashtagsError);
pristine.addValidator(textDescription, checkDescription, getDescriptionError);


export {initUploadModal};
