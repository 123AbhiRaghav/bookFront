import  { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {getBooks,addBook,deleteBook,updateBook} from '../services/api'; 

const Dashboard = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    price: '',
    description: '',
    category: ''
  });
  const [editingBook, setEditingBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const booksData = await getBooks(); 
        setBooks(booksData);
      } catch (err) {
        console.error("Error fetching books",err);
      }
    };

    fetchBooks();
  }, []);

  const handleAddBook = async (e) => {
    e.preventDefault();
    try {
      await addBook( newBook); 
      setNewBook({ title: '', author: '', price: '', description: '', category: '' });
      const booksData = await getBooks(); 
      setBooks(booksData);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteBook = async (id) => {
    try {
      await deleteBook(id); 
      const booksData = await getBooks();
      setBooks(booksData);
    } catch (err) {
      console.error("error deleting", err);
    }
  };

  const handleEditBook = async (book) => {
    setEditingBook(book);
  };

  const handleUpdateBook = async (e) => {
    e.preventDefault();
    try {
      await updateBook(editingBook._id, editingBook); 
      setEditingBook(null);
      const booksData = await getBooks(); 
      setBooks(booksData);
    } catch (err) {
      console.error("error updating book", err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); 
    navigate('/login');
  };

  return (
    <div className="relative min-h-screen p-4 bg-gray-100">
    <button
      onClick={handleLogout}
      className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded"
    >
      Logout
    </button>

    <div className="flex flex-col items-center mt-8">
      <h1 className="text-2xl font-bold mb-4">Manage Your Books</h1>

      <form onSubmit={handleAddBook} className="bg-white p-8 rounded shadow-md mb-6 w-full max-w-md border border-black">
        <h2 className="text-xl font-semibold mb-4">Add a New Book</h2>
        <input
          type="text"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
          placeholder="Title"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          required
        />
        <input
          type="text"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
          placeholder="Author"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          required
        />
        <input
          type="number"
          value={newBook.price}
          onChange={(e) => setNewBook({ ...newBook, price: e.target.value })}
          placeholder="Price"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          required
        />
        <input
          type="text"
          value={newBook.description}
          onChange={(e) => setNewBook({ ...newBook, description: e.target.value })}
          placeholder="Description"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <input
          type="text"
          value={newBook.category}
          onChange={(e) => setNewBook({ ...newBook, category: e.target.value })}
          placeholder="Category"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add Book
        </button>
      </form>

      {editingBook && (
        <form onSubmit={handleUpdateBook} className="bg-white p-8 rounded shadow-md w-full max-w-md border border-black">
          <h2 className="text-xl font-semibold mb-4">Edit Book</h2>
          <input
            type="text"
            value={editingBook.title}
            onChange={(e) => setEditingBook({ ...editingBook, title: e.target.value })}
            placeholder="Title"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            required
          />
          <input
            type="text"
            value={editingBook.author}
            onChange={(e) => setEditingBook({ ...editingBook, author: e.target.value })}
            placeholder="Author"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            required
          />
          <input
            type="number"
            value={editingBook.price}
            onChange={(e) => setEditingBook({ ...editingBook, price: e.target.value })}
            placeholder="Price"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            required
          />
          <input
            type="text"
            value={editingBook.description}
            onChange={(e) => setEditingBook({ ...editingBook, description: e.target.value })}
            placeholder="Description"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <input
            type="text"
            value={editingBook.category}
            onChange={(e) => setEditingBook({ ...editingBook, category: e.target.value })}
            placeholder="Category"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Update Book
          </button>
        </form>
      )}

      <h2 className="text-xl font-semibold mb-4">Book List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded shadow-md">
          <thead>
            <tr className='bg-gray-200'>
              <th className="border-b px-4 py-2">Title</th>
              <th className="border-b px-4 py-2">Author</th>
              <th className="border-b px-4 py-2">Price</th>
              <th className="border-b px-4 py-2">Description</th>
              <th className="border-b px-4 py-2">Category</th>
              <th className="border-b px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
              {books.map((book) => (
                <tr key={book._id} className="text-center border-b">
                  <td className="py-2 px-4">{book.title}</td>
                  <td className="py-2 px-4">{book.author}</td>
                  <td className="py-2 px-4">${book.price}</td>
                  <td className="py-2 px-4">{book.description}</td>
                  <td className="py-2 px-4">{book.category}</td>
                  <td className="py-2 px-4">
                    <button
                      onClick={() => handleEditBook(book)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteBook(book._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
        </table>
      </div>
    </div>
  </div>
    );
  };

  export default Dashboard;

