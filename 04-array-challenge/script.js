// Challange 1

const arr = [1, 2, 3, 4, 5];

arr.reverse();
arr.unshift(6);
arr.push(0);

console.log(arr);

// Challange 2

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

const arr3 = [...arr1, ...arr2];

const uniqueArray3 = arr3.filter((item, index) => arr3.indexOf(item) === index);

console.log(uniqueArray3);
