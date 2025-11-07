const MAX_SYMBOLS = 140;

let errorMessage = '';

const errorDecription = () => errorMessage;

const checkDecription = (value) => {
  errorMessage = '';

  if (!value) {
    return true;
  }

  const rulesDecription = [
    {
      check: value.length > MAX_SYMBOLS,
      error: 'Длина строки не может превышать 140 символов',
    },

  ];

  return rulesDecription.every((rule) => {
    const isInvalid = rule.check;
    if (isInvalid) {
      errorMessage = rule.error;
    }
    return !isInvalid;
  });

};


export {errorDecription, checkDecription};
