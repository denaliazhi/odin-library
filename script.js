/*

PREMISE

This app will allow users to maintain a digital 'library' 
of books. Users will be able to add/remove records to/from 
the library. Each record of a book will show its title, 
author, page count, and read status (whether the user has
read the book).

*/

// PSEUDOCODE
// Javascript:

/*
TO STORE BOOKS
Array: library
    Represent library as an array in which to store book objects
*/
const library = [];

/*
TO CREATE A BOOK
Constructor: Book()
    1. Params: title (str), author (str), pages (int), read (bool)
    2. Store arguments as object properties of same names
    3. Generate unique ID for book and assign to id property
*/
function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error('Expecting "new" operator when calling constructor')
    }
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

/*
TO ADD A BOOK TO LIBRARY
Function: addBook()
    1. Listen for 'Add Book' button click 
    2. Retrieve the form inputs for title, author, 
    page count, and read status
    3. Call Book() with form inputs as args (type cast)
    4. Push book object to library array
    4. Call updateDisplay()
*/
function addBook(title, author, pages, read) {
    const pagesAsInt = +pages;
    const book = new Book(title, author, pagesAsInt, read);
    library.push(book);
}

/*
TO UPDATE SHELF DISPLAY
Function: updateDisplay()
    1. Loop through array
    2. For each book in library, add its properties as
    text to HTML card (title, author, pages)
    3. Assign id property to data-id attribute of card
    4. Determine icon (thumbs up / down) for read status
    5. Generate random number to determine color of
    book cover and assign bg-image of cover
    6. Assign matching style classes to card
    7. Append card to shelf container
*/

function updateDisplay() {
    for (const book of library) {

        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('data-id', book.id);

        const readStatus = document.createElement('p');
        readStatus.classList.add('read-status');
        readStatus.textContent = book.read ? 'didst read' : 'didst not read';
        
        card.appendChild(readStatus);

        // -- Side bar components --

        const sidebar = document.createElement('div');
        sidebar.classList.add('side-bar');

        const toggleRead = document.createElement('div');

        const thumbUp = document.createElement('img');
        thumbUp.src = 'assets/thumb-up.png';
        thumbUp.alt = 'Thumbs up icon';

        const thumbDown = document.createElement('img');
        thumbDown.src ='assets/thumb-down.png';
        thumbDown.alt = 'Thumbs down icon';

        if (book.read) {
            // "not read" icon gets lower opacity
            thumbDown.classList.add('inactive'); 
        } else {
            thumbUp.classList.add('inactive');
        }

        const remove = document.createElement('button');
        remove.textContent = 'x';

        toggleRead.appendChild(thumbUp);
        toggleRead.appendChild(thumbDown);
        sidebar.appendChild(toggleRead);
        sidebar.appendChild(remove);
        card.appendChild(sidebar);

        // -- Book cover components --
        const cover = document.createElement('div');
        cover.classList.add('cover');

        const title = document.createElement('h2')
        title.textContent = book.title;

        const author = document.createElement('p')
        author.textContent = book.author;

        const pages = document.createElement('p')
        pages.textContent = book.pages;

        cover.appendChild(title);
        cover.appendChild(author);
        cover.appendChild(pages);
        card.appendChild(cover);

        // Add book to shelf
        const shelf = document.querySelector('.container');
        shelf.appendChild(card);
    }
}

addBook('Hello', 'Goodbye', '123', true);
addBook('Howdy', 'Partner', '246', false);

updateDisplay();

/*
TO READ/UNREAD A BOOK
Prototype: Book.prototype
   Function: setRead()
   1. Listen for thumbs up / down button click
   2. Invert object read property
   3. Change read status icon style
*/

/*
TO REMOVE A BOOK
Function: removeBook()
    1. Listen for x button click
    2. Get data-id of book on which event occurred
    3. Remove element from HTML
    4. Traverse array and remove element with matching id
*/