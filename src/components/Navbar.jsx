import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-100 shadow-md">
      <div className="flex justify-between items-center px-8 py-3">
        <NavLink
          className="bg-blue-600 text-3xl font-bold text-white w-12 h-12 flex items-center justify-center rounded-md"
          to="/"
        >
          C
        </NavLink>

        <div className="flex gap-5">
          {["Home", "About", "Products", "Cart"].map((name) => (
            <NavLink
              key={name}
              to={`/${name === "Home" ? "" : name}`}
              className={({ isActive }) =>
                `text-black px-4 py-2 rounded-md transition-all hover:bg-gray-400 ${
                  isActive ? "bg-black text-white" : ""
                }`
              }
            >
              {name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
