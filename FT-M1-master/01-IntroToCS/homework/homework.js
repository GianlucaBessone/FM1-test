"use strict";

function BinarioADecimal(num) {
  // tu codigo aca
  const binary = num.toString().split("");
  const xreverseBinary = binary.reverse();
  let acc = 0;
  const xtransform = binary.map((v, k) => (acc += v * Math.pow(2, k)), acc);
  return acc;
}

function DecimalABinario(num) {
  // tu codigo aca
  let acc = "";
  while (num !== 0) {
    acc = (num % 2) + acc;
    num = Math.floor(num / 2);
  }
  return acc;
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
