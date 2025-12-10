let booksContainer = document.querySelector('#books-container');

let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, read){
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

//Initial books in Library
addBookToLibrary('The Giver', 'Lois Lowry', '240', true);
addBookToLibrary('The Illustrated Man', 'Ray Bradbury', '304', true);
addBookToLibrary('A Court of Thorns and Roses', 'Sara J. Maas', '448', false);



function displayBooks(){
    booksContainer.innerHTML = '';

    const RED = '#eb4034';
    const GREEN = '#72e359';

    myLibrary.forEach(book => {

        //Book card construction
        const bookCard = document.createElement('div');
        const bookTitle = document.createElement('h3');
        const bookAuthor = document.createElement('p');
        const bookPages = document.createElement('p');
        const readStatusBtn = document.createElement('button');
        const favIcon = document.createElement('button');
        const removeBookBtn = document.createElement('button');
        const bookFooter = document.createElement('div');

        bookTitle.textContent = book.title;
        bookAuthor.textContent = book.author;
        bookPages.textContent = `${book.pages} Pages`;
        favIcon.innerHTML = 
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
            </svg>`;
        removeBookBtn.textContent = 'x';
        readStatusBtn.style.backgroundColor = book.read ? GREEN : RED;

        bookCard.classList.add('book-card-container');
        bookTitle.classList.add('book-title');
        bookAuthor.classList.add('book-author');
        bookPages.classList.add('book-pages');
        readStatusBtn.classList.add('read-status-toggle-btn');
        favIcon.classList.add('fav-toggle-btn');
        removeBookBtn.classList.add('remove-book-btn');
        bookFooter.classList.add('book-footer');

        bookFooter.append(bookPages, favIcon);

        bookCard.appendChild(readStatusBtn);
        bookCard.appendChild(removeBookBtn);
        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookAuthor);
        bookCard.appendChild(bookFooter);

        booksContainer.appendChild(bookCard);

        readStatusBtn.addEventListener('click', () => {
            book.read = !book.read;
            displayBooks();
        });

        removeBookBtn.addEventListener('click', () => {
            myLibrary = myLibrary.filter(b => {
                return b.id !== book.id;
            });
            displayBooks();
        });
    }); 
}

displayBooks();

console.log(myLibrary);