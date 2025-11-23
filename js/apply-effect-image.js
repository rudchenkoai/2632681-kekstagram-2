import {Effects, styleFilterByEffects} from './const.js';


const uploadForm = document.querySelector('body');
const effectLevelInput = uploadForm.querySelector('.effect-level__value');
const effectSlider = uploadForm.querySelector('.effect-level__slider');
const sliderContainer = uploadForm.querySelector('.img-upload__effect-level');
const photoPreview = uploadForm.querySelector('.img-upload__preview');
const imgPreview = photoPreview.querySelector('img');

let currentRadioBtn = '';

const updateSliderOptions = (effect, sliderElement) => sliderElement.noUiSlider.updateOptions(Effects[effect]);


const onEffectChange = (evt) => {
  currentRadioBtn = evt.target.closest('.effects__radio');
  if(currentRadioBtn) {
    const effectBtnValue = currentRadioBtn.value;
    imgPreview.classList.add(effectBtnValue);
    updateSliderOptions(effectBtnValue, effectSlider);
  }
};

const resetEffect = () => {
  imgPreview.style.removeProperty('filter');
  sliderContainer.classList.add('hidden');
  imgPreview.classList.add('effects__preview--none');
};

noUiSlider.create(effectSlider, Effects['none']);

effectSlider.noUiSlider.on('update', () => {
  effectLevelInput.value = effectSlider.noUiSlider.get();
  if (currentRadioBtn.checked){
    if (currentRadioBtn.value !== 'none') {
      sliderContainer.classList.remove('hidden');
      imgPreview.style.filter = styleFilterByEffects[currentRadioBtn.value](effectLevelInput.value);
    } else {
      resetEffect();
    }
  }
});


export {onEffectChange, resetEffect};
