import { useGetTopProductsQuery } from "../redux/api/productApiSlice";
import Loader from "./Loader";
import SmallProduct from "../pages/Products/SmallProduct";
import ProductCarousel from "../pages/Products/ProductCarousel";

const Header = () => {
  const { data, isLoading, error } = useGetTopProductsQuery();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <h1 className="text-center">ERROR</h1>;
  }

  return (
    <>
      <div className="flex flex-wrap justify-around">
        
        <div className=" max-w-xl flex flex-wrap justify-center ">
            {data.map((product) => (
              <div key={product._id}>
                <SmallProduct product={product} />
              </div>
            ))}
          
        </div>
        <div className="max-w-3xl hidden lg:block ">
        <ProductCarousel />
        </div>
      </div>
    </>
  );
};

export default Header;
