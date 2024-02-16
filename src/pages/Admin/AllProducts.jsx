import { Link } from "react-router-dom";
import moment from "moment";
import { useAllProductsQuery } from "../../redux/api/productApiSlice";
import { useEffect, useState } from "react";
import Message from "../../components/Message";
import Loader from "../../components/Loader";


const AllProducts = () => {
  const { data: products, isLoading, error, refetch} = useAllProductsQuery();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(()=> {
    refetch()
  },[])
  if (isLoading) {
    return <Loader/>;
  }

  if (error) {
    return <Message variant="error">
    {error?.data?.message || error.error}
  </Message>;
  }


  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter(
    product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="container  m-auto">
        <div className="flex flex-col justify-center  md:flex-row">
          <div className="p-3">
            <div className="ml-[2rem] text-xl text-center font-bold h-12">
              All Products ({filteredProducts.length})
            </div>
            
            <div className="one mb-3 flex justify-center items-center">
            <input
              type="text"
              placeholder="Search by name, category, or brand"
              className="p-4 mb-3 w-[90%] lg:w-[30%] md:w-[50%] border rounded-lg bg-[#101011] text-white text-center ]"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            </div>
            <div className="flex flex-wrap justify-center gap-5 items-center">
              {filteredProducts.map((product) => (
                <div
                  key={product._id}
                  
                  className="block mb-4 "
                >
                  <div className="  w-[90%] md:w-[15rem] lg:w-[20rem] flex-nowrap lg:flex-wrap sm:flex-wrap">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-[15rem] m-auto object-cover"
                    />
                    <div className="p-4 flex flex-col justify-around">
                      <div className="flex justify-between">
                        <h5 className="text-xl font-semibold mb-2">
                          {product?.name}
                        </h5>

                        <p className="text-gray-400 text-xs">
                          {moment(product.createdAt).format("MMMM Do YYYY")}
                        </p>
                      </div>

                      <p className="text-gray-400 xl:w-[30rem] lg:w-[30rem] md:w-[20rem] sm:w-[10rem] text-sm mb-4">
                        {product?.description?.substring(0, 160)}...
                      </p>

                      <div className="flex justify-between">
                        <Link
                          to={`/admin/product/update/${product._id}`}
                          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-pink-700 rounded-lg hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
                        >
                          Update Product
                          <svg
                            className="w-3.5 h-3.5 ml-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                          </svg>
                        </Link>
                        <p className="ml-4 w-[4rem] text-sm">$ {product?.price}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div
                  
                  
                  className="block mb-4 "
                >
                  <div className="  w-[90%] md:w-[15rem] lg:w-[20rem] flex-nowrap lg:flex-wrap sm:flex-wrap"></div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProducts;
