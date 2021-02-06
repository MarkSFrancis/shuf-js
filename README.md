# shuf (JS)
A JS implementation of the algorithm behind the UNIX coreutils app [shuf](https://www.mankier.com/1/shuf)

This uses JS [generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators#generator_functions) to get a random small random sample of records from a data set of an unknown, massive size (multiple terabyte data sources will continue to function as expected). 

Each record has an even probability to appear in the output, regardless of the input length. The output will be in a random order.

# Usage
```js
const randomResult = shuf(generateRandomData(100000000), 5);
console.log("Random sample from random data", randomResult);
```