// import { apiSlice } from "./apiSlice";
// import { ORDERS_URL, PAYPAL_URL } from "../constants";

// export const orderApiSlice = apiSlice.injectEndpoints({
//   endpoints: (builder) => ({
//     createOrder: builder.mutation({
//       query: (order) => ({
//         url: ORDERS_URL,
//         method: "POST",
//         body: order,
//       }),
//     }),

//     getOrderDetails: builder.query({
//       query: (id) => ({
//         url: `${ORDERS_URL}/${id}`,
//       }),
//     }),

//     payOrder: builder.mutation({
//       query: ({ orderId, details }) => ({
//         url: `${ORDERS_URL}/${orderId}/pay`,
//         method: "PUT",
//         body: details,
//       }),
//     }),

//     getPaypalClientId: builder.query({
//       query: () => ({
//         url: PAYPAL_URL,
//       }),
//     }),

//     getMyOrders: builder.query({
//       query: () => ({
//         url: `${ORDERS_URL}/mine`,
//       }),
//       keepUnusedDataFor: 5,
//     }),

//     getOrders: builder.query({
//       query: () => ({
//         url: ORDERS_URL,
//       }),
//     }),

//     deliverOrder: builder.mutation({
//       query: (orderId) => ({
//         url: `${ORDERS_URL}/${orderId}/deliver`,
//         method: "PUT",
//       }),
//     }),

//     getTotalOrders: builder.query({
//       query: () => `${ORDERS_URL}/total-orders`,
//     }),

//     getTotalSales: builder.query({
//       query: () => `${ORDERS_URL}/total-sales`,
//     }),

//     getTotalSalesByDate: builder.query({
//       query: () => `${ORDERS_URL}/total-sales-by-date`,
//     }),
//   }),
// });

// export const {
//   useGetTotalOrdersQuery,
//   useGetTotalSalesQuery,
//   useGetTotalSalesByDateQuery,
//   // ------------------
//   useCreateOrderMutation,
//   useGetOrderDetailsQuery,
//   usePayOrderMutation,
//   useGetPaypalClientIdQuery,
//   useGetMyOrdersQuery,
//   useDeliverOrderMutation,
//   useGetOrdersQuery,
// } = orderApiSlice;


import axios from 'axios';
import { apiSlice } from "./apiSlice";
import { ORDERS_URL, PAYPAL_URL } from "../constants";

export const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: async (order) => {
        const response = await axios.post(ORDERS_URL, order);
        return response.data;
      },
    }),

    getOrderDetails: builder.query({
      query: async (id) => {
        const response = await axios.get(`${ORDERS_URL}/${id}`);
        return response.data;
      },
    }),

    payOrder: builder.mutation({
      query: async ({ orderId, details }) => {
        const response = await axios.put(`${ORDERS_URL}/${orderId}/pay`, details);
        return response.data;
      },
    }),

    getPaypalClientId: builder.query({
      query: async () => {
        const response = await axios.get(PAYPAL_URL);
        return response.data;
      },
    }),

    getMyOrders: builder.query({
      query: async () => {
        const response = await axios.get(`${ORDERS_URL}/mine`);
        return response.data;
      },
      keepUnusedDataFor: 5,
    }),

    getOrders: builder.query({
      query: async () => {
        const response = await axios.get(ORDERS_URL);
        return response.data;
      },
    }),

    deliverOrder: builder.mutation({
      query: async (orderId) => {
        const response = await axios.put(`${ORDERS_URL}/${orderId}/deliver`);
        return response.data;
      },
    }),

    getTotalOrders: builder.query({
      query: async () => {
        const response = await axios.get(`${ORDERS_URL}/total-orders`);
        return response.data;
      },
    }),

    getTotalSales: builder.query({
      query: async () => {
        const response = await axios.get(`${ORDERS_URL}/total-sales`);
        return response.data;
      },
    }),

    getTotalSalesByDate: builder.query({
      query: async () => {
        const response = await axios.get(`${ORDERS_URL}/total-sales-by-date`);
        return response.data;
      },
    }),
  }),
});

export const {
  useGetTotalOrdersQuery,
  useGetTotalSalesQuery,
  useGetTotalSalesByDateQuery,
  // ------------------
  useCreateOrderMutation,
  useGetOrderDetailsQuery,
  usePayOrderMutation,
  useGetPaypalClientIdQuery,
  useGetMyOrdersQuery,
  useDeliverOrderMutation,
  useGetOrdersQuery,
} = orderApiSlice;
