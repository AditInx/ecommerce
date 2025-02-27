import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import useProductData from "../utils/ProductData";
import { Link } from "react-router-dom";

const PAGE_SIZE = 6;

function Products() {
  const { products } = useProductData();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchItem, setSearchItem] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [sortedPrice, setSortedPrice] = useState("Prices");
  const [categorySort, setCategorySort] = useState("Category")
  const [ItemSort, setItemSort] = useState([]);
  useEffect(()=>{
    setSortedProducts(products);
  },[products])


  const handleSort = (e) => {
    const selectedOption = e.target.value;
    setSortedPrice(selectedOption);
    let sortedArray = [...products];
    if(selectedOption === "High to Low"){
      sortedArray.sort((a,b)=> b.price - a.price);
    }
    else if(selectedOption === "Low to High"){
      sortedArray.sort((a,b)=> a.price - b.price);
    }
    setSortedProducts(sortedArray);
  }


  const totalProducts = sortedProducts.length;
  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);
  const start = (currentPage - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const paginatedProducts = sortedProducts.slice(start, end);

  const handlePageChange = (n) => {
    setCurrentPage(n);
  };

  const handleSearchChange = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchItem(searchValue);

    if (searchValue) {
      const searchedItem = products.filter((item) =>
        item.title.toLowerCase().includes(searchValue)
      );
      setFilteredProducts(searchedItem);
    } else {
      setFilteredProducts([]);
    }
  };

  const handleCategory = (e) => {
    const selectedCategory = e.target.value;
    setCategorySort(selectedCategory);
    if(selectedCategory === "Cosmetics"){
    }
  }

  const displayProducts =
    searchItem.length > 0 ? filteredProducts : paginatedProducts;

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
            name="Prices"
            id="Prices"
            value={sortedPrice}
            className="ml-4 h-12 px-4 border border-gray-300 rounded-full bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md transition-all" onChange={handleSort}
          >
            <option value="Prices" disabled selected>Prices</option>
            <option value="High to Low">High to Low</option>
            <option value="Low to High">Low to High</option>
          </select>

          <select
            name="Category"
            id="Category"
            value={categorySort}
            className="ml-4 h-12 px-4 border border-gray-300 rounded-full bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md transition-all" onChange={handleCategory}
          >
            <option value="" disabled selected>Category</option>
            <option value="Cosmetics">Cosmetics</option>
            <option value="Food">Food</option>
            <option value="Furniture">Furniture</option>
            <option value="Perfumes">Perfumes</option>
          </select>
        </div>

        <h2 className="text-3xl text-center mb-8 text-gray-800 border-b border-gray-300 opacity-50 pb-2 w-full">
          Products
        </h2>

        <div className="w-full max-w-6xl grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {displayProducts.map((ele, index) => (
            <div key={index}>
              <Link to={`/products/${ele.id}`}>
                <div className="bg-white shadow-lg hover:shadow-2xl transition-all duration-300 rounded-xl p-4">
                  <img
                    src={ele.thumbnail}
                    className="rounded-xl h-64 md:h-48 w-full object-cover"
                    alt={ele.title}
                  />
                  <h3 className="text-center font-semibold text-gray-800 text-lg mt-3">
                    {ele.title}
                  </h3>
                  <p className="text-center text-gray-600">${ele.price}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="m-8">
          {searchItem.length === 0 && (
            <div className="flex items-center justify-center mt-8 space-x-2">
              <button
                className="px-4 py-2 rounded-full cursor-pointer bg-gray-200 hover:bg-gray-300 transition-all"
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
              >
                ⬅️
              </button>

              {[...Array(noOfPages)].map((_, index) => (
                <button
                  key={index + 1}
                  className={`px-4 py-2 cursor-pointer rounded-full border border-gray-300 ${
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
                className="px-4 py-2 rounded-full transition-all cursor-pointer bg-gray-200 hover:bg-gray-300"
                disabled={currentPage === noOfPages}
                onClick={() => handlePageChange(currentPage + 1)}
              >
                ➡️
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Products;
