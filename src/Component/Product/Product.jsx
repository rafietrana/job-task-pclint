import { useEffect, useState } from "react";

const Product = () => {
  const [productData, setProductData] = useState([]);
  const [countProductData, setCountProductData] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState(""); // State to handle search query

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
        const response = await fetch(`http://localhost:3000/getProduct?page=${currentPage}&size=${itemsPerPage}&search=${encodeURIComponent(searchQuery)}`);
        const result = await response.json();
        setProductData(result.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [currentPage, searchQuery]); // Depend on searchQuery

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
    <div className="bg-gray-100 py-9 ">
      <div className="">
        <div className="grid grid-cols-6 w-10/12 mx-auto">
         
          <div className="col-span-6">
            {/* Search input */}
            <input
              type="text"
              placeholder="Search by product name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="mb-4 p-2 border border-gray-300 rounded"
            />
            <div className="pb-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 mx-auto p-5">
              {productData.length > 0 ? (
                productData.map((dataProduct, idx) => (
                  <div
                    className="card bg-white shadow-lg border border-gray-200 rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                    key={idx}
                  >
                    <figure className="relative">
                      <img
                        src={dataProduct?.image}
                        alt={dataProduct?.name}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute top-0 left-0 bg-red-500 bg-opacity-50 text-white p-2 text-xs uppercase font-semibold">
                        {dataProduct?.category}
                      </div>
                    </figure>
                    <div className="p-5 space-y-3">
                      <h2 className="text-xl font-semibold text-gray-800 truncate">
                        {dataProduct?.name}
                      </h2>
                      <p className="text-gray-600 text-sm">
                        {dataProduct?.description.slice(0, 40)}
                        {dataProduct?.description.length > 40 ? "..." : ""}
                      </p>
                      <p className="text-gray-800 font-medium">
                        Price: ${dataProduct?.price}
                      </p>
                      <p className="text-gray-600">Ratings: {dataProduct?.ratings}</p>
                      <button className="w-full px-4 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition duration-300">
                        Add To Cart
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div>No products found.</div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="w-10/12 mx-auto justify-center items-center flex my-5">
        <button onClick={handlePrevButton} className="bg-gray-200 p-3">Prev</button>
        {pages.map(page => (
          <button
            onClick={() => setCurrentPage(page)}
            className={`p-3 rounded-full mx-2 ${currentPage === page ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-600'}`}
            key={page}
          >
            {page + 1}
          </button>
        ))}
        <button onClick={handleNextButton} className="bg-gray-200 p-3">Next</button>
      </div>
    </div>
  );
};

export default Product;
