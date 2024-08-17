import { Link } from "react-router-dom";

const Header = () => {
    return (
      <div className="bg-white shadow-md">
        <header className="w-11/12 lg:w-10/12 mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between py-4">
            {/* Order Info */}
            <div className="text-xs hidden md:block lg:flex  text-black p-2 rounded-md mb-4 lg:mb-0 lg:px-4">
              Order Before 17:30, Shipped Today
            </div>
  
            {/* Logo */}
            <div className="flex items-center">
 
              <span className="text-xl font-bold text-gray-800 ml-2">Techayo</span>
            </div>
  
            {/* Search Bar */}
            <div className="flex items-center w-full lg:w-auto space-x-2 bg-gray-200 p-2 rounded-md flex-grow mx-4 mt-4 lg:mt-0 lg:max-w-md">
              <input
                type="text"
                placeholder="Search"
                className="flex-grow bg-transparent outline-none p-1 text-sm lg:text-base"
              />
              <button className="bg-red-500 text-white p-2 rounded-md">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 16l6-6M6 8h14m-8 8l6-6"
                  ></path>
                </svg>
              </button>
            </div>
  
            {/* Icons (Wishlist, Account, Cart) */}
            <div className="flex items-center space-x-4 mt-4 lg:mt-0">
              <a href="#" className="text-gray-600 hover:text-gray-800 text-sm lg:text-base">
                Wishlist
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800 text-sm lg:text-base">
                Account
              </a>
              <a href="#" className="flex items-center space-x-1 text-gray-600 hover:text-gray-800 text-sm lg:text-base">
                <span>Shopping Cart</span>
                <span>$0.00</span>
              </a>
            </div>
          </div>
        </header>
  
        {/* Navigation Bar */}
        <nav className="bg-[#DB2777]">
          <div className="w-11/12 lg:w-10/12 mx-auto flex flex-col lg:flex-row justify-between items-center p-4">
            <div className="text-white font-bold text-sm lg:text-base mb-2 lg:mb-0">ALL CATEGORIES</div>
            <div className="hidden md:flex space-x-6 text-white text-sm lg:text-base">
              <a href="#" className="hover:text-white">About Us</a>
              <a href="#" className="hover:text-white">Collection</a>
              <a href="#" className="hover:text-white">Contact</a>
              <a href="#" className="hover:text-white">Blog</a>
              <a href="#" className="hover:text-white">Shop</a>
              <a href="#" className="hover:text-white">Services</a>
                 <Link className="bg-white px-3 text-black p-1">SingUp</Link>
            </div>
          </div>
        </nav>
      </div>
    );
  };
  
  export default Header;
  