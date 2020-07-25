'use strict';

let readingMaterial = [
  { title: 'Zahir', author: 'Paulo Coelho', alreadyRead: true },
  { title: 'The Outsider', author: 'Stephen King', alreadyRead: false },
  { title: 'Alchemist', author: 'Paulo Coelho', alreadyRead: true },
];

for (let books of readingMaterial) {
  console.log(`${books.title} by ${books.author}`);
  if (books.alreadyRead === true) {
    console.log(`You already read ${books.title}`);
  } else {
    console.log(`You still need to read "${books.title}"`);
  }
}
