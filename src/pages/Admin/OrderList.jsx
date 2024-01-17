import Message from "../../components/Message";
import Loader from "../../components/Loader";
import { Link } from "react-router-dom";
import { useGetOrdersQuery } from "../../redux/api/orderApiSlice";
import { useEffect } from "react";

const OrderList = () => {
  const { data: orders, isLoading, error, refetch } = useGetOrdersQuery();


  useEffect(() => {
    refetch();
  }, [orders])

  
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="error">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <table className="container mx-auto">
        

          <thead className="w-full border">
            <tr className="mb-[5rem]">
              <th className="text-center pl-1">ITEMS</th>
              <th className="text-center needed pl-1">ID</th>
              <th className="text-left pl-1">USER</th>
              <th className="text-center">DATE</th>
              <th className="text-left pl-1">TOTAL</th>
              <th className="text-left needed pl-1">PAID</th>
              <th className="text-left needed pl-1">DELIVERED</th>
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
                <td className="needed">{order._id}</td>

                <td>{order.user ? order.user.username : "N/A"}</td>

                <td className="text-center">
                  {order.createdAt ? order.createdAt.substring(0, 10) : "N/A"}
                </td>

                <td>$ {order.totalPrice}</td>

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

                <td className="px-2 needed py-2">
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
                  <Link className="px-3 pb-4 pt-3 text-center bg-slate-800 hover:bg-slate-600 w-[6rem] rounded-full" to={`/order/${order._id}`}>
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

export default OrderList;
