import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-100 shadow-md">
      <div className="flex justify-between items-center px-8 py-3">
        <NavLink
          className="bg-blue-600 text-3xl font-bold text-white w-12 h-12 flex items-center justify-center rounded-md"
          to="/"
        >
          C
        </NavLink>
        <button
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div className="hidden md:flex gap-5">
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
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-3 py-4 bg-blue-50">
          {["Home", "About", "Products", "Cart"].map((name) => (
            <NavLink
              key={name}
              to={`/${name === "Home" ? "" : name}`}
              className="text-black px-4 py-2 rounded-md transition-all hover:bg-gray-400"
              onClick={() => setIsOpen(false)}
            >
              {name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
