import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 flex gap-4">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          isActive ? "text-white font-bold" : "text-gray-300 hover:text-white"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/plates"
        className={({ isActive }) =>
          isActive ? "text-white font-bold" : "text-gray-300 hover:text-white"
        }
      >
        Plates
      </NavLink>

      <NavLink
        to="/profile"
        className={({ isActive }) =>
          isActive ? "text-white font-bold" : "text-gray-300 hover:text-white"
        }
      >
        Profile
      </NavLink>
    </nav>
  );
}

export default Navbar;