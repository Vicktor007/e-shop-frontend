
import { useRouteError } from "react-router-dom";

import React from 'react'

export default function Errorpage() {
    const error = useRouteError(); 
  return (
    <div className="container-error animate-left-error m-auto-error flex-center-error" >
        <div className='alert-danger-error d-flex-error flex-column'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occured.</p>
     
      {/* {error}  */}
      {error.message}
    </div>
    </div>
  )
}
