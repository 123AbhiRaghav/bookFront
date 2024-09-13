import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api'; 

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post('/auth/register', formData);
      navigate('/login'); 
    } catch (err) {
      console.error('Error response', err.response.data);
    }
  };

  return (
    <div className="flex justify-center items-center  h-screen">
      <form onSubmit={handleSubmit} className="bg-gray-100 p-8 border-2 border-black rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Create an Account</h2>
        <div className="mb-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name here "
            className="w-full p-3 border border-gray-950 rounded-lg focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your Email here"
            className="w-full p-3 border border-gray-950 rounded-lg focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="mb-6">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password here"
            className="w-full p-3 border border-gray-950 rounded-lg focus:outline-none focus:border-blue-400"
          />
        </div>
        <button type="submit" className="bg-green-500 text-white py-3 px-4 w-full rounded-lg hover:bg-green-600 transition-all">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
