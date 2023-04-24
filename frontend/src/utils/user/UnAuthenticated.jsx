import React from 'react'
import { checkUserLoggedIn } from '../../helper/checkUserLogged'
import { Navigate } from 'react-router-dom'

function Authenticated({children}) {
    if(checkUserLoggedIn()){
        return (
          <Navigate to='/'/>
        )
    }
    return children
}

export default Authenticated;