import {isEscapeKey} from './util.js';
import {errorHashtags, checkHashtags} from './check-hashtags.js';
import {errorDecription, checkDecription} from './check-decription.js';

const uploadForm = document.querySelector ('.img-upload__form');
const pageBody = document.querySelector ('body');

const uploadFile = uploadForm.querySelector ('#upload-file');
const imgUploadOverlay = uploadForm.querySelector ('.img-upload__overlay');
const uploadCancel = imgUploadOverlay.querySelector ('.img-upload__cancel');

const textHashtags = uploadForm.querySelector ('.text__hashtags');
const textDescription = uploadForm.querySelector ('.text__description');

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  errorTextParent:'img-upload__field-wrapper',
});

const onClickClosePhoto = () => {
  closePhoto();
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)
     && !evt.target.classList.contains('text__hashtags')
     && !evt.target.classList.contains('text__description')
  ) {
    evt.preventDefault();
    closePhoto();
  }
};

function onFormSubmit (evt) {
  evt.preventDefault();
  if (pristine.validate()) {
    textHashtags.value = textHashtags.value.trim().replaceAll(/\s+/g, ' ');
    uploadForm.submit();
  }


}


const openUploadModal = () => {
  uploadForm.addEventListener('change', () => {
    imgUploadOverlay.classList.remove('hidden');
    pageBody.classList.add('modal-open');
    uploadCancel.addEventListener('click', onClickClosePhoto);
    document.addEventListener('keydown', onDocumentKeydown);
    uploadForm.addEventListener('submit', onFormSubmit);
  });

};

function closePhoto () {
  imgUploadOverlay.classList.add('hidden');
  pageBody.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  uploadCancel.removeEventListener('click', onClickClosePhoto);
  uploadForm.removeEventListener('submit', onFormSubmit);
  uploadFile.value = '';

}


pristine.addValidator(textHashtags, checkHashtags, errorHashtags);

pristine.addValidator(textDescription, checkDecription, errorDecription);


export {openUploadModal};
