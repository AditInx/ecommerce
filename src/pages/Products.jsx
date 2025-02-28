import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import useProductData from "../utils/ProductData";
import { Link } from "react-router-dom";

const PAGE_SIZE = 6;

function Products() {
  const { products } = useProductData();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchItem, setSearchItem] = useState("");
  const [sortedProducts, setSortedProducts] = useState([]);
  const [sortedPrice, setSortedPrice] = useState("Prices");
  const [categorySort, setCategorySort] = useState("Category");

  useEffect(() => {
    let updatedProducts = [...products];
    
    if (categorySort !== "Category" && categorySort !== "") {
      updatedProducts = updatedProducts.filter(
        (product) => product.category === categorySort
      );
    }
    
    if (sortedPrice === "High to Low") {
      updatedProducts.sort((a, b) => b.price - a.price);
    } else if (sortedPrice === "Low to High") {
      updatedProducts.sort((a, b) => a.price - b.price);
    }
    
    setSortedProducts(updatedProducts);
  }, [products, categorySort, sortedPrice]);

  const handleSearchChange = (e) => {
    setSearchItem(e.target.value.toLowerCase());
  };

  const handleSortChange = (e) => {
    setSortedPrice(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategorySort(e.target.value);
  };

  const handlePageChange = (n) => {
    setCurrentPage(n);
  };

  const filteredProducts = searchItem
    ? sortedProducts.filter((product) =>
        product.title.toLowerCase().includes(searchItem)
      )
    : sortedProducts;

  const totalProducts = filteredProducts.length;
  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);
  const start = (currentPage - 1) * PAGE_SIZE;
  const paginatedProducts = filteredProducts.slice(start, start + PAGE_SIZE);

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center w-full mt-6">
        <div className="w-full max-w-lg mb-6 relative flex items-center">
          <input
            type="text"
            value={searchItem}
            onChange={handleSearchChange}
            placeholder="Search for products..."
            className="w-full h-12 px-3 pr-12 text-gray-800 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md transition-all"
          />
          <select
            value={sortedPrice}
            onChange={handleSortChange}
            className="ml-4 h-12 px-4 border border-gray-300 rounded-full bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md transition-all"
          >
            <option value="Prices" disabled>
              Prices
            </option>
            <option value="High to Low">High to Low</option>
            <option value="Low to High">Low to High</option>
          </select>
          <select
            value={categorySort}
            onChange={handleCategoryChange}
            className="ml-4 h-12 px-4 border border-gray-300 rounded-full bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md transition-all"
          >
            <option value="Category">Category</option>
            <option value="beauty">Beauty</option>
            <option value="groceries">Groceries</option>
            <option value="furniture">Furniture</option>
            <option value="fragrances">Fragrances</option>
          </select>
        </div>

        <h2 className="text-3xl text-center mb-8 text-gray-800 border-b border-gray-300 opacity-50 pb-2 w-full">
          Products
        </h2>

        <div className="w-full max-w-6xl grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {paginatedProducts.map((product) => (
            <div key={product.id}>
              <Link to={`/products/${product.id}`}>
                <div className="bg-white shadow-lg hover:shadow-2xl transition-all duration-300 rounded-xl p-4">
                  <img
                    src={product.thumbnail}
                    className="rounded-xl h-64 md:h-48 w-full object-cover"
                    alt={product.title}
                  />
                  <h3 className="text-center font-semibold text-gray-800 text-lg mt-3">
                    {product.title}
                  </h3>
                  <p className="text-center text-gray-600">${product.price}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {totalProducts > PAGE_SIZE && (
          <div className="m-8 flex items-center justify-center mt-8 space-x-2">
            <button
              className="px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-all"
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              ⬅️
            </button>
            {[...Array(noOfPages)].map((_, index) => (
              <button
                key={index + 1}
                className={`px-4 py-2 rounded-full border border-gray-300 ${
                  currentPage === index + 1
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-800 hover:bg-gray-200"
                } transition-all`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
            <button
              className="px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-all"
              disabled={currentPage === noOfPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              ➡️
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Products;
