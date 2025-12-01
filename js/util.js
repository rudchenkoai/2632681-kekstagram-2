const getRandomPositiveInteger = (a,b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor (result);
};

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

function createIdGenerator () {
  let lastGeneratedId = 0;
  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
}
const generateId = createIdGenerator();


const isEscapeKey = (evt) => evt.key === 'Escape';


const findTemplate = (template) => {
  const getTemplate = document.querySelector(template);

  if (!getTemplate) {
    throw new Error(`Template not found: ${template}`);
  }

  return getTemplate.content.firstElementChild;
};


export {getRandomPositiveInteger, getRandomArrayElement, generateId, isEscapeKey, findTemplate};
