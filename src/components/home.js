import { Link } from "react-router-dom";
import Shelf from "./shelf";
function Home({books, changeShelf}) {
    return ( 
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
                <Shelf bookshelfTitle={"Currently Reading"} books={books} bookShelf={'currentlyReading'} changeShelf={changeShelf}/>
                <Shelf bookshelfTitle={"Want To Read"} books={books} bookShelf={'wantToRead'} changeShelf={changeShelf}/>
                <Shelf bookshelfTitle={'Read'} books={books} bookShelf={'read'} changeShelf={changeShelf}/>
          <div className="open-search">
            <Link to='./search'>Add a book</Link>
          </div>
        </div>
     );
}

export default Home;