// import { apiSlice } from "./apiSlice";
// import { USERS_URL } from "../constants";

// export const userApiSlice = apiSlice.injectEndpoints({
//   endpoints: (builder) => ({
//     login: builder.mutation({
//       query: (data) => ({
//         url: `${USERS_URL}/auth`,
//         method: "POST",
//         body: data,
//       }),
//     }),
//     register: builder.mutation({
//       query: (data) => ({
//         url: `${USERS_URL}`,
//         method: "POST",
//         body: data,
//       }),
//     }),
//     logout: builder.mutation({
//       query: () => ({
//         url: `${USERS_URL}/logout`,
//         method: "POST",
//       }),
//     }),

//     forgotPassword: builder.mutation({
//       query: (data) => ({
//         url: `${USERS_URL}/forgotpassword`,
//         method: "POST",
//         body: data,
//       }),
//     }),

//     resetPassword: builder.mutation({
//       query: ({userData, resetToken}) => ({
//         url: `${USERS_URL}/resetpassword/${resetToken}`,
//         method: "PUT",
//         body: userData,
//       }),
//     }),

//     profile: builder.mutation({
//       query: (data) => ({
//         url: `${USERS_URL}/profile`,
//         method: "PUT",
//         body: data,
//       }),
//     }),
//     getUsers: builder.query({
//       query: () => ({
//         url: USERS_URL,
//       }),
//       providesTags: ["User"],
//       keepUnusedDataFor: 5,
//     }),
//     deleteUser: builder.mutation({
//       query: (userId) => ({
//         url: `${USERS_URL}/${userId}`,
//         method: "DELETE",
//       }),
//     }),
//     getUserDetails: builder.query({
//       query: (id) => ({
//         url: `${USERS_URL}/${id}`,
//       }),
//       keepUnusedDataFor: 5,
//     }),
//     updateUser: builder.mutation({
//       query: (data) => ({
//         url: `${USERS_URL}/${data.userId}`,
//         method: "PUT",
//         body: data,
//       }),
//       invalidatesTags: ["User"],
//     }),
//   }),
// });

// export const {
//   useLoginMutation,
//   useLogoutMutation,
//   useRegisterMutation,
//   useProfileMutation,
//   useGetUsersQuery,
//   useDeleteUserMutation,
//   useUpdateUserMutation,
//   useGetUserDetailsQuery,
//  useForgotPasswordMutation,
//  useResetPasswordMutation,

// } = userApiSlice;


import axios from 'axios';
import { apiSlice } from "./apiSlice";
import { USERS_URL } from "../constants";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: async (data) => {
        const response = await axios.post(`${USERS_URL}/auth`, data);
        return response.data;
      },
    }),
    register: builder.mutation({
      query: async (data) => {
        const response = await axios.post(`${USERS_URL}`, data);
        return response.data;
      },
    }),
    logout: builder.mutation({
      query: async () => {
        const response = await axios.post(`${USERS_URL}/logout`);
        return response.data;
      },
    }),
    forgotPassword: builder.mutation({
      query: async (data) => {
        const response = await axios.post(`${USERS_URL}/forgotpassword`, data);
        return response.data;
      },
    }),
    resetPassword: builder.mutation({
      query: async ({userData, resetToken}) => {
        const response = await axios.put(`${USERS_URL}/resetpassword/${resetToken}`, userData);
        return response.data;
      },
    }),
    profile: builder.mutation({
      query: async (data) => {
        const response = await axios.put(`${USERS_URL}/profile`, data);
        return response.data;
      },
    }),
    getUsers: builder.query({
      query: async () => {
        const response = await axios.get(USERS_URL);
        return response.data;
      },
      providesTags: ["User"],
      keepUnusedDataFor: 5,
    }),
    deleteUser: builder.mutation({
      query: async (userId) => {
        const response = await axios.delete(`${USERS_URL}/${userId}`);
        return response.data;
      },
    }),
    getUserDetails: builder.query({
      query: async (id) => {
        const response = await axios.get(`${USERS_URL}/${id}`);
        return response.data;
      },
      keepUnusedDataFor: 5,
    }),
    updateUser: builder.mutation({
      query: async (data) => {
        const response = await axios.put(`${USERS_URL}/${data.userId}`, data);
        return response.data;
      },
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useProfileMutation,
  useGetUsersQuery,
  useDeleteUserMutation,
  useUpdateUserMutation,
  useGetUserDetailsQuery,
  useForgotPasswordMutation,
  useResetPasswordMutation,
} = userApiSlice;
