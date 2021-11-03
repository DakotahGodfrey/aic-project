const IMAGES_PREFIX = 'https://www.artic.edu/iiif/2/';
const IMAGES_SUFFIX = '/full/843,/0/default.jpg';

const formatImageUrl = (id) => `${IMAGES_PREFIX}${id}${IMAGES_SUFFIX}`;

const generatePlaceholderArray = (size = 3) => {
  const placeholder = {
    thumbnail: {
      alt_text: 'content is loading',
    },
  };
  return new Array(size).fill(placeholder);
};
const smoothScrollIntoViewById = (id) => {
  document.querySelector(`#${id}`).scrollIntoView({ behavior: 'smooth' });
};
export { formatImageUrl, generatePlaceholderArray, smoothScrollIntoViewById };
