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
                        <Link to="/aboutUs">AboutUs</Link>
                    </li>
                    <li>
                        <Link to="/payment">Payment</Link>
                    </li>
                    <li>
                        <Link to="/Banal">Banal</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/inStock">InStock</Link>
                    </li>
                    <li>
                        <Link to="/product">Product</Link>
                    </li>
                </ul>
            </nav>

            <Outlet/>
        </>
    );
};

export default Header;