import { Link } from 'react-router-dom';

const Navbar = () => {
  // const navigate = useNavigate();

  // const handleLogout = () => {
  //   localStorage.removeItem('token');
  //   navigate('/login');
  // };

  return (
    <nav className=" bg-slate-400 p-4 flex justify-between">
      <div className="text-gray-900">
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/dashboard" className="mr-4">Dashboard</Link>
      </div>
      {/* <div>
        <button onClick={handleLogout} className="bg-red-500 text-white py-2 px-4 rounded">
          Logout
        </button>
      </div> */}
    </nav>
  );
};

export default Navbar;
