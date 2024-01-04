// import { PRODUCT_URL, UPLOAD_URL } from "../constants";
// import { apiSlice } from "./apiSlice";

// export const productApiSlice = apiSlice.injectEndpoints({
//   endpoints: (builder) => ({
//     getProducts: builder.query({
//       query: ({ keyword }) => ({
//         url: `${PRODUCT_URL}`,
//         params: { keyword },
//       }),
//       keepUnusedDataFor: 5,
//       providesTags: ["Products"],
//     }),

//     getProductById: builder.query({
//       query: (productId) => `${PRODUCT_URL}/${productId}`,
//       providesTags: (result, error, productId) => [
//         { type: "Product", id: productId },
//       ],
//     }),

//     allProducts: builder.query({
//       query: () => `${PRODUCT_URL}/allProducts`,
//     }),

//     getProductDetails: builder.query({
//       query: (productId) => ({
//         url: `${PRODUCT_URL}/${productId}`,
//       }),
//       keepUnusedDataFor: 5,
//     }),

//     createProduct: builder.mutation({
//       query: (productData) => ({
//         url: `${PRODUCT_URL}`,
//         method: "POST",
//         body: productData,
//       }),
//       invalidatesTags: ["Product"],
//     }),

//     updateProduct: builder.mutation({
//       query: ({ productId, formData }) => ({
//         url: `${PRODUCT_URL}/${productId}`,
//         method: "PATCH",
//         body: formData,
//       }),
//     }),

//     uploadProductImage: builder.mutation({
//       query: (data) => ({
//         url: `${UPLOAD_URL}`,
//         method: "POST",
//         body: data,
//       }),
//     }),

//     deleteProduct: builder.mutation({
//       query: (productId) => ({
//         url: `${PRODUCT_URL}/${productId}`,
//         method: "DELETE",
//       }),
//       providesTags: ["Product"],
//     }),

//     createReview: builder.mutation({
//       query: (data) => ({
//         url: `${PRODUCT_URL}/${data.productId}/reviews`,
//         method: "POST",
//         body: data,
//       }),
//     }),

//     getTopProducts: builder.query({
//       query: () => `${PRODUCT_URL}/top`,
//       keepUnusedDataFor: 5,
//     }),

//     getNewProducts: builder.query({
//       query: () => `${PRODUCT_URL}/new`,
//       keepUnusedDataFor: 5,
//     }),

//     getFilteredProducts: builder.query({
//       query: ({ checked, radio }) => ({
//         url: `${PRODUCT_URL}/filtered-products`,
//         method: "POST",
//         body: { checked, radio },
//       }),
//     }),
//   }),
// });

// export const {
//   useGetProductByIdQuery,
//   useGetProductsQuery,
//   useGetProductDetailsQuery,
//   useAllProductsQuery,
//   useCreateProductMutation,
//   useUpdateProductMutation,
//   useDeleteProductMutation,
//   useCreateReviewMutation,
//   useGetTopProductsQuery,
//   useGetNewProductsQuery,
//   useUploadProductImageMutation,
//   useGetFilteredProductsQuery,
// } = productApiSlice;


import axios from 'axios';
import { PRODUCT_URL, UPLOAD_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: async ({ keyword }) => {
        const response = await axios.get(`${PRODUCT_URL}`, { params: { keyword } });
        return response.data;
      },
      keepUnusedDataFor: 5,
      providesTags: ["Products"],
    }),

    getProductById: builder.query({
      query: async (productId) => {
        const response = await axios.get(`${PRODUCT_URL}/${productId}`);
        return response.data;
      },
      providesTags: (result, error, productId) => [
        { type: "Product", id: productId },
      ],
    }),

    allProducts: builder.query({
      query: async () => {
        const response = await axios.get(`${PRODUCT_URL}/allProducts`);
        return response.data;
      },
    }),

    getProductDetails: builder.query({
      query: async (productId) => {
        const response = await axios.get(`${PRODUCT_URL}/${productId}`);
        return response.data;
      },
      keepUnusedDataFor: 5,
    }),

    createProduct: builder.mutation({
      query: async (productData) => {
        const response = await axios.post(`${PRODUCT_URL}`, productData);
        return response.data;
      },
      invalidatesTags: ["Product"],
    }),

    updateProduct: builder.mutation({
      query: async ({ productId, formData }) => {
        const response = await axios.patch(`${PRODUCT_URL}/${productId}`, formData);
        return response.data;
      },
    }),

    uploadProductImage: builder.mutation({
      query: async (data) => {
        const response = await axios.post(`${UPLOAD_URL}`, data);
        return response.data;
      },
    }),

    deleteProduct: builder.mutation({
      query: async (productId) => {
        const response = await axios.delete(`${PRODUCT_URL}/${productId}`);
        return response.data;
      },
      providesTags: ["Product"],
    }),

    createReview: builder.mutation({
      query: async (data) => {
        const response = await axios.post(`${PRODUCT_URL}/${data.productId}/reviews`, data);
        return response.data;
      },
    }),

    getTopProducts: builder.query({
      query: async () => {
        const response = await axios.get(`${PRODUCT_URL}/top`);
        return response.data;
      },
      keepUnusedDataFor: 5,
    }),

    getNewProducts: builder.query({
      query: async () => {
        const response = await axios.get(`${PRODUCT_URL}/new`);
        return response.data;
      },
      keepUnusedDataFor: 5,
    }),

    getFilteredProducts: builder.query({
      query: async ({ checked, radio }) => {
        const response = await axios.post(`${PRODUCT_URL}/filtered-products`, { checked, radio });
        return response.data;
      },
    }),
  }),
});

export const {
  useGetProductByIdQuery,
  useGetProductsQuery,
  useGetProductDetailsQuery,
  useAllProductsQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useCreateReviewMutation,
  useGetTopProductsQuery,
  useGetNewProductsQuery,
  useUploadProductImageMutation,
  useGetFilteredProductsQuery,
} = productApiSlice;
