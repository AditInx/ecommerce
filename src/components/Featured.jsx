import useProductData from "../utils/ProductData";

function Featured() {
  const { products, loading } = useProductData(); 

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="max-w-6xl mx-auto mt-9">
      <h2 className="text-3xl text-gray-800 border-b border-gray-300 opacity-50 pb-2 w-full">
        Featured Products
      </h2>
      <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {products.map((ele, index) => (
          <div className="gap-8 mt-6 mb-5" key={index}>
            <div className="bg-white shadow-lg hover:shadow-2xl transition-all duration-300 rounded-xl p-4 w-full max-w-xs">
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default Featured;
