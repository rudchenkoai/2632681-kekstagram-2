const MAX_HASHTAGS = 5;
const MAX_SYMBOLS = 20;

let errorMessage = '';

const errorHashtags = () => errorMessage;

const checkHashtags = (value) => {
  errorMessage = '';

  const inputText = value.toLowerCase().trim();

  if (!inputText) {
    return true;
  }

  const inputTextArray = inputText.split(/\s+/);

  const rulesHashtags = [
    {
      check: inputTextArray.some((item) => item === '#'),
      error: 'Хештег не может состоять только из одной решетки',
    },

    {
      check: inputTextArray.some((item) => item.slice(1).includes('#')),
      error: 'Хештеги разделяются проблемами',
    },


    {
      check: inputTextArray.some((item) => item[0] !== '#'),
      error: 'Хештег должен начинаться с решетки',
    },

    {
      check: inputTextArray.some((item, num, array) => array.includes(item, num + 1)),
      error: 'Хештеги не должны повторяться',
    },

    {
      check: inputTextArray.some((item) => item.length > MAX_SYMBOLS),
      error: 'Максимальная длина хештега 20 символов',
    },

    {
      check: inputTextArray.some((item) => !/^#[a-zа-яё0-9]{1,19}$/i.test(item)),
      error: 'Использованы недопустимые символы',
    },

    {
      check: inputTextArray.length > MAX_HASHTAGS,
      error: 'Превышено допустимое число хештегов',
    },

  ];

  return rulesHashtags.every((rule) => {
    const isInvalid = rule.check;
    if (isInvalid) {
      errorMessage = rule.error;
    }
    return !isInvalid;
  });

};


export {errorHashtags, checkHashtags};
