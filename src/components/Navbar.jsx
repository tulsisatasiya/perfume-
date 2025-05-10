import React, { useState } from "react";
import { FaSearch, FaShoppingBag, FaCog, FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleToggle = (panel) => {
    setShowSearch(panel === "search" ? !showSearch : false);
    setShowCart(panel === "cart" ? !showCart : false);
    setShowSettings(panel === "settings" ? !showSettings : false);
  };

  return (
    <div className="relative">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 md:px-20 py-6 shadow-md bg-white">
        {/* Logo */}
        <div className="text-3xl font-bold flex items-center text-black">
          <Link to="/" className="hover:text-pink-600">
            <span className="text-pink-600">Odour</span>
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <FaBars
            className="text-xl cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          />
        </div>

        {/* Navigation Links (Desktop) */}
        {/* <ul className="hidden md:flex gap-8 text-md font-medium">
          {["Home","About us", "Shop", "Product", "Contact"].map((label, index) => (
            <li key={index}>
              <Link
                to={`/${label.toLowerCase().replace(" ", "")}`}
                className="hover:text-pink-600"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul> */}
        <ul className="hidden md:flex gap-8 text-md font-medium">
  {["Home", "About us", "Shop", "Contact"].map((label, index) => {
  const route = label === "Home" ? "/" : `/${label.toLowerCase().replace(/\s+/g, "")}`;
  return (
    <li key={index}>
      <NavLink
        to={route}
        className="hover:text-pink-600"
        activeClassName="text-pink-600 font-bold"
      >
        {label}
      </NavLink>
    </li>
  );
})}

</ul>

        {/* Icons (Desktop Only) */}
        <div className="hidden md:flex items-center gap-6">
          <FaSearch className="text-xl cursor-pointer" onClick={() => handleToggle("search")} />
          <div className="relative flex items-center cursor-pointer" onClick={() => handleToggle("cart")}>
            <FaShoppingBag className="text-xl" />
            <span className="absolute -top-2 -right-2 bg-black text-white w-5 h-5 text-xs rounded-full flex items-center justify-center">
              0
            </span>
          </div>
          <FaCog className="text-xl cursor-pointer" onClick={() => handleToggle("settings")} />
        </div>
      </nav>

      {/* Mobile Navigation Links */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white px-6 py-4 shadow-md">
       <ul className="flex flex-col gap-4 text-md font-medium">
  {["Home", "About us", "Shop", "Contact"].map((label, index) => {
    const route = label === "Home" ? "/" : `/${label.toLowerCase().replace(/\s+/g, "")}`;
    return (
      <li key={index}>
        <Link
          to={route}
          onClick={() => setMobileMenuOpen(false)}
          className="hover:text-pink-600"
        >
          {label}
        </Link>
      </li>
    );
  })}
</ul>


          {/* Mobile Icons */}
          <div className="flex justify-around mt-4">
            <FaSearch className="text-xl cursor-pointer" onClick={() => handleToggle("search")} />
            <div className="relative cursor-pointer" onClick={() => handleToggle("cart")}>
              <FaShoppingBag className="text-xl" />
              <span className="absolute -top-2 -right-2 bg-black text-white w-5 h-5 text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </div>
            <FaCog className="text-xl cursor-pointer" onClick={() => handleToggle("settings")} />
          </div>
        </div>
      )}

      {/* Search Box */}
      {showSearch && (
        <div className="w-full flex justify-end py-1 pr-10">
          <div className="flex w-[300px] rounded overflow-hidden shadow-sm">
            <input
              type="text"
              placeholder="Search our store"
              className="w-full px-4 py-2 border-t border-b border-l border-gray-300 rounded-l-md focus:outline-none text-sm"
            />
            <button className="bg-pink-600 text-white px-4 py-2 rounded-r-md">
              <FaSearch />
            </button>
          </div>
        </div>
      )}

      {/* Cart Drawer */}
      {showCart && (
        <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50 p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Your Cart</h2>
            <AiOutlineClose
              className="text-2xl cursor-pointer text-pink-600"
              onClick={() => setShowCart(false)}
            />
          </div>
          <p> Cart items will appear here...</p>
        </div>
      )}

      {/* Settings Drawer */}
      {showSettings && (
        <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50 p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Settings</h2>
            <AiOutlineClose
              className="text-2xl cursor-pointer text-pink-600"
              onClick={() => setShowSettings(false)}
            />
          </div>
          <p> Settings options go here...</p>
        </div>
      )}
    </div>
  );
};

export default Navbar;
