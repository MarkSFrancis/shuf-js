/**
 * Generates a random range of data, with values between 0 and 2^31 - 1
 * @param {number} length The number of data items to generate
 * @returns {Iterable<number>} A random of random data
 */
export function* generateRandomData(length) {
  const maxValue = Math.pow(2, 31) - 1;
  for (let i = 0; i < length; i++) {
    yield Math.floor(Math.random() * maxValue);
  }
}

/**
 * Generates a sequential range of data starting at 0
 * @param {number} length The number of data items to generate
 * @returns {Iterable<number>} A range of incrementing numbers, such as 0, 1, 2, 3, 4
 */
export function* generateSequentialData(length) {
  for (let i = 0; i < length; i++) {
    yield i;
  }
}
