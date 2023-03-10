function Book({book , changeShelf }) {
  const updateShelf = (e) =>{
    changeShelf(book , e.target.value)
  }
    return ( 
            <li>
              <div className="book">
                <div className="book-top">
                  <div
                    className="book-cover"
                      style={
                      {width: 128,
                      height: 193,
                      backgroundImage:`url(${(book.imageLinks.smallThumbnail) ? (book.imageLinks.smallThumbnail): null})`
                      }
                    }
                  ></div>
                  <div className="book-shelf-changer">
                    <select 
                    onChange={updateShelf} 
                    value={book.shelf ? book.shelf : 'none'}
                    >
                      <option value="moveTo" disabled >
                        Move to...
                      </option>
                      <option value="currentlyReading">
                        Currently Reading
                      </option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
              </div>
            </li>
     );
}

export default Book;