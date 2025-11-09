const MAX_SYMBOLS = 140;

let errorMessage = '';

const getDescriptionError = () => errorMessage;

const checkDescription = (value) => {
  errorMessage = '';

  if (!value) {
    return true;
  }

  const descriptionRules = [
    {
      check: value.length > MAX_SYMBOLS,
      error: 'Длина строки не может превышать 140 символов',
    },

  ];

  return descriptionRules.every((rule) => {
    const isInvalid = rule.check;
    if (isInvalid) {
      errorMessage = rule.error;
    }
    return !isInvalid;
  });

};


export {getDescriptionError, checkDescription};
