let books = localStorage.getItem('books');
if (books == null) bookObj = [];
else bookObj = JSON.parse(books);
showTable(bookObj);
//constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

function Display(book) {
}

//add methods to display object prototype
Display.prototype.add = function (book) {
    let tableBody = document.getElementById('tableBody');
    tableBody.innerHTML += `
    <tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>
    `;

}
Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}
Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2) return false;
    else return true;
}
Display.prototype.show = function (status, alertMessage) {
    let message = document.getElementById('message');
    message.innerHTML = `
    <div class="alert alert-${status} alert-dismissible fade show" role="alert">
    <strong>Message: </strong> ${alertMessage}.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;

    setTimeout(() => {
        message.innerHTML = '';
    }, 3000);

}

// Add submit event listener to libraryForm 
let libraryForm = document.getElementById('libraryForm');

libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {



    e.preventDefault();
    console.log('You have submitted the form');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;

    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');
    let type;

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }

    let book = new Book(name, author, type);


    console.log(book);
    let display = new Display(book);

    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show("success", "Data added successfully");

        //adding the data to the localStorage
        let books = localStorage.getItem('books');
        if (books == null) bookObj = [];
        else bookObj = JSON.parse(books);
        bookObj.push(book);
        localStorage.setItem('books', JSON.stringify(bookObj));
    }
    else display.show("danger", 'Data cannot be added due to some failure');

}
function showTable(bookObj) {
    let tableBody = document.getElementById('tableBody');
    bookObj.forEach((element) => {
        tableBody.innerHTML += `
        <tr>
                        <td>${element.name}</td>
                        <td>${element.author}</td>
                        <td>${element.type}</td>
                    </tr>
        `;
    });
}

