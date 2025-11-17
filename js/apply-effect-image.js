import {Effects, EFFECT_LEVEL_MAX, StyleFilterByEffects} from './const.js';

const uploadForm = document.querySelector('body');
const effectLevelInput = uploadForm.querySelector('.effect-level__value');
effectLevelInput.value = EFFECT_LEVEL_MAX;
const effectSlider = uploadForm.querySelector('.effect-level__slider');
const sliderContainer = uploadForm.querySelector('.img-upload__effect-level');
const photoPreview = uploadForm.querySelector('.img-upload__preview');
const imgPreview = photoPreview.querySelector('img');

const effectRadioBtns = uploadForm.querySelectorAll('.effects__radio');

const getUpdateSliderOptions = (effect, sliderElement) => sliderElement.noUiSlider.updateOptions(Effects[effect]);


const onApplyEffect = (evt) => {
  const currentRadioBtn = evt.target.closest('.effects__radio');
  if(currentRadioBtn) {
    const effectBtnValue = currentRadioBtn.value;
    imgPreview.classList.add(effectBtnValue);
    getUpdateSliderOptions(effectBtnValue, effectSlider);
  }
};

const resetFilter = () => {
  imgPreview.style.removeProperty('filter');
  sliderContainer.classList.add('hidden');
  imgPreview.classList.add('effects__preview--none');
};

noUiSlider.create(effectSlider, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
});

effectSlider.noUiSlider.on('update', () => {
  effectLevelInput.value = effectSlider.noUiSlider.get();
  effectRadioBtns.forEach((item) => {
    if (item.checked){
      if (item.value !== 'none') {
        sliderContainer.classList.remove('hidden');
        imgPreview.style.filter = StyleFilterByEffects[item.value](effectLevelInput.value);
      } else {
        resetFilter();
      }
    }
  });
});


export {onApplyEffect, resetFilter};
