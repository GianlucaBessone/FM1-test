"use strict";
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  // const unOrderList = [...array];
  if (array.length <= 1) return array;
  let pivot = array[0],
    left = [],
    right = [];
  const result = [];
  for (var i = 1; i < array.length; i++) {
    array[i] <= pivot ? left.push(array[i]) : right.push(array[i]);
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  const originArr = [...array];
  if (originArr.length <= 1) return originArr;
  const mid = Math.floor(originArr.length / 2); //separo el array en la mejor mitad posible
  // Recursive calls
  const left = mergeSort(originArr.slice(0, mid)); //recursiva de la primet mitad del array
  const right = mergeSort(originArr.slice(mid)); //recursiva de la segunda mitad del array
  console.log(left, right);
  return merge(left, right); //retorna llamando a merge pasando "left" y "right" como parametro
}
function merge(left, right) {
  const sortedArr = []; // array para elem. ordenados
  while (left.length && right.length) {
    //recorre ambos arrays
    //Inserta en sortedArr los elementos más pequeños (ordenados )
    //compara el primer indice de ambos arrays
    left[0] <= right[0]
      ? sortedArr.push(left.shift())
      : sortedArr.push(right.shift());
  }
  //concatena todos los arrays
  return [...sortedArr, ...left, ...right];
}
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
