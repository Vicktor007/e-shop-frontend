import { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineShopping,
  AiOutlineLogin,
  AiOutlineUserAdd,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { FaHeart, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Navigation.css";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../../redux/api/usersApiSlice";
import { logout } from "../../redux/features/auth/authSlice";
import FavoritesCount from "../Products/FavoritesCount";
import { LuPackageCheck } from "react-icons/lu";

const Navigation = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const toggleSideBar = () => {
    setShowSidebar(!showSidebar);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    <button
      style={{ zIndex: 9999999 }}
        className={`${
          showSidebar ? "top-4 left-3" : "top-5 left-5"
        } lg:hidden max-md:block  hidden bg-[#151515] p-2 fixed rounded-lg `}
        onClick={toggleSideBar}
      >
        {showSidebar ? (
          <FaTimes color="white" />
        ) : (
          <>
            <div className="w-6 h-0.5 bg-gray-200 my-1"></div>
            <div className="w-6 h-0.5 bg-gray-200 my-1"></div>
            <div className="w-6 h-0.5 bg-gray-200 my-1"></div>
          </>
        )}
      </button>
    <div
      style={{ zIndex: 999999 }}
      className={`${
        showSidebar ? "flex" : "hidden"
      }  md:flex lg:flex md:w-[15%] flex-col justify-around p-4 text-white bg-[#000] w-[5%] lg:hover:w-[15%] h-[100vh]  fixed `}
      id="navigation-container"
    >
      <div className="flex flex-col justify-center space-y-4">
        <Link
          to="/"
          className="flex relative"
        >
          <div className="flex items-center transition-transform transform hover:translate-x-2">
          <AiOutlineHome className="mr-2 mt-[3rem]" size={26} />
          <span className="hidden nav-item-name mt-[3rem]">HOME</span>{" "}
          </div>
        </Link>

        <Link
          to="/shop"
          className="flex relative"
        >
          
          <div className="flex items-center transition-transform transform hover:translate-x-2">
          <AiOutlineShopping className="mr-2 mt-[3rem]" size={26} />
          <span className="hidden nav-item-name mt-[3rem]">SHOP</span>{" "}
          </div>
        </Link>

        <Link to="/cart" className="flex relative">
          <div className="flex items-center transition-transform transform hover:translate-x-2">
            <AiOutlineShoppingCart className="mt-[3rem] mr-2" size={26} />
            <span className="hidden nav-item-name mt-[3rem]">Cart</span>{" "}
          </div>

          <div className="absolute top-9">
            {cartItems.length > 0 && (
              <span>
                <span className="px-1 py-0 text-sm text-white bg-pink-500 rounded-full">
                  {cartItems.reduce((a, c) => a + c.qty, 0)}
                </span>
              </span>
            )}
          </div>
        </Link>

        <Link to="/favorite" className="flex relative">
          <div className="flex items-center transition-transform transform hover:translate-x-2">
            <FaHeart className="mt-[3rem] mr-2" size={20} />
            <span className="hidden nav-item-name mt-[3rem]">
              Favorites
            </span>{" "}
            <FavoritesCount />
          </div>
        </Link>
        {
          userInfo && (
            <Link to="/userOrder" className="flex relative">
          <div className="flex items-center transition-transform transform hover:translate-x-2">
          <LuPackageCheck className="mt-[3rem] mr-2" size={26} />
          <span className="hidden nav-item-name mt-[3rem]">Orders</span>{" "}
          </div>
        </Link>
          )
        }
      </div>

      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="flex items-center text-gray-800 focus:outline-none"
        >
          {userInfo ? (
            <span className="text-white mb-5">{userInfo.username}</span>
          ) : (
            <></>
          )}
          {userInfo && (

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 ml-1 mb-4 nav-item-name ${
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
          style={{ zIndex: 1009999 }}
            className={`absolute nav-item-name w-[8rem] right-0 bottom-[3rem] mt-2  space-y-2 bg-white text-gray-600 ${
              !userInfo.isAdmin ? "-top-30" : "-top-90"
            } `}
          >
            {userInfo.isAdmin && (
              <>
                <li>
                  <Link
                    to="/admin/dashboard"
                    className="block px-4 py-2  hover:bg-gray-100"
                  >
                   <b>Dashboard</b>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/allproductslist"
                    className="block px-4 py-2  hover:bg-gray-100"
                  >
                    <b>All Products</b>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/categorylist"
                    className="block px-4 py-2  hover:bg-gray-100"
                  >
                     <b>Category</b>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/orderlist"
                    className="block px-4 py-2  hover:bg-gray-100"
                  >
                     <b>Orders</b>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/userlist"
                    className="block px-4 py-2  hover:bg-gray-100"
                  >
                    <b>Users</b>
                  </Link>
                </li>
              </>
            )}

            <li>
              <Link to="/profile" className="block px-4 py-2  hover:bg-gray-100">
                <b>Profile</b>
              </Link>
            </li>
            <li>
              <button
                onClick={logoutHandler}
                className="block w-full px-4 py-2 text-left  hover:bg-gray-100"
              >
                <b>Logout</b>
              </button>
            </li>
          </ul>
        )}
        {!userInfo && (
          <ul>

       
            <li>
            <Link
          to="/login"
          className="flex relative"
        >
          <div className="flex items-center transition-transform transform hover:translate-x-2">
          <AiOutlineLogin className="mr-2 mt-[3rem]" size={26} />
          <span className="hidden nav-item-name mt-[3rem]">LOGIN</span>{" "}
          </div>
        </Link>
            </li>
            <li>
            <Link
           to="/register"
          className="flex relative"
        >
          <div className="flex items-center transition-transform transform hover:translate-x-2">
          <AiOutlineUserAdd className="mr-2 mt-[3rem]" size={26} />
          <span className="hidden nav-item-name mt-[3rem]">REGISTER</span>{" "}
          </div>
        </Link>
            
            </li>
          </ul>
        )}
      </div>
    </div>
    </>
  );
};

export default Navigation;
