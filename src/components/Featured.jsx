import useProductData from "../utils/ProductData";
import { Link } from "react-router-dom";

function Featured() {
  const { products } = useProductData();

  return (
    <div className="max-w-6xl mx-auto mt-9 px-4">
      <h2 className="text-3xl text-gray-800 border-b border-gray-300 opacity-50 pb-2 w-full text-center md:text-left">
        Featured Products
      </h2>

      <div className="pt-12 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.slice(0, 3).map((ele, index) => (
          <div key={index} className="flex justify-center">
            <Link to={`/products/${ele.id}`} className="block w-full max-w-xs">
              <div className="bg-white shadow-lg hover:shadow-2xl transition-all duration-300 rounded-xl p-4">
                <img
                  src={ele.thumbnail}
                  className="rounded-xl h-64 sm:h-56 md:h-48 w-full object-cover"
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
    </div>
  );
}

export default Featured;
