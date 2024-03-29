import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaRegUser, FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useGetOrdersQuery } from "../../redux/api/orderApiSlice";

const AdminMenu = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: orders,  refetch } = useGetOrdersQuery();

  useEffect(() => {
    refetch();
  }, [orders])

  const notDeliveredOrders = orders?.filter(order => order.newOrder);
const notDeliveredOrdersCount = notDeliveredOrders?.length;



  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
    {userInfo?.isAdmin && (
      <>
      <button
      style={{ zIndex: 9999999 }}
        className={`${
          isMenuOpen ? "top-5 right-7" : "top-5 right-7"
        } bg-[#151515] p-2 fixed rounded-lg`}
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <FaTimes color="white" />
        ) : (
          <>
            
            <FaRegUser className="w-6 h-6 mb-1 bg-gray" />
            {notDeliveredOrdersCount > 0 && <span className="px-1.5 py-0 text-md  text-center text-white bg-pink-500 rounded-full">
  {notDeliveredOrdersCount}
</span>}
          </>
        )}
      </button>

      {isMenuOpen && (
        <section style={{ zIndex: 999999 }} className="bg-[#151515] p-4 fixed right-7 top-5">
          <ul className="list-none mt-2">
            <li>
              <NavLink
                className="list-item py-2 px-3  mb-5 hover:bg-[#2E2D2D] rounded-sm"
                to="/admin/dashboard"
                style={({ isActive }) => ({
                  color: isActive ? "greenyellow" : "white",
                })}
              >
                Admin Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                className="list-item py-2 px-3  mb-5 hover:bg-[#2E2D2D] rounded-sm"
                to="/admin/categorylist"
                style={({ isActive }) => ({
                  color: isActive ? "greenyellow" : "white",
                })}
              >
                Create Category
              </NavLink>
            </li>
            <li>
              <NavLink
                className="list-item py-2 px-3  mb-5 hover:bg-[#2E2D2D] rounded-sm"
                to="/admin/productlist"
                style={({ isActive }) => ({
                  color: isActive ? "greenyellow" : "white",
                })}
              >
                Create Product
              </NavLink>
            </li>
            <li>
              <NavLink
                className="list-item py-2 px-3  mb-5 hover:bg-[#2E2D2D] rounded-sm"
                to="/admin/allproductslist"
                style={({ isActive }) => ({
                  color: isActive ? "greenyellow" : "white",
                })}
              >
                All Products
              </NavLink>
            </li>
            <li>
              <NavLink
                className="list-item py-2 px-3  mb-5 hover:bg-[#2E2D2D] rounded-sm"
                to="/admin/userlist"
                style={({ isActive }) => ({
                  color: isActive ? "greenyellow" : "white",
                })}
              >
                Manage Users
              </NavLink>
            </li>
            <li>
              <NavLink
                className="list-item py-2 px-3  mb-5 hover:bg-[#2E2D2D] rounded-sm"
                to="/admin/orderlist"
                style={({ isActive }) => ({
                  color: isActive ? "greenyellow" : "white",
                })}
              >
                Manage Orders  {notDeliveredOrdersCount > 0 && <span className="px-1.5 py-0 text-md  text-center text-white bg-pink-500 rounded-full">
  {notDeliveredOrdersCount}
</span>}
              </NavLink>
            </li>
          </ul>
        </section>
      )}
    </>)}
    
    </>
  );
};

export default AdminMenu;
