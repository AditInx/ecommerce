function Content() {
  return (
    <>
      <div className="flex justify-between max-w-4xl mx-auto mt-5">
        <div className="">
          <div className="text-6xl my-8 text-gray-600">
            We are changing <br /> the way people <br />
            shop
          </div>
          <p className="mt-7">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />{" "}
            Tempore repellat explicabo enim soluta temporibus <br /> asperiores
            aut obcaecati perferendis porro nobis.
          </p>
          <button className="text-white bg-blue-600 rounded-md p-3 mt-4 cursor-pointer">
            OUR PRODUCTS
          </button>
        </div>

        <div className="w-[40%] flex gap-3 p-[10px] border-none rounded-2xl bg-black overflow-hidden mt-6">
          <img
            src="https://react-vite-comfy-store-v2.netlify.app/assets/hero1-deae5a1f.webp"
            className="rounded-2xl w-4/5 object-cover"
            alt=""
          />
          <img
            src="https://react-vite-comfy-store-v2.netlify.app/assets/hero2-2271e3ad.webp"
            className="rounded-l-2xl w-1/5 object-cover"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Content;
