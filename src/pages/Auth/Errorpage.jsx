
import { useRouteError } from "react-router-dom";
import "./errorpage.css"

import React from 'react'
import { useSelector } from "react-redux";



export default function Errorpage() {
  const { userInfo } = useSelector((state) => state.auth);
    const error = useRouteError(); 
  return (
    <div className="container-error animate-left-error m-auto-error flex-center-error" >
        <div className='alert-danger-error d-flex-error flex-column'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occured.</p>
     
      {/* {error.message} */}
      {userInfo && userInfo.isAdmin && (<>{error.message}</>)}
      
    </div>
    </div>
  )
}
