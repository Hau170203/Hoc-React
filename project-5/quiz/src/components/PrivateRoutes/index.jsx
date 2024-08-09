import React from 'react'
import { getCookie } from '../../Helpers/Cookie';
import { Outlet, Navigate } from 'react-router-dom';

export default function PrivateRoutes() {
    const token = getCookie('token');

  return (
    <>
        {token ? (<Outlet />):(<Navigate to='/login' />)}
    </>
  )
}
