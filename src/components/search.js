import { Link, redirect } from "react-router-dom";
import { useEffect , useState } from "react";
import * as BooksAPI from '../BooksAPI';
import Book from './book'
function Search({changeShelf}) {
  const [searchBooks , setSearchBooks] = useState([]);
  const [query , setQuery] = useState('')
    useEffect(()=> {
      if (query) {
        BooksAPI.search(query).then(data => {
          if(data.error) {} else {setSearchBooks(data)}
          })
      }
      }, [query] ); 
      
    return ( 
        <>
        <div className="search-books">
          <div className="search-books-bar">
            <Link
              className="close-search"
           to={'/'}
            >
              Close
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN" 
                value={query}
                onChange={(e)=>setQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
            {searchBooks.map((book)=>(
                  <Book key={book.id} book={book} changeShelf={changeShelf}/>
                ))}
            </ol>
          </div>
        </div>
        </>
     );
}

export default Search;