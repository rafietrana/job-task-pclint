import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaCcVisa, FaCcMastercard, FaPaypal, FaChevronRight } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
            {/* Top Section */}
            <div className="w-full lg:w-10/12 mx-auto py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* About Us */}
                <div>
                    <h3 className="text-2xl font-bold mb-4 text-red-500">About Us</h3>
                    <p className="text-gray-300">
                        Techayo is your one-stop shop for the latest and greatest in electronics, accessories, and more. We are committed to providing top-quality products and excellent customer service.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-2xl font-bold mb-4 text-red-500">Quick Links</h3>
                    <ul className="text-gray-300 space-y-2">
                        <li>
                            <Link to="/about" className="flex items-center    transition duration-300">
                                <FaChevronRight className="mr-2 text-red-500" />
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="flex items-center    transition duration-300">
                                <FaChevronRight className="mr-2 text-red-500" />
                                Contact Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/shop" className="flex items-center   transition duration-300">
                                <FaChevronRight className="mr-2 text-red-500" />
                                Shop
                            </Link>
                        </li>
                        <li>
                            <Link to="/faq" className="flex items-center   transition duration-300">
                                <FaChevronRight className="mr-2 text-red-500" />
                                FAQs
                            </Link>
                        </li>
                        <li>
                            <Link to="/terms" className="flex items-center   transition duration-300">
                                <FaChevronRight className="mr-2 text-red-500" />
                                Terms & Conditions
                            </Link>
                        </li>
                        <li>
                            <Link to="/privacy" className="flex items-center   transition duration-300">
                                <FaChevronRight className="mr-2 text-red-500" />
                                Privacy Policy
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Customer Service */}
                <div>
                    <h3 className="text-2xl font-bold mb-4 text-red-500">Customer Service</h3>
                    <ul className="text-gray-300 space-y-2">
                        <li>
                            <Link to="/shipping" className="flex items-center   transition duration-300">
                                <FaChevronRight className="mr-2 text-red-500" />
                                Shipping & Delivery
                            </Link>
                        </li>
                        <li>
                            <Link to="/returns" className="flex items-center   transition duration-300">
                                <FaChevronRight className="mr-2 text-red-500" />
                                Returns & Exchanges
                            </Link>
                        </li>
                        <li>
                            <Link to="/support" className="flex items-center   transition duration-300">
                                <FaChevronRight className="mr-2 text-red-500" />
                                Customer Support
                            </Link>
                        </li>
                        <li>
                            <Link to="/order-tracking" className="flex items-center   transition duration-300">
                                <FaChevronRight className="mr-2 text-red-500" />
                                Order Tracking
                            </Link>
                        </li>
                        <li>
                            <Link to="/account" className="flex items-center   transition duration-300">
                                <FaChevronRight className="mr-2 text-red-500" />
                                My Account
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Newsletter Subscription */}
                <div>
                    <h3 className="text-2xl font-bold mb-4 text-red-500">Newsletter</h3>
                    <p className="text-gray-300 mb-4">
                        Sign up for our newsletter to receive updates on new arrivals and special offers.
                    </p>
                    <div className="flex space-x-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="p-2 rounded-l-full outline-none focus:ring-2 focus:ring-yellow-400 w-full"
                        />
                        <button className="bg-red-500 text-white px-4 py-2 rounded-r-full hover:bg-yellow-600 transition duration-300">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="bg-gray-900 py-6">
                <div className="w-full lg:w-10/12 mx-auto flex flex-col lg:flex-row justify-between items-center">
                    {/* Social Links */}
                    <div className="flex space-x-4 mb-4 lg:mb-0">
                        <a href="#" className="text-white   transition duration-300">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="text-white   transition duration-300">
                            <FaTwitter />
                        </a>
                        <a href="#" className="text-white   transition duration-300">
                            <FaInstagram />
                        </a>
                        <a href="#" className="text-white    transition duration-300">
                            <FaLinkedinIn />
                        </a>
                    </div>

                    {/* Copyright */}
                    <div className="text-gray-400 text-sm">
                        © 2024 Techayo. All rights reserved.
                    </div>

                    {/* Payment Methods */}
                    <div className="flex space-x-4 mt-4 lg:mt-0 text-2xl">
                        <FaCcVisa className="text-white    transition duration-300" />
                        <FaCcMastercard className="text-white    transition duration-300" />
                        <FaPaypal className="text-white    transition duration-300" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
