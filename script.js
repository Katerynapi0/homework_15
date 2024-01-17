'use strict'
// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.

// Наприклад:

// const array = [1, 2, 3, 4, 5, 6, 7];
// removeElement(array, 5 );
// console.log(array);
// // Результат: [1, 2, 3, 4, 6, 7]



const array = [1, 2, 3, 4, 5, 6, 7]; // < --- Наш масив елементів
function removeElement(arr, item){
  const indexItem = arr.indexOf(item); // < --- Знаходимо індекс нашого елемента в масиві
  arr.splice(indexItem, 1) // < --- Видаляємо елемент методом splice з нашого масиву
};
removeElement(array, 5) // < --- Викликаємо функцію для видалення 5-ки з масиву
console.log(array); // < --- Вивід зміненого масиву