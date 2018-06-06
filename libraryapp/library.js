library = {
    books: [],
    addBook: function(bookTitle, author, pages, read) {
        this.books.push({bookTitle: bookTitle, author: author, pages: pages, read: read
        })
        this.displayBooks();
    },
    displayBooks: function() {
        if (this.books.length === 0) {
            console.log('list is empty')
        } else {
            for (let i = 0; i < this.books.length; i++) {
                let bookLine =""
                if (this.books[i].read === 'false') {
                    console.log('( )',this.books[i]);
                } else {
                    console.log('(Y)', this.books[i]);
                }
            }
        }
    },
    deleteBook: function(position) {
        this.books.splice(position,1);
        localStorage.setItem('issues', JSON.stringify(issues));
       },
}
//Button handler object
var handlers = {
    addBook: function(e) {
        //not defining and object
        // let bookTitleInput = document.getElementById('bookTitleInput');
        // let authorInput = document.getElementById('authorInput');
        // let pagesInput = document.getElementById('pagesInput');
        // let readInput = document.getElementById('checkRead');
        // if (readInput.checked == true) {
        //     readInput = 'true';
        // } else {
        //     readInput = 'false'
        // }
        // library.addBook(bookTitleInput.value,authorInput.value,pagesInput.value,readInput)
        // bookTitleInput.value = "";
        // authorInput.value = "";
        // pagesInput.value = "";
        // readInput.checked = false;
        // view.displayBooks();
        
        
        //defining and object book
        let bookTitleInput = document.getElementById('bookTitleInput').value;
        let authorInput = document.getElementById('authorInput').value;
        let pagesInput = document.getElementById('pagesInput').value;
        let readInput = document.getElementById('checkRead').value;
        if (readInput.checked == true) {
            readInput = 'true';
        } else {
            readInput = 'false'
        }
        let mybook = {
            bookTitle: bookTitleInput,
            author: authorInput,
            pages: pagesInput,
            read: readInput
        }
        if (localStorage.getItem('thebooks') === null) {
            var thebooks = [];
            thebooks.push(mybook);
            localStorage.setItem('thebooks', JSON.stringify(thebooks));
          } else {
            var thebooks = JSON.parse(localStorage.getItem('thebooks'));
            thebooks.push(mybook);
            localStorage.setItem('thebooks', JSON.stringify(thebooks));
          }
        
        document.getElementById("inputForm").reset();
        view.displayBooks();
    },
        //Local storage
        
    deleteDisplayBook: function(position) {
        var thebooks = JSON.parse(localStorage.getItem('thebooks'))
        thebooks.splice(position,1)
        localStorage.setItem('thebooks', JSON.stringify(thebooks));
        view.displayBooks();
    }
}

//View object to display list of books
var view = {
    displayBooks: function() {
        let thebooks = JSON.parse(localStorage.getItem('thebooks'));
        let bookList = document.getElementById('bookList');
        bookList.innerHTML = '';
        for (let i = 0; i < thebooks.length; i++) {
            let bookTitle = thebooks[i].bookTitle;
            let bookAuthor = thebooks[i].author;
            let bookPages = thebooks[i].pages;
            let bookRead = thebooks[i].read;
            
            bookList.innerHTML += '<div class="row">'+
                                  '<table class="table">'+
                                  '<tr class="deleteBookInput">'+
                                    '<td>' + bookTitle + '</td>'+
                                    '<td>' + bookAuthor + '</td>'+ 
                                    '<td>' + bookPages + '</td>'+
                                    '<td>' + bookRead + '</td>'+
                                    '<td><a href="#" class="btn btn-danger" onclick="handlers.deleteDisplayBook(\''+i+'\')">Delete</a></td>'+
                                  '</tr>'+
                                  '</table>'+
                                  '</div>'
        }
     }
}

