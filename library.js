class Library {
    constructor(List) {
        this.List = List;
        this.issueBooks = {};
    }
    getBookList() {
        this.List.forEach(element => {
            console.log(element);
        });
    }
    issueBook(bookName, user) {
        if (this.issueBooks[bookName] == undefined) {
            this.issueBooks[bookName] = user;
            console.log(`${bookName} has been issued to ${user}`);
        }
        else console.log("The book has already been issued.");
    }
    returnBook(bookName) {
        if (this.issueBooks[bookName] == undefined) console.log("This book was never issued");
        else {
            delete this.issueBooks[bookName];
            console.log("The book has been returned");
        }
    }



}
let lib = new Library(['Road Not Taken', "How to make friend and influence people", "Wonderlust", "Class 12th Physics NCERT"]);
lib.getBookList();
lib.issueBook('Road Not Taken', 'Ashwani');
lib.issueBook("How to make friend and influence people", 'Ashwani');
lib.issueBook('Road Not Taken', 'Rohan');
lib.returnBook("Wonderlust");
lib.returnBook('Road Not Taken');
lib.issueBook('Road Not Taken',"Rohan");
lib.issueBook("Class 12th Physics NCERT","Ashwani");
lib.returnBook("Class 12th Physics NCERT");
lib.issueBook("Class 12th Physics NCERT",'Varsha');
