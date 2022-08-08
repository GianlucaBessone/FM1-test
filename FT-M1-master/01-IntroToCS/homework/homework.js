"use strict";

function BinarioADecimal(num) {
  const binary = num.toString().split(""), //covierte num a array
    xreverseBinary = binary.reverse();
  let acc = 0;
  const xtransform = binary.map((v, k) => (acc += v * Math.pow(2, k)), acc);
  return acc;
}

function DecimalABinario(num) {
  let result = [];
  while (num > 0) {
    result.push(num % 2);
    num = Math.floor(num / 2);
  }

  return result.reverse().join("");
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
