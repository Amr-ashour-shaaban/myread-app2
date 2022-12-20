import "./App.css";
import { useState , useEffect } from "react";
import Search from "./components/search";
import Home from "./components/home";
import * as BooksAPI from './BooksAPI';
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  const [books , setBooks] = useState([]);
  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };
    getBooks();
  }, []);
  
   const changeShelf = async (book, shelf) => {
    await BooksAPI.update(book, shelf);
    await BooksAPI.getAll().then((res) => {
      setBooks(res);
    }); 
  
  };
  return (
<BrowserRouter>
        <Routes>
          <Route path="/search" element={<Search books={books} changeShelf={changeShelf}/> } />
          
          <Route exact path="/" element={<Home books={books} changeShelf={changeShelf} />}/>
        </Routes>

</BrowserRouter>

  );
}
export default App;
