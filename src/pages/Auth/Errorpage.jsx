
import { useRouteError } from "react-router-dom";

import React from 'react'

export default function Errorpage() {
    const error = useRouteError(); 
  return (
    <div className="container animate-left m-auto flex-center" >
        <div className='alert-danger d-flex flex-column'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occured.</p>
      <i>
      {error.status} {error.statusText} 
      {error.message}</i>
    </div>
    </div>
  )
}
