import Navbar from "../components/Navbar";
import { useCart } from "../components/CartContext";
import { useState } from "react";

function Cart() {
  const { cart, removeItemFromCart } = useCart();
  const [quantities, setQuantities] = useState(
    cart.reduce((acc, item) => ({ ...acc, [item.id]: item.quantity || 1 }), {})
  );

  const handleQuantityChange = (id, value) => {
    setQuantities((prev) => ({ ...prev, [id]: Number(value) }));
  };

  const totalQuantity = Object.values(quantities).reduce((sum, qty) => sum + qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * (quantities[item.id] || 1), 0);

  return (
    <div>
      <Navbar />
      <div className="mx-auto max-w-[72rem] pl-8 pr-8 space-x-2 space-y-2">
        <h2 className="font-medium text-gray-600 text-4xl pt-20 pb-4 border-b-3 border-gray-300">
          Shopping Cart
        </h2>
        {cart.length === 0 ? (
          <p className="mt-5 text-xl">Your cart is empty.</p>
        ) : (
          <>
            {cart.map((item) => (
              <div className="mt-8 grid gap-8 lg:grid-cols-12 space-y-8" key={item.id}>
                <div className="lg:col-span-8">
                  <article className="mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap space-y-4 sm:space-x-6">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover"
                    />
                    <div className="sm:ml-16 sm:w-48">
                      <h3 className="capitalize font-medium text-md text-gray-600">
                        {item.title}
                      </h3>
                      <h4 className="mt-2 capitalize text-sm text-neutral-400">
                        {item.brand}
                      </h4>
                    </div>
                    <div className="sm:ml-12">
                      <button
                        className="mt-2 text-sm text-red-500 cursor-pointer hover:bg-red-500 hover:text-white rounded-md p-2"
                        onClick={() => removeItemFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                    <div>
                      <label>Quantity: </label>
                      <select
                        className="h-12 px-4 border border-gray-300 rounded-2xl bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md transition-all"
                        value={quantities[item.id] || 1}
                        onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
                    </div>
                    <p className="font-medium lg:pl-4">${item.price}</p>
                    <p>$ {item.price * (quantities[item.id] || 1)}</p>
                  </article>
                </div>
              </div>
            ))}
            <div className="mt-6 text-2xl font-bold">
              <p>Total Quantity: {totalQuantity}</p>
              <p>Total Price: ${totalPrice}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
