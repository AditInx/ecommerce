import { Link } from "react-router-dom";

function Content() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center max-w-4xl mx-auto mt-5 px-4">
      <div className="text-center md:text-left">
        <h1 className="text-4xl md:text-6xl my-6 text-gray-600 leading-tight">
          We are changing <br /> the way people <br /> shop
        </h1>
        <p className="mt-4 text-gray-700 text-base md:text-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Tempore
          repellat explicabo enim soluta temporibus <br /> asperiores aut obcaecati
          perferendis porro nobis.
        </p>
        <Link to="/products">
          <button className="text-white bg-blue-600 rounded-md px-5 py-3 mt-4 cursor-pointer">
            OUR PRODUCTS
          </button>
        </Link>
      </div>

      <div className="w-full md:w-[40%] flex gap-3 p-2 border-none rounded-2xl bg-black overflow-hidden mt-8 md:mt-0">
        <img
          src="https://react-vite-comfy-store-v2.netlify.app/assets/hero1-deae5a1f.webp"
          className="rounded-2xl w-3/4 md:w-4/5 object-cover"
          alt="Main Product"
        />
        <img
          src="https://react-vite-comfy-store-v2.netlify.app/assets/hero2-2271e3ad.webp"
          className="rounded-l-2xl w-1/4 md:w-1/5 object-cover"
          alt="Secondary Product"
        />
      </div>
    </div>
  );
}

export default Content;
