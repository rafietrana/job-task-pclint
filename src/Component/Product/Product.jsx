import { useEffect, useState } from "react";
import { FaSearch,  FaSort } from "react-icons/fa";

const Product = () => {
  const [productData, setProductData] = useState([]);
  const [countProductData, setCountProductData] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [brandFilter, setBrandFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortOption, setSortOption] = useState("priceLowToHigh");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const itemsPerPage = 10;
  const numberOfPages = Math.ceil(countProductData / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()];

  useEffect(() => {
    const fetchProductCount = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://job-task-serverph.vercel.app/productcount"
        );
        if (!response.ok) throw new Error("Failed to fetch product count");
        const result = await response.json();
        setCountProductData(result.count);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductCount();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://job-task-serverph.vercel.app/getProduct?page=${currentPage}&size=${itemsPerPage}&search=${encodeURIComponent(
            searchQuery
          )}&brand=${encodeURIComponent(
            brandFilter
          )}&category=${encodeURIComponent(categoryFilter)}&priceMin=${
            priceRange[0]
          }&priceMax=${priceRange[1]}&sort=${sortOption}`
        );
        if (!response.ok) throw new Error("Failed to fetch products");
        const result = await response.json();
        setProductData(result.products || []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [
    currentPage,
    searchQuery,
    brandFilter,
    categoryFilter,
    priceRange,
    sortOption,
  ]);

  const handlePrevButton = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextButton = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="bg-gray-100 py-8 min-h-screen">
      <div className="container w-10/12 mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filter Sidebar */}
          <div className="bg-white p-6 rounded-lg shadow-md flex-shrink-0 md:w-1/4">
            <h3 className="text-xl font-semibold mb-4">Filters</h3>

            <div className="mb-4">
              <label className="block mb-2 font-medium">Brand Name</label>
              <input
                type="text"
                value={brandFilter}
                onChange={(e) => setBrandFilter(e.target.value)}
                className="p-3 border border-gray-300 rounded-lg w-full"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 font-medium">Category Name</label>
              <input
                type="text"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="p-3 border border-gray-300 rounded-lg w-full"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 font-medium">Price Range</label>
              <div className="flex gap-4">
                <input
                  type="number"
                  value={priceRange[0]}
                  onChange={(e) =>
                    setPriceRange([parseInt(e.target.value), priceRange[1]])
                  }
                  className="p-3 border border-gray-300 rounded-lg w-full"
                  placeholder="Min Price"
                />
                <input
                  type="number"
                  value={priceRange[1]}
                  onChange={(e) =>
                    setPriceRange([priceRange[0], parseInt(e.target.value)])
                  }
                  className="p-3 border border-gray-300 rounded-lg w-full"
                  placeholder="Max Price"
                />
              </div>
            </div>
          </div>

          <div className="flex-1">
            {/* Search Bar */}
            <div className="flex items-center bg-white p-4 rounded-lg shadow-md mb-6">
              <FaSearch className="text-gray-600 w-6 h-6 mr-2" />
              <input
                type="text"
                placeholder="Search by product name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-grow p-3 border border-gray-300 rounded-lg outline-none"
              />
            </div>

            {/* Sorting Options */}
            <div className="bg-white p-4 rounded-lg shadow-md mb-6 flex items-center gap-2">
              <FaSort className="text-gray-600 w-6 h-6" />
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="p-2 border border-gray-300 rounded-lg w-full"
              >
                <option value="priceLowToHigh">Price: Low to High</option>
                <option value="priceHighToLow">Price: High to Low</option>
                <option value="dateNewestFirst">
                  Date Added: Newest First
                </option>
              </select>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {loading ? (
                <div className="col-span-full text-center text-gray-600">
                  Loading products...
                </div>
              ) : error ? (
                <div className="col-span-full text-center text-red-600">
                  {error}
                </div>
              ) : productData.length > 0 ? (
                productData.map((dataProduct, idx) => (
                  <div
                    className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
                    key={idx}
                  >
                    <figure className="relative">
                      <img
                        src={dataProduct?.image}
                        alt={dataProduct?.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-2 left-2 bg-red-500 text-white p-2 text-xs uppercase font-semibold rounded-lg">
                        {dataProduct?.category}
                      </div>
                    </figure>
                    <div className="p-4">
                      <h2 className="text-lg font-semibold text-gray-800 mb-2 truncate">
                        {dataProduct?.name}
                      </h2>
                      <p className="text-gray-600 text-sm mb-2">
                        {dataProduct?.description.slice(0, 60)}
                        {dataProduct?.description.length > 60 ? "..." : ""}
                      </p>
                      <p className="text-gray-800 font-medium mb-2">
                        Price: ${dataProduct?.price}
                      </p>
                      <p className="text-gray-600 mb-2 font-semibold">
                        Ratings: {dataProduct?.ratings}
                      </p>
                      <p className="text-gray-600 mb-4 font-semibold">
                        Brand: {dataProduct?.brand}
                      </p>
                      <button className="w-full px-4 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition duration-300">
                        Add To Cart
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center text-gray-600">
                  No products found.
                </div>
              )}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-6">
              <button
                onClick={handlePrevButton}
                className="bg-gray-200 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-300 transition"
                disabled={currentPage === 0}
              >
                Prev
              </button>
              {pages.map((page) => (
                <button
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded-md mx-1 ${
                    page === currentPage
                      ? "bg-red-500 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
                  }`}
                  key={page}
                >
                  {page + 1}
                </button>
              ))}
              <button
                onClick={handleNextButton}
                className="bg-gray-200 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-300 transition"
                disabled={currentPage === pages.length - 1}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
