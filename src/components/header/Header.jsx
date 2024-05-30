import React from 'react';
import {Outlet, Link} from 'react-router-dom'



const Header = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/aboutUs">О нас</Link>
                    </li>
                    <li>
                        <Link to="/payment">Оплата</Link>
                    </li>
                    <li>
                        <Link to="/contact">Связаться с нами</Link>
                    </li>
                    <li>
                        <Link to="/inStock">В наличии</Link>
                    </li>
                    <li>
                        <Link to="/product">Товары</Link>
                    </li>
                </ul>
            </nav>

            <Outlet/>
        </>
    );
};

export default Header;