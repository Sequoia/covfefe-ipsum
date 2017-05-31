const covfefe = require('covfefe');
const loremIpsum = require('lorem-ipsum');
const assert = require('assert');

module.exports = covfefeIpsum;

/**
 * 
 * @param {LoremIpsumOptions} options passed through to loremIpsum
 */
function covfefeIpsum(options={}){
  assert(
    options.format === undefined || options.format === 'plain',
    'formats other than plain text are not supported covfefe'
  );

  return covfefe(trunc(loremIpsum(options)));
}

/**
 * truncate string to random number of words
 * @param {String} input
 * @return {String}
 */
function trunc(input){
  let inputArray = input.split(' ');
  let len_out = getRandomInt(inputArray.length/2, inputArray.length);
  return inputArray.slice(0, len_out).join(' ');
}

/**
 * 
 * @param {Number} min 
 * @param {Number} max 
 * @return {Number}
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_integer_between_two_values
 */
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}