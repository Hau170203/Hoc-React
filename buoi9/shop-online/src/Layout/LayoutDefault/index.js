import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './LayoutDefault.scss'
import CartMini from '../../Components/CartMini'


export default function LayoutDefault() {
  return (
    <div className='LayoutDefault'>
         <header className='LayoutDefault__header'>
            <NavLink to='/' className='LayoutDefault__logo' >
                Logo
            </NavLink>
            <NavLink to='/cart' className='LayoutDefault__cart'>
                <CartMini />
            </NavLink>
        </header>
        <main className='LayoutDefault__main'>
            <Outlet />
        </main>
        <footer className='LayoutDefault__footer'>
              copyright Hau @2024
        </footer>
    </div>
  )
}
