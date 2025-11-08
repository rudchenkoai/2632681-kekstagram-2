const MAX_HASHTAGS = 5;
const MAX_SYMBOLS = 20;

let errorMessage = '';

const getHashtagsError = () => errorMessage;

const checkHashtags = (value) => {
  errorMessage = '';

  const formattedValue = value.toLowerCase().trim();

  if (!formattedValue) {
    return true;
  }

  const hashtags = formattedValue.split(/\s+/);

  const hashtagRules = [
    {
      check: hashtags.some((item) => item === '#'),
      error: 'Хештег не может состоять только из одной решетки',
    },

    {
      check: hashtags.some((item) => item.slice(1).includes('#')),
      error: 'Хештеги разделяются проблемами',
    },


    {
      check: hashtags.some((item) => item[0] !== '#'),
      error: 'Хештег должен начинаться с решетки',
    },

    {
      check: hashtags.length !== new Set(hashtags).size,
      error: 'Хештеги не должны повторяться',
    },

    {
      check: hashtags.some((item) => item.length > MAX_SYMBOLS),
      error: 'Максимальная длина хештега 20 символов',
    },

    {
      check: hashtags.some((item) => !/^#[a-zа-яё0-9]{1,19}$/i.test(item)),
      error: 'Использованы недопустимые символы',
    },

    {
      check: hashtags.length > MAX_HASHTAGS,
      error: 'Превышено допустимое число хештегов',
    },

  ];

  return hashtagRules.every((rule) => {
    const isInvalid = rule.check;
    if (isInvalid) {
      errorMessage = rule.error;
    }
    return !isInvalid;
  });

};


export {getHashtagsError, checkHashtags};
