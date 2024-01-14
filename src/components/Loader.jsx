import ReactDOM from "react-dom";
import "./loader.css"

const Loader = () => {
  return ReactDOM.createPortal(
    <div className="loader-container">
      <div className=" animate-spin rounded-full h-16 w-16 border-t-4 border-pink-500 border-opacity-50"></div>
    </div>,
    document.getElementById("loader")
    );
};

export const LoaderV2 = () => {
  return (
    <div className=" animate-spin rounded-full h-16 w-16 border-t-4 border-pink-500 border-opacity-50"></div>
  )
}

export default Loader;
