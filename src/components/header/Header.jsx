import React from 'react';
import {Outlet, Link} from 'react-router-dom'
import s from './Header.module.css'



const Header = () => {
    return (
        <>
            <nav className={s.navBar}>
                <ul className={s.navList}>
                    <li className={s.navItem}>
                        <Link className={s.navLink} to="/">Home</Link>
                    </li>
                    <li className={s.navItem}>
                        <Link className={s.navLink} to="/aboutUs">О нас</Link>
                    </li>
                    <li className={s.navItem}>
                        <Link className={s.navLink} to="/payment">Оплата</Link>
                    </li>
                    <li className={s.navItem}>
                        <Link className={s.navLink} to="/contact">Связаться с нами</Link>
                    </li>
                    <li className={s.navItem}>
                        <Link className={s.navLink} to="/inStock">В наличии</Link>
                    </li>
                    <li className={s.navItem}>
                        <Link className={s.navLink} to="/product">Товары</Link>
                    </li>
                </ul>
            </nav>

            <Outlet/>
        </>
    );
};

export default Header;