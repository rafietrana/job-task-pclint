import { Link } from "react-router-dom";
import { FaSearch, FaHeart, FaUser, FaShoppingCart } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

// Category data
const categories = [
  { category: "Electronics" },
  { category: "Accessories" },
  { category: "Computers" },
  { category: "Fitness" },
  { category: "Home Appliances" },
  { category: "Personal Care" },
  { category: "Outdoor" },
];

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);

  const handleLogoutBtn = () => {
    logOut();
  };

  return (
    <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white sticky top-0 z-50 shadow-lg">
      {/* Header Content */}
      <header className="w-full lg:w-10/12 mx-auto flex flex-col lg:flex-row items-center justify-between py-4 px-4 lg:px-0">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-3xl font-bold text-white">Techayo</span>
        </div>

        {/* Search Bar */}
        <div className="relative flex items-center w-full lg:w-auto space-x-2 bg-white p-2 rounded-full mx-4 mt-4 lg:mt-0 lg:max-w-md shadow-lg">
          <input
            type="text"
            placeholder="Search for products..."
            className="flex-grow bg-transparent outline-none p-2 text-sm lg:text-base rounded-full"
          />
          <button className="absolute right-2 bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition duration-300">
            <FaSearch className="w-5 h-5" />
          </button>
        </div>

        {/* Icons (Wishlist, Account, Cart) */}
        <div className="flex items-center space-x-6 mt-4 lg:mt-0">
          <Link
            to="/wishlist"
            className="text-white hover:text-yellow-300 flex items-center space-x-1 transition duration-300"
          >
            <FaHeart className="text-yellow-400" />
            <span>Wishlist</span>
          </Link>
          <Link
            to="/account"
            className="text-white hover:text-gray-300 flex items-center space-x-1 transition duration-300"
          >
            <FaUser className="text-gray-200" />
            <span>Account</span>
          </Link>
          <Link
            to="/cart"
            className="flex items-center space-x-1 text-white hover:text-gray-300 transition duration-300"
          >
            <FaShoppingCart className="text-gray-200" />
            <span>$0.00</span>
          </Link>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="bg-white">
        <div className="w-full lg:w-10/12 mx-auto flex flex-col lg:flex-row justify-between items-center p-4">
          {/* Dropdown Button */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!isDropdownOpen)}
              className="text-red-600 font-bold text-sm lg:text-base bg-transparent  rounded-full px-4 py-2 hover:text-red-700 transition duration-300"
            >
              All Categories
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <ul className="absolute left-0 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                {categories.map((item, index) => (
                  <li
                    key={index}
                    className="hover:bg-red-100 hover:text-red-600 transition duration-300"
                  >
                    <Link
                      to={`/category/${item.category.toLowerCase()}`}
                      className="block px-4 py-2 text-gray-700"
                    >
                      {item.category}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="flex space-x-6 text-red-600 text-sm lg:text-base">
            <Link to="/" className="hover:text-red-700 transition duration-300">
              Home
            </Link>
            <Link
              to="/collection"
              className="hover:text-red-700 transition duration-300"
            >
              Collection
            </Link>
            <Link
              to="/contact"
              className="hover:text-red-700 transition duration-300"
            >
              Contact
            </Link>
            <Link
              to="/blog"
              className="hover:text-red-700 transition duration-300"
            >
              Blog
            </Link>
            <Link
              to="/shop"
              className="hover:text-red-700 transition duration-300"
            >
              Shop
            </Link>
            <Link
              to="/services"
              className="hover:text-red-700 transition duration-300"
            >
              Services
            </Link>
          </div>
          <div className="flex space-x-4 mt-4 lg:mt-0">
            {user ? (
              <button
                onClick={handleLogoutBtn}
                className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition duration-300"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition duration-300"
              >
                Login
              </Link>
            )}

            <Link
              to="/singup"
              className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition duration-300"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
