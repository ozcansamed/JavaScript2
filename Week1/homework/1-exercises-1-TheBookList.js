'use strict';

console.log('EXERCISE 1 - The Book List');

/* EXERCISE-1 =>
1=> Iterate through the array of books.
2=> For each book, create a p element with the book title and author and append it to the page.
3=> Use an <ul> and <li> to display the books.
4=> Add an <img> to each book that links to a URL of the book cover.
5=> Change the style of the book depending on whether you have read it (green) or not (red).   */

const myBooks = [
  {
    title: 'The Count Of Monte Cristo',
    author: 'Alexandre Dumas',
    alreadyRead: true,
  },
  {
    title: 'The Little Prince',
    author: 'Antoine de Saint-Exupéry',
    alreadyRead: false,
  },
  {
    title: 'The Hunchback of Notre Dame',
    author: 'Victor Hugo',
    alreadyRead: true,
  },
];

// Create ul:
const ul = document.createElement('ul');
document.body.appendChild(ul);

// Iterate through the array of books.
for (let i = 0; i < myBooks.length; i++) {
  // Inside the ul create li:
  const li = document.createElement('li');
  ul.appendChild(li);

  // Inside the li create p and img:
  const pEl = document.createElement('p');
  pEl.innerHTML = myBooks[i].title + ' by ' + myBooks[i].author;
  li.appendChild(pEl);

  // Pick the img with if-else statement:
  const imgEl = document.createElement('img');
  if (myBooks[i].title === 'The Count Of Monte Cristo') {
    imgEl.src = 'https://www.eflbooks.co.uk/bookimages/9786180512083.jpg';
    imgEl.alt = 'Book cover of The Count of Monte Cristo';
  } else if (myBooks[i].title === 'The Little Prince') {
    imgEl.src =
      'https://d2kk6b9ui4akzl.cloudfront.net/media/catalog/product/cache/image/700x560/e9c3970ab036de70892d86c6d221abfe/9/7/9781509811304_1.jpg';
    imgEl.alt = 'Book cover of The Little Prince';
  } else if (myBooks[i].title === 'The Hunchback of Notre Dame') {
    imgEl.src = 'https://prodimage.images-bn.com/pimages/2940015974898_p0_v1_s550x406.jpg';
    imgEl.alt = 'Book cover of The Hunchback of Notre Dame';
  }
  imgEl.style.width = '250px';
  imgEl.style.height = '350px';
  li.appendChild(imgEl);

  // Change the style of the book depending on whether you have read it (green) or not (red).
  if (myBooks[i].alreadyRead === true) {
    pEl.style.color = 'green';
  } else {
    pEl.style.color = 'red';
  }
}
//   =====  FINISHED =====

/* Instead of writing like in the below, I chose the if-else statement in the above: 
let bookImg1 = document.createElement('img');
bookImg1.src = 'https://www.eflbooks.co.uk/bookimages/9786180512083.jpg';
bookImg1.alt = 'Book cover of The Count of Monte Cristo';
bookImg1.style.width = '250px';
bookImg1.style.height = '350px';
document.body.appendChild(bookImg1);

let bookImg2 = document.createElement('img');
bookImg2.src =
  'https://d2kk6b9ui4akzl.cloudfront.net/media/catalog/product/cache/image/700x560/e9c3970ab036de70892d86c6d221abfe/9/7/9781509811304_1.jpg';
bookImg2.alt = 'Book cover of The Little Prince';
bookImg2.style.width = '250px';
bookImg2.style.height = '350px';
document.body.appendChild(bookImg2);

let bookImg3 = document.createElement('img');
bookImg3.src = 'https://prodimage.images-bn.com/pimages/2940015974898_p0_v1_s550x406.jpg';
bookImg3.alt = 'Book cover of The Hunchback of Notre Dame';
bookImg3.style.width = '250px';
bookImg3.style.height = '350px';
document.body.appendChild(bookImg3);
*/
