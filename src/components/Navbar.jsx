import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="bg-blue-100">
        <div className="flex justify-around">
          <NavLink className="bg-blue-600 text-3xl font-bold text-white w-12 h-12 flex items-center justify-center mt-3 rounded-md" to="/">
            C
          </NavLink>
          <div className="flex justify-between my-3">
            <NavLink className="text-black  active:bg-black active:text-white hover:bg-gray-400 rounded-md me-5 p-3" to="/">
              Home
            </NavLink>
            <NavLink className="text-black  active:bg-black active:text-white hover:bg-gray-400 rounded-md me-5 p-3" to="/About">
              About
            </NavLink>
            <NavLink className="text-black  active:bg-black active:text-white hover:bg-gray-400 rounded-md me-5 p-3" to="/Products">
              Products
            </NavLink>
            <NavLink className="text-black  active:bg-black active:text-white hover:bg-gray-400 rounded-md me-5 p-3" to="/Cart">
              Cart
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
