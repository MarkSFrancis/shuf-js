import { shuf } from "./shuf.js";
import { generateRandomData, generateSequentialData } from "./source.js";

// This sample runs for 100 million records, which can be computationally intense
// Feel free to edit these sample sizes for your machine

const randomResult = shuf(generateRandomData(100000000), 5);
console.log("Random sample from random data", randomResult);

const sequentialResult = shuf(generateSequentialData(100000000), 5);
console.log("Random sample from sequential data", sequentialResult);

const smallSequentialResult = shuf(generateSequentialData(3), 5);
console.log("Random sample from small sequential data", smallSequentialResult);
