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
