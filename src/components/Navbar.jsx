import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, token, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white">
      <h2 className="text-xl font-bold">FoodApp</h2>

      <div className="flex gap-4">
        <Link to="/" className="hover:text-green-400">Home</Link>
        <Link to="/plates" className="hover:text-green-400">Plates</Link>
        <Link to="/profile" className="hover:text-green-400">Profile</Link>
      </div>

      <div className="flex items-center gap-3">
        {token ? (
          <>
            <span>{user?.name}</span>
            <button
              onClick={handleLogout}
              className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:text-green-400">Login</Link>
            <Link to="/register" className="hover:text-green-400">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}