import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHeart, FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";
import "./Navigation.css";
import { AiOutlineHome, AiOutlineShopping, AiOutlineShoppingCart } from "react-icons/ai";
import { LuPackageCheck } from "react-icons/lu";
import FavoritesCount from "../Products/FavoritesCount";

const MobileNav = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };


  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };
//   style={({ isActive }) => ({
//     color: isActive ? "greenyellow" : "white",
//   })}

  return (
    <>
    {userInfo && (
      <>
      <button
      style={{ zIndex: 999999 }}
        className={`${
          isMenuOpen ? "top-4 left-5" : "top-5 left-5"
        } mobile-visible desktop-visible bg-[#151515] p-2 fixed rounded-lg `}
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <FaTimes color="white" />
        ) : (
          <>
            <div className="w-6 h-0.5 bg-gray-200 my-1"></div>
            <div className="w-6 h-0.5 bg-gray-200 my-1"></div>
            <div className="w-6 h-0.5 bg-gray-200 my-1"></div>
          </>
        )}
      </button>

      {isMenuOpen && (
        <section style={{ zIndex: 99999 }} className="bg-[#151515] p-4 fixed left-5 top-5">
          <ul className="list-none mt-2">
            <li>
              <NavLink
              to="/"
                className=" flex items-center py-2 px-3 "
                style={({ isActive }) => ({
                  color: isActive ? "greenyellow" : "white",
                })}
              >
                <AiOutlineHome className="mr-2 " size={26} />
                Home
              </NavLink>
            </li>
            <li>
            <NavLink
            to="/shop"
                className=" flex items-center py-2 px-3 "
                style={({ isActive }) => ({
                  color: isActive ? "greenyellow" : "white",
                })}
              >
                <AiOutlineShopping className="mr-2 " size={26} />
                Shop
              </NavLink>
            </li>
            <li>
            <NavLink
            to="/cart"
                className=" flex items-center py-2 px-3 "
                style={({ isActive }) => ({
                  color: isActive ? "greenyellow" : "white",
                })}
              >
                <AiOutlineShoppingCart className="mr-2 " size={26} />
                Cart
              </NavLink>
            </li>
            <li>
            <NavLink
            to="/favorite"
                className=" flex items-center py-2 px-3 "
                style={({ isActive }) => ({
                  color: isActive ? "greenyellow" : "white",
                })}
              >
                <FaHeart className="mr-2 " size={26} />
                Favorites
                <FavoritesCount />
              </NavLink>
            </li>
            {userInfo && (
            <li>
            <NavLink
            to="/userOrder"
                className=" flex items-center py-2 px-3 "
                style={({ isActive }) => ({
                  color: isActive ? "greenyellow" : "white",
                })}
              >
                <LuPackageCheck className="mr-2 " size={26} />
                My Orders
              </NavLink>
            </li>)}
            <li>
            <NavLink
            to="/admin/dashboard"
                className=" flex items-center py-2 px-3 "
                style={({ isActive }) => ({
                  color: isActive ? "greenyellow" : "white",
                })}
              >
                <AiOutlineHome className="mr-2 " size={26} />
                Home
              </NavLink>
            </li>
          </ul>
          <div className="relative">
        <button
          onClick={toggleDropdown}
          className="flex items-center text-gray-800 focus:outline-none"
        >
          {userInfo ? (
            <span className="text-white">{userInfo.username}</span>
          ) : (
            <></>
          )}
          {userInfo && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 ml-1 ${
                dropdownOpen ? "transform rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={dropdownOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
              />
            </svg>
          )}
        </button>

        {dropdownOpen && userInfo && (
          <ul
            className={`absolute left-4 mt-5 bottom-6 mr-1 space-y-2 bg-white text-gray-600 ${
              !userInfo.isAdmin ? "-top-30" : ".top-m bottom-15 "
            } `}
          >
            {userInfo.isAdmin && (
              <>
                <li>
                  <Link
                    to="/admin/dashboard"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/allproductslist"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                   All Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/categorylist"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Category
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/orderlist"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Orders
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/userlist"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Users
                  </Link>
                </li>
              </>
            )}

            <li>
              <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">
                Profile
              </Link>
            </li>
            <li>
              <button
                onClick={logoutHandler}
                className="block w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                Logout
              </button>
            </li>
          </ul>
        )}
        {!userInfo && (
          <ul>
            <li>
              <Link
                to="/login"
                className="flex items-center mt-5 transition-transform transform hover:translate-x-2"
              >
                <AiOutlineLogin className="mr-2 mt-[4px]" size={26} />
                <span className="hidden nav-item-name">LOGIN</span>
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="flex items-center mt-5 transition-transform transform hover:translate-x-2"
              >
                <AiOutlineUserAdd size={26} />
                <span className="hidden nav-item-name">REGISTER</span>
              </Link>
            </li>
          </ul>
        )}
      </div>
        </section>
      )}
    </>)}
    
    </>
  );
};

export default MobileNav;
