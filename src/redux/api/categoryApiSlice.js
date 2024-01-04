// import { apiSlice } from "./apiSlice";
// import { CATEGORY_URL } from "../constants";

// export const categoryApiSlice = apiSlice.injectEndpoints({
//   endpoints: (builder) => ({
//     createCategory: builder.mutation({
//       query: (newCategory) => ({
//         url: `${CATEGORY_URL}`,
//         method: "POST",
//         body: newCategory,
//       }),
//     }),

//     updateCategory: builder.mutation({
//       query: ({ categoryId, updatedCategory }) => ({
//         url: `${CATEGORY_URL}/${categoryId}`,
//         method: "PUT",
//         body: updatedCategory,
//       }),
//     }),

//     deleteCategory: builder.mutation({
//       query: (categoryId) => ({
//         url: `${CATEGORY_URL}/${categoryId}`,
//         method: "DELETE",
//       }),
//     }),

//     fetchCategories: builder.query({
//       query: () => `${CATEGORY_URL}/categories`,
//     }),
//   }),
// });

// export const {
//   useCreateCategoryMutation,
//   useUpdateCategoryMutation,
//   useDeleteCategoryMutation,
//   useFetchCategoriesQuery,
// } = categoryApiSlice;

import axios from 'axios';
import { apiSlice } from "./apiSlice";
import { CATEGORY_URL } from "../constants";

export const categoryApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createCategory: builder.mutation({
      query: async (newCategory) => {
        const response = await axios.post(`${CATEGORY_URL}`, newCategory);
        return response.data;
      },
    }),

    updateCategory: builder.mutation({
      query: async ({ categoryId, updatedCategory }) => {
        const response = await axios.put(`${CATEGORY_URL}/${categoryId}`, updatedCategory);
        return response.data;
      },
    }),

    deleteCategory: builder.mutation({
      query: async (categoryId) => {
        const response = await axios.delete(`${CATEGORY_URL}/${categoryId}`);
        return response.data;
      },
    }),

    fetchCategories: builder.query({
      query: async () => {
        const response = await axios.get(`${CATEGORY_URL}/categories`);
        return response.data;
      },
    }),
  }),
});

export const {
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
  useFetchCategoriesQuery,
} = categoryApiSlice;
