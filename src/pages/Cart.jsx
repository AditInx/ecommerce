import Navbar from "../components/Navbar";
import { useCart } from "../components/CartContext";

function Cart() {
  const { cart, removeItemFromCart } = useCart(); 

  return (
    <div>
      <Navbar />
      <div className="mx-auto max-w-[72rem] pl-8 pr-8">
        <h2 className="font-medium text-gray-600 text-4xl pt-20 pb-4 border-b-3 border-gray-300">
          Shopping Cart
        </h2>
        {cart.length === 0 ? (
          <p className="mt-5 text-xl">Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div className="mt-8 grid gap-8 lg:grid-cols-12" key={item.id}>
              <div className="lg:col-span-8">
                <article className="mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap">
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
                      className="mt-2 text-sm text-red-500"
                      onClick={() => removeItemFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                  <p className="font-medium lg:pl-4">${item.price}</p>
                </article>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Cart;
