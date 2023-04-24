import React from 'react'
import { checkAdminLoggedIn } from '../../helper/checkAdminLoggedIn'
import { Navigate } from 'react-router-dom'

function Authenticated({children}) {
    if(!checkAdminLoggedIn()){
        return (
          <Navigate to='/admin/signin'/>
        )
    }
    return children
}

export default Authenticated