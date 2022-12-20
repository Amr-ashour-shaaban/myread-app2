import Book from "./book";
function Shelf( {bookshelfTitle ,  books , bookShelf , changeShelf} )
   {
    const booksShelf = books.filter((book)=> book.shelf === bookShelf)
    return ( 
        <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">{bookshelfTitle}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {booksShelf.map((book)=>(
                  <Book key={book.id} book={book} changeShelf={changeShelf} bookShelf={bookShelf} />
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
     );
}

export default Shelf;