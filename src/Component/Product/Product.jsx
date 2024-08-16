import { useEffect, useState } from "react";

const Product = () => {
  const [productData, setProductData] = useState([]);
  const [countProductData, setCountProductData] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [brandFilter, setBrandFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortOption, setSortOption] = useState("priceLowToHigh");

  const itemsPerPage = 10;
  const numberOfPages = Math.ceil(countProductData / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()];

  useEffect(() => {
    const fetchProductCount = async () => {
      try {
        const response = await fetch("http://localhost:3000/productcount");
        const result = await response.json();
        setCountProductData(result.count);
      } catch (error) {
        console.error("Error fetching product count:", error);
      }
    };

    fetchProductCount();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/getProduct?page=${currentPage}&size=${itemsPerPage}&search=${encodeURIComponent(
            searchQuery
          )}&brand=${encodeURIComponent(
            brandFilter
          )}&category=${encodeURIComponent(categoryFilter)}&priceMin=${
            priceRange[0]
          }&priceMax=${priceRange[1]}&sort=${sortOption}`
        );
        const result = await response.json();
        setProductData(result.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [currentPage, searchQuery, brandFilter, categoryFilter, priceRange, sortOption]);

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
      <div className="container mx-auto px-4">
        <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Filter Sidebar */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Filters</h3>

            <div className="mb-4">
              <label className="block mb-2">Brand Name</label>
              <input
                type="text"
                value={brandFilter}
                onChange={(e) => setBrandFilter(e.target.value)}
                className="p-2 border border-gray-300 rounded-lg w-full"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2">Category Name</label>
              <input
                type="text"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="p-2 border border-gray-300 rounded-lg w-full"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2">Price Range</label>
              <input
                type="number"
                value={priceRange[0]}
                onChange={(e) =>
                  setPriceRange([parseInt(e.target.value), priceRange[1]])
                }
                className="p-2 border border-gray-300 rounded-lg w-full mb-2"
                placeholder="Min Price"
              />
              <input
                type="number"
                value={priceRange[1]}
                onChange={(e) =>
                  setPriceRange([priceRange[0], parseInt(e.target.value)])
                }
                className="p-2 border border-gray-300 rounded-lg w-full"
                placeholder="Max Price"
              />
            </div>
          </div>

          <div className="md:col-span-2">
            {/* Search input */}
            <input
              type="text"
              placeholder="Search by product name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg w-full md:w-1/2 lg:w-1/3 shadow-md mb-6"
            />

            {/* Sorting Options */}
            <div className="mb-6">
              <label className="block mb-2">Sort By</label>
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="p-2 border border-gray-300 rounded-lg w-full"
              >
                <option value="priceLowToHigh">Price: Low to High</option>
                <option value="priceHighToLow">Price: High to Low</option>
                <option value="dateNewestFirst">Date Added: Newest First</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {productData.length > 0 ? (
                productData.map((dataProduct, idx) => (
                  <div
                    className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                    key={idx}
                  >
                    <figure className="relative">
                      <img
                        src={dataProduct?.image}
                        alt={dataProduct?.name}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute top-0 left-0 bg-red-500 bg-opacity-70 text-white p-2 text-xs uppercase font-semibold">
                        {dataProduct?.category}
                      </div>
                    </figure>
                    <div className="p-4">
                      <h2 className="text-lg font-semibold text-gray-800 truncate mb-2">
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
                      <p className="text-gray-600 mb-2 font-semibold">
                        Brand: {dataProduct?.brand}
                      </p>
                      <button className="w-full px-4 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition duration-300 ">
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

            <div className="flex justify-center mt-6">
              <button
                onClick={handlePrevButton}
                className="bg-gray-200 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-300 transition"
              >
                Prev
              </button>
              {pages.map((page) => (
                <button
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 mx-1 rounded-md text-sm ${
                    currentPage === page
                      ? "bg-red-500 text-white"
                      : "bg-gray-200 text-gray-600"
                  } hover:bg-gray-300 transition`}
                  key={page}
                >
                  {page + 1}
                </button>
              ))}
              <button
                onClick={handleNextButton}
                className="bg-gray-200 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-300 transition"
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
