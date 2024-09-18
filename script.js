// Array Challanges

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

// Object Challanges

const library = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "1984",
    author: "George Orwell",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

// You finished reading all of the books. Set the `read` value for all of them to true. Do not edit the initial object. Set the values using dot notation.

library.forEach((book) => {
  book.status.read = true;
});

console.log(library);

// Destructure the title from the first book and rename the variable to `firstBook`

const { title: firstbook } = library[0];
console.log(firstbook);

// Turn the library object into a JSON string

const libraryJSON = JSON.stringify(library);
console.log(libraryJSON);

// Practice Exercise

// 01. Calculate the average marks of the class

const marks = [85, 97, 44, 37, 76, 60];

// Calculate the sum of all marks
const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);

// Calculate the average
const averageMarks = totalMarks / marks.length;

console.log(averageMarks); // Output: 66.5

// 02. Apply 10% off on the prices array
const prices = [250, 645, 300, 900, 50];

// Apply 10% discount on each item
const discountedPrices = prices.map((price) => price * 0.9);

console.log(discountedPrices); // Output: [225, 580.5, 270, 810, 45]

// Modify the companies array
// Remove the first company
// Replace Uber with Ola
// Add Amazon at the end

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// a. Remove the first company (Bloomberg)
companies.shift();

// b. Replace Uber with Ola
const uberIndex = companies.indexOf("Uber");
if (uberIndex !== -1) {
  companies[uberIndex] = "Ola";
}

// c. Add Amazon at the end
companies.push("Amazon");

console.log(companies);
// Output: ["Microsoft", "Ola", "Google", "IBM", "Netflix", "Amazon"]
