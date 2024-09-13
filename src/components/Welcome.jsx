import { Link } from 'react-router-dom';
import backgroundImage from '../assets/back.png';
import tiny from '../assets/tiny.jpg';

const Welcome = () => {
  return (
    <div className="relative flex items-center justify-center h-screen bg-gray-100">
      <div className="absolute inset-0 bg-cover bg-center"  style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="relative z-10 flex bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="hidden md:block w-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${tiny})` }}></div>
        
        <div className="p-8 md:w-1/2 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Welcome to the Bookstore</h1>
          <p className="text-gray-600 mb-6">Explore and manage your favorite books with ease.</p>
          
          <div className="space-x-4">
            <Link to="/login">
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
