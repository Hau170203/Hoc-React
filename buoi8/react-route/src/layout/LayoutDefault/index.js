import {  NavLink, Outlet } from 'react-router-dom';
import './LayoutDefault.scss';

function LayoutDefault() {
    const navLinkactive = (e) => {
        return e.isActive ? 'menu__link menu__link--active' : 'menu__link'
    }

    return (
        <>
            <div className='layoutDefault'>
                <header className='layoutDefault__Header'>
                    <div className='layoutDefault__logo'>Logo</div>
                    <div className='menu'>
                        <ul>
                            <li>
                                <NavLink to='/' className={navLinkactive}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/about' className={navLinkactive}>About</NavLink>
                            </li>
                            <li>
                                <NavLink to='/contact' className={navLinkactive}>Contact</NavLink>
                            </li>
                            <li>
                                <NavLink to='/blog' className={navLinkactive}>Blog</NavLink>
                                <ul className='menu__sub'>
                                    <li>
                                        <NavLink to='/blog/new'>BlogNew</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/blog/related'>BlogRelated</NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <NavLink to='/info-user' className={navLinkactive}>Info-user</NavLink>
                            </li>
                        </ul>
                    </div>
                </header>
                <main className='layoutDefault__Main'>
                    <Outlet />
                </main>
                <footer className='layoutDefault__footer'>
                    Copyright @ 2024
                </footer>
            </div>
        </>
    )
}

export default LayoutDefault;