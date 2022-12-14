import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { useAuth } from '../contexts/Auth'

function PrivateRoute() {
  const { session } = useAuth()

  return (
    <>
        {session ? <Outlet/> : <Navigate to="/login" />}
    </>
  )
}

export default PrivateRoute;