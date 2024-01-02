import "./errorpage.css"

const Message = ({ variant, children }) => {
  const getVariantClass = () => {
    switch (variant) {
      case "succcess":
        return "bg-green-100 text-green-800";
      case "error":
        return "bg-red-100 text-red-800";
      default:
        return "bg-blue-100 text-blue-800";
    }
  };

  return (
  <div className="container-error animate-left-error m-auto-error flex-center-error" >
        <div className='alert-danger-error d-flex-error flex-column'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occured.</p>
      <div className={`p-4 rounded ${getVariantClass()}`}>{children}😵</div>
    </div>
    </div>
  );
};

export default Message;
