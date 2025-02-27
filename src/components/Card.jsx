import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import useProductData from "../utils/ProductData";
function Card() {
  const { products } = useProductData();
  const { id } = useParams();
  const thisProduct = products.find((prod) => prod.id === Number(id));
  console.log(thisProduct);
  return (
    <div>
      <Navbar />
      <div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-center mt-8">
      <img className="h-96 w-96 lg:w-[512px]" src={thisProduct?.thumbnail} alt="" />
      <div>
      <h1 className="capitalize text-3xl font-bold">{thisProduct?.title}</h1>
      <h4 className="text-xl text-neutral-500 font-bold mt-2">{thisProduct?.brand}</h4>
      <p className="mt-3 text-xl"> ${thisProduct?.price}</p>
      <p className="mt-6 leading-8 w-100"> {thisProduct?.description}</p>
      <div>
      <button className="text-gray-300 bg-purple-600 p-3 rounded-xl font-bold cursor-pointer mt-5">ADD TO BAG</button>
      </div>
      </div>
      </div>
    </div>
  );
}

export default Card;
