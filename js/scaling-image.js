const SCALE_STEP = 0.25;
const SCALE_DEFAULT = 1;

const buttonSmaller = document.querySelector('.scale__control--smaller');
const buttonMore = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const imagePreview = document.querySelector('.img-upload__preview img');

let scale = 1;

const onButtonSmallerClick = () => {
  if (scale > SCALE_STEP) {
    scale -= SCALE_STEP;
    imagePreview.style.transform = `scale(${scale})`;
    scaleControlValue.value = `${scale * 100}%`;
  }
};


const onButtonMoreClick = () => {
  if (scale < SCALE_DEFAULT) {
    scale += SCALE_STEP;
    imagePreview.style.transform = `scale(${scale})`;
    scaleControlValue.value = `${scale * 100}%`;
  }
};


const initializeScaling = () => {
  buttonSmaller.addEventListener('click', onButtonSmallerClick);
  buttonMore.addEventListener('click', onButtonMoreClick);
};

const resetScaling = () => {
  buttonSmaller.removeEventListener('click', onButtonSmallerClick);
  buttonMore.removeEventListener('click', onButtonMoreClick);
  scaleControlValue.value = `${SCALE_DEFAULT * 100}%`;
  imagePreview.style.transform = `scale(${SCALE_DEFAULT})`;
  scale = SCALE_DEFAULT;
};


export {initializeScaling, resetScaling};

