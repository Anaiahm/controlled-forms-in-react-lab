import { useState } from 'react';
import '../../App.css'
import '../../index.css'

const Bookshelf = () => {
    const [books, setBooks] = useState([]);
    const [newBook, setNewBook] = useState({
      title: '',
      author: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewBook((prevNewBook) => ({
          ...prevNewBook,
          [name]: value
        }));
      };

      const handleSubmit = (e) => {
        e.preventDefault(); 
        setBooks((prevBooks) => [...prevBooks, newBook]);
        setNewBook({ title: '', author: '' });
        };

      const handleAddBook = () => {
        if (newBook.title && newBook.author) {
          setBooks((prevBooks) => [...prevBooks, newBook]);
          setNewBook({ title: '', author: '' });
        } else {
          console.log('Please fill out both the title and the author');
        }
      };

    return (
        <div className="bookshelfDiv">
        <div className="formDiv">
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={newBook.title}
            onChange={handleInputChange}
            placeholder="Enter book title"
          />
        </div>
        <div>
          <label>Author:</label>
          <input
            type="text"
            name="author"
            value={newBook.author}
            onChange={handleInputChange}
            placeholder="Enter book author"
          />
        </div>

        <button type="submit">Add Book</button>
      </form>
        </div>
        <div className="bookCardsDiv">
            {books.length === 0 ? (
          <p>No books added yet.</p>
        ) : (
          books.map((book, index) => (
            <div key={index} className="book-card">
              <h3>{book.title}</h3>
              <p>by {book.author}</p>
            </div>
          ))
        )}
        </div>
        </div>
        )
        };

export default Bookshelf