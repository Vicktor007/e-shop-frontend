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
        <table className="container mx-auto max-w-[90%]  ">
          

          <thead className="w-full border">
            <tr className="mb-[5rem]">
              <th className="text-center lg:text-[1rem] text-[0.7rem]">ITEMS</th>
              <th className="text-center lg:text-[1rem] text-[0.7rem] needed ">ID</th>
              <th className="text-center lg:text-[1rem] text-[0.7rem] w-[8rem]">DATE</th>
              <th className="text-center  lg:text-[1rem] text-[0.7rem]  w-[8rem]">TOTAL</th>
              <th className="text-center lg:text-[1rem] text-[0.7rem]   w-[8rem] needed ">PAID</th>
              <th className="text-center lg:text-[1rem] text-[0.7rem] w-[8rem] needed">DELIVERED</th>
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
                    className="w-[5rem] m-auto pt-4"
                  />
                </td>
                
                <td className="needed  w-[4rem] pr-8 text-center">{order._id}</td>

                <td className="text-center lg:text-[1rem] text-[0.8rem]">
                  {order.createdAt ? order.createdAt.substring(0, 10) : "N/A"}
                </td>

                <td className="text-center lg:text-[1rem] text-[0.8rem]">$ {order.totalPrice}</td>

                <td className="py-2 px-4   needed">
                  {order.isPaid ? (
                    <p className="p-1 m-auto text-center bg-green-400  w-[6rem] lg:text-[1rem] text-[0.8rem] text-neutral-950 rounded-full">
                      <b>Completed</b>
                    </p>
                  ) : (
                    <p className="p-1 m-auto text-center bg-red-400  w-[6rem] lg:text-[1rem] text-[0.8rem] text-neutral-950 rounded-full">
                      <b>Pending</b>
                    </p>
                  )}
                </td>

                <td className="py-2 px-4 needed">
                  {order.isDelivered ? (
                    <p className="p-1 m-auto text-center bg-green-400  w-[6rem] lg:text-[1rem] text-[0.8rem] text-neutral-950 rounded-full">
                      <b>Completed</b>
                    </p>
                  ) : (
                    <p className="p-1 m-auto text-center bg-red-400  w-[6rem] lg:text-[1rem] text-[0.8rem] text-neutral-950 rounded-full">
                      <b>Pending</b>
                    </p>
                  )}
                </td>

                <td className="m-auto">
                  <Link className="px-4 pb-2 pt-1  text-center text-[0.8rem] lg:text-[1rem] bg-slate-800 hover:bg-slate-600 w-[6rem] rounded-full" to={`/order/${order._id}`}>
                    <button><b>details</b></button>
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
