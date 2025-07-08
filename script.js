/*

PREMISE

This app will allow users to maintain a digital "library" 
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
        throw Error("Expecting 'new' operator when calling constructor")
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

/*
TO UPDATE SHELF DISPLAY
Function: updateDisplay()
    1. Loop through array
    2. For each book in library, add its properties as
    text to HTML card (title, author, pages, read)
    3. Assign id property to data-id attribute of card
    4. Determine icon (thumbs up / down) for read status
    5. Generate random number to determine color of
    book cover and assign bg-image of card
    6. Assign matching style classes to card
    7. Append card to shelf container
*/

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