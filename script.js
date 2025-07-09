/*
This code allows users to maintain (add/remove)
a digital 'library' of books. 
*/

// Stores Book objects
const library = [];

// Constructor to create a Book object
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

// Calls constructor and stores new Book in library
function addBook(title, author, pages, read) {
    const pagesAsInt = +pages;
    const book = new Book(title, author, pagesAsInt, read);
    library.push(book);
}

// Takes submitted form data to create and display Book object
const bookForm = document.querySelector("#add-book-form");

bookForm.addEventListener("submit", (e) => {
    e.preventDefault(); //Prevent default form submission

    const bookData = new FormData(bookForm);

    addBook(bookData.get('title'), 
            bookData.get('author'),
            bookData.get('pages'),
            bookData.get('read'));
    
    updateDisplay(library.at(-1));
})

// Stores book cover styles for rendering
const styles = [
    {
        bg: 'url("assets/book-r.png")',
        color: '#B77B82'
    },
    {
        bg: 'url("assets/book-g.png")',
        color: '#858E85'
    },
    {
        bg: 'url("assets/book-db.png")',
        color: '#837A76'
    }
]

// Renders Book object on client's browser
function updateDisplay(book) {

    // Creates container to hold book cover and 'editable' elements
    const card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('data-id', book.id);

    // Creates read status shown over book cover
    const readStatus = document.createElement('p');
    readStatus.classList.add('read-status');
    readStatus.textContent = book.read ? 'didst read' : 'didst not read';
    
    card.appendChild(readStatus);

    // Creates side bar (read status toggle, remove book button)
    const sidebar = document.createElement('div');
    sidebar.classList.add('side-bar');

    const toggleRead = document.createElement('div');

    const thumbUp = document.createElement('img');
    thumbUp.src = 'assets/thumb-up.png';
    thumbUp.alt = 'Thumbs up icon';
    thumbUp.classList.add('thumb-up');

    const thumbDown = document.createElement('img');
    thumbDown.src ='assets/thumb-down.png';
    thumbDown.alt = 'Thumbs down icon';
    thumbDown.classList.add('thumb-down');

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

    // Creates actual book cover (title, author, page count)
    const cover = document.createElement('div');
    cover.classList.add('cover');

    const title = document.createElement('h2')
    title.textContent = book.title;

    const author = document.createElement('p')
    author.textContent = book.author;

    const pages = document.createElement('p')
    pages.textContent = `${book.pages} pages`;

    cover.appendChild(title);
    cover.appendChild(author);
    cover.appendChild(pages);
    card.appendChild(cover);

    // Creates event listener for editable elements
    card.addEventListener("click", (e) => {
        const id = card.getAttribute('data-id');
        const clicked = e.target;

        // // Listens to cover click and changes color
        // if (clicked.classList.contains('cover')) {
        //     const option = Math.floor(Math.random() * 3);
        //     console.log(option);
        //     console.log(styles[option]);
        //     clicked.style.backgroundImage = styles[option].bg;
        //     clicked.style.color = styles[option].color;
        // } else 

        // Listens to remove book if 'x' clicked
        if (clicked.tagName === 'BUTTON') {
            removeBook(id);
            card.remove();

        // Listens to toggle read status
        } else if (
            clicked.tagName === 'IMG' 
            && clicked.classList.contains('inactive')) 
        {
            clicked.classList.remove('inactive');

            if (clicked.classList.contains('thumb-up')) {
                card.querySelector('.thumb-down')
                    .classList.add('inactive');
                card.querySelector('.read-status').textContent = 'didst read';
            } else {
                card.querySelector('.thumb-up')
                    .classList.add('inactive');
                    card.querySelector('.read-status').textContent = 'didst not read';
            }
            setRead(id); 
        }
    })

    // Adds book to parent container
    const shelf = document.querySelector('.container');
    shelf.appendChild(card);
}

// Toggles read status of Book object
function setRead(id) {
    const index = library.findIndex((item) => item.id === id);
    library[index].read = !library[index].read; 
}

// Removes Book object from library
function removeBook(id) {
    const index = library.findIndex((item) => item.id === id);
    library.splice(index, 1);
}

// Adds sample Books to library
addBook('Romeo & Juliet', 'William Shakespeare', '432', true);
updateDisplay(library.at(0))
addBook('Aeneid', 'Virgil', '496', false);
updateDisplay(library.at(1))
addBook('Letters of a Stoic', 'Seneca', '254', true);
updateDisplay(library.at(2))
