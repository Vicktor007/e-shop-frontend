import "./loader.css"

const Loader = () => {
  return (
    <div className="loader-container">
      <div className=" animate-spin rounded-full h-16 w-16 border-t-4 border-pink-500 border-opacity-50"></div>
    </div>
  );
};

export const LoaderV2 = () => {
  return (
    <div className=" animate-spin rounded-full h-16 w-16 border-t-4 border-pink-500 border-opacity-50"></div>
  )
}

export default Loader;
