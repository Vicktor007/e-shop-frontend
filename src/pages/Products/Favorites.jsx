import { useSelector } from "react-redux";
import { selectFavoriteProduct } from "../../redux/features/favorites/favoriteSlice";
import Product from "./Product";

const Favorites = () => {
  const favorites = useSelector(selectFavoriteProduct);

  return (
    <div>
      <h1 className="text-lg text-center font-bold  mt-[1rem]">
        FAVORITE PRODUCTS
      </h1>

      <div className="flex m-[3rem] gap-2 flex-wrap">
        {favorites.length === 0 ? (<div className="text-center w-[100%]"> No favorites yet</div>): (favorites.map((product) => (
          <Product key={product._id} product={product} />
        )))}
      </div>
    </div>
    
  );
};

export default Favorites;
