import axios from 'axios';

const api = axios.create({
  baseURL: 'https://bookserver-b2q7.onrender.com/api', 
});

// Helper function to get the token and set the config object
const getConfig = () => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

// Get all books
export const getBooks = async () => {
  try {
    const response = await api.get('/books', getConfig());
    return response.data;
  } catch (err) {
    console.error('Error fetching books', err);
    throw err;
  }
};

// Add a new book
export const addBook = async (bookData) => {
  try {
    const response = await api.post('/books', bookData, getConfig());
    return response.data;
  } catch (err) {
    console.error('Error adding book', err);
    throw err;
  }
};

// Delete a book by ID
export const deleteBook = async (id) => {
  try {
    const response = await api.delete(`/books/${id}`, getConfig());
    return response.data;
  } catch (err) {
    console.error('Error deleting book', err);
    throw err;
  }
};

// Update a book by ID
export const updateBook = async (id, updatedBookData) => {
  try {
    const response = await api.put(`/books/${id}`, updatedBookData, getConfig());
    return response.data;
  } catch (err) {
    console.error('Error updating book', err);
    throw err;
  }
};

export default api