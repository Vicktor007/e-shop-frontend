import Message from "../../components/Message";
import Loader from "../../components/Loader";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useGetMyOrdersQuery } from "../../redux/api/orderApiSlice";
import "./order.css";

const UserOrder = () => {
  const { data: orders, isLoading, error, refetch } = useGetMyOrdersQuery();


  useEffect(() => {
    refetch();
  }, [])

  
  return (
    <>
    
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="error">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <table className="container mx-auto max-w-[90%]  testing">
          

          <thead className="w-full border">
            <tr className="mb-[5rem]">
              <th className="text-center ">ITEMS</th>
              <th className="text-center needed ">ID</th>
              <th className="text-center testing w-[8rem]">DATE</th>
              <th className="text-center  w-[8rem]">TOTAL</th>
              <th className="text-center  w-[8rem] needed ">PAID</th>
              <th className="text-center w-[8rem] needed">DELIVERED</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>
                  <img
                    src={order.orderItems[0].image}
                    alt={order._id}
                    className="w-[5rem] im-auto pt-4"
                  />
                </td>
                
                <td className="needed">{order._id}</td>

                <td className="text-center">
                  {order.createdAt ? order.createdAt.substring(0, 10) : "N/A"}
                </td>

                <td className="text-center">$ {order.totalPrice}</td>

                <td className="py-2 needed">
                  {order.isPaid ? (
                    <p className="p-1 text-center bg-green-400 w-[6rem] rounded-full">
                      Completed
                    </p>
                  ) : (
                    <p className="p-1 text-center bg-red-400 w-[6rem] rounded-full">
                      Pending
                    </p>
                  )}
                </td>

                <td className="px-2 py-2 needed">
                  {order.isDelivered ? (
                    <p className="p-1 text-center bg-green-400 w-[6rem] rounded-full">
                      Completed
                    </p>
                  ) : (
                    <p className="p-1 text-center bg-red-400 w-[6rem] rounded-full">
                      Pending
                    </p>
                  )}
                </td>

                <td>
                  <Link className="p-4 text-center bg-slate-800 hover:bg-slate-600 w-[6rem] rounded-full" to={`/order/${order._id}`}>
                    <button>Order details</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default UserOrder;
