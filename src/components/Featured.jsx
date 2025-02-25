function Featured() {
  const obj = [
    {
      img: "https://images.pexels.com/photos/943150/pexels-photo-943150.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Avant-Garde Lamp",
      price: "$179.99",
    },
    {
      img: "https://images.pexels.com/photos/3679601/pexels-photo-3679601.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Coffee Table",
      price: "$179.99",
    },
    {
      img: "https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg?auto=compress&cs=tinysrgb&w=300",
      title: "Comfy Bed",
      price: "$129.99",
    },
  ];
  return (
    <div className="max-w-6xl mx-auto mt-9">
      <h2 className="text-3xl text-gray-800 border-b border-gray-300 opacity-50 pb-2 w-full">
        Featured Products
      </h2>
      {obj.map((ele, index) => {
        return (
          <div className="flex justify-center gap-8 mt-6 mb-5" key={index}>
            <div className="bg-white shadow-lg hover:shadow-2xl transition-all duration-300 rounded-xl p-4 w-full max-w-xs">
              <img
                src={ele.img}
                className="rounded-xl w-52 object-contain"
                alt=""
              />
              <h3 className="text-center font-semibold text-gray-800 text-lg mt-3">
                {ele.title}
              </h3>
              <p className="text-center text-gray-600">{ele.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Featured;
