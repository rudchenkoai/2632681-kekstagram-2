import {isEscapeKey} from './util.js';
import {getHashtagsError, checkHashtags} from './check-hashtags.js';
import {getDescriptionError, checkDescription} from './check-description.js';
import {initializeScaling, resetScaling} from './scaling-image.js';
import {onEffectChange, resetEffect} from './apply-effect-image.js';
import {sendData} from './api'; ///
import {renderMessageSuccessForm, renderMessageErrorForm} from './show-message';


const SubmitButtonText = {
  IDLE: 'ОПУБЛИКОВАТЬ',
  SENDING: 'ПУБЛИКУЮ...'
};


const uploadForm = document.querySelector ('.img-upload__form');
const pageBody = document.body;

const uploadFile = uploadForm.querySelector ('#upload-file');
const sliderContainer = uploadForm.querySelector('.img-upload__effect-level');
const imgUploadOverlay = uploadForm.querySelector ('.img-upload__overlay');
const cancelButton = imgUploadOverlay.querySelector ('.img-upload__cancel');

const submitButton = uploadForm.querySelector('.img-upload__submit'); ///ghjdthm


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

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = SubmitButtonText.SENDING;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = SubmitButtonText.IDLE;
};

const closeSuccessSubmitForm = () => {
  closeUploadModal();
  renderMessageSuccessForm();
};


const setUserFormSubmit = (onSuccess, onError) => {
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (pristine.validate()) {
      blockSubmitButton();
      sendData(new FormData(evt.target))
        .then(onSuccess)
        .catch(() => {
          onError();
        }).finally(unblockSubmitButton);

    }

  });
};


const onOpenUploadModal = () => {
  imgUploadOverlay.classList.remove('hidden');
  pageBody.classList.add('modal-open');
  sliderContainer.classList.add('hidden');
  cancelButton.addEventListener('click', onCancelButtonClick);
  document.addEventListener('keydown', onDocumentKeydown);
  uploadForm.addEventListener('change', onEffectChange);
  initializeScaling();
};


const initUploadModal = () => {
  uploadForm.addEventListener('change', () => {
    onOpenUploadModal();
  });
  setUserFormSubmit(closeSuccessSubmitForm, renderMessageErrorForm);
};

function closeUploadModal () {
  imgUploadOverlay.classList.add('hidden');
  pageBody.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  cancelButton.removeEventListener('click', onCancelButtonClick);
  uploadForm.removeEventListener('change', onEffectChange);
  uploadFile.value = '';
  textHashtags.textContent = '';
  textDescription.textContent = '';
  uploadForm.reset();
  pristine.reset();
  resetScaling();
  resetEffect();
}


pristine.addValidator(textHashtags, checkHashtags, getHashtagsError);
pristine.addValidator(textDescription, checkDescription, getDescriptionError);


export {initUploadModal};
