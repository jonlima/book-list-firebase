import Book from '../components/Book.jsx';
import Header from '../components/Header.jsx';
import {useDispatch, useSelector} from 'react-redux';
import {fetchBooks, selectBooks} from '../store/booksSlice.js';
import { useEffect } from 'react';

function BooksPage() {
  const pageTitle = "📖 Book List with Router, Redux & Firebase";
  const dispatch = useDispatch();
  const books = useSelector(selectBooks).books;
  const bookStatus = useSelector(selectBooks).status;

  useEffect(() => {
    if (bookStatus == 'idle') {
      dispatch(fetchBooks());
    }
  }, []);

  
    return (
      <>
        <div className="container">
            <Header pageTitle={pageTitle} />
            <div className="books-container">
              { bookStatus == 'loading' ?
                'Loading...' :
                <div className="books-list">
                    
                    {books.map(book => 
                    
                    <Book key={book.id} book={book}  />
                    
                    )}

                </div>
              }
            </div>
        </div>
      </>
    )
  }
  
  export default BooksPage
  