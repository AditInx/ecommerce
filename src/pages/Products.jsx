import Navbar from "../components/Navbar";

function Products() {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center h-50">
        <div>
          <label className="font-bold text-lg">Search for products:</label>{" "}
          <input
            type="text"
            className="border-black h-10 w-120 border-3 rounded-lg p-4 ms-3 "
          />
        </div>
      </div>
    </div>
  );
}

export default Products;
